<template>
  <div class="navbar">
    <h3 @click="$router.push('/')">Currency Conversion</h3>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Currency Conversion</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/converter')">Converter</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: turquoise;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 35px 30px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
