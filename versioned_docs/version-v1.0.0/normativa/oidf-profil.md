# Svensk OpenID Federation 1.0 Profil för ENA
**Version:** 0.5 (Nationell profilering)
**Status:** Utkast
**Datum:** 2026-02-11
**Ansvarig:** Kommunikatör (Språkvård)

---

### Ändringshistorik
*   **0.5:** Förtydligat dokumentets titel och syfte som en **svensk** nationell profil. (Moderator feedback)
*   **0.4:** Tillagt en läsguide (1.2) för att förklara centrala koncept på ett enklare språk. Justerat rubriknivåer för ökad läsbarhet. (Kommunikatör)
*   **0.3:** Kompletterat med MVP-specifikation för `openid_provider` (4.2.3) och `Tillitspolicyer` (6). (Styrningsexpert)
*   **0.2:** Juridisk granskning och tillägg av avsnitt 7-10. (Senior Jurist)
*   **0.1:** Initialt tekniskt utkast. (IT-Arkitekt)

---

## 1. Introduktion
Detta dokument specificerar den **svenska** tekniska profilen för OpenID Federation 1.0 inom ramen för ENA:s federationsarkitektur. Profilen, som är en tillämpning av den internationella standarden, syftar till att säkerställa teknisk interoperabilitet och en hög, enhetlig säkerhetsnivå för alla anslutna parter inom den nationella federationen.

### 1.1. Juridisk Status
Denna profil är en normativ del av det samlade federationsregelverket. **Den utgör en juridiskt bindande teknisk bilaga till de avtal** som tecknas mellan `Ledningsaktör` och respektive `Federationsmedlem` (via `Anslutningsoperatör` eller direkt). Kraven i detta dokument är bindande för alla `Federationsmedlemmar` och de `System` de ansluter. Den realiserar de krav som ställs i [[`konceptuell_arkitektur.md`](../konceptuella/konceptuell_arkitektur.md)](../konceptuella/konceptuell_arkitektur.md) och [[`federationspolicy.md`](federationspolicy.md)](federationspolicy.md).

### 1.2. Läsguide för Icke-Tekniker
För att underlätta förståelsen av detta tekniska dokument, förklaras här några centrala begrepp på ett förenklat sätt.

*   **Vad är ett Entity Statement?**
    *   Tänk på det som ett digitalt, signerat "organisations-ID" eller ett intyg för ett system. Det innehåller grundläggande fakta som "vem är jag?" (`iss`), "vilka är mina tekniska kontaktpersoner?" (`contacts`), och "vilka publika nycklar använder jag för att signera saker?" (`jwks`). Hela intyget är digitalt signerat, vilket gör det praktiskt taget omöjligt att förfalska.

*   **Vad är en Tillitskedja (Trust Chain)?**
    *   I stället för att alla måste lita på alla direkt, bygger vi tillit i steg. En `Utfärdare` (t.ex. Bolagsverket) litar på sin `Anslutningsoperatör` (en godkänd mellanhand), som i sin tur har fått sitt förtroende från `Ledningsaktören` (den centrala styrande parten). Denna kedja av signerade Entity Statements – från Utfärdaren, via Anslutningsoperatören, till Ledningsaktören – kallas för en tillitskedja. Genom att följa kedjan kan man verifiera att alla parter är legitima.

*   **Vad är ett Tillitsankare (Trust Anchor)?**
    *   För att en `Förlitande Part` (t.ex. en kommun som vill lita på ett intyg från Bolagsverket) ska kunna lita på kedjan, måste den ha en säker startpunkt. Denna startpunkt är `Ledningsaktörens` publika information, som är det enda som behöver vara förkonfigurerat hos den förlitande parten. Detta kallas för ett tillitsankare. Genom att kontrollera signaturerna i hela kedjan, från `Utfärdaren` och upp till detta ankare, kan den `Förlitande Parten` vara säker på att alla i kedjan är godkända deltagare i federationen.

