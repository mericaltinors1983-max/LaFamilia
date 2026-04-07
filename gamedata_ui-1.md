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

## ŞEHİR HARİTA YÖNTEMİ (uygulamada kullanılan)
**Not:** lon/lat ve polygon koordinatları artık kullanılmıyor. Aşağıdaki yöntem aktiftir:

- **K3 (ülke içi)**: mapsicon (https://cdn.jsdelivr.net/gh/djaiss/mapsicon@master/all/{cc}/256.png) ile gerçek ülke şekli + şehir noktaları yüzde (x, y) konumlandırma ile App.tsx içinde (`COUNTRY_CITIES`)
- **K4 (şehir haritası)**: CartoDB tile (https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png) — z=11, 2×2 grid, şehir merkezli (`tileXY` fonksiyonu lat/lng → tile X/Y dönüşümü)
- 3 sekme: PUBLIC | KITCHEN | FRONT — 24 bina yüzde (x, y) koordinatlarıyla harita üzerine yerleşir (`BUILDINGS` array)
- react-native-svg KULLANILMIYOR — kaldırıldı

## BINALAR (24 adet — App.tsx `BUILDINGS` array)
| ID | İsim | Tip | PNG |
|----|------|-----|-----|
| airport | AIRPORT | PUBLIC | airport.png |
| port | PORT | PUBLIC | seaport.png |
| train | STATION | PUBLIC | trainst.png |
| bank | BANK | PUBLIC | icon_bank.png |
| prison | PRISON | PUBLIC | binahapis.png |
| gazette | GAZETTE | PUBLIC | binagazete.png |
| safehouse | SAFEHOUSE | PUBLIC | shield.png |
| mermi | AMMO | KITCHEN | binamermi.png |
| lab | LAB | KITCHEN | binalab.png |
| bira | BEER | KITCHEN | binabira.png |
| hastane | BLOOD | KITCHEN | binahastane.png |
| viski | WHISKEY | KITCHEN | binaviski.png |
| elmas | DIAMOND | KITCHEN | binaelmas.png |
| altin | GOLD | KITCHEN | binaltin.png |
| sigara | CIGAR | KITCHEN | binasigara.png |
| eczane | PILL | KITCHEN | eczane.png |
| drone | DRONE | KITCHEN | binadrone.png |
| chipfab | CHIP | KITCHEN | bina_chip.png | ← rankMin:5, üretim:400, fiyat:7.500.000, hakimiyet puanı yok, PNG repo'da henüz yok
| casino | CASINO | FRONT | binacasino.png |
| otel | HOTEL | FRONT | binaotel.png |
| bar | BAR | FRONT | binabar.png |
| pawn | PAWN | FRONT | binapaw.png |
| gym | GYM | FRONT | binagym.png |
| mall | MALL | FRONT | binamall.png |

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
