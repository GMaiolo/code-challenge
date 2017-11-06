<template>
  <div class="view contacts">
    <header class="nav-bar"><h1>Contacts</h1></header>
    <section class="contacts-section favorites-section">
      <div class="title-wrapper">
        <h2 class="title">Favorite contacts</h2>
        <div class="collapser unselectable pointer" title="Collapse Favorites" @click="toggleFavorites()" v-html="favoritesToggleStatus"></div>
      </div>
      <ul class="list favorite-contacts" v-show="!favoritesCollapsed">
        <li class="contact" v-for="contact in favoriteContacts" :key="contact.id">
          <ContactSummary :contact="contact" v-on:click.native="select(contact.id)"/>
        </li>
      </ul>
    </section>
    <section class="contacts-section others-section">
      <div class="title-wrapper">
        <h2 class="title">Other contacts</h2>
        <div class="collapser unselectable pointer" title="Collapse Others" @click="toggleOthers()" v-html="othersToggleStatus"></div>
      </div>
      <ul class="list others-contacts" v-show="!othersCollapsed">
        <li class="contact" v-for="contact in otherContacts" :key="contact.id">
          <ContactSummary :contact="contact" v-on:click.native="select(contact.id)"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ContactSummary from '@Components/ContactSummary'

const uMinus = '&#8722;'
const uPlus = '&#43;'

export default {
  name: 'Contacts',
  components: { ContactSummary },
  data () {
    return {
      favoritesCollapsed: false,
      othersCollapsed: false
    }
  },
  computed: {
    favoriteContacts () {
      return this.$store.getters.favoriteContacts
    },
    otherContacts () {
      return this.$store.getters.otherContacts
    },
    favoritesToggleStatus () {
      return this.favoritesCollapsed ? uPlus : uMinus
    },
    othersToggleStatus () {
      return this.othersCollapsed ? uPlus : uMinus
    }
  },
  methods: {
    select (contactId) {
      this.$router.push({ path: `/details/${contactId}` })
    },
    toggleFavorites () {
      this.favoritesCollapsed = !this.favoritesCollapsed
    },
    toggleOthers () {
      this.othersCollapsed = !this.othersCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

$collapser-size: 18px;

.view.contacts {
  .contacts-section {
    .title-wrapper {
      @include flex-center-start;
      padding: 5px $common-horizontal-separation / 2;
      margin: 0;
      background-color: rgba(lightgray, .25);
      font-size: $small-font-size;
      border: $common-border;
      .title {
        text-align: left;
        text-transform: uppercase;
      }
      .collapser {
        @include flex-center;
        width: $collapser-size * 2;
        height: $collapser-size;
        font-size: $lg-font-size;
        margin-left: auto;
      }
    }
    .list {
      padding: 0;
      margin: $common-vertical-separation $common-horizontal-separation 0 $common-horizontal-separation;

      .contact {
        padding: $common-vertical-separation 0;
        border-bottom: $common-border;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          border: none;
        }
        .avatar {
        margin: 0;
        }
      }
    }
  }
}
</style>
