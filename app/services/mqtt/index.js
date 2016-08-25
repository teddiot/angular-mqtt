import Provider from './provider';
import Service from './service';

export default angular
    .module('app.services.mqtt', [])
    .provider('$mqtt', Provider)
    .service('MqttService', Service)
    .name;
