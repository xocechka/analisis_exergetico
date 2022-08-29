import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import workersRouter from 'src/modules/exergia/router';

const routes: Array<RouteRecordRaw> = [...workersRouter.map((route) => route)];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
