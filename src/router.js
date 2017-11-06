import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@Views/Contacts'
import Details from '@Views/Details'
import store from '#/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/details/:contactId',
      props: true,
      name: 'Details',
      component: Details
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((_1, _2, next) => {
  next()
  if (!store.state.contactsList.length) {
    store.dispatch('updateContactsList')
  }
})

export default router
