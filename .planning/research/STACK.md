# Stack Research

**Domain:** Docusaurus documentation for identity federation
**Researched:** 2026-02-22
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Docusaurus | 3.x | Documentation Framework | Standard for modern documentation sites, built on React/MDX, excellent versioning support. |
| React | 18+ | UI Library | Docusaurus's foundation, allows for interactive components in docs. |
| MDX | 2+ | Document Format | Combines Markdown with JSX for rich, interactive documentation. |
| Node.js | 20+ (LTS) | Runtime | Required for building Docusaurus sites; v20 is the current stable LTS. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @docusaurus/plugin-content-docs | 3.x | Docs Versioning | Essential for managing multiple versions of normative artifacts. |
| @docusaurus/theme-classic | 3.x | Site Theme | Standard theme with dark mode and responsive design. |
| docusaurus-plugin-search-local | Latest | Offline Search | Fast, local search without external dependencies like Algolia. |
| gh-pages | Latest | Deployment Tool | Useful for local deployment testing, though GitHub Actions is preferred for CI. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| GitHub Actions | CI/CD | Automates build and deploy to GitHub Pages. High availability via GitHub's infrastructure. |
| Prettier | Code Formatting | Ensures consistent Markdown and JSX styling. |
| VS Code + MDX Extension | Development | Best IDE experience for Docusaurus/MDX. |

## Installation

```bash
# Core (Standard classic template)
npx create-docusaurus@latest my-website classic --typescript

# Supporting
npm install docusaurus-plugin-search-local
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Docusaurus | GitBook | If a non-technical UI for editing is the absolute priority over versioning control. |
| Local Search | Algolia DocSearch | If the documentation becomes extremely large (thousands of pages) and needs cloud-scale search. |
| GitHub Pages | Netlify / Vercel | If advanced edge functions or sophisticated preview deployments are needed. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Docusaurus v2 | Outdated, Docusaurus v3 uses MDX 2 which is faster and more powerful. | Docusaurus v3 |
| Manual FTP/SCP | Error-prone, hard to version-track deployments. | GitHub Actions (CI/CD) |

## Stack Patterns by Variant

**If Versioning is Critical:**
- Use the `@docusaurus/plugin-content-docs` versioning feature.
- Because it creates immutable snapshots of documentation for each release.

**If High Availability is Priority:**
- Use GitHub Actions to deploy to GitHub Pages.
- Because it leverages GitHub's global CDN and robust infrastructure.

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Docusaurus 3.x | React 18.x | Standard requirement for the latest Docusaurus. |
| Docusaurus 3.x | Node.js 18.0+ | Node 20+ recommended for stability. |

## Sources

- [Docusaurus Official Docs] — https://docusaurus.io/docs/ (Verified v3 standards)
- [GitHub Pages Actions] — https://github.com/features/actions (Verified HA patterns)
- [Google Web Search] — 2025 standard stack for Docusaurus (Confidence: High)

---
*Stack research for: Docusaurus site for normative artifacts*
*Researched: 2026-02-22*
