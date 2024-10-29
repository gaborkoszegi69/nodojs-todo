module.exports = (objRep) => {
    const {todoModel, db, uuid} = objRep;
    return (req, res, next) => {
        if (typeof req.body.todo == 'undefined' ) {
            // error case
            return res.status(400).json({error: 'Missing todo'});
        }

        const newTodo = {
            id: uuid.v4(),
            todo: req.body.todo
        };
        bookModel.insert(newTodo);
        return db.saveDatabase((err) => {
            //err?
            return next();
            //return res.json(newBook);
        })
    }
}