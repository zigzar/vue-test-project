import brandsResponse from '@/response/brands.json'

export const state = () => ({
  brands: [],
  brand: {},
})

export const getters = {
  getBrands(state) {
    return state.brands
  },
  getBrand(state) {
    return state.brand
  },
}

export const mutations = {
  setBrands(state, brands) {
    state.brands = brands
  },
  setBrand(state, brand) {
    state.brand = brand
  },
}

export const actions = {
  async fetchBrands({ state, commit }) {
    await commit('setBrands', brandsResponse)
  },
  filterBrands({ state, commit }, categoryId) {
    let filteredBrands = [
      ...state.brands.filter((brand) => {
        let hasCategory = brand.categories.find(
          (brandCategory) => brandCategory === categoryId
        )
        if (hasCategory) return true
      }),
    ]
    commit('setBrands', filteredBrands)
  },
}
