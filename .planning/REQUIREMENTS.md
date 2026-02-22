# Requirements: SIB Normativa Artefakter

**Defined:** 2026-02-22
**Core Value:** En tillförlitlig, versionshanterad och tillgänglig källa för normativa artefakter för alla medlemmar i federationen.

## v1 Requirements

Requirements for the initial high-availability release on GitHub Pages.

### Setup & Deployment (SETUP)

- [ ] **SETUP-01**: Initialisera Docusaurus v3 med klassisk mall och TypeScript-stöd.
- [ ] **SETUP-02**: Konfigurera `docusaurus.config.ts` för GitHub Pages (url, baseUrl, organizationName, projectName).
- [ ] **SETUP-03**: Skapa GitHub Actions-workflow för automatiserad byggning och driftsättning till `gh-pages`-branchen.
- [ ] **SETUP-04**: Säkerställa att webbplatsen är tillgänglig via HTTPS på GitHub Pages.

### Content & Versioning (CONT)

- [ ] **CONT-01**: Aktivera och konfigurera Docusaurus docs-versioning plugin.
- [ ] **CONT-02**: Migrera normativa artefakter från sandbox-repo till `docs/` och strukturera dem logiskt.
- [ ] **CONT-03**: Skapa den första versionshanterade snapshotten av artefakterna.
- [ ] **CONT-04**: Implementera status-badges (t.ex. "STABLE", "DRAFT") för artefakter via frontmatter.

### User Experience (UX)

- [ ] **UX-01**: Installera och konfigurera `docusaurus-plugin-search-local` för lokal sökning i alla versioner.
- [ ] **UX-02**: Konfigurera navigation (sidebar och navbar) inklusive en version-dropdown för enkel växling.
- [ ] **UX-03**: Säkerställa att gränssnittet är responsivt och fungerar väl på både mobil och desktop.

## v2 Requirements

### Advanced Features (ADV)

- **ADV-01**: PDF-export för normativa artefakter för offline-bruk och arkivering.
- **ADV-02**: Inline-jämförelse mellan versioner (diff-vy).
- **ADV-03**: Interaktiv visualisering av tekniska scheman (JSON Schema/OpenAPI).

## Out of Scope

| Feature | Reason |
|---------|--------|
| Användarinloggning | Materialet ska vara publikt tillgängligt. |
| Kommentarsfält | Feedback hanteras via GitHub Issues/Discussions för att hålla siten statisk och säker. |
| Egen hosting | GitHub Pages valdes för enkelhet och hög tillgänglighet. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SETUP-01 | Phase 1 | Pending |
| SETUP-02 | Phase 1 | Pending |
| SETUP-03 | Phase 1 | Pending |
| SETUP-04 | Phase 1 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| CONT-04 | Phase 2 | Pending |
| UX-01 | Phase 3 | Pending |
| UX-02 | Phase 3 | Pending |
| UX-03 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 11 total
- Mapped to phases: 11
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-22*
*Last updated: 2026-02-22 after initial definition*
