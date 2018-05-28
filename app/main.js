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
}, {
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

angular.module('app', [])
	.controller('commentEngine', function ($scope) {
		$scope.comments = rootComments;
	})
	.controller('commentCtrl', function($scope) {
		$scope.replying = false;
		$scope.buttonMessage = "Reply";
		$scope.reply = function () {
			$scope.replying = !$scope.replying;
			console.log($scope.replying);
		}
		$scope.newComment = function (userNameString, commentString) {
			this.comment.replies.push({
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
			})
			console.log('done');
		}
	})
	.directive('commentBody', function () {
		return {
			templateUrl: 'app/comment.html',
		}
	});
