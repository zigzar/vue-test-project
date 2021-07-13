<template>
  <div class="catalog-item">
    <div class="catalog-item__card card">
      <img :src="brand.image" alt="" class="card__img" />
      <div class="card__description">
        <p>{{ brand.title }}</p>
      </div>
      <form class="card__btns" @submit.prevent="addToCart">
        <my-select
          class="select"
          @updateSelected="updateFace"
          :options="faceOptions"
        >
        </my-select>
        <my-button type="submit" class="btn_buy">Купить</my-button>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
import MySelect from '@/components/UI/MySelect'
export default {
  components: {
    MyButton,
    MySelect,
  },
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      faceOptions: [],
      selectedFace: 0,
    }
  },
  mounted() {
    this.faceOptions = this.brand.faces
  },
  methods: {
    addToCart() {
      if (this.selectedFace == '0') return
      let item = {
        brand: this.brand,
        price: +this.selectedFace,
      }
      this.$store.dispatch('cart/add', { item: item })
      this.$emit('updatedCart')
    },
    updateFace(face) {
      this.selectedFace = face
    },
  },
}
</script>

<style scoped>
.catalog-item {
  position: relative;
}
.catalog-item__card {
  border: 2px solid var(--secondary-color);
  border-radius: 1em;
}
.card {
  overflow: hidden;
}
.card__img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.card__description {
  height: 4em;
  display: flex;
  align-items: center;
  margin: auto 1em;
}
.card__btns {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 1em 1em;
}
.select {
  width: 100%;
  margin-right: 1em;
}
</style>