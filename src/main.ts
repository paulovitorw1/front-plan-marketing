import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from './App.vue'
import router from './router'

import Card from "./components/Card/Card.vue"
import Navbar from "./components/Navbar/Navbar.vue"
import Button from "./components/Button/Button.vue";
import Modal from "./components/Modal/Modal.vue"

const app = createApp(App);

app.component("ds-card", Card);
app.component("ds-navbar", Navbar);
app.component("ds-button", Button);
app.component("ds-modal", Modal);

app.use(router)

app.mount("#app");