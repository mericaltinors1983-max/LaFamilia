# LaFamilia — Proje Kararları (06.04.2026)

## AKTİF PLATFORM
- **React Native + Expo Go** (HTML prototip terk edildi)
- Test: Expo Go uygulaması üzerinden (iOS + Android)
- GitHub Pages: `https://mericaltinors1983-max.github.io/LaFamilia/` — asset sunucusu olarak kullanılır

---

## ASSET STRATEJİSİ
- Tüm PNG ve GIF'ler GitHub Pages'ten URL ile yüklenir — lokal kopyalanmaz
- **Tüm görsel bileşenler `expo-image` kullanır** — `react-native` Image kullanılmaz
- `expo-image` iOS dahil her platformda GIF animasyonunu destekler

```tsx
// ✅ Her yerde bu kullanılır
import { Image } from 'expo-image';

<Image
  source={{ uri: 'https://mericaltinors1983-max.github.io/LaFamilia/nav_karakter.png' }}
  style={{ width: 19, height: 19 }}
/>
```

**Base URL sabiti:**
```ts
export const BASE_URL = 'https://mericaltinors1983-max.github.io/LaFamilia';
```

---

## FONTLAR
| Font | Paket |
|------|-------|
| Oswald | `@expo-google-fonts/oswald` |
| Bebas Neue | `@expo-google-fonts/bebas-neue` |
| CorleoneDue | `expo-font` + raw GitHub URL |

```ts
// CorleoneDue yükleme
import * as Font from 'expo-font';
await Font.loadAsync({
  CorleoneDue: 'https://raw.githubusercontent.com/mericaltinors1983-max/LaFamilia/main/CorleoneDue-Wp8v.ttf'
});
```

---

## EKRAN YAPISI (yukarıdan aşağıya)
1. **TopNav** (2 sıra × 8 ikon) — sabit yükseklik
2. **ProgressBar** — sabit yükseklik
3. **Ticker** — sabit yükseklik
4. **Ana Alan** (harita / ekranlar) — `flex: 1`
5. **BottomBar** — sabit yükseklik, en altta

```tsx
<SafeAreaView style={{ flex: 1 }}>
  <TopNav />
  <ProgressBar />
  <Ticker />
  <View style={{ flex: 1 }}>
    {/* aktif ekran */}
  </View>
  <BottomBar />
</SafeAreaView>
```

---

## TOP NAV
- 2 sıra, her sıra 8 ikon
- Her item: PNG (19px) + metin etiketi (CorleoneDue 6px, altında)
- Aktif item: beyaz arka plan + alt border 2px siyah
- Badge: kırmızı daire, sağ üstte (mesaj, bildirim için)
- Her satır yüksekliği: 34px

**Sıra 1:** KARAKTER · ENVANTER · BİNALAR · HARİTA · MESAJ · BİLDİRİM · EVENT · AYARLAR  
**Sıra 2:** FAMILY · CRIME · BANKA · CASİNO · AKTİVİTE · YARIŞ · SATIN AL · GAZETE

---

## PROGRESS BAR (height: 40px)

**Sol:** `rank_animal_8.png` (26×26px)

