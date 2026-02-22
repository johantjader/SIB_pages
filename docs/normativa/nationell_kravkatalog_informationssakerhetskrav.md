# Nationell Kravkatalog Informationssäkerhetskrav

[Status: Utkast]
**Version:** 1.0

## 1. Syfte

Detta dokument specificerar de obligatoriska informationssäkerhetskraven för olika aktörer och komponenter inom den nationella federationsinfrastrukturen för identitet och behörighet. Syftet är att säkerställa en hög och enhetlig säkerhetsnivå för att skapa och upprätthålla tillit mellan alla anslutna parter. Kraven utgör en gemensam baslinje för hela ekosystemet.

## 2. Omfattning

Kravkatalogen omfattar samtliga parter som ansluter till federationen, inklusive men inte begränsat till:
- Ledningsaktör
- Federationsoperatör
- Anslutningsoperatör
- Federationsmedlemmar

Kraven är indelade per roll för att tydliggöra ansvarsområden.

## 3. Krav på Anslutningsoperatör

En anslutningsoperatör agerar som en förlängd arm till federationen och har ett särskilt ansvar för att ansluta, granska och stödja federationsmedlemmar. Följande krav måste uppfyllas och kunna uppvisas på begäran av Ledningsaktören.

### 3.1 Organisatoriska Krav

| Krav-ID | Krav |
|---|---|
| AO-ORG-01 | **Juridisk person:** Anslutningsoperatören ska vara en juridisk person registrerad i Sverige. |
| AO-ORG-02 | **Ansvarsförsäkring:** En giltig ansvarsförsäkring med ett täckningsbelopp som är proportionerligt till verksamhetens omfattning och risk ska finnas. |
| AO-ORG-03 | **Informationssäkerhetspolicy:** En fastställd och kommunicerad informationssäkerhetspolicy som är förankrad i ledningen ska finnas. |
| AO-ORG-04 | **Roller och Ansvar:** Tydligt definierade och dokumenterade roller och ansvar för informationssäkerhet inom organisationen ska finnas. |
| AO-ORG-05 | **Systematiskt Informationssäkerhetsarbete:** Anslutningsoperatören ska bedriva ett systematiskt och riskbaserat informationssäkerhetsarbete, t.ex. i linje med ISO/IEC 27001 eller motsvarande ramverk. |
| AO-ORG-06 | **Incidenthantering:** En dokumenterad process för att upptäcka, rapportera, hantera och utreda informationssäkerhetsincidenter ska finnas. Processen ska inkludera rapporteringsvägar till Ledningsaktören. |
| AO-ORG-07 | **Kontinuitetsplanering:** Planer för kontinuitet och katastrofåterställning ska finnas för att säkerställa att kritiska tjänster kan upprätthållas vid allvarliga störningar. |
| AO-ORG-08 | **Säkerhetsmedvetenhet:** Personal som arbetar med federationsrelaterade tjänster ska genomgå regelbunden utbildning i informationssäkerhet. |

### 3.2 Tekniska Krav

| Krav-ID | Krav |
|---|---|
| AO-TEK-01 | **Säker systemutveckling:** Om egenutvecklade system används för att hantera federationsinformation ska en säker systemutvecklingsprocess tillämpas (t.ex. OWASP SAMM eller motsvarande). |
| AO-TEK-02 | **Säker nätverkskonfiguration:** Nätverk ska vara segmenterade och skyddade av brandväggar. Onödiga portar och tjänster ska vara avstängda. |
| AO-TEK-03 | **Härdning:** Servrar och andra systemkomponenter ska härdas enligt etablerade bästa praxis för att minimera attackytan. |
| AO-TEK-04 | **Loggning och övervakning:** Tillräcklig loggning för spårbarhet och utredning ska aktiveras på alla relevanta system. Loggarna ska skyddas mot manipulation och obehörig åtkomst samt övervakas för avvikelser. |
| AO-TEK-05 | **Nyckelhantering:** En dokumenterad process för säker hantering av kryptografiska nycklar (generering, lagring, distribution, rotation, återkallelse) ska finnas. |
| AO-TEK-06 | **Sårbarhetshantering:** En process för att identifiera, analysera och åtgärda sårbarheter i system och mjukvara ska finnas. Regelbundna sårbarhetsskanningar ska genomföras. |
| AO-TEK-07 | **Autentisering och åtkomststyrning:** Stark autentisering (t.ex. multifaktorautentisering) ska användas för administrativ åtkomst till system. Principen om minsta behörighet ska tillämpas. |

### 3.3 Krav på Hantering av Federationsmedlemmar

| Krav-ID | Krav |
|---|---|
| AO-FM-01 | **Avtalshantering och juridisk bundenhet:** Anslutningsoperatören ska, via sitt eget avtal med Federationsmedlemmen, säkerställa att medlemmen juridiskt förbinder sig att följa det av Ledningsaktören fastställda federationsregelverket (Realisering av Styrande Princip P-01). |
| AO-FM-02 | **Initial granskning:** En process ska finnas för att initialt granska att federationsmedlemmen uppfyller de grundläggande anslutningskraven i federationen. |
| AO-FM-03 | **Support och vägledning:** Anslutningsoperatören ska tillhandahålla support och vägledning till sina anslutna federationsmedlemmar gällande federationsregelverket och tekniska anslutningsfrågor. |
| AO-FM-04 | **Registerhållning:** Anslutningsoperatören ska föra ett uppdaterat register över de federationsmedlemmar som är anslutna via operatören. |

## 4. Krav på Federationsmedlem

En federationsmedlem är en juridisk person som via avtal med en Anslutningsoperatör anslutit sig till federationen. Federationsmedlemmen är juridiskt ansvarig för de `System` den ansluter. Följande krav måste uppfyllas och kunna uppvisas på begäran av den egna Anslutningsoperatören. Anslutningsoperatören är skyldig att verifiera att kraven efterlevs vid anslutning och därefter löpande.

### 4.1 Organisatoriska Krav

| Krav-ID | Krav |
|---|---|
| FM-ORG-01 | **Juridisk person:** Federationsmedlemmen ska vara en juridisk person. |
| FM-ORG-02 | **Informationssäkerhetsansvar:** En utpekad funktion eller person ska finnas som är ansvarig för informationssäkerheten för de system som ansluts till federationen. |
| FM-ORG-03 | **Incidenthantering:** En dokumenterad process för att hantera informationssäkerhetsincidenter ska finnas. Incidenter som kan påverka federationen eller andra medlemmar ska utan dröjsmål rapporteras till den egna Anslutningsoperatören. |

### 4.2 Tekniska Krav

| Krav-ID | Krav |
|---|---|
| FM-TEK-01 | **Korrekt teknisk implementation (Princip P-08):** Federationens tekniska protokoll och tjänster ska implementeras korrekt enligt gällande tekniska ramverk och profiler. |
| FM-TEK-02 | **Säker nyckelhantering:** En dokumenterad process för säker hantering av kryptografiska nycklar (generering, lagring, rotation, återkallelse) för anslutna `System` ska finnas. Nycklar ska skyddas mot obehörig åtkomst. |
| FM-TEK-03 | **Spårbarhet genom loggning (Princip P-09):** Tillräcklig teknisk loggning ska aktiveras i anslutna `System` för att möjliggöra spårbarhet och utredning av händelser. Loggarna ska skyddas mot manipulation. |
| FM-TEK-04 | **Sårbarhetshantering:** En process för att identifiera och hantera tekniska sårbarheter i anslutna `System` ska finnas. |
