---
title: "Implement External News Feed for Blog"
area: "documentation"
status: "todo"
priority: "medium"
created: "2026-02-22"
---

# Implement External News Feed for Blog

The user wants to showcase news from external sources like Digg.se on the Docusaurus blog.

**Objective**: Research and implement a way to aggregate news from sources that do not provide an RSS feed (like Digg.se) or find related relevant feeds.

**Key Tasks**:
- [ ] Research a "Scraper-to-RSS" bridge for `https://www.digg.se/om-oss/nyheter/digital-identitet/`.
- [ ] Install and configure `docusaurus-plugin-multi-rss` (or similar).
- [ ] Create a custom Blog component or page to display aggregated external news alongside local updates.
- [ ] Automate the site rebuild when new external items are detected.

**Desired Outcome**: A "News" section that automatically stays updated with digital identity news from DIGG and other relevant sources.
