# Federationspolicy

**Version:** 2.0 (Fundamental omarbetning baserad på principen om direkt juridisk bundenhet)
**Status:** Utkast
**Datum:** 2026-02-11
**Ersätter:** Version 1.4

---

## 1. Syfte och Omfattning

### 1.1 Syfte
Denna federationspolicy utgör den övergripande normativa grunden för federationen för samordnad identitet och behörighet. Federationens syfte är att etablera en gemensam grund för **teknisk, organisatorisk och juridisk tillit** mellan anslutna parter.

Policyn syftar till att säkerställa:
*   **Direkt Juridisk Bundenhet:** Varje part som är bunden av regelverket har en direkt avtalsrelation med Ledningsaktören.
*   **Horisontell Tillit:** Regelverket skapar ett juridiskt bindande förhållande även mellan medlemmar.
*   **Spårbarhet:** Varje tekniskt anrop kan härledas till en ansvarig juridisk person.
*   **Förutsägbarhet:** Alla parter agerar under ett gemensamt, transparent och juridiskt bindande regelverk.
*   **Ansvarsutkrävande:** En tydlig och robust modell för att hantera regelbrott och incidenter.

### 1.2 Omfattning
Denna policy, tillsammans med de Styrande Principer den vilar på, gäller för samtliga roller, processer och tekniska komponenter inom federationen. Alla parter som ansluter sig till federationen, oavsett roll, förbinder sig genom ett **multilateralt anslutningsavtal** att följa denna policy och det samlade regelverket.

---

## 2. Styrande Principer
Federationen styrs av de principer som fastställts i artefakten [[`styrande_principer.md`](../konceptuella/styrande_principer.md)](../konceptuella/styrande_principer.md). Dessa principer utgör tolkningsdata och vägledning för alla andra regelverk. De centrala principer som denna policy realiserar är:

*   **Direkt juridisk bundenhet (P-10):** Fastslår att varje part måste ha en direkt avtalsrelation med Ledningsaktören. Detta är grunden för federationens juridiska stabilitet.
*   **Horisontell bundenhet genom gemensamt avtal (P-11):** Etablerar att tillit och juridiska förpliktelser mellan medlemmar skapas genom ett gemensamt, multilateralt avtal.
*   **Tydlig roll- och ansvarsfördelning (P-02):** Säkerställer att en aktörs olika roller och ansvar hålls isär.
*   **Inbyggt dataskydd och säkerhet (P-04):** Fastställer krav på GDPR-efterlevnad och inbyggt dataskydd.
*   **Öppen och icke-diskriminerande anslutning (P-06):** Säkerställer en konkurrensneutral och rättvis anslutningsprocess.

---

## 3. Federationens Struktur och Ansvarsmodell

### 3.1 Roller
Federationen bygger på följande definierade roller:

*   **Ledningsaktör:** Den ytterst ansvariga juridiska personen för federationens regelverk, styrning och utveckling. Ingår avtal med samtliga parter och utövar tillsyn.
*   **Federationsoperatör:** Den tekniskt och operativt ansvariga funktionen för drift av federationens centrala infrastruktur.
*   **Anslutningspartner:** En kommersiell eller organisatorisk part som kan erbjuda tekniska och administrativa tjänster för att underlätta för en medlems anslutning och drift. **Not:** Till skillnad från den tidigare rollen "Anslutningsoperatör" har en Anslutningspartner **inget** delegerat juridiskt mandat från Ledningsaktören.
*   **Federationsmedlem:** En juridisk person som genom att underteckna det multilaterala anslutningsavtalet har anslutit sig till federationen och förbundit sig att följa regelverket.

### 3.2 Relationer och Avtalsstruktur
Den juridiska strukturen bygger på en modell med direkt anslutning till Ledningsaktören för att säkerställa en robust och obruten juridisk kedja.

1.  **Relation: Ledningsaktör och Federationsmedlem**
    *   **Reglering (P-10):** Relationen regleras genom det **multilaterala anslutningsavtalet**. Genom att signera detta avtal blir Medlemmen en fullvärdig part i federationen, direkt bunden av dess regelverk och med en direkt juridisk relation till Ledningsaktören.

2.  **Relation: Ledningsaktör och Federationsoperatör**
    *   **Reglering:** Relationen regleras i ett separat avtal som definierar Federationsoperatörens uppdrag, servicenivåer och skyldigheter gentemot Ledningsaktören.

3.  **Relation: Mellan Federationsmedlemmar**
    *   **Reglering (P-11):** Det **multilaterala anslutningsavtalet** skapar en juridiskt bindande relation även horisontellt mellan alla Federationsmedlemmar. Detta innebär att en medlem kan, enligt de regler som fastställs i regelverket, förlita sig på och vid behov agera gentemot en annan medlem baserat på de gemensamma förpliktelserna.

4.  **Relation: Federationsmedlem och Anslutningspartner**
    *   **Reglering:** En helt **privaträttslig och kommersiell relation** som ligger utanför federationsregelverkets direkta styrning. Federationsmedlemmen kan välja att anlita en Anslutningspartner för teknisk hjälp, men Medlemmen behåller alltid det fulla juridiska ansvaret gentemot Ledningsaktören och övriga medlemmar.

### 3.3 Fördelning av Personuppgiftsansvar (GDPR)
I enlighet med princip **P-04** ska ansvarsfördelningen vara tydlig:

*   **Ledningsaktören** är personuppgiftsansvarig för det centrala medlemsregistret.
*   **Federationsoperatören** är personuppgiftsbiträde till Ledningsaktören. Ett PUB-avtal måste finnas.
*   **Federationsmedlemmen:** Varje `Federationsmedlem` är **självständigt personuppgiftsansvarig** för den personuppgiftsbehandling som sker i dess egna system och vid utbyte av data med andra medlemmar. Det multilaterala anslutningsavtalet utgör en del av den rättsliga grunden för överföringen, men varje medlem behåller sitt fulla ansvar enligt GDPR.

---

## 4. Regelverkets Struktur
Det samlade regelverket består av flera normativa artefakter med följande inbördes hierarki:
1.  **Styrande Principer:** Överordnad normativ styrning.
2.  **Federationspolicy (detta dokument):** Federationens "grundlag".
3.  **Multilateralt Anslutningsavtal:** Det centrala juridiska dokument som binder samman alla parter.
4.  **Federationsregler:** Detaljerade tekniska och operativa krav.

---

## 5. Ikraftträdande och Ändring
Denna policy träder i kraft vid beslut av `Ledningsaktören`. Ändringar i policyn eller regelverket blir juridiskt bindande för alla anslutna parter enligt de villkor som fastställs i det multilaterala anslutningsavtalet.
