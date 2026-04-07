# LaFamilia — Game Data / UI Veri Referansı (06.04.2026)

## ÜLKELER + TOPOJSON ID
| Ülke | ID | Renk | GIF | PNG |
|------|----|------|-----|-----|
| TÜRKİYE | 792 | #E30A17 | turkey.gif | country_turkey.png |
| İTALYA | 380 | #009246 | italy.gif | country_italy.png |
| ALMANYA | 276 | #FFCC00 | almanya.gif | country_germany.png |
| RUSYA | 643 | #003DA5 | rusya.gif | arussia.png |
| ÇİN | 156 | #DE2910 | cin.gif | country_china.png |
| JAPONYA | 392 | #BC002D | caponya.gif | country_japan.png |
| ABD | 840 | #3C3B6E | amerika.gif | country_usa.png |
| MEKSİKA | 484 | #006847 | meksika.gif | country_mexico.png |
| BREZİLYA | 76 | #009C3B | brazil.gif | country_brazil.png |
| KOLOMBİYA | 170 | #FCD116 | aaacolombia.gif | country_colombia.png |

## ŞEHİRLER — KOORDİNATLAR (lon, lat)
| Şehir | Lon | Lat | Ülke | Liman | Oyuncu |
|-------|-----|-----|------|-------|--------|
| İstanbul | 28.97 | 41.01 | turkey | ✓ | ★ |
| İzmir | 27.14 | 38.41 | turkey | ✓ | |
| Trabzon | 39.72 | 41.00 | turkey | ✓ | |
| Diyarbakır | 40.23 | 37.91 | turkey | | |
| Napoli | 14.25 | 40.84 | italy | ✓ | |
| Roma | 12.49 | 41.89 | italy | ✓ | |
| Sicilya | 13.58 | 37.50 | italy | ✓ | |
| Milano | 9.19 | 45.46 | italy | | |
| Hamburg | 10.00 | 53.55 | germany | ✓ | |
| Berlin | 13.40 | 52.52 | germany | | |
| Münih | 11.58 | 48.14 | germany | | |
| Frankfurt | 8.68 | 50.11 | germany | | |
| Moskova | 37.62 | 55.75 | russia | | |
| St.Petersburg | 30.32 | 59.93 | russia | ✓ | |
| Kazan | 49.10 | 55.79 | russia | | |
| Vladivostok | 131.87 | 43.12 | russia | ✓ | |
| Şanghay | 121.47 | 31.23 | china | ✓ | |
| Hong Kong | 114.17 | 22.32 | china | ✓ | |
| Shenzhen | 114.06 | 22.54 | china | ✓ | |
| Pekin | 116.40 | 39.90 | china | | |
| Tokyo | 139.69 | 35.69 | japan | ✓ | |
| Osaka | 135.50 | 34.69 | japan | ✓ | |
| Yokohama | 139.64 | 35.44 | japan | ✓ | |
| Kyoto | 135.75 | 35.01 | japan | | |
| New York | -74.00 | 40.71 | usa | ✓ | |
| Chicago | -87.63 | 41.88 | usa | ✓ | |
| Miami | -80.19 | 25.77 | usa | ✓ | |
| Las Vegas | -115.14 | 36.17 | usa | | |
| Tijuana | -117.03 | 32.53 | mexico | ✓ | |
| Meksiko | -99.13 | 19.43 | mexico | | |
| Guadalajara | -103.35 | 20.66 | mexico | | |
| Monterrey | -100.31 | 25.67 | mexico | | |
| São Paulo | -46.63 | -23.54 | brazil | ✓ | |
| Rio | -43.17 | -22.91 | brazil | ✓ | |
| Salvador | -38.51 | -12.97 | brazil | ✓ | |
| Fortaleza | -38.54 | -3.72 | brazil | ✓ | |
| Medellin | -75.56 | 6.23 | colombia | | |
| Bogota | -74.07 | 4.71 | colombia | | |
| Cartagena | -75.51 | 10.40 | colombia | ✓ | |
| Cali | -76.52 | 3.42 | colombia | | |

