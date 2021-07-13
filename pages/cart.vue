<template>
  <div>
    <h1>Корзина</h1>
    <cart-list :cart="getCartItems"></cart-list>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cartItems: (state) => state.cart.cart,
    }),
    getCartItems() {
      if (this.cartItems) {
        return this.cartItems
      } else return 0
    },
  },
}
</script>

<style>
</style>