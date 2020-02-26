import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email }, // filtra de se tem algum email igual ao informado
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const user = await User.create(req.body);

        const { id, name, email, provider } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            provider,
        }); // Retorna pro front end so oq eu botar ai
    }
}

export default new UserController();