<template>
  <div class='card-wrapper'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-card-wrapper',
};
</script>

<style scoped>
  .card-wrapper {
    width: 580px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 40px;
    border: 2px solid teal;
    background: aquamarine;
    border-radius: 10px;
  }
</style>
