class MqttProvider {
    constructor() {
        this.config = {};
    }

    configure(config) {
        this.config = config;
    }

    $get(MqttService) {
        return new MqttService(this.config);
    }
}

export default MqttProvider;
