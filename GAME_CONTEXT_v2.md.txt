# GAME CONTEXT — LaFamilia
> v2.0 | Platform: React Native (iOS + Android) | Portrait only
> Canonical source of truth. Tüm prototype ve dosyalar buna göre senkronize edilir.

---

## TEKNİK KURALLAR

```
Platform        : React Native (Expo → bare RN)
Yönelim         : Portrait only
Dil             : İngilizce (UI metinleri UPPERCASE)
Arka plan       : #ffffff
Vurgu           : #111111
Altın           : #C9A84C / #B8860B
Tier renkleri   : T1:#888 T2:#22c55e T3:#3b82f6 T4:#a855f7 T5:#C9A84C
```

---

## ASSETS

```
BASE_URL = 'https://mericaltinors1983-max.github.io/LaFamilia/'
```

Tüm PNG, GIF, MP3 asset'leri bu repoya yüklenir ve BASE_URL üzerinden çekilir.

### Fontlar
```
CorleoneDue     : CorleoneDue-Wp8v.ttf   (ana başlık)
Cinzel          : Google Fonts            (popup başlık)
Bebas Neue      : Google Fonts            (sayılar)
Oswald          : Google Fonts            (gövde metin)
Space Mono      : Google Fonts            (etiket)
```

### Rank Hayvanları
```
rank_animal_1.png   Fare
rank_animal_2.png   Tavşan
rank_animal_3.png   Tilki
rank_animal_4.png   Maymun
rank_animal_5.png   Yaban Domuzu
rank_animal_6.png   Yılan
rank_animal_7.png   Kobra
rank_animal_8.png   Kurt
rank_animal_9.png   Köpekbalığı
rank_animal_10.png  Çita
rank_animal_11.png  Timsah
rank_animal_12.png  Kaplan
rank_animal_13.png  Kartal
rank_animal_14.png  Aslan
```

### UI İkonları
```
close_icon.png      icon_info.png       lafamilia_logo.png
splash_aim.png      stat_can.png        stat_def.png
stat_xp.png         stat_ks.png         stat_money.png
icon_ammofab.png    back_btn.png        megaphone.png
nav_character.png   nav_items.png       nav_family.png
nav_events.png      nav_message.png     nav_notification.png
nav_settings.png    nav_bank.png        nav_casino.png
nav_buildings.png   nav_map.png         nav_activity.png
nav_store.png
```

### Alt Bar GIF'leri
```
gif_offender.gif    gif_wheelman.gif    gif_insidejob.gif
gif_armedrob.gif    gif_felony.gif      gif_bustout.gif
gif_kaçakçılık.gif  gif_poligon.gif
```

### Ülke Bayrakları
```
country_turkey.png   country_usa.png      country_russia.png
country_italy.png    country_mexico.png   country_china.png
country_germany.png  country_colombia.png country_japan.png
country_brazil.png
```

### Şehir İkonları (40 adet)
```
city_istanbul.png    city_izmir.png       city_diyarbakir.png  city_trabzon.png
city_napoli.png      city_sicilya.png     city_milano.png      city_roma.png
city_newyork.png     city_chicago.png     city_lasvegas.png    city_miami.png
city_moskova.png     city_stpetersburg.png city_kazan.png      city_vladivostok.png
city_medellin.png    city_bogota.png      city_cali.png        city_cartagena.png
city_mexicocity.png  city_guadalajara.png city_tijuana.png     city_monterrey.png
city_tokyo.png       city_osaka.png       city_kyoto.png       city_yokohama.png
city_sanghay.png     city_hongkong.png    city_pekin.png       city_shenzhen.png
city_berlin.png      city_hamburg.png     city_munih.png       city_frankfurt.png
city_rio.png         city_saopaulo.png    city_salvador.png    city_fortaleza.png
```

### Bina İkonları
```
bina_airport.png     bina_port.png        building_gar.png     bina_bank.png
building_hapishane.png  building_casino.png  bina_ammofab.png  bina_lab.png
building_otel.png    building_bira_fab.png  building_bar.png  icon_mall.png
building_hastane.png  bina_whiskey.png    bina_diamond.png     bina_gold.png
bina_tobacco.png     bina_drone.png       bina_pharmacy.png    bina_chip.png
building_gym.png     building_gazete.png  icon_pawn.png
```

### Müzik & SFX
```
music_main.mp3       music_casino.mp3     music_buildings.mp3
sfx_click.mp3        sfx_success.mp3      sfx_fail.mp3
sfx_rankup.mp3       sfx_kill.mp3         sfx_money.mp3
```

---

## UI / APP SHELL

### Layout
```
┌─────────────────────────────────────┐
│   TopBar (44px) — Stats             │
├─────────────────────────────────────┤
│   TopNav Sıra 1 (42px) — 7 ikon    │
│   TopNav Sıra 2 (42px) — 7 ikon    │
├─────────────────────────────────────┤
│   Orta Ekran (MainContent)          │
├─────────────────────────────────────┤
│   BottomBar (64px) — 8 GIF ikon    │
└─────────────────────────────────────┘
```

TopBar + TopNav + BottomBar şu ekranlarda GİZLENİR:
- Ölüm ekranı
- Hapis ekranı
- Tutorial
- Safe House

### TopBar (44px)
```
Sol   : rank_animal PNG (26px) | CAN bar | DEF bar | XP bar | KS bar
Sağ   : para ($) | mermi | şehir ikonu
Orta  : Ticker — kayan gazete metni (megaphone.png önünde)
```

Bar gösterimi: mevcut / max × 100 = %
- CAN % = mevcut can / o rankın max canı
- DEF % = mevcut defence / 60.000
- XP %  = mevcut xp / sonraki rank xp eşiği
- KS %  = KS değeri / 100

### TopNav Sıra 1
```javascript
const TOP_NAV_1 = [
  { id:'karakter',  screen:'karakter'  },
  { id:'envanter',  screen:'envanter'  },
  { id:'binalar',   popup:'binalar'    },
  { id:'event',     popup:'event'      },
  { id:'mesaj',     popup:'mesaj'      },
  { id:'bildirim',  popup:'bildirim'   },
  { id:'ayarlar',   popup:'ayarlar'    },
];
```

### TopNav Sıra 2
```javascript
const TOP_NAV_2 = [
  { id:'family',   screen:'family'    },
  { id:'banka',    popup:'banka'      },
  { id:'casino',   screen:'casino'    },
  { id:'map',      screen:'ulkeler'   },
  { id:'seyahat',  popup:'seyahat'    },
  { id:'aktivite', popup:'aktivite'   },
  { id:'satin_al', popup:'satin_al'   },
];
```

### BottomBar (64px) — GIF ikonlar
```javascript
const BOTTOM_BTNS = [
  { id:'offender',   gif:'gif_offender.gif',  popup:'offender'   },
  { id:'armedrob',   gif:'gif_armedrob.gif',  popup:'armedrob'   },
  { id:'wheelman',   gif:'gif_wheelman.gif',  popup:'wheelman'   },
  { id:'insidejob',  gif:'gif_insidejob.gif', popup:'insidejob'  },
  { id:'felony',     gif:'gif_felony.gif',    popup:'felony'     },
  { id:'bustout',    gif:'gif_bustout.gif',   popup:'bustout'    },
  { id:'kacakcilik', gif:'gif_kacakcilik.gif',popup:'kacakcilik' },
  { id:'poligon',    gif:'gif_poligon.gif',   popup:'poligon'    },
];
```

### Tam Ekran Açılanlar (Orta ekranda, bar'lar gizlenmez)
```
family | casino | map | karakter | envanter | araba_yarisi
```

### Popup Açılanlar (Standart popup kuralıyla)
Yukarıdaki listeler dışındaki her şey popup olarak açılır.

---

## POPUP STANDARDI

### Konum & Boyut
```css
position: fixed;
bottom: 116px;
left: 50%;
transform: translateX(-50%);
width: 320px;
height: 520px;
background: #fff;
border: 1.5px solid #C9A84C;
border-bottom: none;
overflow: hidden;
z-index: 10001;
```

### Overlay
```css
position: fixed; inset: 0;
background: rgba(0,0,0,0.65);
z-index: 10000;
/* tıklanınca popup kapanır */
```

### Açılış Animasyonu
```
Suç popupları (Offender/Wheelman/Inside Job/Armed Rob/Felony/Bustout/Poligon):
  → Matrix efekti: şeffaf arka plan, beyaz karakterler, 700ms
  → Popup ortada fade+scale ile belirir

Diğer tüm popuplar:
  → Gold shimmer skeleton: açık siyah tonları shimmer, 1.1sn
  → Ardından içerik belirir
```

