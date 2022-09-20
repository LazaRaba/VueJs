import { createApp } from 'vue'
import App from './App.vue'
import UnAmi from './components/UnAmi'
// createApp(App).mount('#app')
const app = createApp(App);
app.component('un-ami',UnAmi);
app.mount('#app');

