// var Note = require("mongoose").model("Note");
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports = {
    index: function(req,res){
        Note.find({},function(err,notes){
            if(err){
                res.redirect("/");
            }else{
                res.json(notes);
            }
        }).sort({createdAt:-1}); // Will only be visible on page refresh, due to adding to end of array on client.
    },
    create: function(req,res){
        var note = new Note({
            text:req.body.text
        });

        note.save(function(errs){
            if(errs){
                console.log(errs);
                res.redirect("/");
            }else{
                res.json(note);
            }
        });
    },

    // get:function(req,res){
    //     let note = Note.find({_id:req.params.id},function(err,note){
    //         if(err){
    //             console.log(err);
    //             res.redirect("/");
    //         }else{
    //             res.json(note[0]);
    //         }
    //     });
    // },

    // update:function(req,res){
    //     let note = Note.find({_id:req.params.id},function(err,note){
    //         note         = note[0];
    //         note.text    = req.body.text;
    //         note.save(function(errs){
    //             if(errs){console.log(errs);}
    //             res.redirect("/");
    //         });
    //     });
    // },

    // delete:function(req,res){
    //     Note.remove({_id:req.params.id},function(err){
    //         if(err){console.log(err);}
    //         res.redirect("/");
    //     });
    // }
}