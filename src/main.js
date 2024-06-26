import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { faEnvelope, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faFilePdf, faEnvelope, faLinkedin, faVuejs);

const app = createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount('#app');
