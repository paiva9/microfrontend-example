import Vue from 'vue'; 
import singleSpaVue from 'single-spa-vue';

import './style.css';
import Hello from './main.vue';
 
const vueLifecycles = singleSpaVue({
    Vue, 
    appOptions: {
        el: "#app3",
        render: r => r(Hello)
    }, 
});

export const bootstrap = vueLifecycles.bootstrap

export const mount = vueLifecycles.mount

export const unmount = vueLifecycles.unmount