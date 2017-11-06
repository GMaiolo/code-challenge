<template>
  <ul class="contact-details">
    <li class="detail" v-for="(phone, index) in contact.phones" :key="index" v-if="phone">
      <h2 class="title">Phone:</h2>
      <div class="phone">
        <h3 class="data">{{ phone.number | phone }}</h3>
        <h3 class="type">{{ phone.type }}</h3>
      </div>
    </li>
    <li class="detail" v-if="contact.address">
      <h2 class="title">Address:</h2>
      <h3 class="data">{{ contact.address.street }}</h3>
      <h3 class="data">{{ contact.address | address }}</h3>
    </li>
    <li class="detail" v-if="contact.birthdate">
      <h2 class="title">Birthday:</h2>
      <h3 class="data">{{ contact.birthdate | birthday}}</h3>
    </li>
    <li class="detail" v-if="contact.emailAddress">
      <h2 class="title">Email:</h2>
      <h3 class="data">{{ contact.emailAddress }}</h3>
    </li>
  </ul>
</template>

<script>
import formatDate from 'date-fns/format'

export default {
  name: 'ContactDetails',
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  filters: {
    phone (str) {
      const [ area, prefix, num ] = str.split('-')
      return `(${area}) ${prefix}-${num}`
    },
    address ({ city, state, country, zipCode }) {
      return `${city}, ${state} ${zipCode}, ${country}`
    },
    birthday (date) {
      return formatDate(date, 'MMMM D, YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$common-distance: 20px;
.contact-details {
  margin: 0 $common-horizontal-separation;
  padding: 0;
  .title {
    margin-bottom: $common-distance;
    font-size: $small-font-size;
    text-transform: uppercase;
    color: lightgray;
  }
  .detail {
    text-align: left;
    margin: $common-distance 0;
    padding-bottom: $common-distance;
    border-bottom: $common-border;
    &:last-child {
      border: none;
    }
    .data {
      font-size: $med-font-size;
    }
    .phone {
      display: flex;
      .type {
        margin-left: auto;
        text-transform: capitalize;
        color: lightgray;
      }
    }
  }
}
</style>
