// tos2 stuff
const roles = {
  admirer: 1, amnesiac: 2, bodyguard: 3, cleric: 4, coroner: 5, crusader: 6,
  deputy: 7, investigator: 8, jailor: 9, lookout: 10, mayor: 11, monarch: 12,
  prosecutor: 13, psychic: 14, retributionist: 15, seer: 16, sheriff: 17, spy: 18,
  tavernkeeper: 19, tracker: 20, trapper: 21, trickster: 22, veteran: 23, vigilante: 24,
  socialite: 54, marshal: 55, oracle: 56, pilgrim: 57, catalyst: 58,

  conjurer: 25, covenleader: 26, dreamweaver: 27, enchanter: 28, hexmaster: 29,
  illusionist: 30, jinx: 31, medusa: 32, necromancer: 33, poisoner: 34,
  potionmaster: 35, ritualist: 36, voodoomaster: 37, wildling: 38, witch: 39,
  covenite: 59, cultist: 60,

  arsonist: 40, baker: 41, berserker: 42, doomsayer: 43, executioner: 44, jester: 45,
  pirate: 46, plaguebearer: 47, serialkiller: 48, shroud: 49, soulcollector: 50,
  werewolf: 51, vampire: 52, cursedsoul: 53,
  famine: 250, war: 251, pestilence: 252, death: 253,

  stoned: 254
};

const factions = {
  town: 1, coven: 2, serialkiller: 3, arsonist: 4, werewolf: 5,
  shroud: 6, apocalypse: 7, executioner: 8, jester: 9, pirate: 10,
  doomsayer: 11, vampire: 12, cursedsoul: 13
};

// btos2 stuff
const btos2_roles = {
  admirer: 1, amnesiac: 2, bodyguard: 3, cleric: 4, coroner: 5, crusader: 6,
  deputy: 7, investigator: 8, jailor: 9, lookout: 10, mayor: 11, monarch: 12,
  prosecutor: 13, psychic: 14, retributionist: 15, seer: 16, sheriff: 17, spy: 18,
  tavernkeeper: 19, tracker: 20, trapper: 21, trickster: 22, veteran: 23, vigilante: 24,
  banshee: 54, jackal: 55, marshal: 56, judge: 57, auditor: 58, inquisitor: 59,
  starspawn: 60, oracle: 61, warlock: 62, catalyst: 63, cultist: 64, socialite: 65, pacifist: 66,

  conjurer: 25, covenleader: 26, dreamweaver: 27, enchanter: 28, hexmaster: 29,
  illusionist: 30, jinx: 31, medusa: 32, necromancer: 33, poisoner: 34,
  potionmaster: 35, ritualist: 36, voodoomaster: 37, wildling: 38, witch: 39,

  arsonist: 40, baker: 41, berserker: 42, doomsayer: 43, executioner: 44, jester: 45,
  pirate: 46, plaguebearer: 47, serialkiller: 48, shroud: 49, soulcollector: 50,
  werewolf: 51, vampire: 52, cursedsoul: 53,
  famine: 250, war: 251, pestilence: 252, death: 253,

  stoned: 254
};

const btos2_factions = {
  jackal: 33, frogs: 34, lions: 35, hawks: 36, unused: 37, judge: 38, auditor: 39, inquisitor: 40,
  starspawn: 41, egotist: 42, pandora: 43, compliance: 44
};

