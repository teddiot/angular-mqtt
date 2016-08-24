import Directive from './directive';
import Service from './service';
import Routes from './routes';

export default angular
    .module('app.components.home', [])
    .factory('homeService', Service)
    .directive('home', () => new Directive())
    .config(Routes)
    .name;
