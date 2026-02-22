# Tekniska anslutningsregler för Tjänster och Komponenter

**Version:** 0.2 (Länkkorrigering)
**Status:** Utkast

## 1. Syfte och Omfattning

Detta dokument fastställer de tvingande tekniska anslutningsregler som krävs för att realisera federationens styrande principer, särskilt rätten för en `Federationsmedlem` att fritt byta `Anslutningsoperatör`. Dessa regler är avgörande för att säkerställa en öppen, konkurrensutsatt och tekniskt interoperabel marknad.

Reglerna gäller för alla `Anslutningsoperatörer` och de `System` som ansluts till federationen.

## 2. Principer för Teknisk Portabilitet

För att säkerställa en reell rättighet för `Federationsmedlemmar` att byta `Anslutningsoperatör` (specificerad i [prismodell.md](./prismodell.md)), ska följande tekniska principer gälla:

### 2.1 Princip om Operatörsoberoende Identifierare

*   **Regel 2.1.1:** En `Federationsmedlems` unika, federationsövergripande identifierare (`entity_id`) **får inte** härledas från eller på annat sätt vara tekniskt kopplad till en specifik `Anslutningsoperatörs` domännamn, infrastruktur eller varumärke.
*   **Regel 2.1.2:** `entity_id` ska vara beständigt över tid och måste kunna bibehållas oförändrat vid ett byte av `Anslutningsoperatör`. Val av `entity_id` sker i samråd mellan `Federationsmedlem` och initial `Anslutningsoperatör` men ska vara neutralt och baseras på medlemmens eget domännamn eller annan av `Ledningsaktören` godkänd namnrymd.

### 2.2 Princip om Standardiserad Överföringsprocess

*   **Regel 2.2.1:** Det ska finnas en av `Ledningsaktören` fastställd, dokumenterad och standardiserad teknisk process för överföring av en `Federationsmedlems` metadata (`entity configuration`) från en avgivande till en mottagande `Anslutningsoperatör`.
*   **Regel 2.2.2:** Processen ska vara designad för att kunna genomföras med minimal nertid för `Federationsmedlemmen`. Både den avgivande och mottagande operatören är skyldiga att samverka i god tro för att genomföra överföringen skyndsamt och utan onödigt dröjsmål.
*   **Regel 2.2.3:** Den avgivande operatören får inte ta ut en separat "exit-avgift" för att genomföra den standardiserade överföringsprocessen.

### 2.3 Princip om Förbud mot Proprietära Beroenden

*   **Regel 2.3.1:** De grundläggande funktioner som krävs för att ansluta ett `System` till federationen och upprätthålla dess status som betrodd (publicering och hämtning av metadata) måste baseras uteslutande på de tekniska standarder och profiler som fastställts av `Ledningsaktören` (f.n. OpenID Federation 1.0).
*   **Regel 2.3.2:** En `Anslutningsoperatör` får inte i sina grundläggande anslutningstjänster introducera proprietära API:er, protokoll, bibliotek eller andra tekniska beroenden som skulle förhindra eller oskäligt försvåra en `Federationsmedlems` möjlighet att flytta sin anslutning till en annan operatör.
*   **Regel 2.3.3:** Eventuella mervärdestjänster med proprietära beroenden ska vara tydligt avskilda från de grundläggande anslutningstjänsterna och får inte villkora den grundläggande funktionen.
