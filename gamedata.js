// LaFamilia — GameData Ana Dosyası
// BASE_URL: https://mericaltinors1983-max.github.io/LaFamilia/
// Bu dosya tüm oyun itemlarını, araçları ve verileri içerir.
// Her sistem için PNG + özellik tanımı yapılacak (arabalar gibi).

// ═══════════════════════════════════════
// RANKLAR
// ═══════════════════════════════════════
export const RANKLAR = [
  { id: 1,  isim: 'Street Rat',  hayvan: '🐭 Fare',         xp: 0,         hp: 500  },
  { id: 2,  isim: 'Runner',      hayvan: '🐰 Tavşan',       xp: 1000,      hp: 600  },
  { id: 3,  isim: 'Hustler',     hayvan: '🦊 Tilki',        xp: 3000,      hp: 700  },
  { id: 4,  isim: 'Crook',       hayvan: '🐒 Maymun',       xp: 7000,      hp: 800  },
  { id: 5,  isim: 'Thug',        hayvan: '🐗 Yaban Domuzu', xp: 15000,     hp: 1000 },
  { id: 6,  isim: 'Gangster',    hayvan: '🐍 Yılan',        xp: 30000,     hp: 1500 },
  { id: 7,  isim: 'Enforcer',    hayvan: '🐍 Kobra',        xp: 60000,     hp: 2000 },
  { id: 8,  isim: 'Operator',    hayvan: '🐺 Kurt',         xp: 120000,    hp: 3000 },
  { id: 9,  isim: 'Hitman',      hayvan: '🦈 Köpekbalığı',  xp: 250000,    hp: 5000 },
  { id: 10, isim: 'Underboss',   hayvan: '🐆 Çita',         xp: 500000,    hp: 6000 },
  { id: 11, isim: 'Strategist',  hayvan: '🐊 Timsah',       xp: 1000000,   hp: 7000 },
  { id: 12, isim: 'Boss',        hayvan: '🐯 Kaplan',       xp: 2000000,   hp: 8000 },
  { id: 13, isim: 'Crew Chief',  hayvan: '🦅 Kartal',       xp: 4000000,   hp: 9000 },
  { id: 14, isim: 'Godfather',   hayvan: '🦁 Aslan',        xp: 8000000,   hp: 10000},
];

// ═══════════════════════════════════════
// SUCLAR
// ═══════════════════════════════════════
export const SUCLAR = [
  { id: 'offender',     isim: 'Offender',      cd: 300,   xp: 50,   paraMin: 10,     paraMax: 2000,   basariMin: 20, basariMax: 90 },
  { id: 'wheelman',     isim: 'Wheelman',       cd: 1800,  xp: 75,   paraMin: 0,      paraMax: 0,      basariMin: 20, basariMax: 90 },
  { id: 'armedrobbery', isim: 'Armed Robbery',  cd: 900,   xp: 200,  paraMin: 1000,   paraMax: 40000,  basariMin: 20, basariMax: 90 },
  { id: 'insidejob',    isim: 'Inside Job',     cd: 1800,  xp: 500,  paraMin: 500,    paraMax: 20000,  minRank: 4 },
  { id: 'felony',       isim: 'Felony',         cd: 43200, xp: 3000, paraMin: 6000000,paraMax: 10000000,minRank: 8 },
  { id: 'bigfelony',    isim: 'Big Felony',     cd: 259200,xp: 0,    paraMin: 15000000,paraMax: 20000000,minRank: 13 },
  { id: 'bustout',      isim: 'Bust Out',       cd: 0,     xp: 100,  paraMin: 0,      paraMax: 0 },
  { id: 'poligon1',     isim: 'Poligon P1',     cd: 600,   xp: 0,    paraMin: 0,      paraMax: 0 },
  { id: 'poligon2',     isim: 'Poligon P2',     cd: 600,   xp: 0,    paraMin: 0,      paraMax: 0 },
];

// ═══════════════════════════════════════
// UÇAKLAR
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// ═══════════════════════════════════════
export const UCAKLAR = [
  { id: 'ucak_t1', tier: 1, isim: 'Green Prop',  dosya: null, fiyat: 500000,   slot: 40,  seyahatIndirim: 0  },
  { id: 'ucak_t2', tier: 2, isim: 'Red Duster',  dosya: null, fiyat: 1500000,  slot: 75,  seyahatIndirim: 5  },
  { id: 'ucak_t3', tier: 3, isim: 'Air Courier', dosya: null, fiyat: 3000000,  slot: 100, seyahatIndirim: 10 },
  { id: 'ucak_t4', tier: 4, isim: 'Sky Liner',   dosya: null, fiyat: 5000000,  slot: 150, seyahatIndirim: 15 },
  { id: 'ucak_t5', tier: 5, isim: 'Shadow Jet',  dosya: null, fiyat: 10000000, slot: 220, seyahatIndirim: 20 },
];

// ═══════════════════════════════════════
// GEMİLER
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// ═══════════════════════════════════════
export const GEMILER = [
  { id: 'gemi_t1', tier: 1, isim: 'Rusty Barge',     dosya: null, fiyat: 300000,  slot: 25  },
  { id: 'gemi_t2', tier: 2, isim: 'Dark Harbor',      dosya: null, fiyat: 800000,  slot: 50  },
  { id: 'gemi_t3', tier: 3, isim: 'Iron Smuggler',    dosya: null, fiyat: 2000000, slot: 90  },
  { id: 'gemi_t4', tier: 4, isim: 'Black Tide',       dosya: null, fiyat: 4000000, slot: 140 },
  { id: 'gemi_t5', tier: 5, isim: 'The Leviathan',    dosya: null, fiyat: 7000000, slot: 230 },
];

// ═══════════════════════════════════════
// NPC PERSONELİ
// Her kanalda 1 personel, yükseltmede eski silinir fark ödenir
// sureIndirim: kaçakçılık süresini % olarak azaltır
// autoVip: auto kaçakçılık için gereken VIP seviyesi (0=gerek yok)
// ═══════════════════════════════════════
export const PERSONEL = {
  pilot: [
    { tier: 1, isim: 'Pilot',           fiyat: 1000000, sureIndirim: 0,  autoVip: 4 },
    { tier: 2, isim: 'Sr. Pilot',       fiyat: 2500000, sureIndirim: 10, autoVip: 4 },
    { tier: 3, isim: 'Ace Pilot',       fiyat: 5000000, sureIndirim: 25, autoVip: 4 },
  ],
  kaptan: [
    { tier: 1, isim: 'Kaptan',          fiyat: 1000000, sureIndirim: 0,  autoVip: 3 },
    { tier: 2, isim: 'Sr. Kaptan',      fiyat: 2000000, sureIndirim: 10, autoVip: 3 },
    { tier: 3, isim: 'Fleet Kaptan',    fiyat: 4000000, sureIndirim: 25, autoVip: 3 },
  ],
  conductor: [
    { tier: 1, isim: 'Conductor',       fiyat: 750000,  sureIndirim: 0,  autoVip: 0 },
    { tier: 2, isim: 'Sr. Conductor',   fiyat: 1500000, sureIndirim: 10, autoVip: 0 },
    { tier: 3, isim: 'Master Conductor',fiyat: 3000000, sureIndirim: 25, autoVip: 0 },
  ],
};

