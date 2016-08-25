'use strict';

// vendor modules
import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// app modules.
import Routes from './routes';
import Components from './components';
import Services from './services';

export default angular
    .module('app', [
        uiRouter,
        Components,
        Services
    ])
    .config(Routes)
    .config($mqttProvider => {
        $mqttProvider.configure({
            host: 'mqtt://broker.hivemq.com:8000'
        });
    })
    .name;
