# Phase 4: Brand Alignment & Automation - Research

**Researched:** 2024-05-22
**Domain:** Visual Identity, GitHub Automation, Web Scraping, Documentation Lifecycle
**Confidence:** HIGH

## Summary

This research establishes the technical foundation for Phase 4, focusing on aligning the SIB portal with the Digg.se visual identity and automating content synchronization. We have identified the official Swedish government font (Sweden Sans), primary and secondary brand colors for Digg, and a robust method for cross-repository automation using GitHub's `repository_dispatch`. Furthermore, we have mapped the HTML structure of the Digg news page for automated ingestion and defined a standard versioning lifecycle for SIB artifacts using Docusaurus native features.

**Primary recommendation:** Use Sweden Sans as the core font stack, implement `repository_dispatch` for sandbox-to-production triggers, and adopt a "Next-is-Draft" versioning strategy.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Sweden Sans | Latest | Typography | Official Swedish government font for unified identity. |
| GitHub Actions | v4+ | CI/CD & Automation | Native integration for workflow triggers. |
| Cheerio | ^1.0.0 | HTML Parsing | Lightweight and fast for scraping Digg news items. |
| Docusaurus | ^3.0.0 | Documentation | Current project framework for versioning and content. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|--------------|
| axios | ^1.6.0 | HTTP Client | Fetching news page content for the scraper. |
| gray-matter | ^4.0.0 | Frontmatter | Generating Docusaurus-compatible MD files. |

## Architecture Patterns

### Automation Flow: Sandbox to Production
1. **Push** to `SIB_sandbox` (private).
2. **GitHub Action** in `SIB_sandbox` triggers.
3. **Repository Dispatch** sent to `SIB_pages` (public).
4. **Workflow Dispatch** in `SIB_pages` runs `sync-content.yml`.

### Scraper Architecture
- **Input:** `https://www.digg.se/om-oss/nyheter/digital-identitet/`
- **Process:** Fetch HTML -> Parse `ul > li > a` -> Extract Date/Title -> Generate MD.
- **Output:** `blog/{YYYY-MM-DD}-{slug}.md`.

## Digg.se Visual Identity

### Colors
| Element | Hex Code | Usage |
|---------|----------|-------|
| Science Blue | `#005be2` | Primary brand color, links, buttons. |
| Black | `#000000` | Primary text. |
| Apricot | `#EF8271` | Secondary/Accent. |
| Albescent White | `#F4E0CE` | Secondary/Background. |
| Pirate Gold | `#BA8B00` | Accents/Alerts. |

### Typography (Sweden Sans)
Official Swedish government font. Should be hosted locally in `static/fonts/`.
```css
@font-face {
  font-family: 'Sweden Sans';
  src: url('/fonts/sweden-sans-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Cross-repo sync | Custom webhook server | GitHub Repository Dispatch | Secure, native, and requires no infrastructure. |
| Documentation Versioning | Custom folder management | Docusaurus `docs:version` | Handles sidebars, JSON metadata, and routing automatically. |
| Font Hosting | Hotlinking external government assets | Local `@font-face` | Ensures stability and avoids CORS/dependency issues. |

## Common Pitfalls

### Pitfall 1: PAT Permissions
**What goes wrong:** `repository_dispatch` fails with 401/403.
**Why it happens:** The `GITHUB_TOKEN` only has permissions for the *current* repository.
**How to avoid:** Use a Personal Access Token (PAT) with `repo` scope (or Fine-grained token with "Metadata" and "Contents" write access to the target repo) and store it as a Repository Secret in the sandbox.

### Pitfall 2: Scraper Fragility
**What goes wrong:** News integration fails when Digg updates their UI.
**Why it happens:** Hardcoded CSS selectors (`ul > li > a`) break.
**How to avoid:** Add error handling to the scraper and a notification (e.g., GitHub Action failure email) if no items are found.

## Code Examples

### GitHub Repository Dispatch (Source Repo)
```yaml
# .github/workflows/trigger-sync.yml (in SIB_sandbox)
steps:
  - name: Trigger SIB_pages Sync
    run: |
      curl -X POST 
        -H "Accept: application/vnd.github.v3+json" 
        -H "Authorization: token ${{ secrets.SYNC_PAT }}" 
        https://api.github.com/repos/your-org/SIB_pages/dispatches 
        -d '{"event_type": "sync_content"}'
```

### News Scraper Logic (Node.js)
```javascript
const cheerio = require('cheerio');
const axios = require('axios');

async function scrapeNews() {
  const { data } = await axios.get('https://www.digg.se/om-oss/nyheter/digital-identitet/');
  const $ = cheerio.load(data);
  const newsItems = [];

  $('ul > li > a').each((i, el) => {
    const rawTitle = $(el).attr('title'); // Format: "[YYYY-MM-DD] Title"
    const dateMatch = rawTitle.match(/\[(\d{4}-\d{2}-\d{2})\]/);
    const title = rawTitle.replace(/\[\d{4}-\d{2}-\d{2}\]\s*/, '');
    const url = 'https://www.digg.se' + $(el).attr('href');
    
    if (dateMatch) {
      newsItems.push({ date: dateMatch[1], title, url });
    }
  });
  return newsItems;
}
```

## Versioning Strategy Guide

### Artifact Lifecycle
1. **DRAFT:** Managed in the `docs/` folder (vNext). Visible only on the development/staging site or under the `/docs/next` route.
2. **STABLE:** Cut a version using `npm run docusaurus docs:version v1.0.0`. This snapshots `docs/` to `versioned_docs/version-v1.0.0/`.
3. **ARCHIVED:** Versions in `versioned_docs/` that are no longer the "Latest".

### Snapshot Process
- Ensure all metadata is correct in `docs/`.
- Run: `npm run docusaurus docs:version [version-number]`.
- Commit the generated files in `versioned_docs/` and `versioned_sidebars/`.

## Sources

### Primary (HIGH confidence)
- Official Digg.se Site - News HTML structure and brand colors.
- GitHub Documentation - `repository_dispatch` API and authentication.
- Docusaurus Documentation - Versioning internals.
- SharingSweden.se - Sweden Sans font details.

### Secondary (MEDIUM confidence)
- Digdir (Norway) Design System - Referenced for common Scandinavian government design patterns.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Libraries are mature and standard.
- Architecture: HIGH - GitHub Dispatch is the recommended way for cross-repo triggers.
- Pitfalls: MEDIUM - Licensing of Sweden Sans should be double-checked by the legal team, though standard for government-related entities.

**Research date:** 2024-05-22
**Valid until:** 2024-06-22 (30 days)
