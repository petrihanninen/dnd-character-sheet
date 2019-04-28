import Vue from "vue";
import Vuex from "vuex";

// Placeholder data
import char from "./shlieb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charSheetBase: {
      stats: {
        abilities: {
          str: { name: "Strength" },
          dex: { name: "Dexterity" },
          con: { name: "Constitution" },
          int: { name: "Intelligence" },
          wis: { name: "Wisdom" },
          cha: { name: "Charisma" }
        },
        skills: {
          acr: { ab: "str", name: "Acrobatics" },
          ani: { ab: "wis", name: "Animal Handling" },
          arc: { ab: "int", name: "Arcana" },
          ath: { ab: "str", name: "Athletics" },
          dec: { ab: "cha", name: "Deception" },
          his: { ab: "int", name: "History" },
          ins: { ab: "wis", name: "Insight" },
          int: { ab: "cha", name: "Intimidation" },
          inv: { ab: "int", name: "Investigation" },
          med: { ab: "wis", name: "Medicine" },
          nat: { ab: "int", name: "Nature" },
          perc: { ab: "wis", name: "Perception" },
          perf: { ab: "cha", name: "Performance" },
          pers: { ab: "cha", name: "Persuasion" },
          rel: { ab: "int", name: "Religion" },
          sli: { ab: "dex", name: "Sleight of Hand" },
          ste: { ab: "dex", name: "Stealth" },
          sur: { ab: "wis", name: "Survival" }
        }
      }
    },
    character: {}
  },

  getters: {
    getBase: state => state.base,
    getCharacter: state => state.character
  },
  actions: {
    async fetchCharacter({ commit }) {
      commit("setCharacter", char);
    }
  },
  mutations: {
    setCharacter: (state, character) => (state.character = character)
  }
});
