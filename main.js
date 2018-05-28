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