### Header (50px)
```
Sol   : popup'a özgü PNG/GIF ikonu (28px)
Orta  : lafamilia_logo.png (absolute centered, 36px yükseklik)
Sağ   : icon_info.png + close_icon.png (her biri 22px)
Alt   : border-bottom: 1px solid #C9A84C44
```
Bina popuplarında sol ikon = o binanın haritadaki PNG'si
Suç popuplarında sol ikon = o suçun GIF'i (alt bardakiyle aynı)

### Close Bar (38px)
```css
border-top: 1px solid #C9A84C44;
background: #fff;
font: Oswald 700 11px #B8860B; letter-spacing: 2px;
```

### Buton Standartı
```css
/* Primary */
background: #fff; color: #C9A84C;
border: 1.5px solid #C9A84C;
height: 44px; font: Oswald 700 14px; letter-spacing: 2px;

/* Press Down efekti */
:active { transform: scale(0.97) translateY(1px); }

/* Secondary */
background: #fff; color: #111;
border: 1.5px solid #ddd;
```

### Font & Renk Standartı
```
Normal metin      : Oswald 700 13px #111
Büyük değer       : Bebas Neue 20-22px #111
Küçük etiket      : Oswald 600 10px #888
Bölüm etiketi     : Oswald 700 11px #B8860B letter-spacing:1.5px
Sekme aktif       : color:#111 border-bottom:2px solid #111
Sekme pasif       : color:#999
Yeşil             : #2a7a3a  (başarılı/iyi)
Altın             : #C9A84C / #B8860B
Kırmızı           : #c62828  (tehlike/kayıp)
```

### Float Efektleri (işlem sonrası sırayla yukarı kalkar)
```javascript
const FLOAT_COLORS = {
  para:     '#2a7a3a',   // yeşil
  xp:       '#f97316',   // turuncu
  ks:       '#c62828',   // kırmızı
  defence:  '#111111',   // siyah
  suruş:    '#3b82f6',   // mavi
  bustout:  '#C9A84C',   // sarı
};
// Sırayla çıkar — biri bitmeden diğeri başlamaz
```

---

## SPLASH SCREEN

```
1. Beyaz arka plan
2. lafamilia_logo.png ortada belirir
3. Altın çizgi
4. "Mafia Game" typewriter efektiyle yazılır (CorleoneDue font)
5. "WORLD IS YOURS" soluklaşarak çıkar
6. 3.5 saniye sonra → Giriş/Kayıt ekranına geçer
```

---

## KAYIT & GİRİŞ EKRANI

### Kayıt Akışı
```
1. Dil seçimi (9 dil)
2. Nick gir
3. Mail gir
4. Şifre gir
5. Şehir seç (10 ülke → 40 şehir)
6. Kayıt ol → Tutorial → Oyun
```

### Giriş Ekranı
```
- Logo
- Nick + Şifre
- Şifremi Unuttum (mail ile sıfırlama — backend)
- Bize Yazın butonu
- SSS/FAQ butonu
- Oyun adresi
```

### Dil Seçenekleri
```
İngilizce · Türkçe · Almanca · İspanyolca · Portekizce-BR
Rusça · Japonca · Çince · Fransızca
```
Settings'ten sonradan değiştirilebilir.

### Yeni Oyuncu
```
- Başlangıç parası: $10.000
- 5 gün koruma: öldüremez, öldürülemez. Saldırırsa anında kalkar.
- Tutorial otomatik başlar
```

### Server Seçimi
```
- Tüm serverlar listelenir
- Dolu server: kırmızı | Müsait: yeşil
- Oyuncu seçer
- Server 1: reklam yok | Server 2+: reklam açık
```
---

## HARİTA

### 3 Katman
```
Katman 1 — Dünya   : D3 NaturalEarth1 projeksiyonu, 10 ülke renkli
Katman 2 — Ülke    : Şehirler Voronoi ile aile bölgelerine ayrılır
                     Bölge aile rengiyle boyanır, şehir + aile adı overlay
Katman 3 — Şehir   : Binalar PNG + isim, bina tıklayınca popup
```

Harita tam ekran açılır. Ülkeye/şehire tıklanınca GIF bir kez oynar, sonra içerik açılır.

### Ülke Renkleri
```javascript
const COUNTRY_COLORS = {
  turkey:   '#E30A17', italy:    '#009246', germany:  '#FFCC00',
  russia:   '#003DA5', china:    '#DE2910', japan:    '#BC002D',
  usa:      '#3C3B6E', mexico:   '#006847', brazil:   '#009C3B',
  colombia: '#FCD116',
};
```

### 10 Ülke — 40 Şehir
```javascript
const COUNTRY_DATA = [
  { id:'turkey',   cities:[
    { id:'istanbul',    liman:true  },
    { id:'izmir',       liman:true  },
    { id:'diyarbakir'               },
    { id:'trabzon',     liman:true  },
  ]},
  { id:'italy',    cities:[
    { id:'napoli',   liman:true, ozel_banka:true   },
    { id:'sicilya',  liman:true, ozel_casino:true  },
    { id:'milano'                                   },
    { id:'roma',     liman:true                    },
  ]},
  { id:'usa',      cities:[
    { id:'newyork',  liman:true, ozel_mermi:true, ozel_liman:true, ozel_casino:true },
    { id:'chicago',  liman:true, ozel_mermi:true  },
    { id:'lasvegas',              ozel_casino:true },
    { id:'miami',    liman:true, ozel_airport:true },
  ]},
  { id:'russia',   cities:[
    { id:'moskova'                               },
    { id:'stpetersburg', liman:true             },
    { id:'kazan'                                },
    { id:'vladivostok',  liman:true, ozel_altin:true },
  ]},
  { id:'colombia', cities:[
    { id:'medellin', ozel_lab:true },
    { id:'bogota'                  },
    { id:'cali'                    },
    { id:'cartagena', liman:true   },
  ]},
  { id:'mexico',   cities:[
    { id:'mexicocity',  ozel_mermi:true },
    { id:'guadalajara'                  },
    { id:'tijuana',     liman:true      },
    { id:'monterrey'                    },
  ]},
  { id:'japan',    cities:[
    { id:'tokyo',    liman:true },
    { id:'osaka',    liman:true },
    { id:'kyoto'               },
    { id:'yokohama', liman:true },
  ]},
  { id:'china',    cities:[
    { id:'sanghay',  liman:true, ozel_elmas:true },
    { id:'hongkong', liman:true                  },
    { id:'pekin'                                 },
    { id:'shenzhen', liman:true                  },
  ]},
  { id:'germany',  cities:[
    { id:'berlin'                                       },
    { id:'hamburg', liman:true, ozel_liman:true, ozel_bira:true },
    { id:'munih'                                        },
    { id:'frankfurt'                                    },
  ]},
  { id:'brazil',   cities:[
    { id:'rio',      liman:true },
    { id:'saopaulo', liman:true },
    { id:'salvador'             },
    { id:'fortaleza'            },
  ]},
];
```

### Özel Şehir Bonusları
```javascript
const BINA_SPECIAL = {
  medellin_labaratuvar:  { bonus:'3x ÜRETİM'     },
  chicago_mermi_fab:     { bonus:'1.3x ÜRETİM'   },
  mexicocity_mermi_fab:  { bonus:'1.2x ÜRETİM'   },
  newyork_mermi_fab:     { bonus:'1.1x ÜRETİM'   },
  hamburg_bira_fab:      { bonus:'1.5x ÜRETİM'   },
  vladivostok_altin_fab: { bonus:'2x ÜRETİM'     },
  sanghay_elmas_fab:     { bonus:'2x ÜRETİM'     },
  lasvegas_casino:       { bonus:'SINIRSIZ BAHİS' },
  sicilya_casino:        { bonus:'%3 KOMİSYON'   },
  newyork_casino:        { bonus:'%3 KOMİSYON'   },
  newyork_liman:         { bonus:'+%10 SATIŞ'    },
  hamburg_liman:         { bonus:'+%20 SATIŞ'    },
  istanbul_liman:        { bonus:'-%20 SÜRE'     },
  miami_havalimani:      { bonus:'-%25 SÜRE'     },
  napoli_banka:          { bonus:'ÖZEL FAİZ'     },
  japan_drone_fab:       { bonus:'1.2x ÜRETİM'  }, // tüm Japonya drone fabrikaları
};
```

### Mesafe Kategorileri (Kaçakçılık için)
```javascript
// Aynı ülke içi mesafe otomatik hesaplanır (kısa/orta/uzun)
// Ülkeler arası: ic / komsu / ayni_kita / farkli_kita
```

---

## BİNALAR

### Bina Tipleri
```
PUBLIC      : Satın alınamaz, saldırılamaz, soyulamaz. Her zaman çalışır.
THE KITCHEN : Üretim tesisi. Sahip olmadan üretim yapılmaz.
THE FRONT   : Satış/paravan işyeri. Sahip olmadan satış yapılmaz.
```