// ═══════════════════════════════════════
// KAÇAKÇILIK ÜRÜNLERİ
// PNG: urun_sigara.png, blood.png, dronee.png vb.
// ═══════════════════════════════════════
export const KACAK_URUNLER = [
  { id: 'sigara', isim: 'Sigara', dosya: 'urun_sigara.png', fiyatMin: 3,    fiyatMax: 6,    minRank: 0,  fabrika: 'Sigara Fabrikası' },
  { id: 'bira',   isim: 'Bira',   dosya: 'urun_bira.png',   fiyatMin: 8,    fiyatMax: 16,   minRank: 0,  fabrika: 'Bira Fabrikası'   },
  { id: 'pill',   isim: 'Pill',   dosya: 'urun_pill.png',   fiyatMin: 15,   fiyatMax: 30,   minRank: 0,  fabrika: 'Eczane'           },
  { id: 'kan',    isim: 'Kan',    dosya: 'blood.png',        fiyatMin: 85,   fiyatMax: 170,  minRank: 0,  fabrika: 'Hastane'          },
  { id: 'viski',  isim: 'Viski',  dosya: 'urun_viski.png',  fiyatMin: 45,   fiyatMax: 90,   minRank: 3,  fabrika: 'Viski Fabrikası'  },
  { id: 'chip',   isim: 'Chip',   dosya: 'urun_chip.png',   fiyatMin: 120,  fiyatMax: 240,  minRank: 6,  fabrika: null               },
  { id: 'drone',  isim: 'Drone',  dosya: 'dronee.png',      fiyatMin: 140,  fiyatMax: 280,  minRank: 5,  fabrika: 'Drone Fabrikası'  },
  { id: 'altin',  isim: 'Altın',  dosya: 'urun_altin.png',  fiyatMin: 300,  fiyatMax: 600,  minRank: 8,  fabrika: 'Altın Fabrikası'  },
  { id: 'elmas',  isim: 'Elmas',  dosya: 'urun_elmas.png',  fiyatMin: 750,  fiyatMax: 1400, minRank: 11, fabrika: 'Elmas Fabrikası'  },
  { id: 'white',  isim: 'White',  dosya: 'urun_white.png',  fiyatMin: 1500, fiyatMax: 2600, minRank: 13, fabrika: 'Laboratuvar'      },
];

// ═══════════════════════════════════════
// BODYGUARD (BG)
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// Formül: defMin + (kafaSayisi/100) * (defMax - defMin)
// ═══════════════════════════════════════
export const BODYGUARDS = [
  { tier: 1, dosya: null, fiyat: 500000,  defMin: 100,  defMax: 1000 },
  { tier: 2, dosya: null, fiyat: 1000000, defMin: 1000, defMax: 2000 },
  { tier: 3, dosya: null, fiyat: 2000000, defMin: 2000, defMax: 3000 },
  { tier: 4, dosya: null, fiyat: 3000000, defMin: 3000, defMax: 4000 },
  { tier: 5, dosya: null, fiyat: 5000000, defMin: 4000, defMax: 5000 },
];

// ═══════════════════════════════════════
// SUIT
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// Edinim: suçlardan drop + Auction House
// ═══════════════════════════════════════
export const SUIT = [
  { tier: 1, dosya: null, def: 1000 },
  { tier: 2, dosya: null, def: 2000 },
  { tier: 3, dosya: null, def: 3000 },
  { tier: 4, dosya: null, def: 4000 },
  { tier: 5, dosya: null, def: 5000 },
];

// ═══════════════════════════════════════
// ÇELİK YELEK
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// Edinim: suçlardan drop + Auction House
// ═══════════════════════════════════════
export const CELIK_YELEK = [
  { tier: 1, dosya: null, defMin: 100,  defMax: 1000  },
  { tier: 2, dosya: null, defMin: 1000, defMax: 3000  },
  { tier: 3, dosya: null, defMin: 3000, defMax: 6000  },
  { tier: 4, dosya: null, defMin: 6000, defMax: 8000  },
  { tier: 5, dosya: null, defMin: 8000, defMax: 10000 },
];

// ═══════════════════════════════════════
// ÇANTA
// PNG: henüz eklenmedi — arabalar gibi yapılacak
// Edinim: suçlardan drop + Auction House
// ═══════════════════════════════════════
export const CANTA = [
  { tier: 1, dosya: null, def: 1000 },
  { tier: 2, dosya: null, def: 2000 },
  { tier: 3, dosya: null, def: 3000 },
  { tier: 4, dosya: null, def: 4000 },
  { tier: 5, dosya: null, def: 5000 },
];

