<template>
  <div class="contact-summary pointer">
    <!-- specifying width for a problem with winnie the pooh's small img size being == as the large one -->
    <AvatarWithFallback class="avatar" alt="avatar" width="100" :contact="contact"/>
    <div class="contact-data">
      <span class="star" v-if="contact.isFavorite">⭐</span>
      <h3 class="name">{{ contact.name }}</h3>
      <p class="company">{{ contact.companyName }}</p>
    </div>
  </div>
</template>

<script>
import AvatarWithFallback from '@Components/AvatarWithFallback'

export default {
  name: 'ContactSummary',
  components: { AvatarWithFallback },
  props: {
    contact: Object,
    required: true
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.contact-summary {
  @include flex-center-start;
  overflow: hidden;
  height: $img-size;
  .contact-data {
    height: 100%;
    margin-left: 8%;
    padding-top: $common-vertical-separation * 2;
    position: relative;
    text-align: left;
    .star {
      padding-top: inherit;
      /* I'm sorry */
      position: absolute;
      font-size: $small-font-size;
      left: -30px;
      top: 0;
    }
    .name,
    .company {
      margin: 0;
    }
    .name {
      font-size: $med-font-size;
    }
    .company {
      font-size: $small-font-size;
      color: gray;
    }
  }
}
</style>