const factionStyle = {
  // tos2
  town: "color: #06E00C;",
  coven: "color: #B545FF;",
  doomsayer: "color: #00cc99;",
  executioner: "color: #949797;",
  jester: "color: #F5A6D4;",
  pirate: "color: #ECC23E;",
  arsonist: "color: #DB7601;",
  serialkiller: "color: #1D4DFC;",
  shroud: "color: #6699ff;",
  werewolf: "color: #9D7038;",
  apocalypse: "color: #FF004E;",
  vampire: "background: linear-gradient(to bottom, #FF0000, #6A1B1B); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  cursedsoul: "background: linear-gradient(to bottom, #B24CFF, #FFB24C); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  default: "color: #FFFFFF;",
  
  // btos2
  jackal: "background: linear-gradient(to bottom, #404040, #D0D0D0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  frogs: "color: #1E49CF;",
  lions: "color: #FFC34F;",
  hawks: "color: #A81538;",
  unused: "color: #E6956A;",
  judge: "background: linear-gradient(to bottom, #C77364, #C93D50); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  auditor: "background: linear-gradient(to bottom, #AEBA87, #E8FCC5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  inquisitor: "color: #821252;",
  starspawn: "background: linear-gradient(to bottom, #FCE79A, #999CFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  egotist: "background: linear-gradient(to bottom, #359F3F, #3F359F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  pandora: "background: linear-gradient(to bottom, #B545FF, #FF004E); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  compliance: "background: linear-gradient(to bottom, #2D44B5, #AE1B1E, #FC9F32); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
};

const displayNames = {
  // tos2
  admirer: "Admirer", amnesiac: "Amnesiac", bodyguard: "Bodyguard", cleric: "Cleric",
  coroner: "Coroner", crusader: "Crusader", deputy: "Deputy", investigator: "Investigator",
  jailor: "Jailor", lookout: "Lookout", mayor: "Mayor", monarch: "Monarch",
  prosecutor: "Prosecutor", psychic: "Psychic", retributionist: "Retributionist",
  seer: "Seer", sheriff: "Sheriff", spy: "Spy", tavernkeeper: "Tavern Keeper",
  tracker: "Tracker", trapper: "Trapper", trickster: "Trickster", veteran: "Veteran",
  vigilante: "Vigilante", socialite: "Socialite", marshal: "Marshal", oracle: "Oracle",
  pilgrim: "Pilgrim", catalyst: "Catalyst",

  conjurer: "Conjurer", covenleader: "Coven Leader", dreamweaver: "Dreamweaver",
  enchanter: "Enchanter", hexmaster: "Hex Master", illusionist: "Illusionist",
  jinx: "Jinx", medusa: "Medusa", necromancer: "Necromancer", poisoner: "Poisoner",
  potionmaster: "Potion Master", ritualist: "Ritualist", voodoomaster: "Voodoo Master",
  wildling: "Wildling", witch: "Witch", covenite: "Covenite", cultist: "Cultist",

  arsonist: "Arsonist", baker: "Baker", berserker: "Berserker", doomsayer: "Doomsayer",
  executioner: "Executioner", jester: "Jester", pirate: "Pirate",
  plaguebearer: "Plaguebearer", pestilence: "Pestilence", serialkiller: "Serial Killer",
  shroud: "Shroud", soulcollector: "Soul Collector", death: "Death",
  werewolf: "Werewolf", vampire: "Vampire", cursedsoul: "Cursed Soul",
  war: "War", famine: "Famine",

  // btos2
  banshee: "Banshee", jackal: "Jackal", judge: "Judge", auditor: "Auditor",
  inquisitor: "Inquisitor", starspawn: "Starspawn", warlock: "Warlock",
  pacifist: "Pacifist",

  stoned: "Stoned"
};

function populateDropdowns(showBTOS2) {
  const roleList = document.getElementById("roles");
  const factionList = document.getElementById("factions");

  roleList.innerHTML = "";
  factionList.innerHTML = "";

  const roleTable = showBTOS2 ? btos2_roles : roles;
  const factionTable = showBTOS2 ? { ...factions, ...btos2_factions } : factions;

  Object.keys(roleTable).forEach(r => {
    const name = displayNames[r] || r;
    roleList.appendChild(new Option(name));
  });

  Object.keys(factionTable).forEach(f => {
    factionList.appendChild(new Option(f));
  });
}

populateDropdowns(false);

document.getElementById("generate").addEventListener("click", () => {
  const roleRaw = document.getElementById("role").value.trim();
  const factionRaw = document.getElementById("faction").value.trim();
  const role = roleRaw.toLowerCase().replace(/\s+/g, "").replace(/\//g, "");
  const faction = factionRaw.toLowerCase().replace(/\s+/g, "");
  const showBTOS2 = document.getElementById("btos2Toggle").checked;

  const resultText = document.getElementById("resultText");
  const output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");

  const roleTable = showBTOS2 ? btos2_roles : roles;
  const factionTable = showBTOS2 ? { ...factions, ...btos2_factions } : factions;
  const factionColors = factionStyle;

  const roleKey = roleTable[role];
  const factionKey = factionTable[faction];

  if (!roleKey) {
    resultText.textContent = "❌ Unknown role name.";
    copyBtn.style.display = "none";
  } else if (!factionKey) {
    resultText.textContent = "❌ Unknown faction name.";
    copyBtn.style.display = "none";
  } else {
    const safeRole = (displayNames[role] || roleRaw)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const style = factionColors[faction] || factionColors.default;

    resultText.innerHTML = `<span class="role-display" style="${style}">${safeRole}</span>`;
    resultText.setAttribute("data-copy", `[[#${roleKey},${factionKey}]]`);
    copyBtn.style.display = "inline";
  }

  output.classList.remove("hidden");
});

document.getElementById("btos2Toggle").addEventListener("change", (e) => {
  const showBTOS2 = e.target.checked;
  populateDropdowns(showBTOS2);
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const resultText = document.getElementById("resultText");
  const text = resultText.getAttribute("data-copy") || resultText.textContent;
  navigator.clipboard.writeText(text);
  const btn = document.getElementById("copyBtn");
  btn.textContent = "✅";
  setTimeout(() => (btn.textContent = "📋"), 1200);
});
