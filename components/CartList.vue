<template>
  <div class="cart">
    <div class="cart__headers headers">
      <div class="headers__offset"></div>
      <div class="headers__offset"></div>
      <h5>Номинал</h5>
      <h5>Количество</h5>
      <h5>Сумма</h5>
      <div class="headers__offset"></div>
    </div>
    <cart-list-item
      v-for="item in cart"
      :key="item.id"
      :item="item"
      @delete="deleteItem"
    ></cart-list-item>
    <div class="cart__exchange exchange">
      <p class="exchange__total">К оплате {{ totalPrice }} руб.</p>
      <my-button class="exchange__btn btn_buy">Оплатить</my-button>
    </div>
  </div>
</template>

<script>
import CartListItem from '@/components/CartListItem.vue'
import MyButton from '@/components/UI/MyButton.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CartListItem,
    MyButton,
  },
  props: {
    cart: Array,
    required: true,
    default: [],
  },
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    deleteItem(item) {
      let id = item.brand.code + item.price
      let itemIndex = this.$store.state.cart.cart.findIndex(
        (cartItem) => cartItem.id === id
      )
      this.$store.dispatch('cart/delete', { item: item })
    },
  },
  computed: {
    ...mapState({
      total: (state) => state.cart.totalPrice,
    }),
    totalPrice() {
      if (this.total) {
        return this.total
      } else return 0
    },
  },
}
</script>

<style scoped>
.cart {
  padding-top: 2em;
}
.exchange {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2em;
}
.exchange__total {
  margin-right: 1em;
}
.headers {
  display: grid;
  justify-content: space-between;
  grid-gap: 2em;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1em;
}
</style>