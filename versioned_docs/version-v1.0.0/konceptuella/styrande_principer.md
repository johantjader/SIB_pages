# Styrande principer

**Senast uppdaterad:** 2026-02-11

---

## 1. Om styrande principer

### 1.1. Syfte med styrande principer

Styrande principer används för att säkerställa **konsekventa vägval, tydlig ansvarsfördelning och långsiktig hållbarhet** i arbetet med Samordnad identitet och behörighet.

Principerna utgör **överordnad normativ styrning** och ska:

* vägleda framtagande av normativa artefakter (regelverk, avtal, tekniska ramverk),
* användas vid tolkning och avvägning när detaljregler saknas,
* minska behovet av ad hoc-beslut och informella tolkningar.

Styrande principer kompletterar, men ersätter inte, lagstiftning, regeringsuppdrag eller beslutade regelverk.

### 1.2. Definition

> **En styrande princip är ett normativt ställningstagande som ska styra utformning, prioritering och tolkning av arkitektur, regelverk och beslut inom Samordnad identitet och behörighet, i de fall där detaljregler saknas eller flera alternativ är möjliga.**

En styrande princip:

* anger *hur vi ska agera*,
* är överordnad normativa artefakter,
* är tillräckligt stabil för att gälla över tid,
* kan spåras till ett beslut och en kontext.

### 1.3. Hur styrande principer används

Styrande principer ska användas:

* vid framtagande och revidering av:
* federationsregelverk,
* anslutningspolicyer,
* avtal,
* tekniska ramverk och profiler,


* som tolkningsstöd vid oenighet eller oklarheter,
* som motivering till varför vissa lösningar väljs bort.

Varje normativ artefakt ska, där det är relevant, ange **vilka styrande principer den realiserar**.

### 1.4. Hur nya styrande principer tillkommer

1. En ny princip tas fram som **förslag** och dokumenteras i tabellen nedan.
2. Förslaget ska ha:
* tydlig formulering,
* motivering,
* angiven källa (t.ex. PM, beslut, möte).


3. När principen beslutas:
* status ändras till *Gällande*,
* beslutande forum anges,
* införandedatum fastställs.



Ändringar av principer ska ske genom:

* ny princip med nytt ID, eller
* tydlig historik där tidigare princip ersätts.

## 2. Katalog över styrande principer

Denna katalog utgör den **auktoritativa sammanställningen av styrande principer** inom Samordnad identitet och behörighet.

Katalogen används för att:

* ge en samlad överblick över gällande, föreslagna och ersatta principer,
* möjliggöra spårbarhet över tid av när och varför principer har tillkommit eller ändrats,
* fungera som referens vid framtagande, tolkning och revidering av normativa artefakter.

Alla styrande principer ska dokumenteras i tabellen nedan.

Nya principer tillkommer genom att en ny rad läggs till i tabellen. Befintliga principer som har status "gällande/ersatt/avvecklad" ska **inte skrivas över**, utan vid förändring ersättas genom ny princip med nytt ID. Principer som har statusen "förslag" kan ändras fram tills de är beslutade.

