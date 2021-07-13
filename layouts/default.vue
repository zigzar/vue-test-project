<template>
  <div>
    <Navbar />
    <Container>
      <Nuxt />
    </Container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Container from '~/components/Container'
export default {
  components: {
    Navbar,
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
:root {
  --main-color: #00dc82;
  --secondary-color: #ddd;
  --cancel-color: rgb(233, 75, 75);
}
.my-page-enter-active,
.my-page-leave-active {
  transition: opacity 0.2s;
}
.my-page-enter,
.my-page-leave-to {
  opacity: 0;
}
</style>