# Roadmap: SIB Normativa Artefakter

## Phases

- [x] **Phase 1: Foundation & Deployment** - Establish the Docusaurus environment and automated CI/CD pipeline to GitHub Pages.
- [x] **Phase 2: Content & Versioning** - Migrate normative artifacts and enable versioning snapshots.
- [x] **Phase 3: Search & UX Refinement** - Implement local search and polish navigation for a production-ready experience.
- [ ] **Phase 4: Brand Alignment & Automation** - Mirror Digg.se visual style, automate sync on push, and integrate external news.

## Phase Details

### Phase 1: Foundation & Deployment
**Goal**: A live, auto-deploying Docusaurus site accessible via GitHub Pages.
**Depends on**: Nothing
**Requirements**: SETUP-01, SETUP-02, SETUP-03, SETUP-04
**Success Criteria** (what must be TRUE):
  1. User can access the site at the configured GitHub Pages URL via HTTPS.
  2. The site is automatically rebuilt and redeployed whenever changes are pushed to the main branch.
  3. The base Docusaurus framework is functional with TypeScript support.
**Plans**: 2 plans
- [x] 01-01-PLAN.md — Bootstrap Docusaurus v3 with TypeScript and configure for GitHub Pages.
- [x] 01-02-PLAN.md — Create CI/CD workflow and verify live deployment.

### Phase 2: Content & Versioning
**Goal**: Normative artifacts are migrated, structured, and version-controlled.
**Depends on**: Phase 1
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04
**Success Criteria** (what must be TRUE):
  1. User can read all normative artifacts migrated from the sandbox environment.
  2. User can see and switch between different versions (snapshots) of the documentation.
  3. User can identify the lifecycle stage of an artifact (STABLE/DRAFT) via visible badges.
**Plans**: TBD

### Phase 4: Brand Alignment & Automation
**Goal**: A highly professional, automated, and visually aligned portal that mirrors the Digg.se experience.
**Depends on**: Phase 3
**Requirements**: UX-01, DOC-02, CI-CD-01, DOC-01
**Success Criteria** (what must be TRUE):
  1. The site's visual identity (colors, fonts, layout) is indistinguishable from Digg.se (white-labeled).
  2. The news section automatically populates with updates from external sources like Digg.se.
  3. Content sync triggers automatically upon pushes to the private sandbox repository.
  4. The artifact versioning process is fully documented for future maintainers.
**Plans**: TBD

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Deployment | 2/2 | Completed | 2026-02-22 |
| 2. Content & Versioning | 1/1 | Completed | 2026-02-22 |
| 3. Search & UX Refinement | 2/2 | Completed | 2026-02-22 |
| 4. Brand Alignment & Automation | 0/4 | Not started | - |

---
*Roadmap generated: 2026-02-22*
*Depth: quick*