Sahipsiz bina: üretim durur, satış yapmaz, soyulamaz, sadece satın alınabilir.

### Bina Listesi (22 bina)
```javascript
const BINALAR = [
  // PUBLIC
  { id:'havalimani',     tip:'PUBLIC',      name:'AIRPORT'      },
  { id:'liman',          tip:'PUBLIC',      name:'PORT'         },
  { id:'tren_istasyonu', tip:'PUBLIC',      name:'TRAIN STATION'},
  { id:'banka',          tip:'PUBLIC',      name:'BANK'         },
  { id:'hapishane',      tip:'PUBLIC',      name:'PRISON'       },
  { id:'gazete',         tip:'PUBLIC',      name:'GAZETTE'      },

  // THE KITCHEN
  { id:'mermi_fab',  tip:'KITCHEN', urun:'Mermi',  uretim:2000, fiyat:10000000, rankMin:6  },
  { id:'labaratuvar',tip:'KITCHEN', urun:'White',  uretim:300,  fiyat:9000000,  rankMin:9  },
  { id:'bira_fab',   tip:'KITCHEN', urun:'Bira',   uretim:1000, fiyat:5000000,  rankMin:5  },
  { id:'hastane',    tip:'KITCHEN', urun:'Kan',    uretim:500,  fiyat:6000000,  rankMin:4  },
  { id:'viski_fab',  tip:'KITCHEN', urun:'Viski',  uretim:750,  fiyat:8000000,  rankMin:7  },
  { id:'elmas_fab',  tip:'KITCHEN', urun:'Elmas',  uretim:100,  fiyat:9000000,  rankMin:9  },
  { id:'altin_fab',  tip:'KITCHEN', urun:'Altın',  uretim:200,  fiyat:8000000,  rankMin:8  },
  { id:'sigara_fab', tip:'KITCHEN', urun:'Sigara', uretim:2000, fiyat:5000000,  rankMin:4  },
  { id:'eczane',     tip:'KITCHEN', urun:'Pill',   uretim:500,  fiyat:6000000,  rankMin:4  },
  { id:'drone_fab',  tip:'KITCHEN', urun:'Drone',  uretim:300,  fiyat:7000000,  rankMin:7  },

  // THE FRONT
  { id:'casino',     tip:'FRONT',   name:'CASINO'      },
  { id:'otel',       tip:'FRONT',   name:'HOTEL'       },
  { id:'bar',        tip:'FRONT',   name:'BAR'         },
  { id:'pawn_shop',  tip:'FRONT',   name:'PAWN SHOP'   },
  { id:'gym',        tip:'FRONT',   name:'GYM'         },
  { id:'avm',        tip:'FRONT',   name:'MALL'        },
];
// Oyuncu başına aynı türden MAX 1 Kitchen | Depo sınırı YOK
```

### Bina Puanları (Şehir hakimiyeti için)
```javascript
const BINA_PUAN = {
  mermi_fab:  13,
  casino:     13,
  labaratuvar:11,
  elmas_fab:  9,
  avm:        9,
  // Diğer 9 bina: 5'er puan
  // TOPLAM: 100 puan
};
```

### Gelir Dağılımı
```
Kitchen geliri: %5 şehri kontrol eden aile | %95 sahibe
Front geliri  : %5 şehri kontrol eden aile | %95 sahibe
Sahip ölürse  : bina sahipsiz kalır, aynı fiyatla satışa
```

### Bina Savunma Sistemi
```javascript
// Saldırı → SOY olarak adlandırılır
// Sahipsiz binaya SOY yapılamaz | Public'e SOY yapılamaz

const BINA_SAVUNMA = {
  otomatik_mermi: 30000,  // her soyda ateşlenir
  ks: 'sahip.ks',         // sahibin anlık KS'i kullanılır
  // Sahip ek mermi + BG yükleyebilir
};

// Soy başarılıysa: kasa saldırgana geçer, sahip değişmez
// Soy başarısızsa: kasa sahipte kalır
```

### Şehir Kontrolü
```
Bir aile şehri kontrol etmek için:
1. Mermi Fabrikası
2. Casino
3. 2 pasif gelir binası (Pawn / Bar / Gym / Hotel / Mall)

Kontrol kazanılırsa:
→ Haritada şehir rengi aile rengine döner
→ Tüm Kitchen ve Front binalarından %5 komisyon
→ +%5 savunma bonusu (aile üyelerine)
```

### Bina Popup Mantığı
```
PUBLIC      → Seyahat + Kaçakçılık butonları (transport tiplerine göre)
            → Gazete popup'ı ayrı açılır

KITCHEN (sahipsiz)  → Sadece [BİNAYI AL] + rank/fiyat bilgisi
KITCHEN (başkası)   → [ÜRÜNİ AL] + [SOY ET]
KITCHEN (benim)     → Tab: KASA | MAL | SAVUNMA

FRONT (sahipsiz)    → Sadece [BİNAYI AL]
FRONT (başkası)     → Sadece [SOY ET]
FRONT (benim)       → Tab: KASA | MAL | SAVUNMA

CASINO              → [CASİNO'YA GİR] → casino tam ekran açılır
```

### Gazete
```
- Her şehirde PUBLIC bina olarak var
- TopNav Binalar → Public → Gazete'den de açılır
- Popup olarak açılır
- Ticker'daki haberler burada yazılı durur
- Oyuncular haber/röportaj yazabilir (gazeteci rolü)
- Admin duyuruları da burada + ticker'da görünür
```
---

## RANK SİSTEMİ

```javascript
const RANKS = [
  { id:1,  name:'Street Rat',  xp:0,        animal:'Fare'          },
  { id:2,  name:'Runner',      xp:1000,      animal:'Tavşan'        },
  { id:3,  name:'Hustler',     xp:3000,      animal:'Tilki'         },
  { id:4,  name:'Crook',       xp:7000,      animal:'Maymun'        },
  { id:5,  name:'Thug',        xp:15000,     animal:'Yaban Domuzu'  },
  { id:6,  name:'Gangster',    xp:30000,     animal:'Yılan'         },
  { id:7,  name:'Enforcer',    xp:60000,     animal:'Kobra'         },
  { id:8,  name:'Operator',    xp:120000,    animal:'Kurt'          },
  { id:9,  name:'Hitman',      xp:250000,    animal:'Köpekbalığı'   },
  { id:10, name:'Underboss',   xp:500000,    animal:'Çita'          },
  { id:11, name:'Strategist',  xp:1000000,   animal:'Timsah'        },
  { id:12, name:'Boss',        xp:2000000,   animal:'Kaplan'        },
  { id:13, name:'Crew Chief',  xp:4000000,   animal:'Kartal', defBonus:0.10 },
  { id:14, name:'Godfather',   xp:8000000,   animal:'Aslan',  defBonus:0.20, noCop:true },
];
```

### Rank Atlama Şartları (RANK_EXTRA)
```javascript
const RANK_EXTRA = {
  '1→2':  { suc:9 },
  '2→3':  { suc:18,  araba:5 },
  '3→4':  { suc:27,  araba:9 },
  '4→5':  { insidejob:1,  mermi:450 },
  '5→6':  { insidejob:3,  mermi:900,   kill:2  },
  '6→7':  { insidejob:5,  mermi:4500,  kill:5  },
  '7→8':  { felony:1,     mermi:9000,  kill:7  },
  '8→9':  { felony:3,     mermi:22500, kill:10 },
  '9→10': { felony:5,     mermi:45000, kill:11 },
  '10→11':{ aile:true,    mermi:90000, kill:12 },
  '11→12':{ mermi:180000, kill:13 },
  '12→13':{ mermi:450000, kill:15 },
  '13→14':{ don:true, mermi:900000, kill:20 },
};
// mermi = lifetime toplam (harcansa düşmez)
```

### Rank Atlama Ekranı
```
- Beyaz arka plan, tüm menüler gizlenir
- Yeni rankın hayvan PNG'si küçükten büyüye gelir (pop animasyonu)
- Altın halkalar yayılır
- Altın konfeti
- Rank adı ve numarası belirir
- [DEVAM ET] butonu
```

---

## STAT SİSTEMLERİ

### XP
```javascript
const XP_TABLE = {
  offender:         50,
  wheelman:         75,
  insidejob:        500,
  armedrob:         800,
  felony:           5000,
  bustout:          100,
  kill_ayni_rank:   1500,
  kill_ust_rank:    1800,
};
// Birikir, azalmaz. Rank atlar.
```

