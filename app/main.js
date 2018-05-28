const rootComments = [{
	userName: 'userA',
	comment: `I'm a tool!`,
	date: new Date(),
	replies: [{
		userName: 'userC',
		comment: `I'm a subcomment`,
		date: new Date(),
		replies: [],
	},
	{
		userName: 'userD',
		comment: `I'm a subcomment`,
		date: new Date(),
		replies: [
			{
				userName: 'userE',
				comment: `I'm a subcomment`,
				date: new Date(),
				replies: [],
			}
		],
	}],
}, {
	userName: 'userB',
	comment: `I'm a unicorn`,
	date: new Date(),
	replies: [],
}]

angular.module('app', [])
	.controller('commentEngine', function ($scope) {
		$scope.comments = rootComments;
	})
	.controller('commentCtrl', function ($scope) {
		$scope.replying = false;
		$scope.buttonMessage = "reply";
		$scope.userName = '';
		$scope.commentString = '';
		$scope.openResponseBox = function () {
			$scope.replying = !$scope.replying;
		}
		$scope.reply = function () {
			this.comment.replies.push({
				userName: this.userName,
				comment: this.commentString,
				date: new Date(),
				replies: [],
			})
		}
	})
	.directive('commentBody', function () {
		return {
			templateUrl: 'app/comment.html',
		}
	});
