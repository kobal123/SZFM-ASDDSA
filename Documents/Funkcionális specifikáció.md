1\. Áttekintés
==============

Egy olyan alapvető számológépet fejlesztünk ami elérhető lesz minden Operációs Rendeszern amin webböngésző futtatható. 

Ezen számológép alakalamas lesz a négy alapvető művelet elvégézésére + / - * , ezek mellett képes lesz négyzetre emelni, gyököt vonni, és modulo műveletekre.

Olyan designú weblapot tervezünk ami képes lesz több fajta eszközön is reszponzívan megjelenni és nem igényel semmi bonyolult dokumentációt hanem ránézés alapján egyértelmű legyen a használata.

Ezek mellett nem tervezünk semmilyen szinten monetizálni eme programot.


2\. Jelenlegi Helyzet 
=====================

Megrendelő szeretne egy olyan rendszert
ami alapján képes lenne számok(nem csak egész számok) alapvető műveletekkel való elvégzését, ezek melett képes lenne gyök/négyzet/maradék-os műveletekre is. 

Kifejezetten fontos ezen számok tárolása és az hogy bármilyen olyan operációs rendszeren elérhető legyen ahol webböngésző van. Ezek melett kifejezetten fontosnak találja azt hogy ez mobilon, tableten, PC-n igazodik a képernyőhöz a felület mérete. 

Eddigi papír/fizikai számológépet szeretné lecserélni online alapra hogy ez általá komfortosabbá tegye munkavállalóinak a folyamatot, ezek melett azt szeretné hogy jelenleg valamennyi műveletet és azoknak eredményeit meg tudja nézni. Jövőben akár szeretné ezt fejleszteni hogy az összes eddigi műveleteket amit a számológép használata alatt végez meg tudja tekinteni.

Ezeket kifejzetten megköveteli hogy szabványos webes eszközökkel keszítsük el mint: html/css/js és megköti a képformátumokat jpeg és png-re

3\. Követelménylista
====================
| ID | Leírás |
|----| ------ |
|K01| Számok pontos kíírása, 5-6 tizedes jegyig|
|K02| Az utolsó 10-15 művelet tárolása.|
|K03| Képes legyen alapvető műveletekre +, -, /, *|
|K04| Képes legyen függvények használatára ^, √, MOD|
|K05| Negatív számok kezelése|
|K06| Ne lehessen betűt írni csak számokat|
|K07| Ne legyen hibás sytanx mint pl: Gyök alatt negatív szám|
|K08| PI konstants|
|K09| Euler-féle szám konstansként|

4\. Jelenlegi Üzleti Folyamatok modellje
====================

A mai világban már rengeteg dolgot tudunk elvégezni a különböző elektronikai eszközökkel, ahelyet hogy a hagyományos megoldásokat választanánk.
Az újabb módszerekkel való feladatvégzés sokkal gyorsabb és korszerűbb.
A jelenlegi világban a munkaadók is próbálnak odafigyelni ezekre a dolgokra, hogy könnyítsék az alkalmazottak feladatait, ezért keresünk korszerűbb módszereket a feladatuk elvégzésére.
Jelenleg az alkalmazottaink a számítási feladatokat papír alapon végzik el, ami egy átlagos napon is rengeteg papírhulladékot jelent.

5\. Igényelt üzleti folyamatok modellje
==============================
- Online elérhető, ingyenes rendszer kialakítása\
-- Webes megjelenés
- Elegáns design kialakítása\
-- Letisztult , sima, de elegáns színű háttér
-- Egyszerű betűszín alkalmazása -> egyszerű fekete betűszín
- A weboldalon lévő adatok szerkeszthetővé tétele/Könnyű szerkeszthetőség\
-- A már beütött számok szerkeszthetősége\
-- A már nem kívánatos számok törölhetősége

6\. Használati Esetek
===============================

- A User megtudja nyitni a webalkalmazást bármilyen eszközről. A webalkalmazás felületén minden olyan gomb megnyomására képes, amely a matematikai műveletek elvégzésére szolgál.
- A User-nek képesnek kell lennie két számmal alapvető és komplexebb matematikai műveletek elvégzésére. (Ezek a műveletek listázva megtalálhatóak a követelménylistában.)
- Jogosultsága lesz az előzmények megtekintésére, ahol az általa elvégzett műveleteket visszatudja követni, ezeket visszatudja tölteni újra, majd további műveleteket tud majd végezni vele.


7\. Képernyőterv
===============================

![Képernyő terv](kepernyo_terv.png)

8\. Fogalomszótár
=========================

**Reszponzív felület** - Mobilon, Tableten, PC-n igazodik a
képernyőhöz a felület mérete, azaz több eszközön is probléma nélkül
üzemelhet.

**HTML** - A HTML egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki.

**CSS** - A CSS egy stílusleíró nyelv. A HTML vagy XHTML típusú dokumentumok megjelenését írja le.

**JavaScript** - A JavaScript egy programozási nyelv. Objektumorientált, prototípus-alapú szkriptnyelv.

**Multiplatform** - Platformfüggetlenség. Több környezetben futtatható alkalmazás.