// ═══════════════════════════════════════
// SİLAHLAR (50 adet, T1–T5)
// Suçlardan drop + Auction House
// KS < 100: silah KS artırır
// KS = 100: silah bonus hasar çarpanı
// Formül: hasar = mermi × (KS/100) × (1 + bonus/100)
// ═══════════════════════════════════════
export const SILAHLAR = [

  // T1 (%1–%5)
  { id: 'st1_1',  tier: 1, isim: 'Rusty Revolver',   dosya: 'st1_1.png',  ksBonus: 1.0  },
  { id: 'st1_2',  tier: 1, isim: 'Flintlock',         dosya: 'st1_2.png',  ksBonus: 1.5  },
  { id: 'st1_3',  tier: 1, isim: 'Brown Colt',        dosya: 'st1_3.png',  ksBonus: 2.0  },
  { id: 'st1_4',  tier: 1, isim: 'Long Barrel',       dosya: 'st1_4.png',  ksBonus: 2.5  },
  { id: 'st1_5',  tier: 1, isim: 'Black Basic',       dosya: 'st1_5.png',  ksBonus: 3.0  },
  { id: 'st1_6',  tier: 1, isim: 'Blue Compact',      dosya: 'st1_6.png',  ksBonus: 3.5  },
  { id: 'st1_7',  tier: 1, isim: 'Street Gun',        dosya: 'st1_7.png',  ksBonus: 4.0  },
  { id: 'st1_8',  tier: 1, isim: 'Silver Slide',      dosya: 'st1_8.png',  ksBonus: 4.5  },
  { id: 'st1_9',  tier: 1, isim: 'Dark Trigger',      dosya: 'st1_9.png',  ksBonus: 4.8  },
  { id: 'st1_10', tier: 1, isim: 'Worn Piece',        dosya: 'st1_10.png', ksBonus: 5.0  },

  // T2 (%5–%9.5)
  { id: 'st2_1',  tier: 2, isim: 'Dark Compact',      dosya: 'st2_1.png',  ksBonus: 5.0  },
  { id: 'st2_2',  tier: 2, isim: 'Steel Pistol',      dosya: 'st2_2.png',  ksBonus: 5.5  },
  { id: 'st2_3',  tier: 2, isim: 'White Hawk',        dosya: 'st2_3.png',  ksBonus: 6.0  },
  { id: 'st2_4',  tier: 2, isim: 'Pink Slide',        dosya: 'st2_4.png',  ksBonus: 6.5  },
  { id: 'st2_5',  tier: 2, isim: 'Grey Glock',        dosya: 'st2_5.png',  ksBonus: 7.0  },
  { id: 'st2_6',  tier: 2, isim: 'Red Laser',         dosya: 'st2_6.png',  ksBonus: 7.5  },
  { id: 'st2_7',  tier: 2, isim: 'Black Heavy',       dosya: 'st2_7.png',  ksBonus: 8.0  },
  { id: 'st2_8',  tier: 2, isim: 'Twin Barrel',       dosya: 'st2_8.png',  ksBonus: 8.5  },
  { id: 'st2_9',  tier: 2, isim: 'Slim Shot',         dosya: 'st2_9.png',  ksBonus: 9.0  },
  { id: 'st2_10', tier: 2, isim: 'Tactical SMG',      dosya: 'st2_10.png', ksBonus: 9.5  },

  // T3 (%10–%14.5)
  { id: 'st3_1',  tier: 3, isim: 'Red Shotgun',       dosya: 'st3_1.png',  ksBonus: 10.0 },
  { id: 'st3_2',  tier: 3, isim: 'Red Uzi',           dosya: 'st3_2.png',  ksBonus: 10.5 },
  { id: 'st3_3',  tier: 3, isim: 'Dark Uzi',          dosya: 'st3_3.png',  ksBonus: 11.0 },
  { id: 'st3_4',  tier: 3, isim: 'Black AK',          dosya: 'st3_4.png',  ksBonus: 11.5 },
  { id: 'st3_5',  tier: 3, isim: 'Grey Rifle',        dosya: 'st3_5.png',  ksBonus: 12.0 },
  { id: 'st3_6',  tier: 3, isim: 'Orange Blaster',    dosya: 'st3_6.png',  ksBonus: 12.5 },
  { id: 'st3_7',  tier: 3, isim: 'Scope Pistol',      dosya: 'st3_7.png',  ksBonus: 13.0 },
  { id: 'st3_8',  tier: 3, isim: 'Heavy SMG',         dosya: 'st3_8.png',  ksBonus: 13.5 },
  { id: 'st3_9',  tier: 3, isim: 'Mech Gunner',       dosya: 'st3_9.png',  ksBonus: 14.0 },
  { id: 'st3_10', tier: 3, isim: 'Tan Assault',       dosya: 'st3_10.png', ksBonus: 14.5 },

  // T4 (%15–%19.5)
  { id: 'st4_1',  tier: 4, isim: 'Iron Assault',      dosya: 'st4_1.png',  ksBonus: 15.0 },
  { id: 'st4_2',  tier: 4, isim: 'Quad Barrel',       dosya: 'st4_2.png',  ksBonus: 15.5 },
  { id: 'st4_3',  tier: 4, isim: 'Grey Wolf',         dosya: 'st4_3.png',  ksBonus: 16.0 },
  { id: 'st4_4',  tier: 4, isim: 'Tactical Beast',    dosya: 'st4_4.png',  ksBonus: 16.5 },
  { id: 'st4_5',  tier: 4, isim: 'Combat Rig',        dosya: 'st4_5.png',  ksBonus: 17.0 },
  { id: 'st4_6',  tier: 4, isim: 'Silenced Striker',  dosya: 'st4_6.png',  ksBonus: 17.5 },
  { id: 'st4_7',  tier: 4, isim: 'Urban SMG',         dosya: 'st4_7.png',  ksBonus: 18.0 },
  { id: 'st4_8',  tier: 4, isim: 'Scope Master',      dosya: 'st4_8.png',  ksBonus: 18.5 },
  { id: 'st4_9',  tier: 4, isim: 'Heavy Runner',      dosya: 'st4_9.png',  ksBonus: 19.0 },
  { id: 'st4_10', tier: 4, isim: 'Wooden Fire',       dosya: 'st4_10.png', ksBonus: 19.5 },

  // T5 (%20–%30)
  { id: 'st5_1',  tier: 5, isim: 'Phantom AR',        dosya: 'st5_1.png',  ksBonus: 20   },
  { id: 'st5_2',  tier: 5, isim: 'Specter',           dosya: 'st5_2.png',  ksBonus: 21   },
  { id: 'st5_3',  tier: 5, isim: 'Inferno AK',        dosya: 'st5_3.png',  ksBonus: 22   },
  { id: 'st5_4',  tier: 5, isim: 'Gold Striker',      dosya: 'st5_4.png',  ksBonus: 23   },
  { id: 'st5_5',  tier: 5, isim: 'Blue Reaper',       dosya: 'st5_5.png',  ksBonus: 24   },
  { id: 'st5_6',  tier: 5, isim: 'Shadow',            dosya: 'st5_6.png',  ksBonus: 25   },
  { id: 'st5_7',  tier: 5, isim: 'Frost Gunner',      dosya: 'st5_7.png',  ksBonus: 26   },
  { id: 'st5_8',  tier: 5, isim: 'Ice Sniper',        dosya: 'st5_8.png',  ksBonus: 27   },
  { id: 'st5_9',  tier: 5, isim: 'Neon Fury',         dosya: 'st5_9.png',  ksBonus: 28   },
  { id: 'st5_10', tier: 5, isim: 'Amber Hawk',        dosya: 'st5_10.png', ksBonus: 30   },
];

