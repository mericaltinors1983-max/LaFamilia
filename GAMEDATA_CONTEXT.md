# LaFamilia — GAMEDATA CONTEXT
> Claude Mobile icin okunabilir ozet. gamedata.js'teki TUM sistemlerin ozeti.
> Son guncelleme: 2026-04-16

---

## RANKLAR (14 rank)
| Rank | Isim | Hayvan | XP | HP |
|------|------|--------|-----|-----|
| 1 | Street Rat | Fare | 0 | 500 |
| 2 | Runner | Tavsan | 1000 | 600 |
| 3 | Hustler | Tilki | 3000 | 700 |
| 4 | Crook | Maymun | 7000 | 800 |
| 5 | Thug | Yaban Domuzu | 15000 | 1000 |
| 6 | Gangster | Yilan | 30000 | 1500 |
| 7 | Enforcer | Kobra | 60000 | 2000 |
| 8 | Operator | Kurt | 120000 | 3000 |
| 9 | Hitman | Kopekbaligi | 250000 | 5000 |
| 10 | Underboss | Cita | 500000 | 6000 |
| 11 | Strategist | Timsah | 1000000 | 7000 |
| 12 | Boss | Kaplan | 2000000 | 8000 |
| 13 | Crew Chief | Kartal | 4000000 | 9000 |
| 14 | Godfather | Aslan | 8000000 | 10000 |

---

## SUCLAR
| Suc | CD | XP | Para | Min Rank |
|-----|----|----|------|----------|
| Offender | 5dk | 50 | $10-$2K | - |
| Wheelman | 30dk | 75 | araba drop | - |
| Armed Robbery | 15dk | 200 | $1K-$40K | - |
| Inside Job | 30dk | 500 | $500-$20K | R4 |
| Felony | 12saat | 3000 | $5M-$10M (chance bazli) | R8 |
| Big Felony | 72saat | 6000 | $10M-$20M (chance bazli) | R11 |
| Bust Out | - | 100 | - | - |

### Basari Oranlari (R1-R14)
- Offender: 20-90%
- Armed Rob: 15-85%
- Inside Job: 0,0,0,20-70% (R4+)
- Wheelman: 25-90%
- Felony: formul bazli (cap %140)
- Big Felony: formul bazli (cap %140)

### Hapis Sureleri (saniye, rank bazli)
- Offender: R1-5=23s, R6-10=45s, R11-14=90s
- Wheelman: 45/90/135s
- Inside Job: 135/225/360s
- Armed Rob: 360/540/810s
- Felony: R8=180 → R14=900
- Big Felony: sabit 1800s (30dk)

---

## FELONY FORMULU
```
chance = FELONY_BASE[liderRank] + (liderRank * 1.5)
  + (nisanci1KS/100) * 10
  + (2.nisanci varsa: 5 + (nisanci2KS/100)*10)
  + (surusBecerisi/100) * 15
  + aracTier bonusu {1:0, 2:2, 3:5, 4:8, 5:12}
  + TNT varsa +3
Cap: %140
```
FELONY_BASE: R8=50, R9=55, R10=60, R11=65, R12=70, R13=75, R14=80

## BIG FELONY FORMULU
```
chance = 25 (baz)
  + 4 silah katkisi (tier base + hasarBonus/5)
  + 2 araba katkisi (tier base + (hizMax-80)/20)
  + 2 bomba * 3
  + 9 uye ort rank bonusu {8:0,9:2,10:4,11:7,12:10,13:15,14:20}
  + KS bonusu (>80:+18, >60:+12, >40:+7, >20:+3)
Cap: %140
```

---

## DROP SISTEMI

### Felony/BIF — 5 Grup Drop Tablosu
| Grup | Aralik | Kafa | Item | Bonus | Hapis |
|------|--------|------|------|-------|-------|
| 1 | <%100 | T1 | T1 | 1 uyeye %25T2, %10T3 | 100-chance |
| 2 | %100-%130 | %70T2/%30T3 +T4 | %70T2/%30T3 | 1 uyeye %10T4, %1T5 | %20→%5 |
| 3 | %130-%135 | T4 | T3 | %15T4, %5T5, +1 ek T4 | %5 |
| 4 | %135-%140 | T5 | T4 | %10T5, +1 ek T5 | yok |
| 5 | %140+ | T5 | T5 | ek T5 silah + ek T5 item | yok |

### Felony/BIF Para Tablosu (chance bazli)
- Felony: <%130=$5M, %130=$6M → +$0.4M/puan → %140+=$10M
- BIF: <%130=$10M, %130=$12M → +$0.8M/puan → %140+=$20M

