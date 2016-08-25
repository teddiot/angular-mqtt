import Controller from './controller';
import Template from './tmpl.html';

class HomeDirective {
    constructor() {
        this.template = Template;
        this.restrict = 'EA';
        this.controller = Controller;
        this.controllerAs = 'vm';
        this.bindToController = {};
    }
}

HomeDirective.$inject = [];
export default HomeDirective;