// ═══════════════════════════════════════
// ARABALAR (50 adet, T1–T5)
// Yarışta sadece T3, T4, T5 kullanılır
// ═══════════════════════════════════════
export const ARABALAR = [

  // T1 (80–120 km/h) — Yarışta kullanılamaz
  { id: 't1_1',  tier: 1, isim: 'Green Roadster', dosya: 't1_1.png',  hizMin: 80,  hizMax: 88,  yaris: false },
  { id: 't1_2',  tier: 1, isim: 'Old Timer',       dosya: 't1_2.png',  hizMin: 83,  hizMax: 91,  yaris: false },
  { id: 't1_3',  tier: 1, isim: 'Pink Wagon',      dosya: 't1_3.png',  hizMin: 86,  hizMax: 94,  yaris: false },
  { id: 't1_4',  tier: 1, isim: 'Rust Bucket',     dosya: 't1_4.png',  hizMin: 89,  hizMax: 97,  yaris: false },
  { id: 't1_5',  tier: 1, isim: 'Blue Noble',      dosya: 't1_5.png',  hizMin: 92,  hizMax: 100, yaris: false },
  { id: 't1_6',  tier: 1, isim: 'Gold Vintage',    dosya: 't1_6.png',  hizMin: 95,  hizMax: 103, yaris: false },
  { id: 't1_7',  tier: 1, isim: 'Red Hauler',      dosya: 't1_7.png',  hizMin: 98,  hizMax: 107, yaris: false },
  { id: 't1_8',  tier: 1, isim: 'Grey Ghost',      dosya: 't1_8.png',  hizMin: 102, hizMax: 111, yaris: false },
  { id: 't1_9',  tier: 1, isim: 'Green Bruiser',   dosya: 't1_9.png',  hizMin: 106, hizMax: 115, yaris: false },
  { id: 't1_10', tier: 1, isim: 'Teal Titan',      dosya: 't1_10.png', hizMin: 110, hizMax: 120, yaris: false },

  // T2 (120–160 km/h) — Yarışta kullanılamaz
  { id: 't2_1',  tier: 2, isim: 'Green Jeep',      dosya: 't2_1.png',  hizMin: 120, hizMax: 130, yaris: false },
  { id: 't2_2',  tier: 2, isim: 'Wild Buggy',      dosya: 't2_2.png',  hizMin: 123, hizMax: 133, yaris: false },
  { id: 't2_3',  tier: 2, isim: 'Red Spark',       dosya: 't2_3.png',  hizMin: 126, hizMax: 136, yaris: false },
  { id: 't2_4',  tier: 2, isim: 'Sunset Cruiser',  dosya: 't2_4.png',  hizMin: 129, hizMax: 140, yaris: false },
  { id: 't2_5',  tier: 2, isim: 'Blue Drift',      dosya: 't2_5.png',  hizMin: 133, hizMax: 143, yaris: false },
  { id: 't2_6',  tier: 2, isim: 'Yellow Flash',    dosya: 't2_6.png',  hizMin: 136, hizMax: 146, yaris: false },
  { id: 't2_7',  tier: 2, isim: 'Devil Racer',     dosya: 't2_7.png',  hizMin: 140, hizMax: 150, yaris: false },
  { id: 't2_8',  tier: 2, isim: 'Black Baron',     dosya: 't2_8.png',  hizMin: 143, hizMax: 153, yaris: false },
  { id: 't2_9',  tier: 2, isim: 'Gold Phantom',    dosya: 't2_9.png',  hizMin: 147, hizMax: 156, yaris: false },
  { id: 't2_10', tier: 2, isim: 'Blue King',       dosya: 't2_10.png', hizMin: 151, hizMax: 160, yaris: false },

  // T3 (160–200 km/h) — Yarışta kullanılabilir
  { id: 't3_1',  tier: 3, isim: 'Green Patrol',    dosya: 't3_1.png',  hizMin: 160, hizMax: 170, yaris: true },
  { id: 't3_2',  tier: 3, isim: 'Mint Cruiser',    dosya: 't3_2.png',  hizMin: 163, hizMax: 173, yaris: true },
  { id: 't3_3',  tier: 3, isim: 'Desert Wolf',     dosya: 't3_3.png',  hizMin: 166, hizMax: 176, yaris: true },
  { id: 't3_4',  tier: 3, isim: 'Iron Buggy',      dosya: 't3_4.png',  hizMin: 169, hizMax: 180, yaris: true },
  { id: 't3_5',  tier: 3, isim: 'Red Ranger',      dosya: 't3_5.png',  hizMin: 172, hizMax: 183, yaris: true },
  { id: 't3_6',  tier: 3, isim: 'Pink Rebel',      dosya: 't3_6.png',  hizMin: 175, hizMax: 186, yaris: true },
  { id: 't3_7',  tier: 3, isim: 'Yellow Racer',    dosya: 't3_7.png',  hizMin: 179, hizMax: 190, yaris: true },
  { id: 't3_8',  tier: 3, isim: 'Red Pickup',      dosya: 't3_8.png',  hizMin: 183, hizMax: 193, yaris: true },
  { id: 't3_9',  tier: 3, isim: 'Flame Runner',    dosya: 't3_9.png',  hizMin: 187, hizMax: 196, yaris: true },
  { id: 't3_10', tier: 3, isim: 'Black Stealth',   dosya: 't3_10.png', hizMin: 192, hizMax: 200, yaris: true },

  // T4 (200–240 km/h) — Yarışta kullanılabilir
  { id: 't4_1',  tier: 4, isim: 'Red Rocket',      dosya: 't4_1.png',  hizMin: 200, hizMax: 212, yaris: true },
  { id: 't4_2',  tier: 4, isim: 'Blue Claw',       dosya: 't4_2.png',  hizMin: 203, hizMax: 215, yaris: true },
  { id: 't4_3',  tier: 4, isim: 'Sky Cruiser',     dosya: 't4_3.png',  hizMin: 206, hizMax: 218, yaris: true },
  { id: 't4_4',  tier: 4, isim: 'Scarlet Edge',    dosya: 't4_4.png',  hizMin: 209, hizMax: 221, yaris: true },
  { id: 't4_5',  tier: 4, isim: 'Dirt King',       dosya: 't4_5.png',  hizMin: 212, hizMax: 224, yaris: true },
  { id: 't4_6',  tier: 4, isim: 'Night Stalker',   dosya: 't4_6.png',  hizMin: 215, hizMax: 227, yaris: true },
  { id: 't4_7',  tier: 4, isim: 'Red Phantom',     dosya: 't4_7.png',  hizMin: 218, hizMax: 230, yaris: true },
  { id: 't4_8',  tier: 4, isim: 'Lime Striker',    dosya: 't4_8.png',  hizMin: 222, hizMax: 234, yaris: true },
  { id: 't4_9',  tier: 4, isim: 'Golden Viper',    dosya: 't4_9.png',  hizMin: 226, hizMax: 238, yaris: true },
  { id: 't4_10', tier: 4, isim: 'Blue Flame',      dosya: 't4_10.png', hizMin: 230, hizMax: 240, yaris: true },

  // T5 (240–300 km/h) — Yarışta kullanılabilir
  { id: 't5_1',  tier: 5, isim: 'Silver Ghost',    dosya: 't5_1.png',  hizMin: 240, hizMax: 252, yaris: true },
  { id: 't5_2',  tier: 5, isim: 'Iron Hawk',       dosya: 't5_2.png',  hizMin: 243, hizMax: 255, yaris: true },
  { id: 't5_3',  tier: 5, isim: 'Copper Fury',     dosya: 't5_3.png',  hizMin: 246, hizMax: 258, yaris: true },
  { id: 't5_4',  tier: 5, isim: 'Stone Runner',    dosya: 't5_4.png',  hizMin: 248, hizMax: 260, yaris: true },
  { id: 't5_5',  tier: 5, isim: 'Crimson Blade',   dosya: 't5_5.png',  hizMin: 250, hizMax: 263, yaris: true },
  { id: 't5_6',  tier: 5, isim: 'Gold Predator',   dosya: 't5_6.png',  hizMin: 252, hizMax: 265, yaris: true },
  { id: 't5_7',  tier: 5, isim: 'White Shadow',    dosya: 't5_7.png',  hizMin: 255, hizMax: 268, yaris: true },
  { id: 't5_8',  tier: 5, isim: 'Venom',           dosya: 't5_8.png',  hizMin: 258, hizMax: 272, yaris: true },
  { id: 't5_9',  tier: 5, isim: 'Purple Reign',    dosya: 't5_9.png',  hizMin: 262, hizMax: 278, yaris: true },
  { id: 't5_10', tier: 5, isim: 'Acid Flash',      dosya: 't510.png',  hizMin: 268, hizMax: 300, yaris: true },
];

