const Service = () => {
    class Home {
        constructor() {
            this.data = {};
        }

        square(a, b, cb) {
            let result = a * b;
            cb(result);
        }
    }

    return {
        Home
    };
};

Service.$inject = [];

export default Service;
