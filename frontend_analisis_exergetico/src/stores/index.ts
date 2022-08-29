import { createPinia } from 'pinia';
import resetStore from 'src/utils/plugins/reset-store';

// General propose stores
export { usePopupStore } from './popup';

const pinia = createPinia();

pinia.use(resetStore);

export default pinia;
