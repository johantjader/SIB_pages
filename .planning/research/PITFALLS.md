# Pitfalls Research

**Domain:** Docusaurus Documentation for Identity Federation
**Researched:** 2026-02-22
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Broken Assets on GitHub Pages (BaseUrl Issue)

**What goes wrong:**
CSS, JS, and images fail to load. The site looks like plain text or 404s.

**Why it happens:**
GitHub Pages often hosts sites at `https://<user>.github.io/<repo>/`. If `baseUrl` in `docusaurus.config.ts` is just `/`, all paths will be relative to the domain root instead of the repo root.

**How to avoid:**
Set `baseUrl` to `/<repo-name>/` in `docusaurus.config.ts`.

**Warning signs:**
Console errors (404) for all static assets in the deployed environment.

**Phase to address:**
Phase 1 (Setup/Deployment)

---

### Pitfall 2: Stale Search Index in Versioned Docs

**What goes wrong:**
Search results only show content from the latest version, or search fails when switching versions.

**Why it happens:**
Some search plugins don't handle multiple versioned indices well out of the box.

**How to avoid:**
Configure `docusaurus-plugin-search-local` to include all versions or specifically scope search to the current version.

**Warning signs:**
Searching for a term known to be in an old version returns no results.

**Phase to address:**
Phase 2 (Versioning & Search)

---

### Pitfall 3: Version Drift in Global Navigation

**What goes wrong:**
The "Home" or "About" link in the navbar always takes users to the latest version, even when they are browsing an older version.

**Why it happens:**
Docusaurus navbar links are usually static.

**How to avoid:**
Use the `docsVersionDropdown` component and ensure global links are clearly distinguished from versioned links.

**Warning signs:**
User clicks "Home" and loses their current version context.

**Phase to address:**
Phase 2 (Versioning & UI)

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Skipping GitHub Actions | Faster initial setup | Manual, error-prone deploys | NEVER. CI/CD is table stakes for HA. |
| Hardcoded Versions | Easy to add first version | Hard to maintain as artifacts grow | Only for the very first draft. |
| In-memory Search | No configuration needed | Browser performance issues as docs grow | Until >500 pages of text. |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| GitHub Pages | Deploying from `main` without build | Build to `gh-pages` branch via Action. |
| GitHub Actions | Missing `repo` scope on token | Use `GITHUB_TOKEN` with write permissions. |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Search Index Size | Slow initial page load | Exclude heavy files from index | ~5MB index (~1000 pages) |
| Large MDX Components | Jumpy page rendering | Code-split heavy React components | >5 heavy components per page |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Leaking Secrets in MDX | API keys exposed in static build | Use environment variables and `.env` (don't commit secrets). |
| Unverified Dependencies | Supply chain attack | Use `package-lock.json` and regular `npm audit`. |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No "Latest" Banner | User reads old docs by mistake | Enable Docusaurus "banner" for older versions. |
| Missing Version Switcher | User can't find previous artifacts | Add `docsVersionDropdown` to navbar. |

## "Looks Done But Isn't" Checklist

- [ ] **GitHub Pages Deploy:** Works on localhost but fails on remote due to `baseUrl`.
- [ ] **Search:** Works for text but doesn't find content inside versioned snapshots.
- [ ] **Mobile View:** Sidebar is unusable on small screens.
- [ ] **Versions:** Versions exist but the switcher is missing from the UI.

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| BaseUrl Error | LOW | Update `docusaurus.config.ts`, re-build, re-deploy. |
| Broken Versions | MEDIUM | Delete `versioned_docs`, re-tag versions correctly. |
| Large Index | LOW | Update search plugin config to exclude non-essential files. |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| BaseUrl Issues | Phase 1 | Successful deployment with working CSS/JS. |
| Version Drift | Phase 2 | Manually switch versions and verify links. |
| Search Gaps | Phase 2 | Search for version-specific content. |

---
*Pitfalls research for: SIB Normativa Artefakter*
*Researched: 2026-02-22*