// ═══════════════════════════════════════
// TIER RENK SİSTEMİ
// ═══════════════════════════════════════
export const TIER_RENK = {
  1: { renk: '#888888', isim: 'Common' },
  2: { renk: '#22c55e', isim: 'Uncommon' },
  3: { renk: '#3b82f6', isim: 'Rare' },
  4: { renk: '#a855f7', isim: 'Epic' },
  5: { renk: '#C9A84C', isim: 'Legendary' },
};

// ═══════════════════════════════════════
// KOLYE (25 adet, 5 tier × 5 adet)
// Hasar bonusu: formül çarpanı
// Edinim: drop + Auction House
// ═══════════════════════════════════════
export const KOLYE = [
  { id: 'k_t1_1', tier: 1, isim: 'Street Chain',    dosya: 'kolye_t1.png', hasarBonus: 1.0  },
  { id: 'k_t1_2', tier: 1, isim: 'Iron Link',       dosya: 'kolye_t1.png', hasarBonus: 1.3  },
  { id: 'k_t1_3', tier: 1, isim: 'Rusty Pendant',   dosya: 'kolye_t1.png', hasarBonus: 1.5  },
  { id: 'k_t1_4', tier: 1, isim: 'Dark Cord',       dosya: 'kolye_t1.png', hasarBonus: 1.7  },
  { id: 'k_t1_5', tier: 1, isim: 'Bone Chain',      dosya: 'kolye_t1.png', hasarBonus: 2.0  },

  { id: 'k_t2_1', tier: 2, isim: 'Silver Thread',   dosya: 'kolye_t2.png', hasarBonus: 2.2  },
  { id: 'k_t2_2', tier: 2, isim: 'Steel Cross',     dosya: 'kolye_t2.png', hasarBonus: 2.5  },
  { id: 'k_t2_3', tier: 2, isim: 'Black Rope',      dosya: 'kolye_t2.png', hasarBonus: 3.0  },
  { id: 'k_t2_4', tier: 2, isim: 'Shadow Link',     dosya: 'kolye_t2.png', hasarBonus: 3.5  },
  { id: 'k_t2_5', tier: 2, isim: 'Iron Cross',      dosya: 'kolye_t2.png', hasarBonus: 4.0  },

  { id: 'k_t3_1', tier: 3, isim: 'Carved Stone',    dosya: 'kolye_t3.png', hasarBonus: 4.2  },
  { id: 'k_t3_2', tier: 3, isim: 'Dark Crystal',    dosya: 'kolye_t3.png', hasarBonus: 4.5  },
  { id: 'k_t3_3', tier: 3, isim: 'Obsidian Drop',   dosya: 'kolye_t3.png', hasarBonus: 5.0  },
  { id: 'k_t3_4', tier: 3, isim: 'Blood Gem',       dosya: 'kolye_t3.png', hasarBonus: 5.5  },
  { id: 'k_t3_5', tier: 3, isim: 'Onyx Chain',      dosya: 'kolye_t3.png', hasarBonus: 6.0  },

  { id: 'k_t4_1', tier: 4, isim: 'Gold Fang',       dosya: 'kolye_t4.png', hasarBonus: 6.2  },
  { id: 'k_t4_2', tier: 4, isim: 'Jade Pendant',    dosya: 'kolye_t4.png', hasarBonus: 6.5  },
  { id: 'k_t4_3', tier: 4, isim: 'Ruby Strand',     dosya: 'kolye_t4.png', hasarBonus: 7.0  },
  { id: 'k_t4_4', tier: 4, isim: 'Diamond Shard',   dosya: 'kolye_t4.png', hasarBonus: 7.5  },
  { id: 'k_t4_5', tier: 4, isim: 'Platinum Cross',  dosya: 'kolye_t4.png', hasarBonus: 8.0  },

  { id: 'k_t5_1', tier: 5, isim: 'Dragon Tooth',    dosya: 'kolye_t5.png', hasarBonus: 8.2  },
  { id: 'k_t5_2', tier: 5, isim: 'Venom Drop',      dosya: 'kolye_t5.png', hasarBonus: 8.5  },
  { id: 'k_t5_3', tier: 5, isim: 'Shadow Crown',    dosya: 'kolye_t5.png', hasarBonus: 9.0  },
  { id: 'k_t5_4', tier: 5, isim: 'Eclipse Chain',   dosya: 'kolye_t5.png', hasarBonus: 9.5  },
  { id: 'k_t5_5', tier: 5, isim: 'Godfather Crest', dosya: 'kolye_t5.png', hasarBonus: 10.0 },
];

// ═══════════════════════════════════════
// YÜZÜK (25 adet, 5 tier × 5 adet)
// Hasar bonusu: formül çarpanı
// Edinim: drop + Auction House
// ═══════════════════════════════════════
export const YUZUK = [
  { id: 'r_t1_1', tier: 1, isim: 'Street Ring',    dosya: 'r_tier1.png', hasarBonus: 1.0  },
  { id: 'r_t1_2', tier: 1, isim: 'Iron Band',      dosya: 'r_tier1.png', hasarBonus: 1.3  },
  { id: 'r_t1_3', tier: 1, isim: 'Rusty Loop',     dosya: 'r_tier1.png', hasarBonus: 1.5  },
  { id: 'r_t1_4', tier: 1, isim: 'Dark Circle',    dosya: 'r_tier1.png', hasarBonus: 1.7  },
  { id: 'r_t1_5', tier: 1, isim: 'Bone Ring',      dosya: 'r_tier1.png', hasarBonus: 2.0  },

  { id: 'r_t2_1', tier: 2, isim: 'Silver Band',    dosya: 'r_tier2.png', hasarBonus: 2.2  },
  { id: 'r_t2_2', tier: 2, isim: 'Steel Ring',     dosya: 'r_tier2.png', hasarBonus: 2.5  },
  { id: 'r_t2_3', tier: 2, isim: 'Black Loop',     dosya: 'r_tier2.png', hasarBonus: 3.0  },
  { id: 'r_t2_4', tier: 2, isim: 'Shadow Ring',    dosya: 'r_tier2.png', hasarBonus: 3.5  },
  { id: 'r_t2_5', tier: 2, isim: 'Iron Seal',      dosya: 'r_tier2.png', hasarBonus: 4.0  },

  { id: 'r_t3_1', tier: 3, isim: 'Stone Band',     dosya: 'r_tier3.png', hasarBonus: 4.2  },
  { id: 'r_t3_2', tier: 3, isim: 'Dark Gem Ring',  dosya: 'r_tier3.png', hasarBonus: 4.5  },
  { id: 'r_t3_3', tier: 3, isim: 'Obsidian Loop',  dosya: 'r_tier3.png', hasarBonus: 5.0  },
  { id: 'r_t3_4', tier: 3, isim: 'Blood Ring',     dosya: 'r_tier3.png', hasarBonus: 5.5  },
  { id: 'r_t3_5', tier: 3, isim: 'Onyx Seal',      dosya: 'r_tier3.png', hasarBonus: 6.0  },

  { id: 'r_t4_1', tier: 4, isim: 'Gold Band',      dosya: 'r_tier4.png', hasarBonus: 6.2  },
  { id: 'r_t4_2', tier: 4, isim: 'Jade Ring',      dosya: 'r_tier4.png', hasarBonus: 6.5  },
  { id: 'r_t4_3', tier: 4, isim: 'Ruby Loop',      dosya: 'r_tier4.png', hasarBonus: 7.0  },
  { id: 'r_t4_4', tier: 4, isim: 'Diamond Ring',   dosya: 'r_tier4.png', hasarBonus: 7.5  },
  { id: 'r_t4_5', tier: 4, isim: 'Platinum Seal',  dosya: 'r_tier4.png', hasarBonus: 8.0  },

  { id: 'r_t5_1', tier: 5, isim: 'Dragon Ring',    dosya: 'r_tier5.png', hasarBonus: 8.2  },
  { id: 'r_t5_2', tier: 5, isim: 'Venom Loop',     dosya: 'r_tier5.png', hasarBonus: 8.5  },
  { id: 'r_t5_3', tier: 5, isim: 'Shadow Seal',    dosya: 'r_tier5.png', hasarBonus: 9.0  },
  { id: 'r_t5_4', tier: 5, isim: 'Eclipse Ring',   dosya: 'r_tier5.png', hasarBonus: 9.5  },
  { id: 'r_t5_5', tier: 5, isim: 'Godfather Ring', dosya: 'r_tier5.png', hasarBonus: 10.0 },
];

