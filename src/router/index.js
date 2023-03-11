import { createRouter, createWebHistory } from 'vue-router';
import HomeView       from '../views/HomeView.vue';
import ContactsList   from '../views/ContactsList.vue';
import ContactsAdd    from '../views/ContactsAdd.vue';
import ContactsEdit   from '../views/ContactsEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'contacts_list',
      component: ContactsList
    },
    {
      path: '/add',
      name: 'contacts_add',
      component: ContactsAdd
    },
    {
      path: '/edit',
      name: 'contacts_edit',
      component: ContactsEdit
    }
  ]
})

export default router
