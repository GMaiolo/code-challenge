export default class Contact {
  constructor (apiContact) {
    Object.assign(this, apiContact)
    this.avatarFallback = {
      small: false,
      large: false
    }
  }
  get phones () {
    return Object.keys(this.phone)
      .map((key, index) => ({
        type: key,
        number: this.phone[key]
      }))
  }
  toggleFavorite () {
    this.isFavorite = !this.isFavorite
  }
  /* size == 'small' || size == 'large' */
  getAvatarUrl (size) {
    return this[`${size}ImageURL`]
  }
  setAvatarFallback (size) {
    this.avatarFallback[size] = true
  }
}