// ═══════════════════════════════════════
// ÇELİK YELEK (25 adet, 5 tier × 5 adet)
// Her tierde 2 PNG paylaşılır
// Edinim: drop + Auction House
// ═══════════════════════════════════════
export const CELIK_YELEK = [
  { id: 'cy_t1_1', tier: 1, isim: 'Thin Plate',      dosya: 'yt1_1.png', def: 100   },
  { id: 'cy_t1_2', tier: 1, isim: 'Street Vest',     dosya: 'yt1_2.png', def: 300   },
  { id: 'cy_t1_3', tier: 1, isim: 'Worn Guard',      dosya: 'yt1_1.png', def: 500   },
  { id: 'cy_t1_4', tier: 1, isim: 'Basic Shield',    dosya: 'yt1_2.png', def: 750   },
  { id: 'cy_t1_5', tier: 1, isim: 'Light Armor',     dosya: 'yt1_1.png', def: 1000  },

  { id: 'cy_t2_1', tier: 2, isim: 'Steel Vest',      dosya: 'yt2_1.png', def: 1200  },
  { id: 'cy_t2_2', tier: 2, isim: 'Iron Guard',      dosya: 'yt2_2.png', def: 1500  },
  { id: 'cy_t2_3', tier: 2, isim: 'Riot Plate',      dosya: 'yt2_1.png', def: 1800  },
  { id: 'cy_t2_4', tier: 2, isim: 'Combat Shield',   dosya: 'yt2_2.png', def: 2200  },
  { id: 'cy_t2_5', tier: 2, isim: 'Enforcer Vest',   dosya: 'yt2_1.png', def: 3000  },

  { id: 'cy_t3_1', tier: 3, isim: 'Tactical Vest',   dosya: 'yt3_1.png', def: 3200  },
  { id: 'cy_t3_2', tier: 3, isim: 'Ballistic Guard', dosya: 'yt3_2.png', def: 3800  },
  { id: 'cy_t3_3', tier: 3, isim: 'Assault Plate',   dosya: 'yt3_1.png', def: 4500  },
  { id: 'cy_t3_4', tier: 3, isim: 'Combat Armor',    dosya: 'yt3_2.png', def: 5200  },
  { id: 'cy_t3_5', tier: 3, isim: 'Strike Shield',   dosya: 'yt3_1.png', def: 6000  },

  { id: 'cy_t4_1', tier: 4, isim: 'Heavy Guard',     dosya: 'yt4_1.png', def: 6200  },
  { id: 'cy_t4_2', tier: 4, isim: 'Titan Vest',      dosya: 'yt4_2.png', def: 6500  },
  { id: 'cy_t4_3', tier: 4, isim: 'War Plate',       dosya: 'yt4_1.png', def: 7000  },
  { id: 'cy_t4_4', tier: 4, isim: 'Iron Fortress',   dosya: 'yt4_2.png', def: 7500  },
  { id: 'cy_t4_5', tier: 4, isim: 'Siege Armor',     dosya: 'yt4_1.png', def: 8000  },

  { id: 'cy_t5_1', tier: 5, isim: 'Shadow Armor',    dosya: 'yt5_1.png', def: 8200  },
  { id: 'cy_t5_2', tier: 5, isim: 'Phantom Vest',    dosya: 'yt5_2.png', def: 8500  },
  { id: 'cy_t5_3', tier: 5, isim: 'Dark Fortress',   dosya: 'yt5_1.png', def: 9000  },
  { id: 'cy_t5_4', tier: 5, isim: 'Eclipse Guard',   dosya: 'yt5_2.png', def: 9500  },
  { id: 'cy_t5_5', tier: 5, isim: 'Godfather Plate', dosya: 'yt5_1.png', def: 10000 },
];

