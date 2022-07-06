import './bootstrap';

import { formatDistance, subDays } from 'date-fns'
import { greeting } from './test'
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import ExampleComponent from './components/ExampleComponent.vue';
import ExampleReact from './components/ExampleReact';
import React from 'react';
import ReactDOM from 'react-dom/client';

// alert(formatDistance(subDays(new Date(), 4), new Date(), { addSuffix: true }))

// alert(greeting('Andre'));

// Vue Init
createApp({
    components: {
        ExampleComponent,
    }
}).mount('#app');

// React Init
const props = Object.assign(
  {},
  document.getElementById('example-react').dataset
);
// React stuff
ReactDOM.createRoot(document.getElementById('example-react')).render(
  React.createElement(ExampleReact, props)
);
