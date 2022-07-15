import {Model} from "../db/model";

class Service {
    async input(number) {
        try {
            const fibonacci = this.calcFibonacciByNumber(number)
            const modelFibonacci = await Model.create({fibonacci})
            return modelFibonacci
        } catch (e) {
            console.log(e);
        }
    }

    async output(ticket) {
        try {
            const fibonacci = await Model.findByPk(ticket)
            return fibonacci
        } catch (e) {
            console.log(e);
        }
    }

    private calcFibonacciByNumber(number) {
        return number <= 1 ? number :
            this.calcFibonacciByNumber(number - 1) + this.calcFibonacciByNumber(number - 2);
    }
}

export default new Service()