// ═══════════════════════════════════════
// SUIT (25 adet, 5 tier × 5 adet)
// Her tierde 2 PNG paylaşılır
// Edinim: drop + Auction House
// ═══════════════════════════════════════
export const SUIT = [
  { id: 's_t1_1', tier: 1, isim: 'Street Cloth',     dosya: 'suit1_1.png', def: 200  },
  { id: 's_t1_2', tier: 1, isim: 'Worn Jacket',      dosya: 'suit1_2.png', def: 400  },
  { id: 's_t1_3', tier: 1, isim: 'Dark Coat',        dosya: 'suit1_1.png', def: 600  },
  { id: 's_t1_4', tier: 1, isim: 'Basic Suit',       dosya: 'suit1_2.png', def: 800  },
  { id: 's_t1_5', tier: 1, isim: 'Slim Fit',         dosya: 'suit1_1.png', def: 1000 },

  { id: 's_t2_1', tier: 2, isim: 'Sharp Suit',       dosya: 'suit2_1.png', def: 1100 },
  { id: 's_t2_2', tier: 2, isim: 'Steel Thread',     dosya: 'suit2_2.png', def: 1300 },
  { id: 's_t2_3', tier: 2, isim: 'Enforcer Coat',    dosya: 'suit2_1.png', def: 1500 },
  { id: 's_t2_4', tier: 2, isim: 'Shadow Jacket',    dosya: 'suit2_2.png', def: 1700 },
  { id: 's_t2_5', tier: 2, isim: 'Iron Suit',        dosya: 'suit2_1.png', def: 2000 },

  { id: 's_t3_1', tier: 3, isim: 'Tactical Coat',    dosya: 'suit3_1.png', def: 2100 },
  { id: 's_t3_2', tier: 3, isim: 'Phantom Suit',     dosya: 'suit3_2.png', def: 2300 },
  { id: 's_t3_3', tier: 3, isim: 'Dark Formal',      dosya: 'suit3_1.png', def: 2500 },
  { id: 's_t3_4', tier: 3, isim: 'Combat Jacket',    dosya: 'suit3_2.png', def: 2700 },
  { id: 's_t3_5', tier: 3, isim: 'Elite Coat',       dosya: 'suit3_1.png', def: 3000 },

  { id: 's_t4_1', tier: 4, isim: 'Armored Suit',     dosya: 'suit4_1.png', def: 3100 },
  { id: 's_t4_2', tier: 4, isim: 'Black Sovereign',  dosya: 'suit4_2.png', def: 3300 },
  { id: 's_t4_3', tier: 4, isim: 'War Formal',       dosya: 'suit4_1.png', def: 3500 },
  { id: 's_t4_4', tier: 4, isim: 'Titan Coat',       dosya: 'suit4_2.png', def: 3700 },
  { id: 's_t4_5', tier: 4, isim: 'Shadow Sovereign', dosya: 'suit4_1.png', def: 4000 },

  { id: 's_t5_1', tier: 5, isim: 'Eclipse Suit',     dosya: 'suit5_1.png', def: 4100 },
  { id: 's_t5_2', tier: 5, isim: 'Dark Legend',      dosya: 'suit5_2.png', def: 4300 },
  { id: 's_t5_3', tier: 5, isim: 'Phantom Formal',   dosya: 'suit5_1.png', def: 4500 },
  { id: 's_t5_4', tier: 5, isim: 'Shadow Don',       dosya: 'suit5_2.png', def: 4700 },
  { id: 's_t5_5', tier: 5, isim: 'Godfather Suit',   dosya: 'suit5_1.png', def: 5000 },
];

// ═══════════════════════════════════════
// ÇANTA (50 adet, 5 tier × 10 adet)
// Her çantanın kendi PNG'si var
// Edinim: drop + Auction House
// ═══════════════════════════════════════
export const CANTA = [
  { id: 'c_t1_01', tier: 1, isim: 'Street Pouch',     dosya: 'canta_t1_01.png', def: 100  },
  { id: 'c_t1_02', tier: 1, isim: 'Worn Sack',        dosya: 'canta_t1_02.png', def: 150  },
  { id: 'c_t1_03', tier: 1, isim: 'Ragged Bag',       dosya: 'canta_t1_03.png', def: 200  },
  { id: 'c_t1_04', tier: 1, isim: 'Canvas Tote',      dosya: 'canta_t1_04.png', def: 250  },
  { id: 'c_t1_05', tier: 1, isim: 'Dark Pouch',       dosya: 'canta_t1_05.png', def: 300  },
  { id: 'c_t1_06', tier: 1, isim: 'Cloth Sack',       dosya: 'canta_t1_06.png', def: 330  },
  { id: 'c_t1_07', tier: 1, isim: 'Runner Bag',       dosya: 'canta_t1_07.png', def: 360  },
  { id: 'c_t1_08', tier: 1, isim: 'Alley Pack',       dosya: 'canta_t1_08.png', def: 400  },
  { id: 'c_t1_09', tier: 1, isim: 'Shadow Pouch',     dosya: 'canta_t1_09.png', def: 450  },
  { id: 'c_t1_10', tier: 1, isim: 'Iron Sack',        dosya: 'canta_t1_10.png', def: 500  },

  { id: 'c_t2_01', tier: 2, isim: 'Steel Pouch',      dosya: 'canta_t2_01.png', def: 550  },
  { id: 'c_t2_02', tier: 2, isim: 'Leather Bag',      dosya: 'canta_t2_02.png', def: 650  },
  { id: 'c_t2_03', tier: 2, isim: 'Combat Sack',      dosya: 'canta_t2_03.png', def: 750  },
  { id: 'c_t2_04', tier: 2, isim: 'Enforcer Pack',    dosya: 'canta_t2_04.png', def: 850  },
  { id: 'c_t2_05', tier: 2, isim: 'Dark Leather',     dosya: 'canta_t2_05.png', def: 950  },
  { id: 'c_t2_06', tier: 2, isim: 'Shadow Pack',      dosya: 'canta_t2_06.png', def: 1050 },
  { id: 'c_t2_07', tier: 2, isim: 'Iron Tote',        dosya: 'canta_t2_07.png', def: 1150 },
  { id: 'c_t2_08', tier: 2, isim: 'Tactical Bag',     dosya: 'canta_t2_08.png', def: 1250 },
  { id: 'c_t2_09', tier: 2, isim: 'Street Duffel',    dosya: 'canta_t2_09.png', def: 1350 },
  { id: 'c_t2_10', tier: 2, isim: 'Black Courier',    dosya: 'canta_t2_10.png', def: 1500 },

  { id: 'c_t3_01', tier: 3, isim: 'Riot Pack',        dosya: 'canta_t3_01.png', def: 1550 },
  { id: 'c_t3_02', tier: 3, isim: 'Armored Sack',     dosya: 'canta_t3_02.png', def: 1650 },
  { id: 'c_t3_03', tier: 3, isim: 'Combat Duffel',    dosya: 'canta_t3_03.png', def: 1750 },
  { id: 'c_t3_04', tier: 3, isim: 'Steel Courier',    dosya: 'canta_t3_04.png', def: 1850 },
  { id: 'c_t3_05', tier: 3, isim: 'Dark Duffel',      dosya: 'canta_t3_05.png', def: 1950 },
  { id: 'c_t3_06', tier: 3, isim: 'Phantom Pack',     dosya: 'canta_t3_06.png', def: 2050 },
  { id: 'c_t3_07', tier: 3, isim: 'Iron Duffel',      dosya: 'canta_t3_07.png', def: 2150 },
  { id: 'c_t3_08', tier: 3, isim: 'Shadow Courier',   dosya: 'canta_t3_08.png', def: 2250 },
  { id: 'c_t3_09', tier: 3, isim: 'Tactical Duffel',  dosya: 'canta_t3_09.png', def: 2350 },
  { id: 'c_t3_10', tier: 3, isim: 'Elite Pack',       dosya: 'canta_t3_10.png', def: 2500 },

  { id: 'c_t4_01', tier: 4, isim: 'War Pack',         dosya: 'canta_t4_01.png', def: 2600 },
  { id: 'c_t4_02', tier: 4, isim: 'Titan Bag',        dosya: 'canta_t4_02.png', def: 2750 },
  { id: 'c_t4_03', tier: 4, isim: 'Heavy Duffel',     dosya: 'canta_t4_03.png', def: 2900 },
  { id: 'c_t4_04', tier: 4, isim: 'Iron Fortress Bag',dosya: 'canta_t4_04.png', def: 3050 },
  { id: 'c_t4_05', tier: 4, isim: 'Dark War Pack',    dosya: 'canta_t4_05.png', def: 3200 },
  { id: 'c_t4_06', tier: 4, isim: 'Siege Bag',        dosya: 'canta_t4_06.png', def: 3350 },
  { id: 'c_t4_07', tier: 4, isim: 'Phantom Duffel',   dosya: 'canta_t4_07.png', def: 3500 },
  { id: 'c_t4_08', tier: 4, isim: 'Shadow War Bag',   dosya: 'canta_t4_08.png', def: 3650 },
  { id: 'c_t4_09', tier: 4, isim: 'Eclipse Pack',     dosya: 'canta_t4_09.png', def: 3800 },
  { id: 'c_t4_10', tier: 4, isim: 'Sovereign Bag',    dosya: 'canta_t4_10.png', def: 4000 },

  { id: 'c_t5_01', tier: 5, isim: 'Dark Legend Bag',  dosya: 'canta_t5_01.png', def: 4100 },
  { id: 'c_t5_02', tier: 5, isim: 'Phantom Vault',    dosya: 'canta_t5_02.png', def: 4200 },
  { id: 'c_t5_03', tier: 5, isim: 'Shadow Dynasty',   dosya: 'canta_t5_03.png', def: 4300 },
  { id: 'c_t5_04', tier: 5, isim: 'Eclipse Carrier',  dosya: 'canta_t5_04.png', def: 4400 },
  { id: 'c_t5_05', tier: 5, isim: 'Obsidian Pack',    dosya: 'canta_t5_05.png', def: 4500 },
  { id: 'c_t5_06', tier: 5, isim: 'Titan Vault',      dosya: 'canta_t5_06.png', def: 4600 },
  { id: 'c_t5_07', tier: 5, isim: 'War Dynasty',      dosya: 'canta_t5_07.png', def: 4700 },
  { id: 'c_t5_08', tier: 5, isim: 'Iron Legend',      dosya: 'canta_t5_08.png', def: 4800 },
  { id: 'c_t5_09', tier: 5, isim: 'Shadow Vault',     dosya: 'canta_t5_09.png', def: 4900 },
  { id: 'c_t5_10', tier: 5, isim: 'Godfather Bag',    dosya: 'canta_t5_10.png', def: 5000 },
];

