import { createApp, h, onMounted } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from '~/vite/resolvePageComponent';
import './bootstrap';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const pages = import.meta.glob('./Pages/**/*.vue');

void createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./Pages/${name}.vue`, pages),
  setup({ el, app, props, plugin }) {
    createApp({
      setup: () => void onMounted(() => delete el.dataset.page),
      render: () => h(app, props),
    })
      .use(plugin)
      .mixin({ methods: { route } })
      .component('InertiaHead', Head)
      .component('InertiaLink', Link)
      .mount(el);
  },
});

InertiaProgress.init({ color: '#4B5563' });