## 2. Referenser
*   **OpenID Federation 1.0:** [https://openid.net/specs/openid-federation-1_0.html](https://openid.net/specs/openid-federation-1_0.html)
*   **RFC 7515 - JWS:** [https://datatracker.ietf.org/doc/html/rfc7515](https://datatracker.ietf.org/doc/html/rfc7515)
*   **RFC 7517 - JWK:** [https://datatracker.ietf.org/doc/html/rfc7517](https://datatracker.ietf.org/doc/html/rfc7517)
*   **RFC 7519 - JWT:** [https://datatracker.ietf.org/doc/html/rfc7519](https://datatracker.ietf.org/doc/html/rfc7519)
*   **RFC 8414 - OAuth 2.0 Authorization Server Metadata:** [https://datatracker.ietf.org/doc/html/rfc8414](https://datatracker.ietf.org/doc/html/rfc8414)

## 3. Kryptografiska krav
### 3.1. Signeringsalgoritmer
Alla signerade objekt (t.ex. Entity Statements) inom federationen **SKA** använda någon av följande JWS-algoritmer:

*   `ES256`
*   `ES384`
*   `ES512`

Algoritmer baserade på RSA (`RS*`), HMAC (`HS*`) eller `none` **FÅR INTE** användas.

### 3.2. Nyckeltyper och storlekar
De publika nycklar som publiceras i `jwks` **SKA** följa algoritmskraven ovan.
*   För `ES256`: Elliptisk kurva P-256
*   För `ES384`: Elliptisk kurva P-384
*   För `ES512`: Elliptisk kurva P-521

### 3.3. Nyckelhantering och rotation
*   Varje `Federationsmedlem` **SKA** ha en dokumenterad process för säker nyckelhantering som möter kraven i tillämplig lagstiftning och `nationell_kravkatalog_informationssakerhetskrav.md`.
*   Nycklar som används för signering av Entity Statements **SKA** roteras minst en gång vartannat år.
*   En `Anslutningsoperatör` **KAN**, via avtal, ställa högre krav på nyckelrotation för sina anslutna medlemmar, förutsatt att detta motiveras av en dokumenterad riskbedömning.

## 4. Entity Statement Struktur
Ett Entity Statement är ett signerat JWT (JWS) som innehåller metadata om en entitet (t.ex. en `Federationsmedlem` eller en `Anslutningsoperatör`). Varje entitet är ansvarig för riktigheten i den information som publiceras i dess Entity Statement.

### 4.1. Obligatoriska Claims
Alla Entity Statements **SKA** innehålla följande claims i sin payload:

*   `iss`: (Issuer) Entitetens unika identifierare (subject identifier).
*   `sub`: (Subject) Samma som `iss`.
*   `iat`: (Issued At) Tidpunkt då statementet utfärdades (Unix timestamp).
*   `exp`: (Expiration Time) Tidpunkt då statementet slutar gälla. Giltighetstiden **FÅR INTE** överstiga 2 år. Om ett Entity Statement upphör att gälla utan att ersättas av ett nytt, kan detta leda till att entiteten automatiskt förlorar sin status som betrodd inom federationen.
*   `jwks`: Entitetens publika nycklar i JWK Set-format.
*   `metadata`: Ett objekt som innehåller specifik metadata för entitetstypen (se nedan).
*   `authority_hints`: En array med identifierare för den eller de `Anslutningsoperatörer` (eller `Ledningsaktör`) som entiteten är underordnad.

### 4.2. Metadata för olika entitetstyper
#### 4.2.1. `federation_entity` (Anslutningsoperatör / Ledningsaktör)
`metadata`-objektet för en `federation_entity` **SKA** innehålla:
*   `federation_api_endpoint`: URL till entitetens Fetch Endpoint.
*   `name`: Entitetens läsbara namn.
*   `contacts`: En array med e-postadresser för tekniska och/eller administrativa kontakter.

#### 4.2.2. `openid_relying_party` (OAuth 2.0 Client / Konsument)
`metadata`-objektet för en `openid_relying_party` **SKA** innehålla:
*   `client_id`: Klientens identifierare.
*   `redirect_uris`: En array med tillåtna redirect URIs.
*   `organization_name`: Det fullständiga juridiska namnet på den `Federationsmedlem` som äger klienten.
*   `client_name`: Ett läsbart namn för klienten/systemet.
*   `contacts`: Kontaktuppgifter (e-post).

#### 4.2.3. `openid_provider` (OAuth 2.0 Authorization Server / Utfärdare)
`metadata`-objektet för en `openid_provider` representerar en aktör som utfärdar bevis (t.ex. identitetsintyg eller attributintyg). Det **SKA** innehålla ett `openid_provider`-objekt med följande fält, i enlighet med OIDC Discovery och RFC 8414:

*   `issuer`: **SKA** vara providerns unika identifierare (URL).
*   `authorization_endpoint`: **SKA** vara URL:en till providerns authorization endpoint.
*   `token_endpoint`: **SKA** vara URL:en till providerns token endpoint.
*   `jwks_uri`: **SKA** vara URL:en till providerns publika nycklar (JWKS).
*   `scopes_supported`: **SKA** vara en array med de scopes som providern stödjer (t.ex. `openid`, `profile`, och ENA-specifika scopes från [[`nationell_attributprofil.md`]]).
*   `response_types_supported`: **SKA** vara en array med stödja response types (t.ex. `code`).
*   `grant_types_supported`: **SKA** vara en array med stödja grant types (t.ex. `authorization_code`, `token_exchange`).
*   `token_endpoint_auth_methods_supported`: **SKA** vara en array med klientautentiseringsmetoder för token endpoint. Värdet `private_key_jwt` **SKA** stödjas.
*   `claims_supported`: **BÖR** vara en array med de claims som providern kan returnera. Se [[`nationell_attributprofil.md`]] för tillgängliga claims inom ENA.
*   `organization_name`: **SKA** vara det fullständiga juridiska namnet på den `Federationsmedlem` som äger providern.
*   `contacts`: **SKA** innehålla kontaktuppgifter (e-post).

## 5. Federation API Endpoints
### 5.1. Fetch Endpoint (`/fetch`)
En `Anslutningsoperatör` **SKA** exponera ett Fetch Endpoint. Detta endpoint tar emot en `GET`-förfrågan med `iss`-parametern för en underordnad entitet och returnerar den entitetens signerade Entity Statement.

### 5.2. List Endpoint (`/list`)
En `Anslutningsoperatör` **BÖR** exponera ett List Endpoint som returnerar en lista över alla underordnade entiteter (`iss`-värden).

## 6. Tillitspolicyer (Trust Policy)
Detta avsnitt definierar hur en `Förlitande Part` (Relying Party) inom ENA-federationen tekniskt och juridiskt ska etablera tillit till en `Utfärdare` (OpenID Provider). Processen bygger på validering av tillitskedjor enligt OpenID Federation 1.0.

### 6.1. Tillitsankare
Varje `Förlitande Part` **SKA** vara konfigurerad med `Ledningsaktörens` signerade Entity Statement som sitt enda och primära tillitsankare (Trust Anchor). Entity Statement för `Ledningsaktören` publiceras på en av `Ledningsaktören` specificerad och välkänd URL.

### 6.2. Validering av Tillitskedja
För att etablera tillit till en `Utfärdare` **SKA** den `Förlitande Parten` genomföra följande steg:
1.  Hämta `Utfärdarens` Entity Statement.
2.  Använda `authority_hints` i `Utfärdarens` statement för att iterativt hämta och validera Entity Statements för mellanliggande `Anslutningsoperatörer`, i enlighet med processen "Resolving the Chain of Trust" i OpenID Federation 1.0, sektion 7.1.
3.  Verifiera att kedjan kryptografiskt kan härledas till det konfigurerade tillitsankaret (`Ledningsaktören`).
4.  Slå samman metadata från hela kedjan för att skapa en slutgiltig, betrodd metadata-uppsättning för `Utfärdaren`.

Om något av dessa steg misslyckas **FÅR** `Utfärdaren` inte betraktas som betrodd.

### 6.3. Tillämpning av Policy (Trust Policy Application)
Efter att en tillitskedja har validerats och metadata har slagits samman, **SKA** den `Förlitande Parten` tillämpa en policy på den resulterande metadatan för att avgöra om en specifik transaktion ska tillåtas.

En grundläggande policy (MVP) **SKA** som minimum innefatta följande kontroller:
*   **Maximal kedjelängd:** Kedjan från `Utfärdare` till `Ledningsaktör` **FÅR INTE** överstiga ett (1) mellanliggande led (`Anslutningsoperatör`). Direkta anslutningar till `Ledningsaktören` är tillåtna (kedjelängd 0).
*   **Krav på attribut:** Verifiera att de `scopes` och `claims` som krävs för den aktuella tjänsten finns listade i `Utfärdarens` betrodda metadata (`scopes_supported`, `claims_supported`).
*   **Krav på säkerhetsprofil:** Verifiera att `Utfärdaren` stödjer de säkerhetsmekanismer som den `Förlitande Partens` policy kräver (t.ex. `private_key_jwt` som klientautentisering).

Mer avancerade policyer, baserade på attribut i `Anslutningsoperatörens` eller `Utfärdarens` metadata (t.ex. certifieringsnivåer, specifika tillhörigheter), **KAN** tillämpas men utgår från denna obligatoriska grund. Detaljer kring detta regleras i [[`federationspolicy.md`]].

## 7. Dataskydd (GDPR)
Viss metadata som publiceras i Entity Statements, särskilt `contacts` (e-postadresser), utgör personuppgifter enligt Dataskyddsförordningen (GDPR).
*   Varje `Federationsmedlem` är **personuppgiftsansvarig** för de personuppgifter som publiceras i det egna Entity Statement.
*   Aktörer som samlar in och exponerar dessa uppgifter (t.ex. en `Anslutningsoperatör` via ett List Endpoint) måste säkerställa att de har en rättslig grund för sin behandling. Detaljer kring detta ska regleras i respektive `avtal_*.md` och/eller `krav_pa_avtal_*.md`.

## 8. Ansvar och Skadestånd
*   Varje `Federationsmedlem` ansvarar för riktigheten i den information som publiceras i dess Entity Statement.
*   Varje `Federationsmedlem` ansvarar för att skydda de privata nycklar som används för att signera dess Entity Statement. Vårdslöshet i hanteringen av nycklar som leder till skada för annan part kan medföra skadeståndsansvar.
*   Den övergripande ansvars- och skadeståndsregleringen mellan parterna specificeras i de bindande `avtal_*.md` som tecknas inom federationen. Detta dokument utgör endast ett förtydligande av ansvaret kopplat till den tekniska profilen.

## 9. Ändringshantering
Ändringar i detta dokument ska följa den process för ändringshantering som är fastställd av `Ledningsaktören` för hela federationsregelverket. Väsentliga ändringar kräver notifiering till samtliga `Anslutningsoperatörer` minst 90 dagar innan de träder i kraft.

## 10. Tvistlösning
Tvist gällande tolkning eller tillämpning av denna tekniska profil ska hanteras i enlighet med de villkor för tvistlösning som anges i huvudavtalet mellan berörda parter.
