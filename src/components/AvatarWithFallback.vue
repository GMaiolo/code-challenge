<template>
  <img :src="avatarUrl" @error="fallback()" />
</template>

<script>
import fallbackAvatar from '@Assets/user/placeholder.png'

const defaultSize = 'small'

export default {
  name: 'AvatarWithFallback',
  props: {
    contact: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: defaultSize
    }
  },
  computed: {
    avatarUrl () {
      return this.contact.avatarFallback[this.size]
        ? fallbackAvatar
        : this.contact.getAvatarUrl(this.size)
    }
  },
  methods: {
    fallback () {
      this.$store.commit('USE_AVATAR_FALLBACK', {
        id: this.contact.id,
        size: this.size
      })
    }
  }
}
</script>
