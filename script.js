// FACTIONS AND ROLES

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

// ACHIEVEMENTS

const achievements = {
  "Adoration": 0, "Idolize": 1, "Cherish": 2, "Worship": 3, "Oblivious": 4, "Forgetful": 5,
  "Clouded Mind": 6, "Blackout": 7, "Chaperon": 8, "Safeguard": 9, "Protector": 10, "Warden": 11,
  "Priest": 12, "Healer": 13, "Diviner": 14, "Elder": 15, "Medical Examiner": 16, "Autopsy": 17,
  "Obituary": 18, "Coroner's Report": 19, "Divine Protector": 20, "Righteous Fury": 21,
  "Devotion": 22, "Deus Vult": 23, "Deputize": 24, "Lieutenant": 25, "Commissioner": 26,
  "Second-In-Command": 27, "Detective": 28, "Gumshoe": 29, "Private Eye": 30, "Sherlock Holmes": 31,
  "Prison Warden": 32, "Correctional Officer": 33, "Locked Up": 34, "Penitentiary": 35,
  "Sentry": 36, "Eagle Eye": 37, "Hawk": 38, "Sentinel": 39, "Supervisor": 40, "Ambassador": 41,
  "Executive": 42, "Command And Chief": 43, "Emperor": 44, "Royalty": 45, "Sovereign": 46,
  "Aristocrat": 47, "Attorney": 48, "Litigator": 49, "Indictor": 50, "Blow the Whistle": 51,
  "Clairvoyant": 52, "Prophet": 53, "Soothsayer": 54, "Oracle": 55, "The Avenger": 56,
  "Vengeance": 57, "Revitalize": 58, "Reanimate": 59, "Tarot Reader": 60, "Mystic": 61,
  "Fortune-Teller": 62, "Palm Reader": 63, "Enforce The Law": 64, "Marshall": 65, "Constable": 66,
  "P.I.": 67, "Espionage": 68, "Sleuth": 69, "Undercover Agent": 70, "CIA": 71, "Inebriated": 72,
  "Sloshed": 73, "Plastered": 74, "Wasted": 75, "Low Jack": 76, "Pathfinder": 77, "Trail Chaser": 78,
  "Bloodhound": 79, "It's a Trap!": 80, "Bear Trap": 81, "Hunter": 82, "Master Trapper": 83,
  "Deceiver": 84, "Conniver": 85, "Swindler": 86, "Charlatan": 87, "Battle-Hardened": 88,
  "Soldier": 89, "Warrior": 90, "Sergeant": 91, "Mercenary": 92, "Vigilante Justice": 93,
  "Smoking Gun": 94, "Judicatory": 95, "Constructor": 96, "Inventor": 97, "Fabricator": 98,
  "Formulation": 99, "Occultist": 100, "Dark Magician": 101, "Charmer": 102, "Diabolist": 103,
  "The Nightmare": 104, "Insomnia": 105, "Restless": 106, "The Bringer of Insanity": 107,
  "Enthrall": 108, "Charm": 109, "Hypnotize": 110, "Mesmerize": 111, "Spellslinger": 112,
  "Accursed": 113, "Hocus Pocus": 114, "Abracadabra": 115, "Hallucination": 116, "Mirage": 117,
  "Optical Illusion": 118, "Deceptive Imagery": 119, "Bad Luck": 120, "Nemesis": 121,
  "Misfortune": 122, "Black Cat": 123, "Gaze of Stone": 124, "House of Rock": 125,
  "Dust to Dust": 126, "The Gorgon": 127, "Raise Zombie!": 128, "Army of the Dead": 129,
  "Day of the Dead": 130, "Zombie Apocalypse": 131, "Silent but Deadly": 132, "Poison Beverage": 133,
  "Toxic": 134, "Miasma": 135, "Alchemist": 136, "Eye of Newt": 137, "Vial Juggler": 138,
  "Elixir of Victory": 139, "Black Magic": 140, "Dark Arts": 141, "Witchcraft": 142,
  "Blood Ritual": 143, "Mumbo Jumbo": 144, "Bad Juju": 145, "Speechlessness": 146, "Silence": 147,
  "Ferocious": 148, "Predator": 149, "Devourer": 150, "Apex": 151, "Domination": 152,
  "Puppet Master": 153, "Marionette": 154, "Warlock": 155, "Pyromaniac": 156, "Firebug": 157,
  "Incendiary": 158, "Ifrit": 159, "Droughtbringer": 160, "Starvation": 161, "Moldy Bread": 162,
  "Grain Shortage": 163, "Bloodshed": 164, "Warfare": 165, "Onslaught": 166, "Blitzkrieg": 167,
  "Cataclysm": 168, "Calamity": 169, "Destiny": 170, "Prediction": 171, "Firing Squad": 172,
  "Guillotine": 173, "Hangman": 174, "Iron Maiden": 175, "Joker": 176, "Clown": 177,
  "Prankster": 178, "Lunatic": 179, "ARG!": 180, "Plunder": 181, "X Marks the Spot": 182,
  "Edward Teach": 183, "Diseased": 184, "Infectious": 185, "Virulent": 186, "Pestilent": 187,
  "Lonely Killer": 188, "Murderer": 189, "Psychopath": 190, "Sociopath": 191, "Cloak": 192,
  "Veil": 193, "Shadow": 194, "Shade": 195, "Extinction": 196, "Oblivion": 197, "Grim Reaper": 198,
  "Shinigami": 199, "Sharp Claws": 200, "Lycan": 201, "Wild Beast": 202, "Mauled": 203,
  "Initiation": 204, "Novice": 205, "Apprentice": 206, "Dedicated": 207, "Patriarch": 208,
  "Zealous": 209, "Iconic": 210, "Adept of the Town": 211, "Savant of Magic": 212,
  "Savant of Neutrality": 213, "Town of Salem Expert": 214, "Close Call": 215, "Marathon": 216,
  "The Perfect Town": 217, "The Perfect Coven": 218, "Consolation Prize": 219, "Improbable": 220,
  "Lonely": 221, "Falling In Love": 222, "Gotcha": 223, "Early Lovebirds": 224,
  "Uncontrollable": 225, "Forgetful Healer": 226, "Distracted Constable": 227,
  "Absent-Minded Politician": 228, "Asleep On The Job": 229, "I'll Save You!": 230,
  "Bulletproof": 231, "Tango Down": 232, "Sacrificial Lamb": 233, "Blessed Recovery": 234,
  "Divine Shield": 235, "Prayer of Mending": 236, "Shield and Barrier": 237, "Postmortem": 238,
  "DNA Evidence": 239, "Master of Dissection": 240, "Plagued Corpse": 241, "Holy Vengeance": 242,
  "Blessing of Protection": 243, "Holy Boon": 244, "Trivial Crusade": 245, "Assassination": 246,
  "Whoops": 247, "Taken Care Of": 248, "Quickdraw": 249, "Clean Record": 250,
  "Rouge's Gallery": 251, "Cold Lead": 252, "Honeypot": 253, "Execution": 254,
  "Flawless Executioner": 255, "Making The Right Choice": 256, "Failed Execution": 257,
  "I See You": 258, "It's A Party": 259, "Prison Watchguard": 260, "Paranormal Town": 261,
  "Bureaucratic Leadership": 262, "Scales of Justice": 263, "Due Process": 264, "Rigged Jury": 265,
  "Champion of the Town": 266, "Stacked Jury": 267, "Risky Strategy": 268, "Dictator": 269,
  "Indict": 270, "Triumphant Prosecution": 271, "Taking One For The Team": 272,
  "Apocalypse Averted": 273, "Supernatural Vision": 274, "Not Looking Good": 275,
  "The Gift of Sight": 276, "The Future Can Wait": 277, "Once More Sherlock": 278,
  "Vigilante's Redemption": 279, "Unholy Crusade": 280, "Self Promotion": 281,
  "Birds of a Feather": 282, "Opposites Attract": 283, "Broken Crystal Ball": 284,
  "Bloodbath": 285, "Busted": 286, "Not Suspicious": 287, "Assisted Interrogation": 288,
  "Rapscallion!": 289, "Sleep It Off": 290, "Operation: Dominion": 291, "Voodoo Spy": 292,
  "Operative of Dreams": 293, "Let's Party": 294, "Drinking With A Psychopath": 295,
  "Party of One": 296, "Your Turn": 297, "How Is That Possible?": 298, "This Is Awkward": 299,
  "What Are You Up To?": 300, "Silly Witch": 301, "Sportsman": 302, "Spring-Loaded": 303,
  "Busy Night": 304, "War Approaches": 305, "Risky Maneuvers": 306, "Proton Pack": 307,
  "Taunt the Necronomicon": 308, "Full Moon Trickery": 309, "Massacre": 310,
  "Weathered Soldier": 311, "Proficient Paranoia": 312, "Going Down Fighting": 313,
  "Vengeance": 314, "Perfect Shot": 315, "Execute the Executioner": 316, "Ouch": 317,
  "Rival Gunslinger": 318, "Unwise Reveal": 319, "Dealt With": 320, "Two For One Special": 321,
  "A Fresh Start": 322, "Hopeless Teacher": 323, "Third Time's a Charm": 324,
  "Master of Many": 325, "Unsound Mind": 326, "Triple Insanity": 327, "Deep Slumber": 328,
  "Civilian": 329, "Master of Deceit": 330, "Altered Testament": 331, "Marshal's Will": 332,
  "Overwhelming Deception": 333, "The First of Many": 334, "Don't Fear The Reaper": 335,
  "Hexplosion": 336, "See You Soon": 337, "Protect the Book Wielder": 338, "Fantastical": 339,
  "Assist The Leader": 340, "Covert Obstacle": 341, "No More Protection": 342,
  "Double Ambush": 343, "Why Are You Here?": 344, "Fullmoon Rampage": 345, "Risky Play": 346,
  "Hide The Evidence": 347, "Could've Been Anything": 348, "That Was Challenging": 349,
  "Rampage Once More": 350, "Shadow Mending": 351, "Reanimated Hexplosion": 352,
  "Wage War Once Again": 353, "Ineffective Brew": 354, "Filibuster": 355, "Isolated": 356,
  "Death in Isolation": 357, "Bottle Juggler": 358, "Critical Information": 359,
  "Priorities": 360, "Staredown": 361, "No Guessing Required": 362, "Guaranteed Success": 363,
  "Dethroned": 364, "Sorcery Vs Doom": 365, "Sewn Shut": 366, "Peace and Quiet": 367,
  "Sworn to Secrecy": 368, "Silent Ballot": 369, "Red Alert": 370, "Nature's Observer": 371,
  "Sixth Sense": 372, "Magic Mirror": 373, "Two Birds, One Stone": 374,
  "Double-Edged Sword": 375, "Controlled Elevation": 376, "Resistance Is Futile": 377,
  "Disco Inferno": 378, "Blazing Penetentiary": 379, "Drenched": 380,
  "This Complicates Things": 381, "Feast or Famine": 382, "Swift Famine": 383,
  "Bars Cannot Stop Famine": 384, "Famine Ravages The Town": 385, "War Emerges": 386,
  "Racing To War": 387, "The Art of War": 388, "Unstoppable Force": 389,
  "The Town's Cataclysm": 390, "Calamity of the Coven": 391, "Neutral Catastrophe": 392,
  "Accelerated Annihilation": 393, "Quick Execution": 394, "The Long Con": 395,
  "Justice Served Cold": 396, "Difficult Task": 397, "Not Taking Sides": 398,
  "Prosecution Backfired": 399, "Anti-Town": 400, "Free From Guilt": 401,
  "Enemy Spotted": 402, "Plunder'em All": 403, "Scalawag!": 404, "Smooth Sailing": 405,
  "A God Among Us": 406, "Succumbed To Pestilence": 407, "Abrupt Pandemic": 408,
  "Plundering Plague": 409, "Dexter Morgan": 410, "Bloodlust": 411, "Bay Harbor Butcher": 412,
  "Avast!": 413, "Stalker's Victim": 414, "Setup": 415, "Framed": 416,
  "Do You Seer What I Seer?": 417, "Death Itself": 418, "Expeditious Death": 419,
  "Total Obliteration": 420, "Invincibility": 421, "Jailbreak": 422, "Rampage": 423,
  "Slicing Up The Coven": 424, "Heartbreak On A Fullmoon": 425, "Partygoer": 426,
  "Fashionista": 427, "Merrymaker": 428, "Night Owl": 429, "Judiciary": 430, "Hearing": 431,
  "Council": 432, "Court": 433, "Celebration": 434, "Special Guest": 435, "Disco": 436,
  "Assembly": 437, "Witchhunt": 438, "Commission for Death": 439, "Fraternity": 440,
  "Degradation": 441, "Visionary": 442, "Divination": 443, "Aegis Ascendant": 444,
  "Guardian Angel": 445, "I Got You": 446, "Prophetic Protection": 447, "Close Call": 448,
  "Safety in Numbers": 449, "Dracula": 450, "Bloodsport": 451, "Bloodbath": 452,
  "Blood Moon": 453, "Bits, Nibbles and Bites": 454, "Fangs for Voting": 455,
  "We are Legion": 456, "Unholy Trinity": 457, "Apparition": 458, "Wraith": 459,
  "Phantom": 460, "Enigma": 461, "Yoink!": 462, "Exorcist": 463, "Merry Go Round": 464,
  "Spectral Execution": 465, "Live Wire": 466, "Voltage": 467, "Energized": 468,
  "Overload": 469, "Power Surge": 470, "Vision Overload": 471, "Power Trip": 472,
  "Overclocked": 473, "Influencer": 474, "Acolyte": 475, "Disciple": 476, "Cult Leader": 477,
  "One of Us": 478, "Bootlegger": 479, "Corrupt Politician": 480, "Injustice": 481
};

