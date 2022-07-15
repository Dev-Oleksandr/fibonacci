import Service from "../services/service";

class Controller {
    async input(req, res) {
        const {number} = req.body
        if (number > 30) {
            return res.status(404).json({message: 'The number mustn\'t higher than 30'})
        }
        const fibonacci = await Service.input(number)
        return res.json(fibonacci)
    }

    async output(req, res) {
        const {ticket} = req.query
        const number = await Service.output(ticket)
        if (!number) {
            return res.status(404).json({message: "not found"})
        }
        return res.json(number)
    }
}


export default new Controller()