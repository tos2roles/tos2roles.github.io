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

const roleList = document.getElementById("roles");
const factionList = document.getElementById("factions");
Object.keys(roles).forEach(r => roleList.appendChild(new Option(r)));
Object.keys(factions).forEach(f => factionList.appendChild(new Option(f)));

document.getElementById("generate").addEventListener("click", () => {
  const roleInput = document.getElementById("role").value.trim().toLowerCase();
  const factionInput = document.getElementById("faction").value.trim().toLowerCase();
  const output = document.getElementById("output");
  const resultText = document.getElementById("resultText");

  const roleKey = roles[roleInput];
  const factionKey = factions[factionInput];

  if (!roleKey) {
    resultText.textContent = "❌ Unknown role name.";
    document.getElementById("copyBtn").style.display = "none";
  } else if (!factionKey) {
    resultText.textContent = "❌ Unknown faction name.";
    document.getElementById("copyBtn").style.display = "none";
  } else {
    resultText.textContent = `[[#${roles[roleInput]}, ${factions[factionInput]}]]`;
    document.getElementById("copyBtn").style.display = "inline";
  }

  output.classList.remove("hidden");
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("resultText").textContent;
  navigator.clipboard.writeText(text);
  const btn = document.getElementById("copyBtn");
  btn.textContent = "✅";
  setTimeout(() => (btn.textContent = "📋"), 1200);
});
