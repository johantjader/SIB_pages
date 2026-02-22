# Krav på Uppslags- och Verifieringstjänst
[Status: Granskad av IT-Arkitekt]

## 1. Syfte och Omfattning
Detta dokument specificerar de minimikrav som ställs på den **Uppslags- och verifieringstjänst** (nedan kallad Tjänsten) som varje anslutningsoperatör måste tillhandahålla. Tjänstens syfte är att på ett tillförlitligt, säkert och performant sätt publicera och tillgängliggöra metadata (*Entity Configurations*) för de federationsmedlemmar som operatören anslutit.

Dessa krav säkerställer en enhetlig och hög kvalitet på den grundläggande infrastrukturen, vilket är en förutsättning för att skapa och upprätthålla tillit inom federationen.

## 2. Allmänna Krav
1.  **Ansvar:** Anslutningsoperatören är fullt ansvarig för Tjänstens livscykel, inklusive drift, säkerhet, övervakning och efterlevnad av dessa krav.
2.  **Standardefterlevnad:** Tjänsten ska implementera och exponera data i enlighet med de tekniska specifikationer för metadata och uppslag som fastställts i federationens regelverk (se [[[[[[[`oidf-profil.md`](oidf-profil.md)](oidf-profil.md)](oidf-profil.md)](oidf-profil.md)](oidf-profil.md)](./oidf-profil.md)](./oidf-profil.md)).
3.  **Nätverksåtkomst:** Tjänsten måste vara publikt tillgänglig på internet för att kunna nås av alla federationsmedlemmar, oavsett vilken anslutningsoperatör de använder.

## 3. Funktionella Krav
1.  **Publicering:** Tjänsten måste kunna publicera *Entity Configurations* för de federationsmedlemmar som anslutningsoperatören ansvarar för.
2.  **Verifiering och Kedjelogik:** Tjänsten måste korrekt kunna validera och presentera hela tillitskedjan för en given entitet, från medlemmens metadata upp till ledningsansvarigs betrodda tillitsankare.
3.  **Federerad Uppslagning:** Tjänsten ska kunna agera som en *federation fetch endpoint*, vilket innebär att den kan hämta, validera och temporärt lagra (*cacha*) metadata från andra anslutningsoperatörers uppslagstjänster.

## 4. Krav på Tillgänglighet och Prestanda
1.  **Servicenivå (SLA):** Tjänsten ska ha en garanterad tillgänglighet på minst **99,9%**, mätt på månadsbasis.
2.  **Svarstider:** Svarstiden för en metadata-fråga ska i normalfallet understiga **200 ms**.
3.  **Cache-hantering (TTL):** Tjänsten ska respektera de `exp`- och `iat`-tidsstämplar som finns i signerad metadata. För att säkerställa att ändringar och återkallelser får snabbt genomslag i federationen får Tjänsten inte använda en längre lokal cache-tid (*Time-To-Live*) för externt hämtad metadata än **60 minuter**. En kortare tid är att föredra och kan krävas i framtida versioner av regelverket.

## 5. Säkerhetskrav
1.  **Kommunikationssäkerhet:** All nätverkskommunikation till och från Tjänsten ska vara krypterad med TLS (version 1.2 eller högre) och använda sig av moderna och säkra krypteringssviter.
2.  **Skydd mot attacker:** Tjänsten ska ha ett grundläggande skydd mot vanliga webbrelaterade hot och överbelastningsattacker (t.ex. DDoS).
3.  **Nyckelhantering:** De kryptografiska nycklar som används av Tjänsten för att signera metadatauttalanden (*entity statements*) måste skyddas i enlighet med god praxis. Användning av en *Hardware Security Module (HSM)* eller motsvarande rekommenderas starkt.
4.  **Säker Administration:** Processer och gränssnitt för att administrera Tjänsten och dess innehåll (t.ex. publicera en ny medlems metadata) måste vara rigoröst skyddade mot obehörig åtkomst.

## 6. Loggning och Granskning
1.  **Administrativa Händelser:** Alla handlingar som förändrar Tjänstens konfiguration eller data (t.ex. publicering, ändring eller borttagning av metadata) ska loggas på ett säkert och spårbart sätt.
2.  **Tillgång till loggar:** Anslutningsoperatören ska på begäran kunna tillhandahålla granskningsloggar till ledningsansvarig.

## 7. Affärsmodell och Prissättning
1.  **Transparens:** Anslutningsoperatören är fri att utforma sin egen affärsmodell för de tjänster som den tillhandahåller, inklusive Uppslags- och verifieringstjänsten.
2.  **Prismodell:** Prismodellen (t.ex. fast anslutningsavgift, månadsavgift per medlem, transaktionsbaserad avgift) ska vara tydlig, förutsägbar och transparent gentemot federationsmedlemmen (kunden).
3.  **Ingen inlåsning:** Affärsvillkoren får inte skapa orimliga hinder för en federationsmedlem att byta anslutningsoperatör. Detta ställer tekniska krav på att metadata är portabel.