**Orta — 2×2 Pixel Barlar:**
- Sol kolon: CAN (yeşil #22c55e) / XP (altın #C9A84C)
- Sağ kolon: DEF (mavi #3b82f6) / KS (kırmızı #ef4444)
- Segment: 3px wide, 4px tall, 14 segment — statik, animasyon yok

**Sağ:**
- `stat_money.png` (12px) + para değeri — üstte
- `bulletfab.png` (12px) + mermi değeri — altta
- `city_istanbul.png` (20px) + şehir adı — yanında

---

## TICKER (height: 20px)
- Sol: yeşil nokta + online sayı (Oswald 8px)
- Sağ: kayan haberler 30s döngü (Oswald 9px)
- Renk sınıfları: `.tn`=kırmızı · `.ty`=altın · `.tq`=gri · ayraç ✦ altın
- Alt border: 2.5px solid #111

---

## BOTTOM BAR (8 buton, en altta sabit)
- OFFENDER · ROBBERY · WHEELMAN · INSIDE JOB · FELONY · BUST OUT · KAÇAKCILIK · POLİGON
- Her buton: GIF 40×40px (`expo-image`) + etiket CorleoneDue 7px, nowrap
- Tümü şimdilik işlevsiz

---

## EKRANLAR (K1→K4 akışı)
| Ekran | Açıklama |
|-------|----------|
| K1 | Dünya haritası — `dunya.png` fullscreen + logo + "WORLD IS YOURS" + TAP TO EXPLORE |
| K2 | Ülke seçim grid — 10 ülke PNG kartı (3-3-3-1 dizilim, son satır ortada Kolombiya) |
| K3 | Ülke şekli haritası (mapsicon) + 4 şehir noktası + alt liste (şehir PNG, aile placeholder, progress bar) |
| K4 | Şehir haritası — CartoDB tile (light_nolabels, z=11, 2×2 grid) + 3 sekme (PUBLIC/KITCHEN/FRONT) + 24 bina ikonu |

K2→K3 geçişinde ülke GIF'i tam ekran 1 kez oynar (her ülkenin gerçek GIF süresi App.tsx'te `gifMs` alanında).
K3 → K4: ülke haritasındaki şehir noktasına veya alt liste satırına tıklayınca direkt geçiş.

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
| Aktif nav border | #f97316 | Turuncu (TopNav aktif sekme alt çizgisi) |
| K4 sekme aktif | #f97316 | Turuncu (PUBLIC/KITCHEN/FRONT aktif sekme) |

---

## GENEL TEKNİK KURALLAR
- **Tüm text:** `textTransform: 'uppercase'`
- **Geri butonu:** `back.png` (44×44px) — K2/K3/K4 header'larında kullanılır
- **K3 harita:** mapsicon CDN (`https://cdn.jsdelivr.net/gh/djaiss/mapsicon@master/all/{cc}/256.png`) ile gerçek ülke şekli; şehir noktaları yüzdesel (x, y) konumlandırma; `country.scale` per-country (1.0 / 1.35 / 1.5)
- **K4 harita:** CartoDB tile (`https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png`) — z=11, 2×2 grid, şehir lat/lng → tile X/Y dönüşümü (`tileXY` fonksiyonu). 24 bina yüzdesel (x, y) ile harita üzerine yerleştirilir, 3 sekme ile gruplandırılır.
- **react-native-svg:** KULLANILMIYOR — kuruldu sonra kaldırıldı
- **Chip Fabrikası:** KITCHEN binası, id:`chipfab`, ikon:`bina_chip.png`, rankMin:5, üretim:400, fiyat:7.500.000 — şehir hakimiyetine etki etmez, Chip ürünü üretir
- **Image bileşeni:** Her yerde `expo-image`, asla `react-native` Image
- **Font:** sadece `Corleone` (dosya: `CorleoneDue-Wp8v.ttf`, GitHub raw URL'den `useFonts` ile yüklenir). Oswald/Bebas henüz eklenmedi.

---

## PROJE YAPISI (mevcut)
```
lafamilia/
├── App.tsx              ← TÜM kod tek dosyada (tüm ekranlar, stiller, veri)
├── app.json
├── index.ts
├── package.json
└── assets/              ← lokal Expo asset'leri (ikon vs.)
```

App.tsx içinde:
- BASE / BARS / COUNTRIES / COUNTRY_CITIES / BUILDINGS sabitleri
- NavItem, K1Screen, K2Screen, LoadingScreen, K3Screen, K4Screen, MapScreen, ProgressBar, BottomBar bileşenleri
- StyleSheet `s` objesi en altta

Henüz components/ klasörüne bölünmedi.

---

## PAKETLER (kullanılan)
```bash
npx expo install expo-image expo-font expo-status-bar react-native-safe-area-context
```

Zustand, expo-haptics, react-native-svg, google fonts paketleri ŞU AN kullanılmıyor.
