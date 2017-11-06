<template>
  <figure class="star">
    <img v-if="isFavorite" key="fav-status" class="star-img" title="Remove from favorites" src="~@Assets/star/selected.png" alt="star"></img>
    <img v-else key="fav-status" class="star-img" title="Add to favorites" src="~@Assets/star/unselected.png" alt="star"></img>
  </figure>
</template>

<script>

export default {
  name: 'FavStar',
  props: {
    isFavorite: Boolean,
    required: true
  }
}
</script>

<style lang="scss" scoped>  
  .star {
    margin: 0;
    display: inline-block;
    img {
      height: inherit;
      width: inherit;
    }
  }
</style>
