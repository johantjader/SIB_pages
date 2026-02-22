# SIB Portal: Versioning & Maintenance Guide

Denna guide beskriver hur normativa artefakter hanteras i SIB-portalen, från källkod i den privata sandlådan till publicerade versioner på GitHub Pages.

## 1. Innehållssynkronisering (Sync)

Portalen hämtar automatiskt allt innehåll från det privata repositoryt `johantjader/SIB-normativa-artefakter-sandbox`.

- **Trigger:** Varje push till `main`-branchen i sandlådan skickar en signal (Repository Dispatch) till detta repository.
- **Workflow:** GitHub Action-filen `.github/workflows/sync-content.yml` körs.
- **Resultat:** Alla Markdown-filer i sandlådan kopieras till mappen `docs/` i detta repository. Befintliga filer i `docs/` som inte finns i sandlådan tas bort (`rsync --delete`).

> **VARNING:** Redigera aldrig filer direkt i mappen `docs/` i detta repository. De kommer att skrivas över vid nästa synkronisering. Allt innehåll ska hanteras i sandlådan.

## 2. Hantering av Utkast (Drafts)

Innehållet som synkas till `docs/` betraktas alltid som "vNext" eller "Draft". Detta är den levande versionen av dokumentationen.

- Dokument som synkas visas under fliken "Next" i versionsväljaren.
- För att markera ett dokument som utkast visuellt, använd frontmatter:
  ```markdown
  ---
  status: draft
  ---
  ```

## 3. Skapa en Officiell Version (Stable Snapshot)

När artefakter har nått en stabil nivå och ska frysas som en officiell version (t.ex. `v1.1.0`), följ dessa steg:

1. **Förberedelse:** Se till att sandlådan är synkad och att alla dokument i `docs/` har rätt innehåll och metadata.
2. **Kör versionskommandot lokalt:**
   ```bash
   npm run docusaurus docs:version v1.1.0
   ```
3. **Verifiera:** Docusaurus skapar en kopia av `docs/` till mappen `versioned_docs/version-v1.1.0/`.
4. **Push:** Committa och pusha de nya filerna (`versions.json`, `versioned_docs/`, `versioned_sidebars/`).

När detta är gjort kommer `v1.1.0` att dyka upp i versionsväljaren på webbplatsen som en statisk, oföränderlig snapshot.

## 4. Nyheter (Blogg)

Sektionen "Nyheter" uppdateras automatiskt varje gång portalen byggs.

- **Källa:** `https://www.digg.se/om-oss/nyheter/digital-identitet/`
- **Script:** `scripts/scrape-digg-news.js`
- **Process:** Scraper-scriptet hämtar de senaste rubrikerna från Digg och skapar lokala blogginlägg i mappen `blog/`. Dessa inlägg länkar sedan tillbaka till originalartiklarna på Digg.se.

## 5. Underhåll av Scraper

Om Digg.se ändrar sin webbplatsstruktur kan scrapern sluta fungera (hittar 0 items).
- Kontrollera CSS-selektorer i `scripts/scrape-digg-news.js`.
- Scrapern använder för närvarande `a[title*="[20"]` för att hitta nyhetslänkar baserat på datumformatet i `title`-attributet.
