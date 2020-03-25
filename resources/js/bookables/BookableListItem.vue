<template>
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">{{ itemTitle }}</h5>
      <p class="card-text">{{ itemDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemTitle: String,
    itemDescription: String,
    price: Number
  },

  mounted() {
    console.log(this.itemTitle);
    //setTimeout(() => {
    //    this.itemTitle = "New title";
    //}, 1500)
  }
};
</script>
