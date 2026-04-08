# LaFamilia — UI/UX Prototip Kararları (06.04.2026)

## AKTİF PROTOTIP
- Dosya: lafamilia_v5.html
- BASE_URL: https://mericaltinors1983-max.github.io/LaFamilia/
- Kütüphaneler: D3 v7.8.5 + TopoJSON v3.0.2 (CDN) — sadece K3/K4 için
- TopoJSON dünya verisi: https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
- Dünya verisi cache: _ulkeWorldData değişkenine, bir kez yüklenir

---

## EKRAN YAPISI (yukarıdan aşağıya)
1. TopNav (2 sıra × 8 ikon) — 34px × 2
2. Progress Bar — 40px
3. Ticker — 20px
4. Ana Alan (harita / ekranlar) — flex:1
5. BottomBar (position:fixed, bottom:0) — 76px

---

## TOP NAV
- 2 sıra, her sıra 8 ikon
- Her item: PNG (19px) + text etiketi (Oswald 6px, altında)
- Aktif item: beyaz bg + alt border 2px siyah (.on class)
- Badge: kırmızı daire, sağ üstte (mesaj, bildirim)
- Satır yüksekliği: 34px

**Sıra 1:** KARAKTER · ENVANTER · BİNALAR · HARİTA · MESAJ · BİLDİRİM · EVENT · AYARLAR
**Sıra 2:** FAMILY · CRIME · BANKA · CASİNO · AKTİVİTE · YARIŞ · SATIN AL · GAZETE

---

## PROGRESS BAR (height: 40px)

**Sol:** rank_animal_8.png (26×26px) — tek ikon

**Orta — 2×2 Pixel Barlar:**
- Sol kolon: CAN (yeşil #22c55e) / XP (altın #C9A84C)
- Sağ kolon: DEF (mavi #3b82f6) / KS (kırmızı #ef4444)
- Segment: 3px wide, 4px tall, 14 segment
- Animasyon YOK — statik

**Sağ:**
- stat_money.png (12px) + para değeri — üstte
- bulletfab.png (12px) + mermi değeri — altta
- Şehir ikonu (20px) + şehir adı — sağda yanında

---

## TICKER (height: 20px)
- Sol: yeşil nokta + online sayı (Oswald 8px)
- Sağ: kayan haberler 30s döngü (Oswald 9px)
- .tn=kırmızı · .ty=altın · .tq=gri · ayraç ✦ altın
- Border-bottom: 2.5px solid #111

---

## BOTTOM BAR (8 buton, fixed 76px)
- OFFENDER · ROBBERY · WHEELMAN · INSIDE JOB · FELONY · BUST OUT · KAÇAKCILIK · POLİGON
- GIF: 40×40px, etiket: CorleoneDue 7px, nowrap
- Tümü şimdilik işlevsiz

---

## RENKLER
| Değişken | Hex | Kullanım |
|----------|-----|---------|
| Altın | #C9A84C | Aktif, XP bar |
| Siyah | #111111 | Ana renk, border |
| Beyaz | #ffffff | Arka plan |
| CAN bar | #22c55e | Yeşil |
| DEF bar | #3b82f6 | Mavi |
| XP bar | #C9A84C | Altın |
| KS bar | #ef4444 | Kırmızı |
| K4 bg | #0e1a0a | Koyu yeşil-siyah |
| K4 sınır | #4a9030 | Yeşil dashed |

---

## FONTLAR
- **CorleoneDue**: Ana display font (raw.githubusercontent.com/.../CorleoneDue-Wp8v.ttf)
- **Bebas Neue**: Başlık, isim (Google Fonts)
- **Oswald**: UI label, ticker, stat (Google Fonts)

---

## GENEL TEKNİK KURALLAR
- Vibrasyon: goK() içinde navigator.vibrate(30)
- Overflow: body position:fixed, inset:0
- Ana alan padding-bottom: 76px
- text-transform: uppercase
- Geri tuşu: ◀ unicode — PNG kullanılmaz
- GIF overlay: JS style.display (classList değil)
- K3/K4: orijinal prototip renderları adapte edildi
- Bina popup: basit "YAKINDA" — tam bina sistemi henüz entegre değil
