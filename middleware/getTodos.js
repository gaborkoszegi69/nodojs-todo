module.exports = (objRep) => {
    const {TodoModel} = objRep;
    return (req, res, next) => {
        res.locals.todos = todoModel.find();
        return next();

    }
}