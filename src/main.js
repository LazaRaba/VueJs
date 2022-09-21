import { createApp } from 'vue'
import App from './App.vue'
import UnAmi from './components/UnAmi'
import NewAmi from './components/NewAmi'
// createApp(App).mount('#app')
const app = createApp(App);
app.component('un-ami',UnAmi);
app.component('new-ami',NewAmi);
app.mount('#app');

