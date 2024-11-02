let ContactsModel = require('../models/contacts');

module.exports.create = async function(req, res, next){

    try{
        let newContact = new ContactsModel(req.body);
        
        let result = await ContactsModel.create(newContact);
        
        res.json({
            success: true,
            message: 'Contact created successfully.'
        }) 

    } catch (error){
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next){
    try{
        let list = await ContactsModel.find({});

        res.json(list);

    } catch (error){
        console.log(error);
        next(error);
    }
}

module.exports.userGet = async function (req, res, next) {
    try{
        let cID = req.params.userID;
        req.user = await ContactsModel.findOne({ _id: cID});
        next();

    } catch {
        console.log(error);
        next(error);
    }
}

module.exports.userByID = async function (req, res, next) {
    res.json(req.user);
}

module.exports.update = async function(req, res, next){
    try{
        let cID = req.params.userID;

        let updateUser = new ContactsModel(req.body);
        updateUser._id = cID;
        
        let result = await ContactsModel.updateOne({_id: cID}, updateUser);
        console.log(result);
        
        if(result.modifiedCount > 0){
            res.json(
                {
                success: true,
                message: 'Contact updated successfully.'
                }
            );
        } else{
            //Expess will catch this on its own.
            throw new Error('Contact not updated. Are you sure it exists?')
        }
    } catch (error){
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function(req, res, next){

    try{

        let cID = req.params.userID;
        
        let result = await ContactsModel.deleteOne({_id: cID});
        console.log(result);
        
        if(result.deletedCount > 0){
            res.json(
                {
                success: true,
                message: 'Contact deleted successfully.'
                }
            );
        } else{
            //Expess will catch this on its own.
            throw new Error('Contact not deleted. Are you sure it exists?')
        }
    } catch (error){
        console.log(error);
        next(error);
    }
}