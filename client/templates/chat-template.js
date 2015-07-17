Template.appChat.helpers({
	Messages: function(){

		return Messages.find({}, {sort: {createdAt: -1}, limit: 10}) 
	}


});

Template.appChat.events({

	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},

	"click .submit": function (event){

			Messages.insert({
				name: $(".name").val(),
				age: $(".age").val(),
				gender: $(".gender").val(),
				address: $(".address").val(),
				course: $(".course").val(),
				status: $(".status").val(),
				createdAt: new Date()
			})

	},

});