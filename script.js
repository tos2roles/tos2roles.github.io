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
  werewolf: 51, vampire: 52, cursedsoul: 53, famine: 250, war: 251, pestilence: 252,
  death: 253,

  stoned: 254
};

const factions = {
  town: 1, coven: 2, serialkiller: 3, arsonist: 4, werewolf: 5,
  shroud: 6, apocalypse: 7, executioner: 8, jester: 9, pirate: 10,
  doomsayer: 11, vampire: 12, cursedsoul: 13
};

const btos2_roles = {
	admirer: 1, amnesiac: 2, bodyguard: 3, cleric: 4, coroner: 5, crusader: 6,
	deputy: 7, investigator: 8, jailor: 9, lookout: 10, mayor: 11, monarch: 12,
	prosecutor: 13, psychic: 14, retributionist: 15, seer: 16, sheriff: 17, spy: 18,
	tavernkeeper: 19, tracker: 20, trapper: 21, trickster: 22, veteran: 23, vigilante: 24,
	marshal: 56, pilgrim: 57, catalyst: 63, socialite: 65, pacifist: 66, 

	conjurer: 25, covenleader: 26, dreamweaver: 27, enchanter: 28, hexmaster: 29,
	illusionist: 30, jinx: 31, medusa: 32, necromancer: 33, poisoner: 34,
	potionmaster: 35, ritualist: 36, voodoomaster: 37, wildling: 38, witch: 39,
	banshee: 54, covenite: 59, cultist: 64,

	arsonist: 40, baker: 41, berserker: 42, doomsayer: 43, executioner: 44, jester: 45,
	pirate: 46, plaguebearer: 47, serialkiller: 48, shroud: 49, soulcollector: 50,
	werewolf: 51, vampire: 52, cursedsoul: 53, jackal: 55, auditor: 58, inquisitor: 59, 
	starspawn: 60, warlock: 62, famine: 250, war: 251, pestilence: 252, death: 253,

	stoned: 254,
};


const btos2_factions = {
  jackal: 33, frogs: 34, lions: 35, hawks: 36, unused: 37, judge: 38, auditor: 39, inquisitor: 40,
  starspawn: 41, egotist: 42, pandora: 43, compliance: 44
};

