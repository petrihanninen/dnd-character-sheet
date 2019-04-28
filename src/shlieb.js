export default {
  general: {
    name: {
      first: "Sliabh",
      nick: "Beartooth",
      last: "Vaimei-Laga"
    },
    bg: "Outlander, Tribal Nomad",
    race: "Goliath",
    class: "Barbarian",
    alignment: "Neutral"
  },
  stats: {
    ac: 15,
    initiative: 2,
    speed: 40,
    proficiency: 3,
    level: 5,
    hp: 55,
    abilities: {
      str: { val: 16, prof: true },
      dex: { val: 14, prof: false },
      con: { val: 16, prof: true },
      int: { val: 8, prof: false },
      wis: { val: 12, prof: false },
      cha: { val: 8, prof: false }
    },
    skills: {
      acr: { prof: false },
      ani: { prof: true },
      arc: { prof: false },
      ath: { prof: true },
      dec: { prof: false },
      his: { prof: false },
      ins: { prof: false },
      int: { prof: false },
      inv: { prof: false },
      med: { prof: false },
      nat: { prof: false },
      perc: { prof: true },
      perf: { prof: false },
      pers: { prof: false },
      rel: { prof: false },
      sli: { prof: false },
      ste: { prof: false },
      sur: { prof: true }
    }
  },
  features: [
    { name: "Stone's Endurance", descr: "...", use: ["passive"] },
    { name: "Powerful Build", descr: "...", use: ["passive"] },
    { name: "Mountain Born", descr: "...", use: ["action"] },
    { name: "Wanderer", descr: "...", use: ["action"] },
    { name: "Rage", descr: "...", use: ["action"] },
    { name: "Reckless Attack", descr: "...", use: ["action"] },
    { name: "Danger Sense", descr: "...", use: ["reaction"] },
    { name: "Extra Attack", descr: "...", use: ["action"] },
    { name: "Spirit Seeker", descr: "...", use: ["action"] },
    { name: "Totem Spirit - Bear", descr: "...", use: ["action"] },
    { name: "Great Weapon Mastery", descr: "...", use: ["action"] }
  ],
  equipment: {
    proficiencies: {
      armor: ["Light", "Medium", "Shield"],
      weapons: ["Simple", "Martial"]
    },
    money: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 515,
      pp: 0
    },
    weapons: [
      {
        name: "Greataxe",
        dmg: "1d12",
        attrs: ["melee"]
      },
      {
        name: "Handaxe",
        dmg: "1d6",
        attrs: ["melee", "thrown"],
        amount: 2
      },
      {
        name: "Javelin",
        dmg: "1d6",
        attrs: ["thrown"],
        amount: 4
      }
    ],
    others: [
      {
        name: "Alchemist's Fire",
        descr: "..."
      },
      {
        name: "Hunting Trap",
        descr: "..."
      },
      {
        name: "Explorer's pack",
        descr: "..."
      },
      {
        name: "Hajusuola",
        descr: "..."
      }
    ]
  }
};
