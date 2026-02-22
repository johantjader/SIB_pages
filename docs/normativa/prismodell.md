# Prismodell för Federationsinfrastruktur (MVP Steg 1)

**Version:** 0.5 (Införande av proportionerlig kostnadsfördelning i Driftsfas)
**Status:** Under granskning
**Datum:** 2026-02-10

## 1. Syfte och Styrande Principer

Denna prismodell syftar till att skapa en finansiellt hållbar, skalbar och konkurrensneutral infrastruktur för maskin-till-maskin-identitet i enlighet med MVP Steg 1. Modellen bygger på följande styrande principer:

*   **Marknadsplats för anslutning:** Främja en öppen och konkurrensutsatt marknad där flera anslutningsoperatörer kan erbjuda tjänster till federationsmedlemmar.
*   **Incitament för deltagande:** Skapa tydliga incitament för både anslutningsoperatörer och federationsmedlemmar att ansluta sig och använda federationen.
*   **Kostnadstäckning och hållbarhet:** Säkerställa långsiktig finansiering för Ledningsaktörens åtaganden avseende drift och förvaltning av federationsregelverket och kärnkomponenter.
*   **Transparens och förutsägbarhet:** Erbjuda en tydlig och förutsägbar modell för alla inblandade parter.

## 2. Prismodellens Struktur

Prismodellen består av två samverkande delar:

1.  **Ledningsaktörens Finansieringsmodell:** Hur den centrala styrningen och infrastrukturen finansieras.
2.  **Anslutningsoperatörens Affärsmodell:** Ramen inom vilken anslutningsoperatörer kan verka kommersiellt.

---

## 3. Ledningsaktörens Finansieringsmodell (Digg)

Ledningsaktörens ansvar (regelverk, tillsyn, etc.) finansieras primärt genom **anslag** till ledningsaktören.

### 3.1 Finansiering av Federationsoperatören (Tvåfasmodell)

För att balansera behovet av en långsiktigt hållbar plattform med behovet av att sänka trösklarna för tidiga deltagare, finansieras den centrala `Federationsoperatören` enligt en tvåfasmodell.

#### 3.1.1 Etableringsfas (Fas 1: ca 0-24 månader)

*   **Finansiering:** Under federationens initiala etableringsfas står `Ledningsaktören` (Digg) för hela kostnaden för att upphandla och drifta `Federationsoperatören`.
*   **Avgift för Anslutningsoperatör:** 0 kr.
*   **Syfte:** Att subventionera marknaden, maximera incitamenten för att bli `Anslutningsoperatör` och ge ekosystemet tid att växa utan att de initiala deltagarna belastas med oproportionerligt höga kostnader.

#### 3.1.2 Driftsfas (Fas 2: efter ca 24 månader)

*   **Finansiering:** När federationen uppnått en mogen nivå övergår kostnadsansvaret för `Federationsoperatören` till att delas mellan de anslutna anslutningsoperatörerna.
*   **Avgift för Anslutningsoperatör:** En årlig avgift som täcker de faktiska, av Ledningsaktören godkända, kostnaderna för `Federationsoperatören`. Den totala kostnaden fördelas mellan anslutningsoperatörerna baserat på **varje operatörs marknadsandel**, mätt som **antalet unika `Federationsmedlemmar`** som operatören har avtal med vid tidpunkten för debitering. Denna modell säkerställer att de aktörer som har störst nytta av och affärsvolym i federationen också bär en proportionerligt större del av den gemensamma driftskostnaden.
*   **Syfte:** Att skapa en självfinansierande, rättvis och skalbar modell för den centrala infrastrukturen, där kostnaden för de gemensamma nyttigheterna fördelas proportionerligt baserat på faktisk affärsvolym.

### 3.2 Avtalsmässig Förankring och Förutsägbarhet

För att skapa juridisk trygghet och fullständig transparens för anslutningsoperatörer ska följande gälla:

*   **Krav på Avtalsreglering:** De villkor som tecknas med varje `Anslutningsoperatör` (`villkor_for_anslutningsoperator.md`) måste innehålla bindande klausuler som i detalj reglerar villkoren för både Etableringsfasen och Driftsfasen.
*   **Specifikation i Avtal:** Avtalet måste, från dag ett, tydligt specificera:
    1.  Den exakta tidsperioden eller de kriterier (t.ex. antal anslutna operatörer) som definierar slutet på Etableringsfasen.
    2.  Den fullständiga och förutsägbara beräkningsmodell (fördelningsnyckeln) som kommer att användas för att fastställa den årliga avgiften under Driftsfasen.
    3.  Att `Ledningsaktören` formellt ska avisera den kommande övergången till Driftsfasen minst sex (6) månader i förväg.

---
## 4. Anslutningsoperatörens Affärsmodell

