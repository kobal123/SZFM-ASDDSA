1\. Rendszer Célja
==============

Alkalmazásunk letiszult, illetve egyszerű célokkal rendelkezik.

A mindennapokban előforduló számolásokban könnyíti meg a dolgunkat.

Mi sem letisztultabb és egyszerűbb annál, hogy elindítjuk az alkalmazást és már számolhatunk is.

Annak érdekében, hogy átlátható maradjon az alkalmazás, a design-ra nagy figyelmet szentelünk. A mostanában divatos szimpla design-t fogjuk alkalmazni.

Az egyszerűség részét képezi az, hogy egy olyan számológép alkalmazást hozunk létre, melynek használatához fiókösszekapcsolás illetve regisztráció nem szükséges.

2\. Üzleti folyamatok modellje
=================

- Üzleti szereplők: USER, Fejlesztők
- Üzleti folyamatok:
-- Számítások elvégzése
-- Gombok használata (számok bevitele, műveletek)
-- Hibakezelés! USER <-> Fejlesztők

# Követelmények

5\. Funkcionális terv
===================

Webalkalmazásunk célja, hogy az alkalmazottaink munkafolyamatainak során felmerülő számítási problémákat már ne csak papíron tudják elvégezni, hanem a webalkalmazásunkban is.
Ennek a megoldásnak köszönhetően ezek a folyamatok gyorsabbak lesznek, illetve kevesebb lesz a hibás megoldások esélye is.

**Törekedünk az alkalmazás:**
- átláthatóságára,
- egyszerűségére,
- kényelmes használatára.

**Rendszerszereplők:**
- User
-- Számológépen gombok kattinthatósága
-- Matematikai művelet elvégzése, véglegesítése
-- Végeredmény kiírásának olvasása
-- Előzmények megtekintése, felhasználása

**Menü hierarchiák**
- Menü rendszerre nincs szükség, a webalkalmazás megnyitásakor egyből a számológép fog megjelenni.

# Fizikai Környzet 

● Az alkalmazás webes platformra készül, főként desktopra,
de hordozható eszközökön (okostelefonok,táblagépek) is működni fog.

● Nincsenek megvásárolt komponenseink, mindent mi építünk.

● Fejlesztői eszközök:
- Visual Studio Code

# Absztrakt Domain Modell

# Architekturális terv

# Implementációs terv

# Tesztterv

9\. Telepítési terv
===================

A szoftver webes felületéhez csak egy ajánlott böngésző telepítése szükséges (Google Chrome, Firefox, Opera, Safari, Microsoft Edge), külön szoftver nem kell hozzá. A webszerverre közvetlenül az internetről kapcsolódnak rá a kliensek.