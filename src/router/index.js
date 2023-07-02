import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import JobResultsView from '@/views/JobResultsView.vue';
import TeamsView from '@/views/TeamsView.vue';
import JobView from '@/views/JobView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  },
  {
    path: '/jobs/results/:id', // jobs/results/5
    name: 'JobListing',
    component: JobView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;