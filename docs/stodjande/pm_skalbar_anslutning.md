# PM: Kritisk granskning och riskanalys av modell för skalbar anslutning

**Datum:** 2026-02-11
**Status:** Version 3.0 (Kritisk juridisk granskning)
**Författare:** Legal_Expert
**Ersätter:** Version 2.0 ("PM: Fördjupad juridisk analys av skalbar anslutning")

---

## 1. Inledning och omvärdering

Detta PM utgör en fundamental omvärdering och kritisk granskning av den modell för skalbar anslutning som tidigare skisserats. Det ersätter tidigare versioner som felaktigt bedömde modellen som "juridiskt hållbar" och "robust". Efter fördjupad analys, baserad på insikter om civilrättsliga begränsningar i konstruktionen, är slutsatsen den motsatta: modellen medför betydande och oacceptabla juridiska risker.

**Sammanfattning av centrala juridiska svagheter:**

1.  **Modellen är juridiskt skör, inte robust:** Den föreslagna avtalskedjan är helt beroende av att varje enskilt tjänsteavtal mellan en `Anslutningsoperatör` och en `Federationsmedlem` innehåller en korrekt, giltig och konsekvent utformad tredjemansklausul. Skalbarheten är därmed endast operativ, inte juridisk. `Ledningsaktörens` rättsställning och hela federationens tillit fallerar om en enda avtalspunkt i kedjan brister.
2.  **Tredjemansavtalets begränsningar underskattas:** Tredjemansrätt enligt svensk rätt ger `Ledningsaktören` en rätt till prestation (att kräva regelefterlevnad), men etablerar inte automatiskt det fullvärdiga multilaterala avtalsförhållande som krävs för en federation. Den "horisontella tilliten" mellan `Federationsmedlem` X och `Federationsmedlem` Y saknar därmed en tydlig juridisk bärare.
3.  **Indirekt mandat skapar rättsosäkerhet:** `Ledningsaktörens` sanktions- och revisionsrätt härleds indirekt via en klausul i två andra parters privata avtal. Detta skapar en svag och osäker grund för maktutövning, särskilt vid tvist, och ger `Ledningsaktören` en stark normgivande roll utan en korresponderande direkt avtalsrelation eller tydlig ansvarskoppling.
4.  **Dolt beroende och oklart ansvarslager:** Modellen gör `Anslutningsoperatören` till den de facto juridiska bäraren för `Ledningsaktörens` regelverk, vilket skapar ett dolt beroende och ett oklart ansvarslager. Detta riskerar att leda till svårlösta konflikter mellan `Operatör` och `Ledningsaktör` vid sanktioner, skadestånd eller uppsägningar.

---

## 2. Analys av den juridiska konstruktionens risker

Den tidigare analysen fokuserade på möjligheten att konstruera en avtalskedja, men underskattade de inneboende riskerna.

### 2.1. Risk: Tredjemansavtalets bräcklighet

Hela federationens juridiska stabilitet vilar på en enda premiss: att `Anslutningsoperatören` i alla lägen och för all framtid säkerställer en juridiskt perfekt tredjemansklausul i sina kommersiella tjänsteavtal. Om en operatörs avtalstext är bristfällig, omtolkas av domstol, eller om avtalet sägs upp, upphör `Ledningsaktörens` rättsliga grund att agera mot den berörda `Federationsmedlemmen`. Detta är en oacceptabel systemrisk.

### 2.2. Risk: Avsaknad av horisontell tillit

Federationens syfte är att skapa tillit mellan alla anslutna parter. Denna modell skapar en "stjärnformad" juridisk relation där varje medlem via sin operatör ger en rättighet till `Ledningsaktören` i mitten. Den skapar dock **ingen** juridiskt bindande relation direkt mellan medlemmarna. Om `Medlem X` orsakar skada för `Medlem Y`, finns ingen självklar avtalsrättslig grund för `Medlem Y` att agera baserat på federationsregelverket.

### 2.3. Risk: Svag och tvistebenägen sanktionsrätt

Att basera rätten att suspendera en medlem eller kräva revision på en klausul i ett avtal där man inte är part är juridiskt svagt. En `Federationsmedlem` kan med fog hävda att deras primära lojalitet och avtalsrelation är med `Anslutningsoperatören`. Vid en konflikt har `Ledningsaktören` ett mycket dåligt förhandlingsläge och kan tvingas till en utdragen och kostsam rättsprocess för att fastställa sin rätt.

---

## 3. GDPR och fragmenterad juridisk helhet

PM v2.0 konstaterade korrekt att modellen inte löser ansvarsfördelningen för personuppgiftsbehandling. Detta ses nu inte som en isolerad fråga, utan som ett symptom på modellens grundläggande svaghet: den misslyckas med att skapa en juridisk helhet. Genom att skjuta över kritiska delar av samverkan till separata `Samverkansavtal`, fragmenteras den juridiska strukturen och federationen blir i praktiken ett lapptäcke av bilaterala överenskommelser snarare än ett enhetligt system.

---

## 4. Ny slutsats och tvingande rekommendation

**Slutsats:** Den skalbara modellen baserad på en kedja av tredjemansavtal är **inte** en robust eller juridiskt sund grund för en nationell digital infrastruktur. Den överdriver sin egen hållbarhet, underskattar civilrättsliga begränsningar och introducerar en oacceptabel nivå av rättsosäkerhet, operatörsberoende och svag genomslagskraft vid incidenter.

**Tydlig rekommendation:**

1.  **AVVECKLA IDÉN OM TREDJEMANSAVTAL SOM PRIMÄR MODELL:** Denna modell ska inte ligga till grund för regelverket.
2.  **UTRED MODELL MED DIREKT ANSLUTNING:** Arbetet måste omedelbart fokuseras på en modell där **alla** parter som ska vara bundna av federationsregelverket har en **direkt avtalsrelation** med `Ledningsaktören`. Detta kan ske genom:
    *   **a) Ett multilateralt ramavtal:** En enda anslutningsprocess där varje part skriver under ett gemensamt avtal som binder dem både till `Ledningsaktören` och till varandra. Detta är den juridiskt mest robusta och rekommenderade lösningen.
    *   **b) Ett system med dubbla avtal:** Där en `Federationsmedlem` tecknar ett kommersiellt tjänsteavtal med sin `Anslutningsoperatör` **och** ett separat, men obligatoriskt, anslutningsavtal direkt med `Ledningsaktören`.
3.  **OMPOSITIONERA DETTA PM:** Detta PM ska hädanefter ses som en dokumentation av en förkastad hypotes och en riskanalys som motiverar behovet av en mer robust juridisk grund. Relevanta styrdokument ([`styrande_principer.md`](../konceptuella/styrande_principer.md), [`federationspolicy.md`](../normativa/federationspolicy.md) etc.) måste granskas och uppdateras för att säkerställa att de inte bygger på den nu avvisade modellen.
