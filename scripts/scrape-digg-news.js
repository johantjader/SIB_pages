const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const DIGG_URL = 'https://www.digg.se/om-oss/nyheter/digital-identitet/';
const BLOG_DIR = path.join(__dirname, '..', 'blog');

async function scrapeDiggNews() {
  console.log(`Fetching news from ${DIGG_URL}...`);
  try {
    const { data } = await axios.get(DIGG_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const $ = cheerio.load(data);
    const newsItems = [];

    // Target links that have a title starting with a bracketed date
    $('a[title*="[20"]').each((i, el) => {
      const link = $(el).attr('href');
      const rawTitle = $(el).attr('title');
      
      // We want links that are actually news articles
      if (link && (link.includes('/om-oss/nyheter/') || link.includes('/nyheter/')) && rawTitle) {
        const dateMatch = rawTitle.match(/\[(\d{4}-\d{2}-\d{2})\]/);
        
        if (dateMatch) {
          const date = dateMatch[1];
          const title = rawTitle.replace(/\[\d{4}-\d{2}-\d{2}\]\s*/, '').trim();
          
          // Ensure absolute URL
          const fullUrl = link.startsWith('http') ? link : `https://www.digg.se${link}`;
          
          newsItems.push({
            title,
            date,
            url: fullUrl
          });
        }
      }
    });

    // Remove duplicates based on URL
    const uniqueItems = Array.from(new Map(newsItems.map(item => [item.url, item])).values());

    console.log(`Found ${uniqueItems.length} unique news items.`);

    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
    }

    // Process items
    uniqueItems.forEach(item => {
      const slug = item.title
        .toLowerCase()
        .replace(/[^a-z0-9äöå ]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      
      const fileName = `${item.date}-${slug.substring(0, 50)}.md`;
      const filePath = path.join(BLOG_DIR, fileName);

      if (!fs.existsSync(filePath)) {
        const content = `---
title: "${item.title.replace(/"/g, '\\"')}"
date: ${item.date}
authors: [digg]
tags: [digg, digital-identitet, externa-nyheter]
---

Denna nyhet publicerades ursprungligen av Digg (Myndigheten för digital förvaltning).

[Läs hela artikeln på Digg.se](${item.url})
`;
        fs.writeFileSync(filePath, content);
        console.log(`Generated: ${fileName}`);
      } else {
        // console.log(`Skipped (already exists): ${fileName}`);
      }
    });

  } catch (error) {
    console.error('Error scraping Digg news:', error.message);
    process.exit(1);
  }
}

scrapeDiggNews();
