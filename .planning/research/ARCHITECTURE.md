# Architecture Research

**Domain:** Static Documentation Portal (Docusaurus)
**Researched:** 2026-02-22
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          Content Layer (Git)                            │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Docs    │  │ MDX     │  │ Schemas │  │ Assets  │                     │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘                     │
│       │            │            │            │                          │
├───────┼────────────┼────────────┼────────────┼──────────────────────────┤
│       ▼            ▼            ▼            ▼                          │
│                      Build Layer (GitHub Actions)                       │
├─────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────────┐          │
│  │                    Docusaurus SSG Build                   │          │
│  └────────────────────────────┬──────────────────────────────┘          │
├───────────────────────────────┼─────────────────────────────────────────┤
│                               ▼                                         │
│                      Hosting Layer (GitHub Pages)                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                         │
│  │ Global CDN │  │ Static Srv │  │ HTTPS/SSL  │                         │
│  └────────────┘  └────────────┘  └────────────┘                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Docusaurus Core | Routing, MDX rendering, Search indexing | React + Docusaurus Plugins |
| Docs Plugin | Versioning, sidebar generation | `@docusaurus/plugin-content-docs` |
| GitHub Actions | Automated build and deployment pipeline | `.github/workflows/deploy.yml` |
| GitHub Pages | High availability static hosting and CDN | GitHub Infrastructure |

## Recommended Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD Workflow
├── docs/                    # Current (next) version of docs
├── versioned_docs/          # Snapshots of previous versions
├── versioned_sidebars/      # Sidebars for previous versions
├── src/
│   ├── components/          # Custom React/MDX components
│   ├── css/                 # Custom styling
│   └── pages/               # Non-doc pages (home, about)
├── static/                  # Static assets (images, PDFs)
├── docusaurus.config.ts     # Main configuration
├── sidebars.ts              # Sidebar structure
├── package.json             # Dependencies and scripts
└── versions.json            # List of tracked versions
```

### Structure Rationale

- **docs/ vs versioned_docs/:** Docusaurus separates the "work-in-progress" docs from released snapshots. This prevents accidental edits to historical normative artifacts.
- **src/components/:** Centralized custom logic for rendering identity federation specific schemas or badges.
- **.github/workflows/:** Keeps the deployment logic alongside the code for transparency and HA.

## Architectural Patterns

### Pattern 1: Content Versioning (Immutable Snapshots)

**What:** Using Docusaurus CLI to "tag" a version. This copies the current `docs/` folder into `versioned_docs/version-[name]/`.
**When to use:** Whenever a normative artifact is officially released or updated.
**Trade-offs:** Increases repository size over time, but ensures historical accuracy.

### Pattern 2: Schema-as-Code (MDX Integration)

**What:** Importing JSON/OpenAPI schemas directly into MDX files using custom React components.
**When to use:** For technical artifacts that need interactive visualization.
**Trade-offs:** Higher initial component development cost, but better user experience.

## Data Flow

### Request Flow (Build-time)

```
[Git Push]
    ↓
[GitHub Actions] → [npm install] → [npm run build] → [Static Files]
    ↓                                                   ↓
[Deploy] ←────────────────────────────────────────── [Push to gh-pages]
```

### Content Flow (Runtime)

```
[User Browser]
    ↓
[GitHub Pages CDN] → [Cached HTML/JS] → [Client-side React Hydration]
    ↓
[Local Search Index] (Loaded once, runs in browser)
```

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-100 docs | Default Docusaurus setup is perfect. |
| 100-1k docs | Optimize search index size; consider Algolia if index > 5MB. |
| 1k+ docs | Consider splitting into multiple Docusaurus instances (multi-instance) by category. |

## Anti-Patterns

### Anti-Pattern 1: Manual Versioning in Folders

**What people do:** Creating `docs/v1/`, `docs/v2/` manually.
**Why it's wrong:** Breaks Docusaurus's built-in version switcher and sidebar logic.
**Do this instead:** Use `npm run docusaurus docs:version [name]`.

### Anti-Pattern 2: Large Binary Files in Git

**What people do:** Storing many large PDFs or heavy images in the `docs/` folder.
**Why it's wrong:** Bloats git history and slows down CI/CD builds.
**Do this instead:** Use Git LFS or external object storage for large binaries.

## Sources

- [Docusaurus Architecture] — https://docusaurus.io/docs/advanced/architecture
- [GitHub Pages HA Guide] — https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
- [Identity Federation Patterns] — Common practices for normative artifact portals (Confidence: High)

---
*Architecture research for: SIB Normativa Artefakter*
*Researched: 2026-02-22*
