# SIB – Begrepp: Konceptuell harmoniseringsartefakt

## Metadata

*   **Datum:** 2026-02-12
*   **Version:** v0.9 (Harmonisering med oidf-profil.md)
*   **Primärkällor (underlag):**
    *   MVP Steg 1 Beskrivning
    *   styrande_principer.md (v1.1)
    *   Juridisk analys av GDPR-roller inom federationen
    *   normativa/oidf-profil.md (v0.3)

---

## 1. Syfte

Ett harmoniseringsunderlag som:

*   listar centrala begrepp,
*   säkerställer koppling till styrande principer och tvingande lagstiftning (GDPR),
*   pekar ut beslut som behöver tas inför termkatalog v1.

---

## 5. Termkatalog v0.8 (harmoniseringsfokus)

### 5.1 Typningsregler

*   **Roll** = aktörsroll med ansvar/mandat
*   **Komponent/tjänst** = teknisk funktion
*   **Objekt** = informationsobjekt/artefakt
*   **Kontext** = avgränsning

---

### 5.2 Termtabell

| Term (huvudterm) | Normaliserad | Kategori | Primär definition/belägg (kort) | Varianter/synonymer | Harmoniseringsbehov (beslut/åtgärd) | Scope MVP Steg 1 |
|---|---|---|---|---|---|---|
| Anslutningsoperatör | anslutningsoperatör | **Roll (onboarding)** | En av `Ledningsaktören` godkänd part som, under delegerat ansvar, prövar, ansluter och kvalitetssäkrar `Federationsmedlemmar`. `Anslutningsoperatören` ansvarar för att via avtal säkerställa att varje `Federationsmedlem` juridiskt förbinder sig att följa `Federationsregelverket`. | Risk: blandas med “anslutningstjänst” | Inför regel: “-operatör” = roll, “-tjänst” = komponent. | **I scope** |
| Behörighetsinfrastruktur | behörighetsinfrastruktur | **Koncept (normativt)** | “den förvaltningsgemensam digitala infrastruktur som regleras genom Regelverket” | Risk: blandas med “federationsinfrastruktur” | Beslut: relation till RIB:s federationskontext/federationsinfrastruktur (lager/hierarki). | Utanför scope |
| Behörighetsintyg | behörighetsintyg | **Objekt (normativt)** | “stämplat intyg i elektronisk form … uppgift om Medarbetares juridiska behörighet …” | “behörighetshandling” | **Korrigering:** `behörighetsintyg` är huvudterm. | Utanför scope |
| ENA-anslutningspolicy | ena-anslutningspolicy | **Policy (MVP/anslutning)** | Reglerar verifiering av juridisk person, behörig företrädare, koppling org–system, nyckelhantering, m.m. | “anslutningspolicy” | Lås scope: den reglerar *inte* verksamhetsbehörigheter/åtkomstbeslut, vilket är kritiskt för MVP. | **I scope** |
| Federationskontext | federationskontext | **Kontext (teknisk/tillit)** | Teknisk/tillitsmässig ram; kan etableras med nya tillitsankare vid behov. | Blandas lätt med “federationsområde” | Inför obligatorisk kvalificering i text: “federationskontext (teknik/tillit)”. | **I scope** |
| Federationsmedlem | federationsmedlem | **Roll (deltagare)** | Organisation som är godkänd att ansluta tekniska komponenter. | Organisation, Part | Används som den formella rollen för en ansluten organisation. | **I scope** |
| Federationsoperatör | federationsoperatör | **Roll (teknik/drift)** | Ansvarar bl.a. för drift av federationsinfrastruktur och policyhantering per federationskontext. | - | Klargör gräns: juridiskt ansvar vs teknisk drift/policyansvar. | **I scope** |
| **Federationsregelverk** | federationsregelverk | **Objekt (normativt)** | Samlingen av avtal, policyer och krav fastställda av `Ledningsaktören`, som alla `Federationsmedlemmar` juridiskt förbinder sig att följa. Utgör grunden för `Horisontell tillit`. | Regelverket | Termen är central i [styrande_principer.md](styrande_principer.md) men saknades. **Beslut:** Termen är nu tillagd och definierad. | **I scope** |
| Förlitande part | förlitande part | **Roll (normativ)** | Den part som förlitar sig på digitala intyg (t.ex. ett `Identitetsintyg`) utfärdade av en `Utfärdare`. I ENA:s M2M-användningsfall är `Konsumenten` den `Förlitande parten`. | Relying Party (RP) | Harmonisering: håll isär “RP som teknisk entitet” och “förlitande part som juridisk roll”. Definitionen är nu synkroniserad med `oidf-profil.md`. | **I scope** |
| Gemensamt Personuppgiftsansvar | gemensamt personuppgiftsansvar | **Koncept (juridisk/GDPR)** | När två eller flera personuppgiftsansvariga gemensamt bestämmer ändamål och medel för behandlingen. Detta kan bli aktuellt i vissa `Samverkanskontexter`. Ansvarsfördelningen mellan parterna måste då fastställas i ett inbördes arrangemang. | Joint Controllership | Regelverket måste kräva att `Federationsmedlemmar` som ingår i ett gemensamt PUA-förhållande formaliserar detta i sitt `Samverkansavtal`. | Utanför scope |
| Horisontell tillit | horisontell tillit | **Koncept (juridik/tillit)** | Tillit som uppstår direkt mellan två Federationsmedlemmar, baserat på att båda underkastat sig samma federationsregelverk. Realiserar styrande princip P-05. | Medlemstillit | Säkerställ att begreppet används konsekvent i avtal och regelverk för att beskriva relationen mellan medlemmar. | **I scope** |
| Juridisk behörighetskontroll | juridisk behörighetskontroll | **Process (normativ)** | Definieras explicit i regelverksutkastet. | “behörighetskontroll” (okvalificerat) | Inför skrivregel: *behörighetskontroll* måste alltid kvalificeras (juridisk vs teknisk/åtkomst). | Utanför scope |
| **Konsument** | konsument | **Roll (användningsfall)** | Det `System` som anropar en skyddad resurs hos en `Producent`. I OpenID-sammanhang agerar `Konsumenten` i rollen som `Förlitande part` (`openid_relying_party`). Motsvarar "Konsument" i MVP-användningsfallet. | Anropande system, Klient | Kopplingen till `Förlitande part` och `oidf-profil.md` är nu klargjord. | **I scope** |
| Ledningsaktör | ledningsaktör | **Roll (styrning)** | Ansvarar för att ta fram/fastställa/uppdatera regelverk i samverkan; sätter ramar/krav för federationskontexter. | “ledningsansvarig”, "Federationsområdesansvarig" | **Beslut fattat:** `Ledningsaktör` är den enda och högsta ansvariga juridiska rollen för federationens regelverk. | **I scope** |
| **Organisation** | organisation | **Koncept (styrning)** | Juridisk person som ingått avtal om anslutning och ansvarar för systemet. | Federationsmedlem | Termen `Federationsmedlem` används för att beskriva en godkänd organisation. | **I scope** |
| Personuppgiftsansvarig (PUA) | personuppgiftsansvarig | **Roll (juridisk/GDPR)** | Den som ensamt eller tillsammans med andra bestämmer ändamålen och medlen för behandlingen av personuppgifter. Inom federationen är varje **Federationsmedlem** som utgångspunkt PUA för de personuppgifter de behandlar inom ramen för sina egna tjänster och samverkansavtal. `Ledningsaktören` är PUA för de register som krävs för federationens styrning. | Data Controller | **Kritiskt beslut:** Klargör att PUA-ansvaret för själva *samverkan* ligger hos de samverkande `Federationsmedlemmarna`, inte hos `Ledningsaktören` eller `Anslutningsoperatören`. Detta måste reflekteras i Federationsavtalet. | **I scope** |
| Personuppgiftsbiträde (PUB) | personuppgiftsbiträde | **Roll (juridisk/GDPR)** | Den som behandlar personuppgifter för den personuppgiftsansvariges räkning. En **Anslutningsoperatör** agerar typiskt sett som PUB åt `Ledningsaktören` för hantering av medlemsdata, och kan även agera PUB åt en `Federationsmedlem` för specifika tjänster. Relationer måste regleras i Personuppgiftsbiträdesavtal (PUB-avtal). | Data Processor | **Kritiskt beslut:** Säkerställ att mallar eller krav på PUB-avtal finns som en del av Regelverket för att formalisera relationen mellan PUA och PUB inom federationen. | **I scope** |
| Personuppgiftsincident | personuppgiftsincident | **Objekt (juridisk/GDPR)** | En säkerhetsincident som leder till oavsiktlig eller olaglig förstöring, förlust, ändring eller obehörigt röjande av eller obehörig åtkomst till de personuppgifter som överförts, lagrats eller på annat sätt behandlats. | Dataintrång, Dataläcka | **Kritiskt beslut:** Federationsregelverket måste innehålla tydliga processer och ansvarskedjor för rapportering och hantering av personuppgiftsincidenter, i linje med **P-09 (Spårbarhet genom loggning)**. | **I scope** |
| **Producent** | producent | **Roll (användningsfall)** | Det `System` som tillhandahåller en skyddad resurs som anropas av en `Konsument`. `Producenten` verifierar de `Access Tokens` som `Konsumenten` presenterar, vilka har utfärdats av en `Utfärdare`. Motsvarar tekniskt en "Resource Server" i OAuth 2.0. | Tillhandahållande system, API-Provider, Resursserver | **Korrigering:** Definitionen har skrivits om helt för att stämma med OAuth 2.0-modellen och `oidf-profil.md`, och den felaktiga kopplingen till `Förlitande part` har tagits bort. | **I scope** |
| Samverkanskontext | samverkanskontext | **Kontext (verksamhet)** | Beskriver hur aktörer samordnar digital samverkan för verksamhetsområde/ändamål. | “samverkansområde” | Lås modellregel: samverkanskontext kan omfatta flera federationskontexter. | Utanför scope |
| **System** | system | **Koncept (teknik)** | Teknisk instans (maskin) som innehar kryptografiska nycklar och är kopplad till en `Organisation`. | Teknisk komponent, Systeminstans | Benämningen `System` används för MVP för att betona M2M-fokus. | **I scope** |
| **Utfärdare** | utfärdare | **Roll (teknik/tillit)** | En betrodd part som utfärdar digitala intyg, t.ex. `Identitetsintyg` (ID Tokens) eller `Attributintyg` (Access Tokens), till en `Konsument`. Motsvarar tekniskt en `openid_provider` i OIDC eller en `Authorization Server` i OAuth 2.0. En `Utfärdare` är en typ av `Federationsmedlem`. | OpenID Provider, Authorization Server, Intygsutfärdare | **Ny term:** Införd för att tydliggöra ansvaret för intygsutfärdande, vilket är centralt i `oidf-profil.md`. Separerar detta från `Producentens` ansvar (resurstillhandahållande). | **I scope** |
