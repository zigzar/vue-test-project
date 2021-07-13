<template>
  <nav class="wrapper">
    <Container class="nav">
      <div class="nav__logo">
        <nuxt-link to="/">
          <nuxt-logo class="logo"></nuxt-logo>
        </nuxt-link>
      </div>
      <div class="nav__cart cart">
        <p class="cart__quantity">{{ productsQuantity }}</p>
        <nuxt-link to="/cart">
          <div class="cart__icon"></div>
        </nuxt-link>
      </div>
    </Container>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // data() {
  //   return {
  //     quantity: 0,
  //   }
  // },
  // computed: {
  //   getQuantity() {
  //     return this.$store.getters['cart/getTotalQuantity']
  //   },
  // },
  computed: {
    ...mapState({
      products: (state) => state.cart.totalQuantity,
    }),
    productsQuantity() {
      if (this.products) {
        return this.products
      } else return 0
    },
  },
  // mounted() {
  //   this.quantity = this.getQuantity
  // },
}
</script>

<style scoped>
.wrapper {
  border-bottom: 2px solid var(--secondary-color);
  margin-bottom: 2em;
}
.nav {
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: 2em;
  color: var(--main-color);
}
.cart__quantity {
  margin-right: 1em;
}
.cart__icon {
  height: 2em;
  width: 2em;
  background-image: url('@/static/icons/cart.svg');
  background-size: contain;
}
</style>