### KS (Killing Skill)
```javascript
const KS_TABLE = {
  insidejob:  0.01,
  armedrob:   0.02,
  felony:     0.05,
  poligon:    0.005,   // 10dk cooldown
  aktivite:   0.10,    // günde max (KS aktivite 2)
  kill_ayni:  0.01,
  kill_ust:   0.02,
};
// Başlangıç: 0 | Birikir, azalmaz | Cap: 100
// KS % = isabet yüzdesi. KS 0 → %0 isabet, KS 100 → %100 isabet
// Isabetsiz mermi SIFIR hasar verir
// Silah/Kolye/Yüzük item bonusu ekstra KS artışı verir
```

### Defence
```javascript
// Toplam max defence: 60.000
// DEF % = mevcut defence / 60.000 × 100

const DEFENCE_KAYNAKLAR = {
  bg:      'tier bazlı (min→max, 100 kafa ile max)',
  yelek:   'tier bazlı',
  suit:    'tier bazlı',
  rank_can:'rank bazlı (Godfather: 10.000)',
  aktivite:'max 10.000 (aktivite ile birikir)',
};

// PvP'de hasar sırası: Suit → Yelek → BG'ler → Can
// Can min 1'e düşer, ölüm olmaz (PvP hariç)
```

### Can (HP) Sistemi
```javascript
// Rank bazlı can değerleri:
const RANK_CAN = {
  1:500, 2:600, 3:700, 4:800, 5:1000,
  6:1500, 7:2000, 8:3000, 9:5000, 10:6000,
  11:7000, 12:8000, 13:9000, 14:10000,
};

// Toplam max can (Godfather, tam donanım):
// 10.000 (rank) + 25.000 (5×T5 BG) + 10.000 (T5 yelek) + 5.000 (T5 suit) + 10.000 (aktivite) = 60.000

// 1 Kan = 1 can iyileştirir
// Hastaneden Kan alınır, envanterde biriktirilir
```

### BG (Bodyguard) Sistemi
```javascript
// 50 farklı BG, her birinden max 1 adet
// 5 slot, her BG kafayla güçlendirilir (max 100 kafa)

const BG_TIERS = {
  T1: { min:100,  max:1000  },
  T2: { min:1000, max:2000  },
  T3: { min:2000, max:3000  },
  T4: { min:3000, max:4000  },
  T5: { min:4000, max:5000  },
};
// defence = min + (kafaSayısı/100) × (max-min)

// Aynı BG tekrar düşerse → o tier'ın 10 kafasına dönüşür
// NPC'den her tier 1 kez satın alınabilir
// 5×T5 BG tam upgrade = 25.000 defence
```

### Item Sistemi
```javascript
const ITEM_ROLLER = {
  celik_yelek: 'defence',   // T1:100→1000 | T5:4000→5000
  suit:        'defence + slot',
  canta:       'slot',
  silah:       'KS artış %',
  kolye:       'KS artış %',
  yuzuk:       'KS artış %',
};

// Dayanıklılık YOK
// NPC satış: alış × 0.50
// T5 altın parlama animasyonu
// Rank min şartları var (T5 için Rank 12-14)
```

### Sürüş Becerisi
```javascript
// Başlangıç: %20 | Birikir, azalmaz
// Yarışa katılınca: +%0.01
// Yarış kazanınca: +%0.05
// Efektif hız = arabanın hızı × (sürüş becerisi / 100)
```

### Bustout Becerisi
```javascript
// Başlangıç: %20 | Birikir, azalmaz | Tavan: %90
// Her 5 başarılı bustout: +%1
// Kendini bustout etmede de geçerli
```

---

## AKTİVİTE SİSTEMİ

### Genel Kurallar
```
- Günde max 5 saat aktivite
- Bir aktivite aktifken diğeri başlatılamaz
- Aktiviteler sırayla açılır (önceki tamamlanmadan sonraki açılmaz)
- Her aktivite 25 saat tamamlanınca sonraki açılır
```

### Aktivite Popup
```
3 büyük buton:
1. MESLEK ($)      → para aktiviteleri popup'ı
2. UPGRADE (KS+DEF)→ KS ve defence aktiviteleri popup'ı
3. YARIŞ (araba)   → araba yarışı tam ekran açılır
```

### Para Aktiviteleri (6 adet, sırayla açılır)
```javascript
const PARA_AKTIVITELER = [
  { id:'para_1', rewardPh:5   },
  { id:'para_2', rewardPh:12  },
  { id:'para_3', rewardPh:25  },
  { id:'para_4', rewardPh:50  },
  { id:'para_5', rewardPh:75  },
  { id:'para_6', rewardPh:100 },
]; // $/saat
```

### Defence Aktiviteleri (4 adet, sırayla açılır)
```javascript
const DEF_AKTIVITELER = [
  { id:'def_1', rewardPh:50  },
  { id:'def_2', rewardPh:75  },
  { id:'def_3', rewardPh:100 },
  { id:'def_4', rewardPh:175 },
]; // defence/saat | Toplam max: 10.000
// Defence 10.000'e ulaşınca aktiviteden defence kazanılmaz
```

### KS Aktiviteleri (2 adet, sırayla açılır)
```javascript
// KS Aktivite 1: Def Aktivite 4 tamamlanınca açılır
// KS Aktivite 2: KS Aktivite 1 tamamlanınca açılır
const KS_AKTIVITELER = [
  { id:'ks_1', reward:0.05  }, // 5 saat sonunda toplam
  { id:'ks_2', reward:0.10  }, // 5 saat sonunda toplam
];
// Günde 1 KS aktivitesi yapılabilir
```
---

## SUÇLAR

### Genel Kurallar
```
- Başarı şansı var, başarısız olunca hapse düşülür
- Başarısız olunca da XP kazanılır (hapis XP'si yok — sadece suç XP'si)
- Cooldown başarılı veya başarısız fark etmez, sabittir
- Hapse düşünce: kefalet öde | kendini bustout et (max 3 hak) | başkası kurtarsın
```

### Suç Tablosu
```javascript
const SUCLAR = {
  offender: {
    cooldown: 5,        // dakika
    xp:       50,
    para:     { r1_5:'$10–$50', r6_10:'$100–$500', r11_14:'$500–$2.000' },
    hapis:    { r1_5:30, r6_10:60, r11_14:120 },   // saniye
    kefalet:  { r1_5:100, r6_10:500, r11_14:1000 },
  },
  wheelman: {
    cooldown: 10,
    xp:       75,
    odul:     'araba (tier bazlı)',
    hapis:    { r1_5:60, r6_10:120, r11_14:180 },
    kefalet:  { r1_5:500, r6_10:2000, r11_14:5000 },
  },
  insidejob: {
    cooldown: 30,
    xp:       500,
    ks:       0.01,
    para:     { r1_5:'$500–$2K', r6_10:'$2K–$8K', r11_14:'$8K–$20K' },
    hapis:    { r1_5:180, r6_10:300, r11_14:480 },
    kefalet:  { r1_5:2000, r6_10:8000, r11_14:15000 },
  },
  armedrob: {
    cooldown: 360,      // 6 saat
    xp:       800,
    ks:       0.02,
    para:     { r1_5:'$1K–$5K', r6_10:'$5K–$15K', r11_14:'$15K–$40K' },
    hapis:    { r1_5:480, r6_10:720, r11_14:1080 },
    kefalet:  { r1_5:8000, r6_10:20000, r11_14:35000 },
    item_drop: true,
  },
  felony: {
    cooldown: 720,      // 12 saat
    xp:       5000,
    ks:       0.05,
    rankMin:  8,
    hapis:    { r8:240, r9:300, r10:360, r11:480, r12:600, r13:900, r14:1200 },
    kefalet:  { r1_5:15000, r6_10:30000, r11_14:50000 },
    item_drop: true,
  },
  bustout: {
    cooldown: 0,        // cooldown yok
    xp:       100,
    bustout_beceri: true,
    hapis_basarisiz: { r1_5:60, r6_10:120, r11_14:180 },
    kefalet_basarisiz: { r1_5:100, r6_10:1000, r11_14:3000 },
  },
};
```

### Bustout Sistemi
```javascript
const BUSTOUT_BASARI = {
  1:.20, 2:.25, 3:.30, 4:.35, 5:.40,
  6:.45, 7:.50, 8:.55, 9:.60, 10:.65,
  11:.70, 12:.75, 13:.80, 14:.85,
};
// Başarısız her denemede hapis süresi + kefalet artar
// Max 3 hak, bittikten sonra buton kaybolur
// Başkasını bustout etmek: başarısız → kurtarıcı da hapse düşer
// Beceri: %20 başlar, her 5 başarılı → +%1, tavan %90
```

### Kendini Bustout Etme
```
- Hapisteyken kendini bustout etmeyi deneyebilirsin
- Max 3 hak
- Her başarısız denemede hapis süresi + kefalet artar
- 3 hak bittikten sonra buton kaybolur
- Bustout becerisi burada da geçerli
```

