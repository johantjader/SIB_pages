# Villkor för Federationsoperatör

**Version:** 0.3 (Tillägg av Revocation och Exit-plan)
**Status:** Under granskning
**Datum:** 2026-02-09

---

## 1. Inledning och Syfte

Detta dokument specificerar de bindande villkor och krav som ställs på den aktör som innehar rollen **Federationsoperatör**. Federationsoperatören agerar som federationens **Trust Anchor** (förtroendeankare) i enlighet med specifikationen OpenID Federation 1.0.

Villkoren syftar till att säkerställa en säker, tillförlitlig och förutsägbar drift av federationens centrala tekniska infrastruktur, i enlighet med [[[[[[[`federationspolicy.md`](federationspolicy.md)](federationspolicy.md)](federationspolicy.md)](federationspolicy.md)](federationspolicy.md)](./federationspolicy.md)](./federationspolicy.md) och gällande [[[[[[[`styrande_principer.md`](../konceptuella/styrande_principer.md)](../konceptuella/styrande_principer.md)](../konceptuella/styrande_principer.md)](../konceptuella/styrande_principer.md)](../konceptuella/styrande_principer.md)](./styrande_principer.md)](./styrande_principer.md). Dessa villkor utgör underlag för det avtal som tecknas mellan `Ledningsaktören` och Federationsoperatören.

## 2. Uppdragets Omfattning

Federationsoperatörens ansvar omfattar drift, underhåll och förvaltning av följande centrala komponenter och funktioner ("Tjänsten"):

*   **Metadatasignering (Trust Anchor-funktion):** Att, efter instruktion från `Ledningsaktören` eller enligt delegerad process, kryptografiskt signera och publicera metadata för `Federationsmedlemmar` som godkänts för anslutning. Detta är den tekniska kärnan för att etablera tillit inom federationen.
*   **Återkallande av Tillit (Revocation):** Att, på direkt instruktion från `Ledningsaktören`, omedelbart kunna återkalla en `Federationsmedlems` förtroendestatus. Återkallandet ska vara tekniskt verkställt och propagerat inom hela federationen inom maximalt 30 minuter från mottagen instruktion. Processen för återkallande ska vara dokumenterad och regelbundet testad.
*   **Uppslags- och Verifieringstjänst:** Den centrala tjänst som möjliggör för medlemmar att automatiskt hämta och verifiera signerad metadata.
*   **Monitorering och Loggning:** System för övervakning av Tjänstens status samt säker loggning av tekniska händelser (inklusive signerings- och återkallandeaktiviteter) i enlighet med spårbarhetsprincipen (P-09).
*   **Teknisk Dokumentation:** Tillhandahållande av aktuell teknisk dokumentation för Tjänstens gränssnitt och processer.

## 3. Operativa Krav och Tjänstenivåer (SLA)

*   **Tillgänglighet:** Tjänsten ska vara tillgänglig 24/7/365 med en garanterad tillgänglighet om minst 99.9% per kalendermånad. Planerat underhåll ska aviseras minst 14 dagar i förväg och får ej överstiga 4 timmar per kvartal.
*   **Svarstider:** Tjänstens gränssnitt för uppslag av metadata ska ha en genomsnittlig svarstid på under 200 ms.
*   **Incidenthantering:** Federationsoperatören ska ha en bemannad funktion för att påbörja hantering av kritiska incidenter (som påverkar Tjänstens grundläggande funktion) inom 15 minuter från upptäckt, dygnet runt. Rapportering till Ledningsaktören ska ske löpande.

## 4. Säkerhetskrav

*   **Hantering av Signeringsnycklar:** De kryptografiska nycklar som används för att signera federationsmedlemmars metadata (Trust Anchor-nycklarna) utgör federationens mest kritiska tillgång. De ska skyddas med den högsta graden av säkerhet, vilket ska inkludera, men inte vara begränsat till, användning av Hardware Security Modules (HSM) och strikta, dokumenterade processer för åtkomst, rotation och återkallning.
*   **Efterlevnad:** Federationsoperatören ska uppfylla kraven i ISO/IEC 27001 eller motsvarande ramverk för informationssäkerhet, med särskilt fokus på de kontroller som skyddar signeringsinfrastrukturen.
*   **Loggning:** All administration och alla anrop mot Tjänsten, särskilt alla metadatasignerings- och återkallandehändelser, ska loggas. Loggarna ska vara oföränderliga och sparas i minst 24 månader. Loggarna ska på begäran kunna göras tillgängliga för Ledningsaktören och, i händelse av en säkerhetsincident, för berörda parter.
*   **Databehandling (GDPR):** I den mån loggdata eller annan data som hanteras av Federationsoperatören kan klassas som personuppgifter, agerar Federationsoperatören som **personuppgiftsbiträde** åt Ledningsaktören (personuppgiftsansvarig). Ett separat personuppgiftsbiträdesavtal (PUB-avtal) som uppfyller kraven i GDPR Artikel 28 ska tecknas.

## 5. Ansvar och Skadestånd

*   **Direkt skada:** Federationsoperatören ansvarar för direkt skada som uppstår hos Ledningsaktören, Anslutningsoperatörer eller Federationsmedlemmar till följd av vårdslöshet eller uppsåt från Federationsoperatörens sida vid utförandet av Tjänsten.
*   **Ansvarsbegränsning:** Federationsoperatörens totala skadeståndsansvar under ett kalenderår är begränsat till ett belopp motsvarande 10 prisbasbelopp. Ansvarsbegränsningen gäller ej vid uppsåt, grov vårdslöshet, eller vid kompromettering av signeringsnycklar till följd av att kraven i sektion 4 inte följts.
*   **Indirekt skada:** Federationsoperatören ansvarar inte för indirekta skador, såsom utebliven vinst eller förlust av data, om inte skadan orsakats av grov vårdslöshet.

## 6. Revision och Granskning

*   Ledningsaktören, eller en av Ledningsaktören utsedd oberoende tredje part, har rätt att minst en gång per år granska Federationsoperatörens efterlevnad av dessa villkor.
*   Granskningen ska särskilt fokusera på hanteringen av signeringsnycklar, processer för återkallande, och efterlevnad av säkerhetskraven. Federationsoperatören ska ge granskaren den åtkomst och det underlag som krävs för att genomföra revisionen.

## 7. Avtalstid och Uppsägning

*   Relationen regleras av ett separat avtal. Avtalet löper med en initial period om tre (3) år.
*   Båda parter har rätt att säga upp avtalet med en ömsesidig uppsägningstid om tolv (12) månader.
*   Ledningsaktören har rätt att med omedelbar verkan häva avtalet vid väsentligt avtalsbrott, vilket särskilt innefattar en kompromettering av signeringsnycklarna.

## 8. Avtalets Upphörande och Överlämning (Exit-plan)

Oavsett orsak till avtalets upphörande är Federationsoperatören skyldig att medverka i en ordnad och säker överlämning till en av Ledningsaktören utsedd ny operatör. Denna medverkan ska fortgå under hela uppsägningstiden och inkluderar, men är inte begränsad till:
*   Överlämning av all teknisk dokumentation, systemloggar och annan data relaterad till Tjänsten.
*   Etablering av en säker och verifierbar process för överlämning eller kontrollerad ny-generering av Trust Anchor-nycklarna.
*   Tillhandahållande av nödvändig expertis och support för att säkerställa en sömlös övergång utan avbrott i federationens funktion.