Beskrivning av tabellen och hur kolumnerna ska förstås finns beskrivet i [2.1 Katalogens struktur](https://www.google.com/search?q=%232.1-katalogens-struktur)

| ID | Kategori | Princip (kortnamn) | Principformulering | Gäller för | Status | Införd datum | Beslutad av | Källa / referens |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P-01 | Tillits- och ansvarsprinciper | Juridisk bundenhet i kedjan | Varje avtal som en Anslutningsoperatör ingår med en Federationsmedlem måste, för sin giltighet, villkora att Federationsmedlemmen juridiskt underkastar sig och förbinder sig att följa det av Ledningsaktören fastställda federationsregelverket. Detta ska ge Ledningsaktören en direkt och självständig rätt att vidta åtgärder mot Federationsmedlemmen vid brott mot regelverket. | Övergripande | ERSATT | 2026-02-08 | Juridisk granskning | MVP-beskrivning, Juridisk analys |
| P-02 | Styrnings- och samverkansprinciper | Tydlig roll- och ansvarsfördelning | Varje aktörs roll och ansvar ska vara entydigt definierat. Om en juridisk person innehar flera roller (t.ex. både Ledningsaktör och Federationsoperatör), ska ansvarsfördelningen regleras genom ett internt, för federationsmedlemmar transparent och auditerbart, styrdokument för att säkerställa reell ansvarsfördelning och motverka intressekonflikter. | Övergripande | GÄLLANDE | 2026-02-08 | Juridisk granskning | MVP-beskrivning, Juridisk analys |
| P-03 | Styrnings- och samverkansprinciper | Delegerat ansvar och mandat | En Anslutningsoperatör agerar under ett av Ledningsaktören delegerat mandat. Anslutningsoperatören har rätt och skyldighet att pröva och ansluta Federationsmedlemmar i enlighet med federationsregelverket, men äger inte rätt att ändra, urvattna eller frångå de av Ledningsaktören fastställda kraven. Ledningsaktören behåller det yttersta ansvaret för federationsregelverkets efterlevnad. | Övergripande | ERSATT | 2026-02-08 | Juridisk granskning | MVP-beskrivning, Juridisk analys |
| P-04 | Tillits- och ansvarsprinciper | Inbyggt dataskydd och säkerhet | All datahantering inom federationen ska utformas enligt principerna för inbyggt dataskydd (Privacy by Design) och dataminimering i enlighet med GDPR. Ansvarsfördelning för personuppgiftsbehandling och informationssäkerhet ska vara tydligt reglerad på samtliga nivåer i federationen. | Övergripande | GÄLLANDE | 2026-02-08 | Juridisk granskning | Juridisk analys, GDPR |
| P-05 | Tillits- och ansvarsprinciper | Federationens regelverk skapar horisontell tillit | Genom att ansluta sig till federationen och underkasta sig federationsregelverket, accepterar varje Federationsmedlem att de delar ett gemensamt juridiskt och tekniskt ramverk med alla andra medlemmar. Detta utgör grunden för horisontell tillit, där en medlem kan förlita sig på att en annan medlems systemidentitet är verifierad enligt samma krav som de själva har genomgått. | Övergripande | ERSATT | 2026-02-08 | Juridisk granskning | MVP-beskrivning, Juridisk analys |
| P-06 | Anslutnings- och förändringsprinciper | Öppen och icke-diskriminerande anslutning | Varje aktör som uppfyller de fastställda tekniska och juridiska kraven i Regelverket har rätt att ansluta sig till federationen. Villkor, avgifter och processer som tillämpas av Ledningsaktör, Federationsoperatör och Anslutningsoperatörer ska vara transparenta, förutsägbara och icke-diskriminerande. | Övergripande | GÄLLANDE | 2026-02-08 | Juridisk granskning | Avtalsanalys |
| P-07 | Arkitektur- och interoperabilitetsprinciper | Teknikneutralitet | Regelverk och tekniska ramverk ska vara utformade för att vara oberoende av specifika tekniska lösningar, produkter eller leverantörer, såvida inte en avvikelse är nödvändig för att uppnå nödvändig säkerhet eller interoperabilitet. | Tekniska ramverk, Regelverk | GÄLLANDE | 2026-02-08 | Juridisk granskning | Avtalsanalys |
| P-08 | Tillits- och ansvarsprinciper | Korrekt teknisk implementation | Varje Federationsmedlem ansvarar för att dess anslutna system implementerar och använder federationens tekniska protokoll och tjänster (t.ex. uppslag och verifiering) på ett korrekt och fullständigt sätt enligt gällande tekniska ramverk. Felaktig teknisk implementation som leder till försvagad tillit eller säkerhet betraktas som ett brott mot Regelverket. | Tekniska ramverk, Regelverk, Avtal | GÄLLANDE | 2026-02-08 | Juridisk granskning | Juridisk analys, MVP-beskrivning |
| P-09 | Tillits- och ansvarsprinciper | Spårbarhet genom loggning | Varje Federationsmedlem ska säkerställa teknisk loggning i tillräcklig omfattning för att möjliggöra spårbarhet och ansvarsutkrävande vid incidenter. Omfattningen av loggningskrav specificeras i Regelverket. | Tekniska ramverk, Regelverk | GÄLLANDE | 2026-02-08 | Juridisk granskning | Juridisk analys, MVP-beskrivning |
| P-10 | Tillits- och ansvarsprinciper | Direkt juridisk bundenhet | Varje part som ska vara bunden av federationsregelverket måste ha en direkt avtalsrelation med Ledningsaktören. Denna relation, etablerad genom ett multilateralt anslutningsavtal, utgör den enda giltiga grunden för Ledningsaktörens rätt att utöva tillsyn och sanktioner, samt för att etablera juridiskt bindande förpliktelser mellan federationsmedlemmar. | Övergripande | FÖRSLAG | | | stodjande/pm_skalbar_anslutning.md (v3.0) |
| P-11 | Tillits- och ansvarsprinciper | Horisontell bundenhet genom gemensamt avtal | Horisontell tillit och juridisk bundenhet mellan federationsmedlemmar uppnås genom att alla parter ansluter sig till ett och samma multilaterala anslutningsavtal. Detta avtal ska explicit reglera medlemmarnas inbördes rättigheter och skyldigheter som följer av federationsregelverket. | Övergripande | FÖRSLAG | | | stodjande/pm_skalbar_anslutning.md (v3.0) |


### 2.1. Katalogens struktur

| Kolumn | Innehåll | Beskrivning och användning |
| --- | --- | --- |
| **ID** | Unik identifierare (t.ex. P-01) | Permanent identifierare för principen. ID återanvänds aldrig. Vid ändring eller ersättning skapas alltid en ny princip med nytt ID. |
| **Kategori** | Typ av princip | Anger vilken typ av vägval principen styr. Varje princip ska tillhöra exakt en primär kategori:<br />

<br />• Syftes- och avgränsningsprinciper<br />

<br />• Tillits- och ansvarsprinciper<br />

<br />• Arkitektur- och interoperabilitetsprinciper<br />

<br />• Anslutnings- och förändringsprinciper<br />

<br />• Styrnings- och samverkansprinciper<br />

<br />

<br />Kategorin används för att underlätta förståelse och gruppering, men påverkar inte principens normerande styrka. |
| **Princip (kortnamn)** | Kort benämning | Ett kort, beskrivande namn som gör principen lätt att referera till i dialog, dokumentation och beslut. |
| **Principformulering** | Normativ formulering | En koncis, normativ formulering av principens innebörd. Ska uttrycka hur man ska agera och kunna användas för att avgöra konkreta vägval. |
| **Gäller för** | Tillämpningsområde | Anger var principen är tillämplig, exempelvis: Övergripande eller en/flera specifikt utpekade normativa artefakter |
| **Status** | Principens ställning | Anger om principen är:<br />

<br />• *FÖRSLAG*<br />

<br />• *GÄLLANDE*<br />

<br />• *ERSATT*<br />

<br />• *AVVECKLAD*<br />

<br />

<br />Endast principer med status *Gällande* ska tillämpas. |
| **Införd datum** | Ikraftträdande | Datum då principen beslutades och började gälla. Lämnas tomt för principer med status *Förslag*. |
| **Beslutad av** | Beslutande forum | Anger vilket forum eller vilken funktion som fattat beslut om principen med hänvisning till beslutslogg/anteckningar eller liknande. |
| **Källa / referens** | Motivering | Ev. referens till det underlag som motiverar principen. |
