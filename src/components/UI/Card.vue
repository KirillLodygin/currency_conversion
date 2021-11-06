<template>
  <div class='card'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-card'
};
</script>

<style scoped>
  .card {
    width: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid turquoise;
    padding: 10px 15px;
    border-radius: 10px;
    background: whitesmoke;
    box-shadow: 4px 5px 4px gray;
    margin-bottom: 20px;
  }
</style>
