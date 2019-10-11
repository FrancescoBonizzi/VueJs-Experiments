var cartData = {
	columns: [
		"Id",
		"Quantity",
		"Name",
		"Seller",
		"Price"
	],
	data: [
		{ Id: 1, Quantity: 1, Name: "SSD Super Fast 1TB", Seller: "Elektro Sell", Price: "123.00$" }, 
		{ Id: 2, Quantity: 1, Name: "Bottle of 1998 Barolo", Seller: "Very Nice Shop", Price: "50.00$" }, 
		{ Id: 3, Quantity: 3, Name: "Car Radio Player", Seller: "Elektro Sell", Price: "78.10$" }, 
		{ Id: 4, Quantity: 1, Name: "Video Game Console Super Powerful", Seller: "Elektro Sell", Price: "99.99$" }, 
		{ Id: 5, Quantity: 5, Name: "Book about vegetarianism", Seller: "Your Library", Price: "41.20$" }
	]
}

var instasearchApp = new Vue({
	
	el: '#app-gridview',
	
	data: {
		gridData: cartData,
		buttonText: "Switch to ListView",
		isGridView: true
	},
	
	methods: {
		
		switchView: function() {
			
			if (this.isGridView) {
				this.buttonText = "Switch to GridView";
			}
			else {
				this.buttonText = "Switch to ListView";
			}
			
			this.isGridView = !this.isGridView;
			
		}
	
	}
	
});