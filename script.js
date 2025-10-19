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
  compliance: "background: linear-gradient(to bottom, #2D44B5, #AE1B1E, #FC9F32); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
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

function populateData(showBTOS2) {
  const roleTable = showBTOS2 ? btos2_roles : roles;
  const factionTable = showBTOS2 ? { ...factions, ...btos2_factions } : factions;

  availableRoles = {};
  Object.keys(roleTable).forEach(r => {
    const name = displayNames[r] || r;
    availableRoles[name] = r;
  });

  availableFactions = {};
  Object.keys(factionTable).forEach(f => {
    const name = displayNames[f] || f.charAt(0).toUpperCase() + f.slice(1);
    availableFactions[name] = f;
  });
}

function autocomplete(inp, dataMap) {
  let currentFocus;
  const arr = Object.keys(dataMap);
  const listContainer = document.getElementById(inp.id.replace('-input', '-autocomplete-list'));

  function closeAllLists(elmnt) {
    listContainer.innerHTML = '';
    currentFocus = -1;
  }

  inp.addEventListener("input", function(e) {
    let i, val = this.value;
    closeAllLists();

    if (!val) { return false; }
    currentFocus = -1;

    let matchCount = 0;
    for (i = 0; i < arr.length && matchCount < 20; i++) {
      const item = arr[i];
      if (item.toUpperCase().includes(val.toUpperCase())) {
        matchCount++;
        const itemElement = document.createElement("DIV");

        const start = item.toUpperCase().indexOf(val.toUpperCase());
        const end = start + val.length;

        const before = item.substring(0, start);
        const match = item.substring(start, end);
        const after = item.substring(end);

        itemElement.innerHTML = before + "<strong>" + match + "</strong>" + after;

        itemElement.setAttribute('data-key', dataMap[item]);

        itemElement.addEventListener("click", function(e) {
          inp.value = this.textContent;
          inp.setAttribute('data-canonical-key', this.getAttribute('data-key'));
          closeAllLists();
        });
        listContainer.appendChild(itemElement);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    let x = listContainer.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      } else {
        const matchKey = dataMap[this.value];
        this.setAttribute('data-canonical-key', matchKey || '');
        closeAllLists();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target !== inp && !listContainer.contains(e.target)) {
      closeAllLists();
    }
    const matchKey = dataMap[inp.value];
    inp.setAttribute('data-canonical-key', matchKey || '');
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
      const role = roleInput.getAttribute('data-canonical-key');
      const faction = factionInput.getAttribute('data-canonical-key');

      const roleRaw = roleInput.value.trim();

      const resultText = document.getElementById("resultText");
      const output = document.getElementById("output");
      const copyBtn = document.getElementById("copyBtn");

      const roleTable = btos2Toggle.checked ? btos2_roles : roles;
      const factionTable = btos2Toggle.checked ? { ...factions, ...btos2_factions } : factions;
      const factionColors = factionStyle;

      const roleKey = role ? roleTable[role] : undefined;
      const factionKey = faction ? factionTable[faction] : undefined;


      if (!role || !roleKey) {
        resultText.textContent = "❌ Please select a valid role.";
        copyBtn.style.display = "none";
      } else if (!faction || !factionKey) {
        resultText.textContent = "❌ Please select a valid faction.";
        copyBtn.style.display = "none";
      } else {
        const safeRole = roleRaw
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
      populateData(showBTOS2);

      document.getElementById("output").classList.add("hidden");

      roleInput.value = '';
      factionInput.value = '';
      roleInput.removeAttribute('data-canonical-key');
      factionInput.removeAttribute('data-canonical-key');

      autocomplete(roleInput, availableRoles);
      autocomplete(factionInput, availableFactions);
    });

    document.getElementById("copyBtn").addEventListener("click", () => {
      const resultText = document.getElementById("resultText");
      const text = resultText.getAttribute("data-copy") || resultText.textContent;

      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      const btn = document.getElementById("copyBtn");
      btn.textContent = "✅";
      setTimeout(() => (btn.textContent = "📋"), 1200);
    });
});

