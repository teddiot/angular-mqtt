import mqtt from 'mqtt';

const Service = () => {
    class MqttService {
        constructor(config) {
            this.client = mqtt.connect(config.host);
        }
    }

    return MqttService;
};

Service.$inject = [];
export default Service;