function setupAchievements() {
  const input = document.getElementById("achievement-input");
  const output = document.getElementById("achievement-output");
  const resultText = document.getElementById("achievement-resultText");
  const copyBtn = document.getElementById("achievement-copyBtn");

  autocomplete(input, Object.fromEntries(Object.entries(achievements).map(([k, v]) => [k, v])));

  document.getElementById("generateAchievement").addEventListener("click", () => {
    const key = input.value.trim();
    if (!achievements.hasOwnProperty(key)) {
      resultText.textContent = "❌ Please select a valid achievement.";
      copyBtn.style.display = "none";
      output.classList.remove("hidden");
      return;
    }

    const id = achievements[key];
    resultText.innerHTML = `<span class="role-display">${key}</span>`;
    resultText.dataset.copy = `[[~${id}]]`;
    copyBtn.style.display = "inline";
    output.classList.remove("hidden");
  });

  copyBtn.addEventListener("click", async () => {
    const text = resultText.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "✅";
      setTimeout(() => (copyBtn.textContent = "📋"), 1200);
    } catch {
      alert("Clipboard copy failed.");
    }
  });
}

function setupTabs() {
  const rolesTab = document.getElementById("rolesTab");
  const achievementsTab = document.getElementById("achievementsTab");
  const rolesWindow = document.getElementById("rolesWindow");
  const achievementsWindow = document.getElementById("achievementsWindow");
  const title = document.getElementById("page-title");

  rolesTab.addEventListener("click", () => {
    rolesTab.classList.add("active");
    achievementsTab.classList.remove("active");
    rolesWindow.classList.remove("hidden");
    achievementsWindow.classList.add("hidden");
    title.textContent = "Role > Faction Generator";
  });

  achievementsTab.addEventListener("click", () => {
    achievementsTab.classList.add("active");
    rolesTab.classList.remove("active");
    achievementsWindow.classList.remove("hidden");
    rolesWindow.classList.add("hidden");
    title.textContent = "Achievement Tag Generator";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupAchievements();
  setupTabs();
});
