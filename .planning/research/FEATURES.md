# Feature Research

**Domain:** Normative Artifact Portal (Identity Federation)
**Researched:** 2026-02-22
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist in a professional documentation portal.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Markdown/MDX | Standard for tech docs | LOW | Docusaurus native support. |
| Versioning | Artifacts evolve over time | MEDIUM | Docusaurus docs versioning. |
| Search | Find specific normative text | MEDIUM | `docusaurus-plugin-search-local`. |
| Sidebar Navigation | Structured access to docs | LOW | Docusaurus native sidebar. |
| Responsive UI | Access from mobile/desktop | LOW | Classic theme is responsive. |
| GitHub Pages Hosting | Reliable and fast access | LOW | GitHub infrastructure. |

### Differentiators (Competitive Advantage)

Features that set this portal apart for federation members.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Version Diffing | See what changed between versions | MEDIUM | Use MDX components for comparison. |
| PDF Generation | Download docs for offline/legal | MEDIUM | `docusaurus-plugin-content-docs-pdf`. |
| Schema Visualization | Interactive JSON/OpenAPI views | MEDIUM | MDX components for schemas. |
| Artifact Status | Clear lifecycle (Draft/Stable/Obsolete) | LOW | Frontmatter + badges. |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Full Web CMS | Easy editing for non-tech | Adds server/DB overhead | Git-based flow with GitHub Web Editor. |
| User Comments | Feedback on docs | Needs DB/Auth + Moderation | GitHub Issues/Discussions. |

## Feature Dependencies

```
[Versioning]
    └──requires──> [Markdown/MDX Docs]
                       └──requires──> [Docusaurus Core]

[Search] ──enhance──> [Versioning] (search specific versions)

[PDF Export] ──enhance──> [Artifact Status] (include status in PDF)
```

### Dependency Notes

- **Versioning requires Markdown/MDX Docs:** You cannot version snapshots without the underlying content files.
- **Search enhances Versioning:** Users need to search within a specific version of the artifacts.
- **PDF Export enhances Artifact Status:** It's critical for legal clarity that the status (e.g., "STABLE") is baked into exported PDFs.

## MVP Definition

### Launch With (v1)

Minimum viable product to provide a stable source of truth.

- [ ] **Docusaurus Core** — Solid foundation for content.
- [ ] **Docs Versioning** — Support multiple versions of normative artifacts.
- [ ] **GitHub Pages CI/CD** — High availability and automated updates.
- [ ] **Local Search** — Essential for finding specific clauses/terms.

### Add After Validation (v1.x)

- [ ] **Artifact Badges** — Visual status for each document.
- [ ] **PDF Export** — Support for offline/archival use.

### Future Consideration (v2+)

- [ ] **Interactive Schemas** — Deep integration with technical identity artifacts.
- [ ] **Version Diffing Tool** — Compare two versions of the same artifact inline.

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Docs Versioning | HIGH | MEDIUM | P1 |
| GitHub Pages | HIGH | LOW | P1 |
| Search | HIGH | MEDIUM | P1 |
| Artifact Status | MEDIUM | LOW | P2 |
| PDF Export | MEDIUM | MEDIUM | P2 |
| Interactive Schemas | LOW | HIGH | P3 |

---
*Feature research for: SIB Normativa Artefakter*
*Researched: 2026-02-22*
