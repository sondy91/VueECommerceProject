import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "./index.css";
import PrimeVue from 'primevue/config';

//PrimeVue components
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import DataView from 'primevue/dataview';
import SideBar from 'primevue/sidebar';

import Menubar from 'primevue/menubar';



//PrimeVue Themes
import './assets/app.css';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.use(PrimeVue, {ripple: true});
app.use(createPinia())
app.use(router)
app.use(ToastService);


app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('DataView', DataView);
app.component('SideBar', SideBar);
app.component('Menubar', Menubar);

app.mount('#app')
