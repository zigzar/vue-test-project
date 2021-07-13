import categoriesResponse from '@/response/categories.json'

export const state = () => ({
  categories: [],
  category: {},
})

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getCategory(state) {
    return state.category
  },
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategory(state, category) {
    state.category = category
  },
}

export const actions = {
  async fetchCategories({ state, commit }) {
    await commit('setCategories', categoriesResponse)
  },
  setCurrentCategory({ state, commit }, { param }) {
    let category = state.categories.find((item) => item.code === param.code)
    if (category) commit('setCategory', category)
  },
}