### Felony (OC) Detayları
```javascript
const FELONY_ROLLER = {
  lider:        { zorunlu:true,  sayi:1     },
  sofor:        { zorunlu:true,  sayi:1,    arac:'araba' },
  nisanci:      { zorunlu:true,  sayi:'1-2' },
  bomba_uzmani: { zorunlu:false, sayi:'0-1', malzeme:'TNT' },
};

// BAŞARI ORANI:
// Baz: R8-10:%50–60 | R11-13:%65–75 | R14:%80
// +Lider rank bonusu: her rank +%3
// +Nişancı KS bonusu: KS/100 × %10 (her nişancı için)
// +2. nişancı: +%5
// +Sürüş becerisi: beceri/100 × %15
// +TNT: +%3

// PARA: baz para × toplam başarı oranı
// %130+ başarı → para $6M+, başarı garantili
// %140+ başarı → para $10M, tüm item drop %100

// ITEM DROP (başarılıda):
// Normal: %0.2→T5 | %2→T4 | %10→T3 | %20→T2
// %130+:  T5:%50 / T4:%90 / T3:%70 / T2:%50
// %140+:  Tümü %100
// Item rastgele ekip üyesine düşer
```

### TNT
```javascript
// Fiyat: $50.000 (NPC market)
// Kullanım: Felony'de Bomba Uzmanı kullanır
// Başarı oranına +%3 katkı sağlar
```

### Wheelman Detayları
```
- Garajdan araba seçilir
- Araba çalınır → garaja eklenir
- 50 model, 5 tier × 10
- Her arabanın hız değeri var (tier bazlı)
- Sürüş becerisi efektif hızı belirler
```

### Suç Sonuç Ekranı Akışı
```
1. Butona basılır
2. GIF bir kez oynar (o suça ait)
3. Sonuç ekranı gelir
4. Float efektleri sırayla yukarı kalkar (XP → para → KS → ...)
```

### Hapis Ekranı
```
3 çıkış:
A) Kefalet öde
B) Kendini Bustout et (max 3 hak)
C) Başkasının Bustout etmesini bekle

TopBar + TopNav + BottomBar GİZLENİR
```

---

## POLIGON

```javascript
const POLIGON = {
  cooldown:  600,       // 10 dakika (saniye)
  ks_kazanc: 0.005,     // skor 10+ ise kazanılır
  // Crosshair, hedef siluetleri, muzzle flash, bullet hole efektleri
  // Hedef: silüet + ahşap sandık
  // KS yüksekse nişan daha hassas
};
```

---

## ARABA YARIŞI

```javascript
const ARABA_YARISI = {
  her_yaris_suresi: 20,    // dakika arayla yeni yarış
  gunluk_max:       12,    // oyuncu başına
  yariscilardsa:    10,    // yarış başına kişi
};

// PUAN TABLOSU:
const YARIS_PUAN = { 1:100, 2:60, 3:40, 4:20, 5:10, 6:5, 7:5, 8:5, 9:5, 10:5 };

// Beraberlikte: rastgele biri kazanır
// Efektif hız = arabanın hızı × (sürüş becerisi / 100)
// Sürüş becerisi ay sonunda SIFIRLANMAZ, yarış puanları sıfırlanır

// AY SONU ÖDÜLLER (puan sıralaması):
const YARIS_AYLIK_ODUL = {
  1: { araba:'en hızlı T5 özel', para:5000000 },
  2: { araba:'T4',               para:3000000 },
  3: { araba:'T4',               para:1500000 },
};

// Yarış ekranı: Aktivite popup → YARIŞ butonu → tam ekran açılır
// Seçilen arabanın PNG'si görünür, animasyonla yarışır
```

---

## SEYAHAT SİSTEMİ

```javascript
// Sadece uçakla seyahat edilir
// Baştan açık, uçak şartı yok
// Daha iyi uçak alınınca süre düşer

const SEYAHAT_SURE = {
  ic:         2,   // dakika (aynı ülke)
  komsu:      3,
  ayni_kita:  4,
  farkli:     5,
};

// Seyahatte:
// - Saldırılamaz, saldıramaz
// - Hiçbir suç işleyemez, kill yapamaz
// - Casino, kaçakçılık, gazete, market, auction house erişilebilir

// Seyahat mini banner gösterilir
// İptal = %50 ceza
```
---

## KAÇAKCILIK

### 3 Kanal
```javascript
const KANALLAR = {
  konteyner: { rankMin:0, arac:false,  personel:'conductor', personelZorunlu:false },
  port:      { rankMin:0, arac:'gemi', personel:'kaptan',    personelZorunlu:true  },
  airport:   { rankMin:0, arac:'ucak', personel:'pilot',     personelZorunlu:true  },
};
// Konteyner: şartsız manuel. Conductor sadece süreyi kısaltır.
// Port: Gemi + Kaptan olmadan çalışmaz
// Airport: Uçak + Pilot olmadan çalışmaz
```

### Bekleme Süreleri (dakika)
```javascript
const KAÇAKCILIK_SURE = {
  //              konteyner  port  airport
  ic:           [ 15,        10,   5   ],
  komsu:        [ 20,        15,   10  ],
  ayni_kita:    [ 25,        20,   15  ],
  farkli_kita:  [ 30,        25,   20  ],
};
```

### Personel Süre İndirimi
```javascript
const PERSONEL_INDIRIM = {
  T1: '-%0',    // baz süre
  T2: '-%10',
  T3: '-%25',
};
// Conductor → konteyner süresini düşürür
// Kaptan    → port süresini düşürür
// Pilot     → airport süresini düşürür
```

### Auto Kaçakçılık
```javascript
const AUTO_SARTLAR = {
  konteyner: { npc:'conductor', vipMin:0 },  // Conductor zorunlu, VIP gerekmez
  port:      { npc:'kaptan',    vipMin:3 },  // Gemi + Kaptan + VIP3
  airport:   { npc:'pilot',     vipMin:4 },  // Uçak + Pilot + VIP4
};
// 10 sefer yapar, durur
// Auto aktifken manuel YAPAMAZ
```

### Kaçakçılık Ekranı
```
Alt bar KAÇAK butonuna basınca:
3 buton çıkar → Uçak | Gemi | Tren (hepsi GIF)
Her birine basınca o kanalın popup'ı açılır
```

### Ürünler
```javascript
const SMUGGLE_PRODUCTS = [
  { id:'sigara', name:'CIGARETTES', rankMin:0,  min:3,    max:6     },
  { id:'bira',   name:'BEER',       rankMin:0,  min:8,    max:16    },
  { id:'pill',   name:'PILL',       rankMin:0,  min:15,   max:30    },
  { id:'kan',    name:'BLOOD',      rankMin:0,  min:85,   max:170   },
  { id:'viski',  name:'WHISKEY',    rankMin:3,  min:45,   max:90    },
  { id:'chip',   name:'CHIP',       rankMin:5,  min:120,  max:240   },
  { id:'drone',  name:'DRONE',      rankMin:6,  min:140,  max:280   },
  { id:'altin',  name:'GOLD',       rankMin:8,  min:300,  max:600   },
  { id:'elmas',  name:'DIAMOND',    rankMin:11, min:750,  max:1400  },
  { id:'white',  name:'WHITE',      rankMin:13, min:1500, max:2600  },
];
// Kan: HP iyileştirici + kaçakçılık malı
// Fiyat 30 dakikada yenilenir
```

### Kapasite (Slot) Sistemi
```javascript
const kapasiteHesapla = (p) =>
  p.cantaSlot    // T1:5 T2:10 T3:18 T4:28 T5:40
  + p.suitSlot   // T1:10 T2:20 T3:30 T4:40 T5:50
  + p.gemiSlot   // T1:25 T2:50 T3:90 T4:140 T5:230
  + p.ucakSlot;  // T1:40 T2:75 T3:100 T4:150 T5:220
// Envanter sınırsız, kapasite sadece kaçakçılık seferi için
```

---

## ARAÇLAR & PERSONEL

### Gemiler (NPC — her tier 1 kez)
```javascript
const NPC_GEMILER = [
  { tier:1, name:'Rusty Barge',    alis:300000,  slot:25  },
  { tier:2, name:'Dark Harbor',    alis:800000,  slot:50  },
  { tier:3, name:'Iron Smuggler',  alis:2000000, slot:90  },
  { tier:4, name:'Black Tide',     alis:4000000, slot:140 },
  { tier:5, name:'The Leviathan',  alis:7000000, slot:230 },
];
```

### Uçaklar (NPC — her tier 1 kez)
```javascript
const NPC_UCAKLAR = [
  { tier:1, name:'Green Prop',   alis:500000,   slot:40  },
  { tier:2, name:'Red Duster',   alis:1500000,  slot:75  },
  { tier:3, name:'Air Courier',  alis:3000000,  slot:100 },
  { tier:4, name:'Sky Liner',    alis:5000000,  slot:150 },
  { tier:5, name:'Shadow Jet',   alis:10000000, slot:220 },
];
// Satış: alış × 0.50 | Max 1 gemi, 1 uçak
// Daha iyi uçak → seyahat süresi düşer
```

