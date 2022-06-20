import R from 'ziggy-js';

declare global {
  const route: typeof R;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    route: typeof R;
  }
}
