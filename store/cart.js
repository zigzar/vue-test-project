function Item(id, brand, price) {
  this.id = id
  this.brand = brand
  this.price = price
  this.quantity = 1
  return
}

export const state = () => ({
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
})

export const getters = {
  getCart(state) {
    return state.cart
  },
  getItemQuantity(state, { index }) {
    return state.cart[index].quantity
  },
  getTotalPrice(state) {
    return state.totalPrice
  },
  getTotalQuantity(state) {
    return state.totalQuantity
  },
}

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
  },
  addItem(state, item) {
    state.cart = [...state.cart, item]
  },
  deleteItem(state, index) {
    state.cart.splice(index, 1)
  },
  increaseQuantity(state, index) {
    state.cart[index].quantity += 1
  },
  decreaseQuantity(state, index) {
    state.cart[index].quantity -= 1
  },
  setQuantity(state, index, quantity) {
    state.cart[index].quantity = quantity
  },
  setTotalPrice(state) {
    state.totalPrice = state.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  },
  setTotalQuantity(state) {
    state.totalQuantity = state.cart.reduce(
      (total, item) => total + item.quantity,
      0
    )
  },
}

export const actions = {
  async fetchCart({ state, commit }) {
    let cart = await localStorage.getItem(cart)
    if (cart) await commit('setCart', cart)
  },
  set({ state, commit }, { item, quantity }) {
    let id = item.brand.code + item.price
    let itemIndex = state.cart.findIndex((item) => item.id === id)
    if (itemIndex != -1) commit('setQuantity', itemIndex, quantity)
  },
  async add({ state, commit }, { item }) {
    let id = item.brand.code + item.price
    let itemIndex = state.cart.findIndex((item) => item.id === id)
    if (itemIndex == -1) {
      await commit('addItem', new Item(id, item.brand, item.price))
    } else await commit('increaseQuantity', itemIndex)
    await commit('setTotalPrice')
    await commit('setTotalQuantity')
  },
  delete({ state, commit }, { item }) {
    let id = item.brand.code + item.price
    let itemIndex = state.cart.findIndex((item) => item.id === id)
    if (state.cart[itemIndex].quantity > 1)
      commit('decreaseQuantity', itemIndex)
    else commit('deleteItem', itemIndex)
  },
  async getItemQuantity({ state, commit }, { item }) {},
}
