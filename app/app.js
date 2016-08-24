'use strict';

// vendor modules
import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// app modules.
import Routes from './routes';
import Components from './components';

export default angular
    .module('app', [
        uiRouter,
        Components
    ])
    .config(Routes)
    .name;
