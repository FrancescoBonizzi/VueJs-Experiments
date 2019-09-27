var itemIndex = 0;

function GetFreeItemIndex() {
	itemIndex++;
	return itemIndex;
}

var testData = [
	{ Id: GetFreeItemIndex(), Text: "Lorem ipsum dolor sit amet", IsDone: false },
	{ Id: GetFreeItemIndex(), Text: "Sed fringilla tellus nec finibus maximus. Duis venenatis risus purus. Duis magna odio, eleifend vitae dignissim gravida, semper volutpat nisl", IsDone: false },
	{ Id: GetFreeItemIndex(), Text: "Ut nec erat non nulla ultricies condimentum", IsDone: true }
];

var todoListApp = new Vue({
	
	el: '#app-todolist',
	
	data: {
		todoItems: testData,
		newTodoText: ""
	},

	methods: {
		
		addTodo: function() {
			
			if (this.newTodoText.trim() === "")
				return;
			
			this.todoItems.push({ Id: GetFreeItemIndex(), Text: this.newTodoText, IsDone: false});
			this.newTodoText = "";
			
		},
		
		removeTodo: function(todo) {
			this.todoItems.splice(this.todoItems.indexOf(todo), 1);
		}
	}
});
