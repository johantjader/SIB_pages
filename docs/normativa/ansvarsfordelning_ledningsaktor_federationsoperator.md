# Intern styrning: Ansvarsfördelning mellan Ledningsaktör och Federationsoperatör

*   **Status:** Utkast 1.1 (Juridisk skärpning)
*   **Datum:** 2026-02-11
*   **Realiserar princip:** P-02 (Tydlig roll- och ansvarsfördelning)

---

## 1. Syfte och Räckvidd

Detta dokument ("Styrdokumentet") har till syfte att säkerställa en tydlig och auditerbar ansvarsfördelning mellan rollen som `Ledningsaktör` och rollen som `Federationsoperatör` när dessa innehas av samma juridiska person (hädanefter "Organisationen", t.ex. Myndigheten för digital förvaltning).

Styrdokumentet är en förutsättning för att uppfylla **Styrande Princip P-02** och är en juridiskt bindande del av de avtal som Organisationen, i sin roll som Ledningsaktör, ingår med externa parter såsom `Anslutningsoperatörer`. Dess syfte är att motverka intressekonflikter och säkerställa att de olika rollernas ansvar utövas oberoende av varandra.

## 2. Roll- och Ansvarsmatris

| Aktivitet / Ansvar | Ledningsaktör (Normativ/Strategisk Roll) | Federationsoperatör (Operativ Roll) | Gränssnitt och Kommentar |
| :--- | :--- | :--- | :--- |
| **Regelverk & Policy** | | | |
| Fastställa och revidera federationsregelverket | **Beslutar och fastställer** | Tillhandahåller underlag och konsekvensanalys | Federationsoperatören kan föreslå tekniska ändringar, men Ledningsaktören äger beslutet. |
| Fatta beslut om godkännande av nya `Anslutningsoperatörer` | **Beslutar** | Genomför teknisk validering av underlag | Beslut baseras på `Anslutningsoperatörens` uppfyllnad av regelverket. |
| **Teknisk Drift & Förvaltning** | | | |
| Drifta och underhålla federationsinfrastrukturen | Övervakar efterlevnad via tillsyn | **Ansvarar för all daglig drift** | Driftstatus och incidenter rapporteras till Ledningsaktören enligt fastställd rutin. |
| Publicera och hantera teknisk metadata | - | **Utför och ansvarar** | Sker i enlighet med de tekniska profiler och regler som Ledningsaktören fastställt. |
| Hantera nycklar och certifikat för federationen | Fastställer policy (PKI-policy) | **Hanterar och omsätter nycklar** | Sker i enlighet med fastställd policy. Revision av efterlevnad utförs av Ledningsaktören. |
| **Tillsyn & Rapportering** | | | |
| Utöva tillsyn över `Anslutningsoperatörer` | **Ansvarar och utför** | Tillhandahåller tekniska loggar som underlag | Ledningsaktören har rätt att oberoende granska all teknisk information från Federationsoperatören. |
| Hantera avtalsbrott från `Anslutningsoperatör` | **Beslutar om åtgärd** | Rapporterar tekniska avvikelser | Federationsoperatörens roll är att upptäcka och rapportera; Ledningsaktören agerar på rapporten. |

## 3. Hantering av Intressekonflikter

En intressekonflikt uppstår om ett beslut eller en åtgärd som gynnar Organisationens roll som `Federationsoperatör` (t.ex. förenklar drift) står i strid med de principer om neutralitet, öppenhet eller säkerhet som Organisationen i sin roll som `Ledningsaktör` är satt att upprätthålla.

1.  **Identifiering:** Medarbetare inom Organisationen är skyldiga att identifiera och anmäla potentiella intressekonflikter mellan rollerna till sin närmaste chef och till Organisationens regelefterlevnadsfunktion.
2.  **Hantering:** Anmälda intressekonflikter ska eskaleras till och hanteras av en för ändamålet utsedd funktion (t.ex. regelefterlevnad eller juridik) som är organisatoriskt fristående från de enheter som utövar rollerna `Ledningsaktör` och `Federationsoperatör`. Funktionens analys och rekommendation ska dokumenteras och beslut i ärendet ska fattas enligt en för ändamålet fastställd process.
3.  **Exempel:** Om Federationsoperatören önskar införa en teknisk ändring som skulle gynna Organisationens egna tjänster men missgynna andra aktörers, ska detta hanteras som en intressekonflikt där Ledningsaktörens ansvar för neutralitet (P-07) och icke-diskriminering (P-06) väger tyngre.

## 4. Transparens och Revision

1.  **Publik Beslutslogg:** Alla formella beslut fattade av Ledningsaktören (t.ex. ändringar i regelverk, godkännande av operatörer) ska föras i en publik beslutslogg med motivering.
2.  **Revision:** Organisationen ska, minst årligen, låta en oberoende intern eller extern part genomföra en revision av efterlevnaden av detta Styrdokument. En sammanfattande revisionsrapport ska, i enlighet med avtal, delges samtliga anslutna `Anslutningsoperatörer` för att upprätthålla transparens och förtroende.
3.  **Avtalsmässig Konsekvens:** I enlighet med det avtal som Ledningsaktören tecknar med varje `Anslutningsoperatör` (se [[`avtal_mellan_ledningsaktor_och_anslutningsoperator.md`](avtal_mellan_ledningsaktor_och_anslutningsoperator.md)](avtal_mellan_ledningsaktor_och_anslutningsoperator.md)), utgör en väsentlig eller upprepad avvikelse från detta Styrdokument ett avtalsbrott från Organisationens sida. Detta ger externa parter en juridisk grund att agera om den interna ansvarsfördelningen inte upprätthålls.
