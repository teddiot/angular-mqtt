const Service = ($mqtt) => {
    class Home {
        constructor(scope) {
            this.scope = scope;
            this.topicMessages = [];

            $mqtt.client.on('message', (topic, message) => {
                // message is Buffer
                return this.handleMessage(topic, message);
            });
        }

        subscribe(topic) {
            $mqtt.client.subscribe(topic);
        }

        unsubscribe(topic) {
            //this.topicMessages = [];
            $mqtt.client.unsubscribe(topic);
        }

        handleMessage(topic, message) {
            let topicMessage = {
                topic: topic,
                message: JSON.parse(message.toString())
            };

            this.topicMessages.push(topicMessage);

            this.scope.$apply();
        }
    }

    return {
        Home
    };
};

Service.$inject = ['$mqtt'];
export default Service;
