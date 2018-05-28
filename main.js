const rootComments = [{
	userName: 'userA',
	comment: `I'm a tool!`,
	date: new Date(),
	replies: [],
	print() {
		console.log(`${this.userName} , ${this.comment}`);
	},
	reply(userNameString, commentString) {
		this.replies.push(newComment(userNameString, commentString));
	}
}, 	{
	userName: 'userB',
	comment: `I'm a unicorn`,
	date: new Date(),
	replies: [],
	print() {
		console.log(`${this.userName} , ${this.comment}`);
	},
	reply(userNameString, commentString) {
		this.replies.push(newComment(userNameString, commentString));
	}
}]

function newComment(userNameString, commentString) {
	return {
		userName: userNameString,
		comment: commentString,
		date: new Date(),
		replies: [],
		print() {
			console.log(`${this.userName} , ${this.comment}`);
		},
		reply(userNameString, commentString) {
			this.replies.push(newComment(userNameString, commentString));
		}
	}
}

angular.module('app', [])
	.controller('commentEngine', function ($scope) {
		$scope.comments = rootComments;
	})
	.directive('commentBody', function() {
		return {
			templateUrl: 'comment.html',
		}
	})
