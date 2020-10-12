
const error404 = async (req, res, next) => {
    res.status(404).send({ message : 'Página no encontrada' });
};

module.exports = { error404 };