<template>
  <div>
    <div class="item">
      <img :src="item.brand.image" alt="" class="item__img" />
      <p class="item__description">{{ item.brand.title }}</p>
      <p class="item__price">{{ item.price }} руб.</p>
      <p class="item__quantity">{{ item.quantity }} шт.</p>
      <p class="item__sum">{{ item.price * item.quantity }} руб.</p>
      <!-- <my-button class="item__btn btn_delete" @click="$emit('delete', item)"
        >Удалить</my-button
      > -->
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    MyButton,
    MyInput,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      quantity: 0,
    }
  },
}
</script>

<style>
.item {
  display: grid;
  justify-content: space-between;
  grid-gap: 2em;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1em;
  border: 2px solid var(--secondary-color);
  border-radius: 1em;
}
.item__img {
  width: 100%;
  display: block;
  object-fit: cover;
  border-right: 2px solid var(--secondary-color);
  border-radius: 1em;
}
.item__btn {
  width: 100px;
}
</style>