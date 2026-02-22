# Phase 01: Foundation & Deployment - Research

**Researched:** 2026-02-22
**Domain:** Docusaurus v3, GitHub Pages, CI/CD
**Confidence:** HIGH

## Summary

This phase focuses on establishing a robust foundation for the "SIB Normativa Artefakter" project using Docusaurus v3. The primary goal is to set up a type-safe documentation environment that automatically builds and deploys to GitHub Pages via GitHub Actions. Research indicates that the modern "Actions as source" approach is superior to the legacy "gh-pages branch" method, providing a cleaner repository history and tighter integration with GitHub's native deployment features.

**Primary recommendation:** Initialize Docusaurus v3 with the classic template and TypeScript, and use the official GitHub Actions workflow for direct deployment (bypassing the need for a manually managed `gh-pages` branch).

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SETUP-01 | Initialisera Docusaurus v3 med klassisk mall och TypeScript-stöd. | Use `npx create-docusaurus@latest . classic --typescript` to bootstrap. |
| SETUP-02 | Konfigurera `docusaurus.config.ts` för GitHub Pages. | Requires specific `url`, `baseUrl`, `organizationName`, and `projectName` settings. |
| SETUP-03 | Skapa GitHub Actions-workflow för automatiserad byggning och driftsättning. | Recommended to use official `actions/upload-pages-artifact` and `actions/deploy-pages`. |
| SETUP-04 | Säkerställa att webbplatsen är tillgänglig via HTTPS på GitHub Pages. | Automatically handled by GitHub Pages; `url` must use `https://`. |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Docusaurus | v3.7+ | Core SSG | Modern, React-based, excellent Markdown/MDX support. |
| React | v18.x | UI Library | Required by Docusaurus v3. |
| TypeScript | v5.x | Type Safety | Ensures configuration and custom components are type-safe. |
| Node.js | v20 (LTS) | Runtime | Required for Docusaurus v3 and modern build tools. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| GitHub Actions | N/A | CI/CD | For automated builds and deployments. |
| @docusaurus/tsconfig | v3.x | TS Config | Provides recommended TypeScript settings for Docusaurus. |

**Installation:**
```bash
# Initialize new project in current directory
npx create-docusaurus@latest . classic --typescript
```

## Architecture Patterns

### Recommended Project Structure
```
.
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD Workflow
├── docs/                # Documentation content
├── src/                 # Custom React components
├── static/              # Static assets (images, etc.)
├── docusaurus.config.ts # Site configuration
├── package.json
├── tsconfig.json
└── sidebars.ts          # Sidebar configuration
```

### Pattern 1: Modern GitHub Actions Deployment (Actions-as-Source)
**What:** Deploying directly from a GitHub Actions workflow without a persistent `gh-pages` branch.
**When to use:** Preferred for all new Docusaurus v3 projects on GitHub.
**Example:**
```yaml
# Source: https://docusaurus.io/docs/deployment#deploying-to-github-pages
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Anti-Patterns to Avoid
- **Manual Deployment:** Pushing to `gh-pages` branch from local machines (hard to audit, prone to errors).
- **Mismatched Node Versions:** Using different Node.js versions in local dev vs. CI (causes "it works on my machine" issues).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Deployment Scripts | Custom bash/python scripts | Official GitHub Actions | Native integration, security (secrets handling), and reliability. |
| TS Configuration | Custom `tsconfig.json` | `@docusaurus/tsconfig` | Pre-configured for Docusaurus internals and MDX. |
| CSS Reset | Custom reset files | Infima (built-in) | Docusaurus's design system handles layout and resets efficiently. |

## Common Pitfalls

### Pitfall 1: Incorrect `baseUrl`
**What goes wrong:** CSS and JS files fail to load (404s).
**Why it happens:** Missing trailing slash or incorrect repository name in `baseUrl`.
**How to avoid:** Ensure `baseUrl` is `/<repo-name>/` (with both slashes).

### Pitfall 2: Trailing Slashes on GitHub Pages
**What goes wrong:** URL inconsistencies or 404s when navigating directly to a route.
**Why it happens:** GitHub Pages and Docusaurus may disagree on whether `/docs` or `/docs/` is the canonical URL.
**How to avoid:** Explicitly set `trailingSlash: true` in `docusaurus.config.ts`.

### Pitfall 3: Jekyll Processing
**What goes wrong:** Files starting with underscores (common in Docusaurus) are ignored.
**How to avoid:** Include an empty `.nojekyll` file in the `static/` directory (though modern Actions often handle this, it's safer to include).

## Code Examples

### Type-Safe Configuration (`docusaurus.config.ts`)
```typescript
import {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SIB Normativa Artefakter',
  url: 'https://jcols.github.io',
  baseUrl: '/SIB_pages/',
  organizationName: 'jcols',
  projectName: 'SIB_pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jcols/SIB_pages/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `gh-pages` branch | Actions as Source | 2022-2023 | No need for a messy artifact-only branch; cleaner git history. |
| MDX v1 | MDX v3 | Docusaurus v3 | Stricter parsing, better performance, but requires cleaner Markdown. |
| CommonJS config | TypeScript config | Docusaurus v3 | Better IDE support and compile-time validation of config. |

## Open Questions

1. **Custom Domain?**
   - What we know: GitHub Pages supports custom domains.
   - What's unclear: If the user intends to move from `github.io` to a custom domain later.
   - Recommendation: Configure for `github.io` now; moving to a custom domain only requires updating `url` and `baseUrl`.

## Sources

### Primary (HIGH confidence)
- [Docusaurus Official Docs](https://docusaurus.io/docs/deployment) - Official deployment guide.
- [GitHub Actions Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) - Configuring Actions as source.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Docusaurus v3 is stable and well-documented.
- Architecture: HIGH - Official patterns are clearly defined.
- Pitfalls: HIGH - Well-known issues with GitHub Pages hosting.

**Research date:** 2026-02-22
**Valid until:** 2026-05-22 (approx 90 days for stable framework)