// ═══════════════════════════════════════
// BODYGUARD (25 adet, 5 tier × 5 adet)
// NPC'den satın alınır, kafalarla upgrade
// Formül: def = defMin + (kafa/100) × (defMax-defMin)
// ═══════════════════════════════════════
export const BODYGUARDS = [
  // T1
  { id: 'bg_t1_1', tier: 1, isim: 'Pip',     dosya: 'bgt1_1.png',   defMin: 100,  defMax: 1000, fiyat: 200000  },
  { id: 'bg_t1_2', tier: 1, isim: 'Enzo',    dosya: 'bgt1_2.png',   defMin: 250,  defMax: 1000, fiyat: 300000  },
  { id: 'bg_t1_3', tier: 1, isim: 'Sal',     dosya: 'bgt1_3.png',   defMin: 400,  defMax: 1000, fiyat: 350000  },
  { id: 'bg_t1_4', tier: 1, isim: 'Gus',     dosya: 'bgt1_4.png',   defMin: 600,  defMax: 1000, fiyat: 400000  },
  { id: 'bg_t1_5', tier: 1, isim: 'Rex',     dosya: 'bgt1_5.png',   defMin: 750,  defMax: 1000, fiyat: 500000  },

  // T2
  { id: 'bg_t2_1', tier: 2, isim: 'Joey',    dosya: 'pt2_1.png',    defMin: 700,  defMax: 2000, fiyat: 500000  },
  { id: 'bg_t2_2', tier: 2, isim: 'Danny',   dosya: 'pt2_2.png',    defMin: 900,  defMax: 2000, fiyat: 650000  },
  { id: 'bg_t2_3', tier: 2, isim: 'Sal',     dosya: 'pt2_3.png',    defMin: 1100, defMax: 2000, fiyat: 800000  },
  { id: 'bg_t2_4', tier: 2, isim: 'Ray',     dosya: 'pt2_4.png',    defMin: 1300, defMax: 2000, fiyat: 900000  },
  { id: 'bg_t2_5', tier: 2, isim: 'Tony',    dosya: 'pt2_5.png',    defMin: 1500, defMax: 2000, fiyat: 1000000 },

  // T3
  { id: 'bg_t3_1', tier: 3, isim: 'Luca',    dosya: 'people1.png',  defMin: 1500, defMax: 3000, fiyat: 1000000 },
  { id: 'bg_t3_2', tier: 3, isim: 'Marco',   dosya: 'people2.png',  defMin: 1700, defMax: 3000, fiyat: 1300000 },
  { id: 'bg_t3_3', tier: 3, isim: 'Rico',    dosya: 'people4.png',  defMin: 1900, defMax: 3000, fiyat: 1500000 },
  { id: 'bg_t3_4', tier: 3, isim: 'Bruno',   dosya: 'people22.png', defMin: 2100, defMax: 3000, fiyat: 1700000 },
  { id: 'bg_t3_5', tier: 3, isim: 'Dino',    dosya: 'people.png',   defMin: 2300, defMax: 3000, fiyat: 2000000 },

  // T4
  { id: 'bg_t4_1', tier: 4, isim: 'Niko',    dosya: 'bgt4_1.png',   defMin: 2500, defMax: 4000, fiyat: 2000000 },
  { id: 'bg_t4_2', tier: 4, isim: 'Cortez',  dosya: 'bgt4_2.png',   defMin: 2700, defMax: 4000, fiyat: 2300000 },
  { id: 'bg_t4_3', tier: 4, isim: 'Dredd',   dosya: 'bgt4_3.png',   defMin: 2900, defMax: 4000, fiyat: 2500000 },
  { id: 'bg_t4_4', tier: 4, isim: 'Kane',    dosya: 'bgt4_4.png',   defMin: 3100, defMax: 4000, fiyat: 2700000 },
  { id: 'bg_t4_5', tier: 4, isim: 'Riggs',   dosya: 'bgt4_5.png',   defMin: 3300, defMax: 4000, fiyat: 3000000 },

  // T5
  { id: 'bg_t5_1', tier: 5, isim: 'Escobar', dosya: 'escobar.png',  defMin: 3500, defMax: 5000, fiyat: 3000000 },
  { id: 'bg_t5_2', tier: 5, isim: 'Montana', dosya: 'montana.png',  defMin: 3200, defMax: 5000, fiyat: 3500000 },
  { id: 'bg_t5_3', tier: 5, isim: 'Michael', dosya: 'micheal.png',  defMin: 3800, defMax: 5000, fiyat: 4000000 },
  { id: 'bg_t5_4', tier: 5, isim: 'Wick',    dosya: 'wick.png',     defMin: 4000, defMax: 5000, fiyat: 4500000 },
  { id: 'bg_t5_5', tier: 5, isim: 'Vito',    dosya: 'vito.png',     defMin: 4200, defMax: 5000, fiyat: 5000000 },
];