### Personel (NPC — her tier 1 kez)
```javascript
const NPC_PERSONEL = [
  { id:'conductor', T1:1000000,  T2:1500000, T3:3000000 },
  { id:'kaptan',    T1:750000,   T2:2000000, T3:4000000 },
  { id:'pilot',     T1:1000000,  T2:2500000, T3:5000000 },
];
```

### Araçlar Sekmesi (Karakter Ekranı)
```
- Tüm sahip olunan uçak, gemi, arabalar listelenir
- Aktif kullanılacak seçilir (1 aktif gemi, 1 aktif uçak, 1 aktif araba)
- Personel de buradan seçilir
```

---

## BANKA

```javascript
const FAIZ = [
  { sure:6,  oran:0.03, napoliOran:0.05 },
  { sure:12, oran:0.05, napoliOran:0.07 },
  { sure:24, oran:0.07, napoliOran:0.10 },
];
// Süre dolunca otomatik cebe girer
// Max 3 eş zamanlı | Min: $100.000
// Ölünce bankadaki %50 → vasiyet sistemine

// Para transferi: oyuncular arası + aile kasasına banka üzerinden
// Para gönderince hem inbox'a düşer hem ekranda bildirim çıkar
```

---

## CASINO (7 Oyun)

```javascript
// KASA MEKANİĞİ:
// Sahip kasayı fonlar
// Oyuncu kaybedince: %98 kasaya, %2 şehri kontrol eden aile kasasına
// Oyuncu kazanınca: ödeme kasadan gelir → kasa boşalırsa "CASINO CLOSED"
// Jackpot havuzu: slot + rulet paylaşır, başlangıç $500K

// Lucky Fruits    — 3-reel slot (cherry/lemon/orange/grape/melon/star)
// 5 Reel Deluxe   — 5-reel slot (gun/money/whisky/diamond/seven/crown)
// Blackjack       — dealer 17'de durur
// Rulet           — Avrupa (tek sıfır), %5 jackpot havuzuna
// Video Poker     — Jacks or Better
// At Yarışı       — 6 at, random odds
// Boks            — 2 dövüşçü, 6 raunt, random odds

const BAHIS_BUTONLARI = [100, 500, 1000, 5000, 10000];
```

---

## MARKET

### NPC Shop
```javascript
// Mermi: 1.000 paket → $1.000.000 (CD yok)
// TNT: $50.000
// Gemi, Uçak, Personel, BG (her birinden 1 kez)
// Arabalar SADECE Auction House'da (NPC'de yok)
```

### Auction House
```javascript
// Server geneli (şehre özgü değil)
// Satılabilir: Silah / Kolye / Çanta / Araba / Mermi(1K paket) / Witness Report
// Max 10 aktif listing | Süre: 6 saat
// Min teklif artışı: %5
// Buyout: başlangıcın min %150si
// Anti-snipe: son 60sn teklif → +2dk
// İptal: item geri gelir, 10dk tekrar listeleyemez
// Oyuncular arası item/araba alım satımı SADECE buradan
```

### Arabalar
```javascript
// 50 model, 5 tier × 10
// SADECE: Inside Job + Felony + Crusher'da kullanılır
// Kaçakçılıkta KULLANILMAZ
// T1:$1K–$10K | T2:$11K–$20K | T3:$21K–$30K | T4:$31K–$40K | T5:$41K–$50K
// T5 altın parlama animasyonu
```
---

## SAVAŞ SİSTEMİ

### Saldırı Akışı
```javascript
// 1. Dedektif tut → 30dk arama (hedefe bildirim GİTMEZ)
// 2. Hedef bulundu → Push + email → [ÖLDÜR] butonu
// 3. Mermi sayısı gir → [SALDIR]
// 4. Kontrol: aynı şehirde mi + sığınakta/seyahatte değil mi?
//    Evet → saldırı gerçekleşir | Hayır → iptal, dedektif ücreti yanmış
// 5. Atılan mermi × (KS/100) = efektif hasar
//    Efektif hasar > toplam can → ÖLÜM

// Kill cooldown: 12 saat
// Rank kuralı: Max 1 üst ranka saldırabilirsin
// Seyahatteyse → saldırı iptal
// Sığınaktaysa → BULUNAMAZ
```

### Dedektif Maliyeti
```javascript
const DEDEKTIF_MALIYET = {
  1:1000,  2:1000,  3:4000,  4:4000,  5:9000,
  6:16000, 7:25000, 8:36000, 9:49000, 10:64000,
  11:64000, 12:81000, 13:81000, 14:100000,
};
```

### Kill Ödülleri
```javascript
const KILL_ODUL = {
  xp_ayni_rank: 1500,
  xp_ust_rank:  1800,
  ks_ayni_rank: 0.01,
  ks_ust_rank:  0.02,
};
// Öldürülen oyuncunun cep parası → öldürene geçer
```

### Backfire Sistemi
```javascript
// Karakter ekranında ayarlanır (4 seçenek):
const BACKFIRE = {
  kapali:  0,    // backfire yok
  yarisi:  0.5,  // yarı hasar saldırana döner
  ayni:    1.0,  // aynı hasar saldırana döner
  iki_kat: 2.0,  // iki katı hasar saldırana döner
};
```

### Başarısız Saldırı
```
- Hedefe attack_alert mesajı gönderilir
```

### Witness Report
```
- Öldürme anında random online oyuncuya (katil/kurban/aynı aile hariç) düşer
- Envanterde DOCUMENTS sekmesinde görünür
- Sadece Auction House'da satılabilir (NPC'ye satılamaz)
- Fiyatı satıcı belirler
```

### KS Etkisi
```
Efektif hasar = atılan mermi × (KS / 100)
KS 0   → %0 isabet (sıfır hasar)
KS 50  → %50 isabet
KS 100 → %100 isabet
```

---

## ÖLÜM & LEGACY

### Ölüm Sonrası
```javascript
// Cep parası     → öldürene
// Banka %50      → vasiyet önceliğine
// Arabalar       → vasiyet önceliğine
// Uçak/Gemi/Item/BG → YOK
// Binalar        → SAHİPSİZ (aynı fiyatla)
```

### Ölüm Ekranı
```
- Tam ekran, tüm menüler gizlenir
- Beyaz arka plan üzerine skull animasyonu (PNG/GIF)
- Öldüren nick, rank, şehir bilgisi
- Vasiyet/Legacy seçim ekranı
- Ticker'da Rank 10+ ölümü altın manşet olarak yayınlanır
```

### Vasiyet Sistemi
```javascript
// OYUNCU VASİYETİ (her zaman yazılabilir):
// 1. LEGACY   — Rank10+ veya VIP4 ile ölündüyse → yeni hesaba (1 kez)
// 2. MANUAL   — Manuel seçilen kişiye (nick yazılır, anlık kontrol)
// 3. BURN     — Yok olur

// AİLE VASİYETİ (sadece Patron yazabilir):
// Patron ölünce aile bu kişiye geçer
// Patron vasiyetsiz ölürse → aile düşer, dağılır
```

### Legacy Avantajları
```javascript
// CD -%50
// Başlangıç rank: R5-7→R2 | R8-10→R3 | R11-12→R4 | R13-14→R5
// 2 hafta 2x XP + ölümsüzlük
// VIP + aile ilişkisi korunur (aynı ailede başlar)
// 48 saatte seçilmezse Legacy hakkı kaybolur
```

### Ölünce Server'dan Silinme
```
Legacy kullanılmazsa → hesap server'dan silinir, tüm veriler temizlenir
Legacy kullanılırsa  → yeni hesap açılır
```

---

## SAFE HOUSE

```javascript
const SAFEHOUSE = {
  maliyet: 100000,    // $/saat, tüm ranklar sabit
  sureler: [1,3,6,12,24],  // saat seçenekleri
};
// Saldırıya uğranamaz, dedektifle bulunamaz
// Sadece gazete okunabilir
// TopBar + TopNav + BottomBar GİZLENİR
// Kullanılmayan süre iade edilmez
```

---

## HİTLİST

```javascript
const HITLIST = {
  sure:    72,    // saat
  dagitim: { oldurene:0.80, ailesi:0.20 },
  // %80 öldürene, %20 öldürenin aile kasasına
  // 72 saat içinde öldürülmezse → ödül burn
};
```

---

## AİLE SİSTEMİ

### Aile Kurma
```javascript
// Rank 12 (Boss) ve üzeri kurabilir
// Slot sistemi: her slot $5.000.000, +25 üye kapasitesi
// Max 4 slot → max 100 üye (+2 yönetici)
// Kurulan şehir = HQ şehri (değiştirilemez)
```