const factionStyle = {
  town: "color: #06E00C;", coven: "color: #B545FF;", doomsayer: "color: #00cc99;",
  executioner: "color: #949797;", jester: "color: #F5A6D4;", pirate: "color: #ECC23E;",
  arsonist: "color: #DB7601;", serialkiller: "color: #1D4DFC;", shroud: "color: #6699ff;",
  werewolf: "color: #9D7038;", apocalypse: "color: #FF004E;", default: "color: #E6D6B1;",
  vampire: "background: linear-gradient(to bottom, #FF0000, #6A1B1B); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  cursedsoul: "background: linear-gradient(to bottom, #B24CFF, #FFB24C); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  jackal: "background: linear-gradient(to bottom, #404040, #D0D0D0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  frogs: "color: #1E49CF;", lions: "color: #FFC34F;", hawks: "color: #A81538;", unused: "color: #E6956A;",
  judge: "background: linear-gradient(to bottom, #C77364, #C93D50); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  auditor: "background: linear-gradient(to bottom, #AEBA87, #E8FCC5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  inquisitor: "color: #821252;",
  starspawn: "background: linear-gradient(to bottom, #FCE79A, #999CFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  egotist: "background: linear-gradient(to bottom, #359F3F, #3F359F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  pandora: "background: linear-gradient(to bottom, #B545FF, #FF004E); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
  compliance: "background: linear-gradient(to bottom, #2D44B5, #AE1B1E, #FC9F32); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
};

const displayNames = {
  admirer: "Admirer", amnesiac: "Amnesiac", bodyguard: "Bodyguard", cleric: "Cleric",
  coroner: "Coroner", crusader: "Crusader", deputy: "Deputy", investigator: "Investigator",
  jailor: "Jailor", lookout: "Lookout", mayor: "Mayor", monarch: "Monarch",
  prosecutor: "Prosecutor", psychic: "Psychic", retributionist: "Retributionist",
  seer: "Seer", sheriff: "Sheriff", spy: "Spy", tavernkeeper: "Tavern Keeper",
  tracker: "Tracker", trapper: "Trapper", trickster: "Trickster", veteran: "Veteran",
  vigilante: "Vigilante", socialite: "Socialite", marshal: "Marshal", oracle: "Oracle",
  pilgrim: "Pilgrim", catalyst: "Catalyst", conjurer: "Conjurer", covenleader: "Coven Leader",
  dreamweaver: "Dreamweaver", enchanter: "Enchanter", hexmaster: "Hex Master",
  illusionist: "Illusionist", jinx: "Jinx", medusa: "Medusa", necromancer: "Necromancer",
  poisoner: "Poisoner", potionmaster: "Potion Master", ritualist: "Ritualist",
  voodoomaster: "Voodoo Master", wildling: "Wildling", witch: "Witch", covenite: "Covenite",
  cultist: "Cultist", arsonist: "Arsonist", baker: "Baker", berserker: "Berserker",
  doomsayer: "Doomsayer", executioner: "Executioner", jester: "Jester", pirate: "Pirate",
  plaguebearer: "Plaguebearer", pestilence: "Pestilence", serialkiller: "Serial Killer",
  shroud: "Shroud", soulcollector: "Soul Collector", death: "Death", werewolf: "Werewolf",
  vampire: "Vampire", cursedsoul: "Cursed Soul", war: "War", famine: "Famine", banshee: "Banshee",
  jackal: "Jackal", judge: "Judge", auditor: "Auditor", inquisitor: "Inquisitor",
  starspawn: "Starspawn", warlock: "Warlock", pacifist: "Pacifist", town: "Town",
  coven: "Coven", apocalypse: "Apocalypse", frogs: "Frogs", lions: "Lions", hawks: "Hawks",
  unused: "Unused", egotist: "Egotist", pandora: "Pandora", compliance: "Compliance",
  stoned: "Stoned"
};

let availableRoles = {};
let availableFactions = {};
const combinedFactions = { ...factions, ...btos2_factions };

function populateData(showBTOS2) {
  const roleTable = showBTOS2 ? btos2_roles : roles;
  const factionTable = showBTOS2 ? combinedFactions : factions;

  availableRoles = Object.fromEntries(Object.entries(roleTable).map(([k]) => [displayNames[k] || k, k]));
  availableFactions = Object.fromEntries(Object.entries(factionTable).map(([k]) => [displayNames[k] || k[0].toUpperCase() + k.slice(1), k]));
}

function autocomplete(input, dataMap) {
  let currentFocus = -1;
  const items = Object.keys(dataMap);
  const list = document.getElementById(input.id.replace('-input', '-autocomplete-list'));

  const renderList = val => {
    list.innerHTML = '';

    if (!val) return;

    const query = val.toUpperCase();

    items.filter(i => i.toUpperCase().includes(query)).slice(0, 20).forEach(item => {
      const idx = item.toUpperCase().indexOf(query);
      const html = item.substring(0, idx) + `<strong>${item.substring(idx, idx + val.length)}</strong>` + item.substring(idx + val.length);
      const el = document.createElement('div');

      el.innerHTML = html;
      el.dataset.key = dataMap[item];
      list.appendChild(el);
    });
  };

  input.addEventListener('input', e => renderList(e.target.value));

  input.addEventListener('keydown', e => {
    const divs = list.querySelectorAll('div');
    if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) e.preventDefault();
    if (e.key === 'ArrowDown') currentFocus++;
    if (e.key === 'ArrowUp') currentFocus--;
    if (currentFocus >= divs.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = divs.length - 1;
    divs.forEach(d => d.classList.remove('autocomplete-active'));
    if (divs[currentFocus]) divs[currentFocus].classList.add('autocomplete-active');
    if (e.key === 'Enter' && divs[currentFocus]) divs[currentFocus].click();
  });

  list.addEventListener('click', e => {
    if (e.target.closest('div')) {
      const el = e.target.closest('div');
      input.value = el.textContent;
      input.dataset.canonicalKey = el.dataset.key;
      list.innerHTML = '';
    }
  });

  document.addEventListener('click', e => {
    if (!list.contains(e.target) && e.target !== input) list.innerHTML = '';
    input.dataset.canonicalKey = dataMap[input.value] || '';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const roleInput = document.getElementById("role-input");
  const factionInput = document.getElementById("faction-input");
  const btos2Toggle = document.getElementById("btos2Toggle");

  populateData(btos2Toggle.checked);
  autocomplete(roleInput, availableRoles);
  autocomplete(factionInput, availableFactions);

  document.getElementById("generate").addEventListener("click", () => {
    const role = roleInput.dataset.canonicalKey;
    const faction = factionInput.dataset.canonicalKey;
    const roleRaw = roleInput.value.trim();
    const resultText = document.getElementById("resultText");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copyBtn");
    const roleTable = btos2Toggle.checked ? btos2_roles : roles;
    const factionTable = btos2Toggle.checked ? combinedFactions : factions;
    const roleKey = role ? roleTable[role] : undefined;
    const factionKey = faction ? factionTable[faction] : undefined;

    if (!role || !roleKey) {
      resultText.textContent = "❌ Please select a valid role.";
      copyBtn.style.display = "none";
    } else if (!faction || !factionKey) {
      resultText.textContent = "❌ Please select a valid faction.";
      copyBtn.style.display = "none";
    } else {
      const safeRole = roleRaw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const style = factionStyle[faction] || factionStyle.default;

      resultText.innerHTML = `<span class="role-display" style="${style}">${safeRole}</span>`;
      resultText.dataset.copy = `[[#${roleKey},${factionKey}]]`;
      copyBtn.style.display = "inline";
    }

    output.classList.remove("hidden");
  });

  btos2Toggle.addEventListener("change", e => {
    const showBTOS2 = e.target.checked;
    populateData(showBTOS2);

    document.getElementById("output").classList.add("hidden");
    roleInput.value = '';
    factionInput.value = '';

    delete roleInput.dataset.canonicalKey;
    delete factionInput.dataset.canonicalKey;

    autocomplete(roleInput, availableRoles);
    autocomplete(factionInput, availableFactions);
  });

  document.getElementById("copyBtn").addEventListener("click", async () => {
    const text = document.getElementById("resultText").dataset.copy;

    try {
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById("copyBtn");
      btn.textContent = "✅";
      setTimeout(() => (btn.textContent = "📋"), 1200);
    } catch {
      alert("Clipboard copy failed.");
    }
  });
});
