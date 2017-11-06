<template>
  <div v-if="contact" class="view details">
    <nav class="nav-bar unselectable" role="button">
      <router-link to="/" class="back">
        <div class="icon">&lt;</div>
        <h1 class="title">Contacts</h1>
      </router-link>
      <FavStar class="pointer" v-on:click.native="toggleFavorite()" :is-favorite="contact.isFavorite" />
    </nav>
    <div class="base-info">
      <AvatarWithFallback size="large" class="avatar" alt="avatar" :contact="contact"/>
      <h1 class="name">{{ contact.name }}</h1>
      <p class="company">{{ contact.companyName }}</p>
    </div>
    <ContactDetails :contact="contact"/>
  </div>
</template>

<script>
import FavStar from '@Components/FavStar'
import AvatarWithFallback from '@Components/AvatarWithFallback'
import ContactDetails from '@Components/ContactDetails'

export default {
  name: 'Details',
  data () {
    return {
      /* to be set on viewModel creation using the contactId from params */
      contact: null
    }
  },
  props: {
    contactId: {
      type: String,
      required: true
    }
  },
  components: {
    FavStar,
    AvatarWithFallback,
    ContactDetails
  },
  created () {
    this.contact = this.$store.getters.contactById(this.contactId)
    if (!this.contact) {
      /* return home */
      this.$router.push('/')
    }
  },
  methods: {
    toggleFavorite () {
      this.$store.commit('TOGGLE_FAVORITE', this.contactId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.details {
  .nav-bar {
    justify-content: flex-start;
    padding: 0 $common-horizontal-separation / 2;
    .back {
      display: inherit;
      align-items: inherit;
      height: 100%;
      color: $blue-color;
      .title,
      .icon {
        display: inherit;
        align-items: inherit;
        height: 100%;
      }
      .title {
        margin: 0;
      }
      .icon {
        font-size: 50px;
        /* pixel perfect needs a bit of tunning sometimes */
        margin: -4px 5px 0 0;
      }
    }
    .star {
      margin-left: auto;
      width: 30px;
    }
  }
  .base-info {
    margin: $common-vertical-separation $common-horizontal-separation;
    padding-bottom: $common-vertical-separation;
    border-bottom: $common-border;
    .avatar {
      width: $img-size * 2;
    }
    .name {
      font-size: $lg-font-size;
      margin-bottom: 5px;
    }
    .company {
      margin: 0;
      font-size: $small-font-size;
      color: gray;
    }
  }
}
</style>