### Hiyerarşi
```javascript
const AILE_HIYERARSISI = {
  patron:      1,   // Aile lideri
  consigliere: 1,   // Yardımcı
  capo:        4,   // Her 25 kişilik grubun lideri (4 slot = 4 Capo)
  uye:         'kalan',
};
```

### Aile Şehri Kuralı
```
- Her aile sadece 1 şehre egemen olabilir (HQ şehri)
- Üyeler sadece HQ şehrindeki binaları satın alabilir
- Başka şehirde bina alınamaz
```

### Üyelik
```
- Aile sayfasından başvuru yapılır
- Boss veya Consigliere onaylar/reddeder
- Rank veya para şartı yok
- İstediği zaman ayrılabilir
- Kovma: Boss veya Consigliere yapabilir
```

### Aile Kasası
```
- Her üye banka üzerinden para yatırabilir
- Sadece Boss ve Consigliere çekebilir
```

### Aile Özellikleri
```javascript
// Aile kurulunca: isim + renk (beyaz seçilemez) + simge seçilir
// Kapak görseli: Patron yükler (JPEG/PNG), moderasyon var
// İttifaklar ve düşmanlar: sadece görsel etiket, oyun mekaniğine etkisi yok
// Boss + Consigliere tüm üyelere toplu mesaj atabilir
// Aile sohbet: 3 sekme — Aile | Server | Global
```

### Crusher
```javascript
const CRUSHER = {
  acan:    'Boss veya Consigliere',
  sehir:   'sadece HQ şehrinde',
  araba_basi: 12,  // mermi
};
// Crusher açılınca tüm üyelere bildirim gider
// Üye o şehirde olmak zorunda (crusher'a araba sokabilmek için)
// Garajdaki arabalar şehirsiz (her şehirde kullanılabilir) — crush hariç
// Araba → crusher'a girer → 12 mermi üyeye eklenir → araba silinir
```

### Aile Sıralama
```
Aile sayfasında ayrı sekme:
- Server'daki tüm aileler güç skoruna göre sıralanır
- Güç skoru = toplam üye XP + bina puanları
- Kontrol ettiği şehir gösterilir
```

---

## DETEKTIF & SALDIRI DIŞI KORUMALAR

```javascript
// Yeni oyuncu: 5 gün koruma. Saldırırsa anında kalkar.
// Seyahatte: saldırılamaz
// Safe House: bulunamaz, saldırılamaz
// Aynı şehirde olmak zorunlu (saldırı için)
```
---

## VIP SİSTEMİ

### VIP Puan ile Kazanılır (Para ödenmez)
```javascript
const VIP_PUAN_ESIK = {
  1: 500,
  2: 1500,
  3: 3000,
  4: 5500,
  5: 9000,
};
// 90 günde günde 100 puan yaparak VIP5 olunabilir
// Sandık 1 (herkese): 40 puan/gün
// Sandık 2 (görev yapana): 60 puan/gün
```

### VIP Avantajları
```javascript
const VIP = {
  1: { fiyat:4.99,  avantaj:['Tüm suç CD -%5', 'Günlük giriş ×1.5'] },
  2: { fiyat:9.99,  avantaj:['...VIP1', 'Tüm suç CD -%10', 'Günlük giriş ×2'] },
  3: { fiyat:19.99, avantaj:['...VIP2', 'Tüm suç CD -%15', 'Günlük giriş ×3',
                              '1× T1 Kaptan hediyesi (1 kez)', 'Her gün T4 BG kafası'] },
  4: { fiyat:29.99, avantaj:['...VIP3', 'Tüm suç CD -%20',
                              '1× T1 Pilot hediyesi (1 kez)', 'Her gün T5 BG kafası'] },
  5: { fiyat:49.99, avantaj:['...VIP4', 'Tüm suç CD -%25', 'Kaçakçılık bekleme -%20'] },
};
// Auto Konteyner: Conductor + VIP0 (VIP gerektirmez)
// Auto Port:      Gemi + Kaptan + VIP3
// Auto Airport:   Uçak + Pilot + VIP4
```

---

## MONETİZASYON

### Para Paketleri
```javascript
const PARA_PAKETLERI = [
  { fiyat:0.99,  para:250000    },
  { fiyat:4.99,  para:1500000   },
  { fiyat:9.99,  para:3500000   },
  { fiyat:19.99, para:8000000   },
  { fiyat:49.99, para:25000000  },
  { fiyat:99.99, para:60000000  },
];
```

### Reklam (AdMob)
```
- Server 1: reklam yok
- Server 2+: günde max 25 gönüllü reklam
```

### Top Spender
```javascript
// Aylık harcama sıralaması — ilk 5'e ödül
const TOP_SPENDER_ODUL = {
  1: { para:10000000, odul:'T5 BG + özel unvan + T5 nadir item' },
  2: { para:5000000,  odul:'T5 BG + özel rozet'                 },
  3: { para:2000000,  odul:'T5 BG + T4 BG'                      },
  4: { para:1000000,  odul:'T5 BG'                               },
  5: { para:500000,   odul:'T5 BG'                               },
};

// Milestone ödülleri (harcama bazlı, 1 kez):
const MILESTONE = [
  { hedef:0.99,  odul:'$100K'                  },
  { hedef:4.99,  odul:'$500K'                  },
  { hedef:9.99,  odul:'$1M + T2 BG kafası'     },
  { hedef:19.99, odul:'$2M + T3 BG + rozet'    },
  { hedef:49.99, odul:'$5M + T4 BG + unvan'    },
  { hedef:99.99, odul:'$10M + T5 BG + nadir item' },
];
```

---

## EVENTS SİSTEMİ

### Günlük Giriş Ödülleri
```javascript
const GUNLUK_ODUL = {
  1:5000,   2:10000,  3:20000,  4:30000,  5:40000,
  6:50000,  7:60000,  8:70000,  9:80000,  10:85000,
  11:90000, 12:95000, 13:100000,
  14: { para:200000, bonus:'T4 BG kafası' },
  15: { para:250000, bonus:'T5 BG kafası' },
};
// Gün atlanırsa sıfırlanır
// VIP çarpanı sadece paraya uygulanır (kafaya değil)
```

### Günlük VIP Sandıkları
```javascript
// Sandık 1 (herkese açık): 40 VIP puanı
// Sandık 2 (günlük görevi tamamlayana): 60 VIP puanı
```

### Günlük Görev Puanları (toplam 100)
```javascript
const GUNLUK_GOREV = {
  giris:     10,
  offender:  5,
  wheelman:  5,
  insidejob: 10,
  armedrob:  12,
  bustout:   5,
  seyahat:   5,
  kacakcilik:8,
  felony:    25,
  kill:      15,
};
// 100 puana ulaşınca Sandık 2 açılır
```

### Görev Sandık Ödülleri
```javascript
const GOREV_SANDIK = {
  20:  2000,
  40:  5000,
  60:  10000,
  80:  25000,
  100: { para:100000, bonus:'T4 BG kafası' },
};
```

### Haftalık Sıralama Ödülleri
```javascript
// 4 kategori: en çok suç | en çok kill | en çok kaçakçılık | en çok bustout
const HAFTALIK_ODUL = {
  1: 5000000,
  2: 3000000,
  3: 1000000,
};
```

### Aylık Görevler
```javascript
const AYLIK_GOREVLER = [
  { görev:'30 gün üst üste giriş',    odul:15000  },
  { görev:'Offender: 4.000',          odul:60000  },
  { görev:'Wheelman: 2.000',          odul:55000  },
  { görev:'Inside Job: 700',          odul:40000  },
  { görev:'Armed Robbery: 60',        odul:75000  },
  { görev:'Felony: 25',               odul:100000 },
  { görev:'Bustout: 30',              odul:30000  },
  { görev:'Kaçakçılık: 1.000',        odul:70000  },
  { görev:'Kill: 1',                  odul:5000   },
  { görev:'Seyahat: 25',              odul:20000  },
  { görev:'Auction'da item sat: 5',   odul:10000  },
  { görev:'Poligon: 2.000',           odul:50000  },
];

// Tüm aylık görevleri tamamlayana:
const AYLIK_BUYUK_ODUL = {
  para:   300000,
  bonus1: '10× T5 BG kafası',
  bonus2: '1× T5 Bodyguard',
};
```

### Aylık Sıralama Ödülleri
```javascript
// Aynı 4 kategori
const AYLIK_SIRALAMA_ODUL = {
  1: { para:2000000, bonus:'T5 BG kafası + 500 VIP puan' },
  2: { para:1000000, bonus:'T4 BG kafası + 250 VIP puan' },
  3: { para:500000,  bonus:'T3 BG kafası + 100 VIP puan' },
};
```