Anslutningsoperatörer har, i enlighet med [[[[[[[`villkor_for_anslutningsoperatorer.md`](villkor_for_anslutningsoperatorer.md)](villkor_for_anslutningsoperatorer.md)](villkor_for_anslutningsoperatorer.md)](villkor_for_anslutningsoperatorer.md)](villkor_for_anslutningsoperatorer.md)](./villkor_for_anslutningsoperatorer.md)](./villkor_for_anslutningsoperatorer.md), rätt att utforma sina egna affärsmodeller och ta betalt av de federationsmedlemmar de ansluter. Ledningsaktören reglerar *inte* prisnivåerna, men sätter ramar för *vad* man får ta betalt för i syfte att skydda ekosystemets hälsa.

### 4.1 Tillåtna Prissättningskomponenter

Anslutningsoperatörer uppmuntras att konkurrera med pris och kvalitet. Deras erbjudanden till federationsmedlemmar kan exempelvis inkludera (men är inte begränsade till):

*   **Initial anslutningsavgift (Onboarding):** En engångsavgift för att täcka den process och kontroll som krävs för att ansluta en ny federationsmedlem och deras första system, i enlighet med `ENA-anslutningspolicy`.
*   **Avgift för anslutna system:** En återkommande avgift som speglar omfattningen av federationsmedlemmens närvaro i federationen. För att främja förutsägbarhet och inte bestraffa moderna arkitekturer (t.ex. mikrotjänster) kan denna med fördel struktureras i **avgiftsnivåer (tiers)** baserat på antalet anslutna `System`. Exempelvis:
    *   *Nivå 1:* 1-10 System
    *   *Nivå 2:* 11-100 System
    *   *Nivå 3:* 101+ System
    En fast avgift per `System` är också en möjlig modell, men operatörer uppmuntras att överväga nivåbaserad prissättning för att öka förutsägbarheten för kunden.
*   **Support- och SLA-paket:** Differentierade nivåer av support (t.ex. 8/5, 24/7), vilket tillåter mervärdesförsäljning.
*   **Mervärdestjänster:** Tjänster som ligger utanför MVP-scopets kärnfunktionalitet. Exempelvis:
    *   Avancerad loggning och analys.
    *   Hanterade tjänster för nyckelrotation.
    *   Konsulttjäncher för integration och regelefterlevnad.

### 4.2 Regulatoriska Ramar från Ledningsaktören

För att främja tillväxt och förhindra inlåsningseffekter sätter Ledningsaktören följande ramar:

*   **Förbud mot transaktionsavgifter på basfunktionalitet:** Anslutningsoperatörer får **inte** ta betalt per anrop/verifiering som sker via federationsinfrastrukturen. Detta för att inte bestraffa användning och skapa oförutsägbara kostnader för medlemmarna.
*   **Krav på transparent prissättning:** Operatörer måste publicera sina prislistor för grundläggande anslutningstjänster öppet, för att underlätta för federationsmedlemmar att jämföra erbjudanden. Priser för skräddarsydda mervärdestjänster kan dock vara föremål för offert.
*   **Rätt att byta operatör:** Regelverket måste säkerställa att en federationsmedlem kan byta anslutningsoperatör med minimal teknisk och administrativ friktion. Detta är en fundamental förutsättning för en fungerande marknad.
---

## 5. Incitamentsstruktur

Modellen är designad för att skapa en positiv återkopplingsloop där alla parter har tydliga incitament att delta och bidra till federationens värde.

*   **För Ledningsaktören (Digg):**
    *   **Incitament:** Maximera anslutning och användning av federationen för att uppnå nationell nytta (sänkt transaktionskostnad för digital samverkan, ökad säkerhet).
    *   **Styrning:** Anslagsfinansieringen och förbudet mot transaktionsavgifter är direkta verktyg för att uppnå detta mål.

*   **För Anslutningsoperatören:**
    *   **Incitament:** Generera intäkter genom att ansluta så många federationsmedlemmar som möjligt och sälja högkvalitativa mervärdestjänster.
    *   **Styrning:** Konkurrensutsättningen tvingar fram kvalitet och effektiva processer. Rätten att ta betalt för onboarding, anslutna system (gärna via "tiers") och support/SLA skapar en hållbar affärsmodell.

*   **För Federationsmedlemmen (Konsument/Producent av data):**
    *   **Incitament:** Få tillgång till en skalbar, säker och kostnadseffektiv metod för att etablera tillit till andra parter.
    *   **Styrning:** Förbudet mot transaktionsavgifter gör det extremt billigt att *använda* federationen, vilket gör business caset för att ansluta sig mycket starkt. Att kunna byta anslutningsoperatör utan inlåsning minskar risken och ökar förhandlingsstyrkan.