### Offender/Armed Rob/Inside Job — Rank Bazli Drop
| Tier | Min Rank | Offender item/kafa | AR item/kafa | IJ item/kafa |
|------|----------|-------------------|--------------|--------------|
| T1 | R1+ | 19%/19% | 24%/34% | 34%/37% |
| T2 | R1+ | 15%/17% | 20%/22% | 32%/35% |
| T3 | R8+ | 5%/10% | 10%/15% | 20%/30% |
| T4 | R11+ | 0.2%/2% | 0.5%/5% | 1%/10% |
| T5 | R13+ | 0.02%/0.2% | 0.05%/0.5% | 0.1%/1% |

- Item = silah/suit/yelek/yuzuk/canta/kolye (rastgele). Araba/gemi/ucak DAHIL DEGIL.
- Kafa = BG heads → kafaBank[tier]
- Items → player.inbox → bildirim ekranindan "AL"
- BG drop YOK, sadece kafa duser

### Wheelman — Araba Drop (tier bazli, rank bazli sans)
- T5: R12'den itibaren, max %0.1
- T4: R10'dan itibaren, max %10
- T3: R5'ten itibaren, max %20
- T2: R1'den, max %40
- T1: R1'den, max %70

---

## ITEM KATEGORILERI

### Silahlar (50 adet, T1-T5 x10)
- hasarBonus: T1=%1-5, T2=%5-9.5, T3=%10-14.5, T4=%15-19.5, T5=%20-40
- Formul: hasar = mermi * (KS/100) * (1 + (silah+kolye+yuzuk)/100)

### Kolye (25 adet, T1-T5 x5) — hasarBonus: T1=1-2, T5=8.2-15
### Yuzuk (25 adet, T1-T5 x5) — hasarBonus: T1=1-2, T5=8.2-15
### Celik Yelek (25 adet, T1-T5 x5) — def: T1=100-1000, T5=8200-10000
### Suit (25 adet, T1-T5 x5) — def: T1=200-1000, T5=4100-5000
### Canta (50 adet, T1-T5 x10) — def: T1=100-500, T5=4100-5000

### Tier Renkleri
- T1: #888 (Common/Gri)
- T2: #22c55e (Uncommon/Yesil)
- T3: #3b82f6 (Rare/Mavi)
- T4: #a855f7 (Epic/Mor)
- T5: #C9A84C (Legendary/Altin)

### Satis Sistemi
- Satis fiyati = alis fiyati * %50
- Garaj/Personals/Envanter'den satilabilir
- Villa satisi YOK

---

## ARABALAR (50 adet, T1-T5 x10)
- T1: 80-120 km/h, $2K-$10K, yaris YOK
- T2: 120-160 km/h, $12K-$45K, yaris YOK
- T3: 160-200 km/h, $50K-$125K, yaris VAR
- T4: 200-240 km/h, $135K-$200K, yaris VAR
- T5: 240-300 km/h, $220K-$500K, yaris VAR

## UCAKLAR (5 adet, T1-T5)
- T1: $500K, 40 slot, %0 indirim
- T5: $10M, 220 slot, %20 indirim

## GEMILER (5 adet, T1-T5)
- T1: $300K, 25 slot, %0 indirim
- T5: $7M, 230 slot, %20 indirim

---

## BODYGUARDS (25 adet, T1-T5 x5)
- 5 slot, her BG'den max 1
- Kafa ile upgrade: def = defMin + (kafa/100) * (defMax-defMin)
- Max 100 kafa per BG
- Kafa gorseli: head_base.png + tintColor=TIER_RENK[tier]
- T1: defMin 100-750, defMax 1000, fiyat $200K-$500K
- T5: defMin 3200-4200, defMax 5000, fiyat $3M-$5M
- 5x T5 full upgrade = 25.000 DEF

---