---

## SOSYAL SİSTEM

### Evlilik
```javascript
// Rank Mobster+ her iki taraf için
// Kayıtta cinsiyet seçilir
// Evlilik bonusu: +%2 savunma | Eşin villası varsa +%5
// Ölünce: banka %50 + arabalar → eşe (vasiyet 2. önceliği)
```

### Villa Sistemi
```javascript
// Rank 13 (Crew Chief) ile alınır
// Her villa +%0.3 defence bonus (max 40 villa → +%12)
// Aktif villa: +%3 | Aile HQ villası: +%3
// 40 villa tamamlama: +%5
// MAX villa bonus: +%23

// TAM SAVUNMA MAX BONUS:
// +%23 (villa) + %5 (evlilik) + %20 (Godfather) = +%48
```

### Profil
```javascript
// Oyuncu profil resmi yükler (karakter ekranından)
// Admin moderasyonu — uygunsuz kaldırılır
// Başkasının profilinde görünenler:
//   Nick | Rank | Para | Aile | Profil resmi
//   Mesaj gönder | Hitlist koy | Arkadaş ekle
// Görünmeyenler: Kill sayısı | Mermi | Online/offline
```

### Profil Kartı Paylaşımı
```javascript
// Karakter ekranından paylaşılır
// Platform: Instagram | Facebook | WhatsApp | Genel
// Ödül (her platform 1 kez): Instagram/Facebook/WhatsApp → $2.500.000
//                             Profil kartı paylaşımı → $2.500.000
//                             Diğer → $1.000.000
```

### Mesaj Sistemi
```javascript
// Oyuncular arası mesaj
// Sistem mesajları da aynı inbox'ta (hapis, saldırı, witness report)
// Mesaj hem inbox'a düşer hem ekranda toast/banner çıkar (kimden geldiği yazar)
// Admin duyuruları: hem ticker'da hem inbox'ta
// Okundu/okunmadı işareti var
```

### Chat
```javascript
// Alt barın üstünde dikdörtgen popup
// 3 sekme: Aile | Server | Global
// Küfür filtresi: yasaklı kelimeler gönderilmez
```

### Ban/Kick
```javascript
// Admin tarafından uygulanır
// Kick: oyundan atılır, tekrar girebilir
// Ban: hesap kapatılır (süreli veya kalıcı)
// Kişiye bildirim gönderilir
```

### Günlük Giriş & Sosyal
```javascript
const GUNLUK_ODULLER_GUNLUK = {
  // Para ödülleri + gün 14: T4 BG kafası, gün 15: T5 BG kafası
  // Gün atlanırsa sıfırlanır
};
```
---

## TUTORIAL

```
Yeni oyuncu kaydolunca otomatik başlar.
O ranka ait açık olan her şeyi sırayla yaptırır:
1. Suç işle (Offender)
2. Hapse düş → kefalet öde
3. Bustout dene
4. Kaçakçılık yap
5. Casino gir
6. Poligona gir (KS)
7. BG tak (Defence)
8. Aile sayfasına bak

Her adımda ekranda yönlendirme ok/highlight gösterilir.
Tamamlanınca bir daha açılmaz.
```

---

## GÖRSEL EFEKTLER

### Float Efektleri
```javascript
const FLOAT_COLORS = {
  para:    '#2a7a3a',   // yeşil  — $+500
  xp:      '#f97316',   // turuncu — +50 XP
  ks:      '#c62828',   // kırmızı — +0.01 KS
  defence: '#111111',   // siyah  — +500 DEF
  suruş:   '#3b82f6',   // mavi   — +0.01 SÜRÜŞ
  bustout: '#C9A84C',   // sarı   — +0.01 BUSTOUT
};
// Sırayla çıkar — biri bitmeden diğeri başlamaz
// Suç/aksiyon sonrası: sonuç ekranı → ardından float'lar
```

### Rank Atlama
```
- Beyaz arka plan, tüm menüler gizlenir
- Yeni rankın hayvan PNG'si küçükten büyüye (pop animasyonu)
- Altın halkalar yayılır
- Altın konfeti patlar
- Rank adı + numarası belirir
- [DEVAM ET] butonu
```

### Kill Efekti
```
Ekranda kısa kırmızı flash + titreme (haptic)
```

### Ölüm Ekranı
```
Ekran kararır (tam ekran, tüm menüler gizlenir)
Skull animasyonu (PNG/GIF)
Öldüren + rank + şehir bilgisi
```

### Hapis Efekti
```
Popup veya ekranda parmaklık animasyonu (GIF)
```

### Crusher Aktifken
```
BottomBar'da Crusher butonu pulse/yanıp söner
```

### Ticker
```
Gerçek zamanlı oyun olayları:
- Kill: "[OYUNCU_A] — Rank X — has fallen. Killed by [OYUNCU_B] in [ŞEHİR]."
  (Rank 10+ ölümleri altın manşet)
- Şehir kontrolü değişince
- Rank atlayınca
- Admin duyuruları
```

### Hava Durumu & Gece/Gündüz
```
- Sadece şehir haritası ekranında aktif
- Gece/gündüz döngüsü
- Yağmur efekti (şehir haritasına özel)
```

### Skeleton Loading
```
Suç popupları     → Matrix efekti (şeffaf, beyaz karakterler, 700ms) → popup fade+scale
Diğer popuplar   → Koyu gri shimmer skeleton (1.1sn) → içerik belirir
```

---

## GÖRSEL EFEKTLER — ÖZEL DURUMLAR

```javascript
// Araba yarışında:
// - Seçilen arabanın PNG'si ekranda görünür
// - Sanki gidiyormuş gibi animasyon efekti

// Ülkeye/şehire haritada basınca:
// - GIF bir kez oynar → içerik açılır
```

---

## SES & HAPTİK

```javascript
const HAPTIC = {
  attack:    'Medium',
  hit:       'Error',
  death:     'Error',
  rankUp:    'Success',
  tier5Equip:'Heavy',
  bigWin:    'Success',
  crimeSuccess:'Light',
  insidejobDone:'Success',
};

const MUSIC_SCREENS = {
  default:      'music_main.mp3',
  casino:       'music_casino.mp3',
  bina_open:    'music_buildings.mp3',
};
// Ses ve haptic ayarlardan ayrı ayrı kapatılabilir
```

---

## KARİYER EKRANI (Karakter)

```javascript
// Orta ekranda açılır (tam ekran değil, menüler görünür)
// 5 sekme:
const KARAKTER_SEKMELER = ['KARAKTER', 'ENVANTER', 'VILLA', 'PERSONALS', 'GARAJ'];

// KARAKTER sekmesi:
// - Üstte profil resmi (tıklayınca değiştirilebilir)
// - Altında rank hayvanı PNG
// - Nick, rank adı, aile
// - Stats: KS, DEF, XP, sürüş becerisi, bustout becerisi
// - Equipped items + BG slotları
// - Backfire ayarı
// - Vasiyet butonu (nick yazma, anlık kontrol)
// - Arkadaşlar listesi

// GARAJ sekmesi:
// - Tüm arabalar listelenir
// - Inside Job'a katılırken buradan araba seçilir
// - Crusher için buradan araba gönderilir
```

---

## PROTOTYPE DURUMU

| Bileşen | Durum |
|---|---|
| AppShell (TopBar/Nav/BottomBar) | ✅ |
| Dünya + Ülke + Şehir Haritası | ✅ |
| Building Popupları | ✅ |
| Offender | ✅ |
| Armed Robbery | ✅ |
| Inside Job | ✅ |
| Felony | ✅ |
| Bustout | ✅ |
| Kaçakçılık | ✅ |
| Market | ✅ |
| Karakter Ekranı | ✅ |
| Items/Envanter | ✅ |
| Villa | ✅ |
| Marriage | ✅ |
| Casino | ✅ |
| Banka | ✅ |
| VIP | ✅ |
| Settings | ✅ |
| Notification | ✅ |
| Store (Satın Alma) | ✅ |
| Events | ✅ |
| Top Spender | ✅ |
| Safe House | ✅ |
| Travel Banner | ✅ |
| Attack Popup | ✅ |
| Death Screen | ✅ |
| Hitlist | ✅ |
| Profile Share | ✅ |
| Poligon | ✅ (React Native) |
| Splash Screen | ✅ |
| Wheelman | ⏳ |
| Araba Yarışı | ⏳ |
| Chat | ⏳ |
| Crusher | ⏳ |
| Gazete | ⏳ |
| Tutorial | ⏳ |
| Rank Up Ekranı | ✅ (demo) |
| Matrix Popup Efekti | ✅ (demo) |
| Gold Shimmer Skeleton | ✅ (demo) |
| SoundManager | ⏳ |
| Family War | ⏳ |