## ŞEHİR POLIGON KOORDİNATLARI (K4 haritası)
| Şehir | Koordinatlar (lon,lat array) |
|-------|------------------------------|
| istanbul | [27.6,41.2],[27.8,41.55],[28.2,41.8],[28.7,41.8],[29.0,41.55],[29.1,41.25],[28.95,40.9],[28.6,40.75],[28.2,40.78],[27.85,40.95] |
| izmir | [26.2,38.3],[26.35,38.75],[26.7,39.05],[27.15,39.12],[27.6,39.0],[27.95,38.72],[28.08,38.35],[27.85,37.95],[27.35,37.75],[26.85,37.82] |
| trabzon | [38.9,40.7],[38.9,41.05],[39.3,41.28],[39.8,41.35],[40.4,41.25],[40.95,41.05],[41.1,40.65],[40.8,40.45],[40.2,40.4],[39.5,40.5] |
| diyarbakir | [39.0,37.6],[39.1,38.1],[39.5,38.48],[40.2,38.55],[41.0,38.3],[41.55,37.9],[41.5,37.3],[41.0,36.9],[40.2,36.82],[39.5,37.0] |
| napoli | [13.8,40.5],[13.9,40.78],[14.1,41.0],[14.55,41.12],[14.98,40.98],[15.1,40.6],[14.95,40.22],[14.5,40.1],[13.95,40.2] |
| roma | [11.8,41.4],[11.85,41.8],[12.2,42.15],[12.6,42.18],[13.0,42.0],[13.25,41.7],[13.1,41.35],[12.7,41.1],[12.2,41.18] |
| newyork | [-74.26,40.48],[-74.26,40.8],[-73.95,40.92],[-73.7,40.88],[-73.68,40.55],[-74.0,40.45] |
| chicago | [-88.0,41.58],[-88.0,42.05],[-87.75,42.15],[-87.5,42.0],[-87.48,41.62],[-87.75,41.5] |
| moskova | [36.7,55.45],[36.7,55.9],[37.2,56.05],[37.9,56.0],[38.2,55.7],[37.95,55.4],[37.35,55.25] |
| medellin | [-75.9,6.05],[-75.92,6.3],[-75.75,6.55],[-75.5,6.52],[-75.4,6.3],[-75.48,6.05],[-75.75,5.9] |

## BINALAR (24 adet)
| ID | İsim | Tip | PNG |
|----|------|-----|-----|
| airport | HAVALİMANI | PUBLIC | airport.png |
| seaport | LİMAN | PUBLIC | seaport.png |
| trainst | TREN GARI | PUBLIC | trainst.png |
| bank | BANKA | PUBLIC | binananka.png |
| prison | HAPİSHANE | PUBLIC | binahapis.png |
| gazette | GAZETE | PUBLIC | binagazete.png |
| safehouse | SIGINAK | PUBLIC | shield.png |
| mermifab | MERMİ FAB | KITCHEN | binamermi.png |
| sigarafab | SİGARA FAB | KITCHEN | binasigara.png |
| birafab | BİRA FAB | KITCHEN | binabira.png |
| hastane | HASTANE | KITCHEN | binahastane.png |
| eczane | ECZANE | KITCHEN | eczane.png |
| viskifab | VİSKİ FAB | KITCHEN | binaviski.png |
| altinfab | ALTIN FAB | KITCHEN | binaltin.png |
| dronefab | DRONE FAB | KITCHEN | binadrone.png |
| chipfab | CHİP FAB | KITCHEN | bina_chip.png | // chip fab için — rankMin:5, üretim:400, fiyat:7.500.000 — şehir hakimiyetine etki etmez
| elmasfab | ELMAS FAB | KITCHEN | binaelmas.png |
| lab | LAB | KITCHEN | binalab.png |
| casino | CASİNO | FRONT | binacasino.png |
| otel | OTEL | FRONT | binaotel.png |
| bar | BAR | FRONT | binabar.png |
| pawn | PAWN SHOP | FRONT | binapaw.png |
| gym | GYM | FRONT | binagym.png |
| mall | AVM | FRONT | binamall.png |

## BOTTOM BAR SUÇ TİPLERİ
| ID | İsim | GIF | Süre |
|----|------|-----|------|
| offender | OFFENDER | gif_offender.gif | 5dk |
| armedrob | ROBBERY | gif_armedrob.gif | 15dk |
| wheelman | WHEELMAN | gif_wheelman.gif | 30dk |
| insidejob | INSIDE JOB | gif_insidejob.gif | 30dk |
| felony | FELONY | gif_felony.gif | 12sa |
| bustout | BUST OUT | gif_bustout.gif | - |
| kacakcilik | KAÇAKCILIK | gif_kacakcilik.gif | değişken |
| poligon | POLİGON | gif_poligon.gif | - |