## PERSONEL (pilot/kaptan/conductor, 3 tier)
- Sadece AUTO kacakcilikta gerekli (manuel'de degil)
- Pilot: AUTO ucak. Kaptan: AUTO gemi. Conductor: AUTO tren.
- T1: sureIndirim %0 | T2: %10 | T3: %25
- autoVip: pilot=4, kaptan=3, conductor=0

---

## KACAKCILIK
### Urunler (10 adet): Sigara→White ($3-$2600 arasi, rank bazli acilma)
### Rota Turleri: ic/komsu/ayni_kita/farkli_kita
### Arac Turleri: konteyner(tren)/port(gemi)/airport(ucak)
### Sureler (dakika): ic 5-15dk, farkli_kita 20-30dk
### Sehir Carpanlari: istanbul 1.00 → hongkong 1.48
### Liman Sehirleri: istanbul, izmir, trabzon, napoli, sicilya, hamburg, stpetersburg, vladivostok, sanghay, hongkong, shenzhen, tokyo, yokohama, osaka, newyork, miami, tijuana, rio, salvador, fortaleza, cartagena
### AUTO: max 8 tur, personel gerekli

---

## DEFANS SISTEMI
- Flat DEF = yelek(10K) + suit(5K) + canta(5K) + BG(25K) + aktivite(10K) = 55K max
- DEF % = flat DEF / 55000 * 100
- Villa: %carpan (max %20 — 40 villa %12 + aktif %3 + tamamlama %5)
- PvP hasar sirasi: Suit → Yelek → BG → Can

---

## VILLA SISTEMI
- 40 sehir, 11 grup (aile sehri + 10 ulke), sirali acilma
- Her villa +%0.3 DEF. 40 villa = %12.
- Aktif villa +%3 (ticaret/suc kapali). Tamamlama +%5. MAX %20.
- Aile ulkesinde %70 indirim
- Fiyatlar: $1M-$5M (gruba gore)

---

## AILE (FAMILY) SISTEMI
### 4 Default Aile: Corleone(kirmizi), Barzini(mavi), Tattaglia(yesil), Stracci(mor)
### Kurma: R12+, $10M, HQ sehri sabit
### Slot: $10M/slot, max 4 slot = 100 uye + 2 yonetici
### Hiyerarsi: Patron(1) → Consigliere(1) → Capo(4) → Uye
### Kasa: herkes yatirir, Boss/Consig cekar
### Yetki: Patron = consig ata + uye at + mesaj + crusher + slot al + dagit
### Consigliere = uye at + mesaj + crusher
### Basvuru: Boss/Consig onaylar veya reddeder
### Crusher: araba → 12 mermi (HQ'da)
### Guc skoru: uye rank * 1000 (bina puanlari server'da eklenecek)

### Sehir Kontrolu
- 4 bina gerekli: Mermi Fab + Casino + 2 pasif gelir binasi
- Kontrol → haritada sehir rengi aile rengi + %5 komisyon (Kitchen/Front)
- Savunma bonusu YOK

### Bina Puanlari (toplam 100)
| Bina | Puan |
|------|------|
| Mermi Fab | 13 |
| Casino | 13 |
| Laboratuvar | 11 |
| Elmas Fab | 9 |
| AVM | 9 |
| Diger 9 bina | 5'er |

---

## BINALAR (24 bina)
### Public (7): Airport, Station, Bank, Safehouse, Prison, Gazette, Port
### Kitchen (11): Ammo, Lab, Beer, Hastane, Whiskey, Diamond, Gold, Cigar, Pill, Drone, Chip
### Front (6): Casino, Hotel, Bar, Pawn, Gym, Mall
- Her sehirde ayni bina seti, farkli x/y konumlari

---

## HARITA
### 10 Ulke: Turkiye, Italya, Almanya, Rusya, Cin, Japonya, ABD, Meksika, Brezilya, Kolombiya
### 40 Sehir: her ulke 4 sehir
### 3 Katman: K1 dunya → K2 ulke sehirleri → K3 sehir ici (binalar)
### Voronoi cells: her sehir icin SVG path + aile rengiyle boyanir

---

## AKTIVITE SISTEMI
- Gunluk max 5 saat. Tek aktif. 25 saat unlock.
- Para: Balik($5K/s) → Bitcoin($100K/s)
- DEF: Kos(+50/s) → Gym(+175/s), max 10K
- KS: Ava Cik(+0.05) → Atis Talimi(+0.10), gunde 1

---

## BUSTOUT
- Basari: %10 baslangic + her 10 basarili = +%1, max %90
- Fail: hapis ek 45-135s + kefalet ek
- Max 3 hak per hapis seansi
- Baskasini kurtarma: basarisiz → kurtarici da hapse duser

---

## POLIGON
- 10dk CD, her kazanista +0.0025 KS, kazanma esigi 10 skor

---

## MUZIK (BGM)
- Aile → Till Paradiso
- Casino → Sneaky Snitch
- Diger her yer → Dark Fog

---

## TICKER HABERLERI
Kayan gazete metinleri: "ISTANBUL OPERASYONU", "NAPOLI KARTELI GUCLANIYOR" vb.

---

## BAYRAK RENKLERI
Her ulke 4 renk (4 sehre dagitilir): turkey=['#e30a17','#fff','#b00710','#7a0510'] vb.
