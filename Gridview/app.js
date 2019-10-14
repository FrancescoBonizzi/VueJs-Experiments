var cartData = {
    columns: [
        "Id",
        "Quantity",
        "Name",
        "Seller",
        "Price"
    ],
    data: [
        { Id: 1, Quantity: 1, Name: "SSD Super Fast 1TB", Seller: "Elektro Sell", Price: "123.00$", ImagePath: "images/a.jpg" },
        { Id: 2, Quantity: 1, Name: "Bottle of 1998 Barolo", Seller: "Very Nice Shop", Price: "50.00$", ImagePath: "images/b.jpg" },
        { Id: 3, Quantity: 3, Name: "Car Radio Player", Seller: "Elektro Sell", Price: "78.10$", ImagePath: "images/c.jpg" },
        { Id: 4, Quantity: 1, Name: "Video Game Console Super Powerful", Seller: "Elektro Sell", Price: "99.99$", ImagePath: "images/d.jpg" },
        { Id: 5, Quantity: 5, Name: "Book about vegetarianism", Seller: "Your Library", Price: "41.20$", ImagePath: "images/e.jpg" }
    ]
};

var booksData = {
    columns: [
        "Id",
        "Name",
        "Author",
        "Theme",
        "Rating"
    ],
    data: [
        { Id: 1, Name: "The look of love", Author: "George Blue", Theme: "Drama", Rating: "*****", ImagePath: "images/a.jpg" },
        { Id: 2, Name: "20 vegetarian dishes", Author: "Francesco Bonizzi", Theme: "Cooking", Rating: "****", ImagePath: "images/b.jpg" },
        { Id: 3, Name: "How to be happy", Author: "Asdrubale Anselmi", Theme: "Self help", Rating: "*", ImagePath: "images/c.jpg" },
        { Id: 4, Name: "The last bee", Author: "John Dorian", Theme: "Nature", Rating: "****", ImagePath: "images/d.jpg" }
    ]
};

var gridviewApp = new Vue({
	
	el: '#app-gridview',
	
	data: {
		gridData: cartData,
        buttonSwitchViewText: "Switch to ListView",
        buttonSwitchDataText: "Switch to books data",
        isGridView: true,
        isBookData: false
	},
	
	methods: {
		
		switchView: function() {
			
			if (this.isGridView) {
                this.buttonSwitchViewText = "Switch to GridView";
			}
			else {
                this.buttonSwitchViewText = "Switch to ListView";
			}
			
			this.isGridView = !this.isGridView;
        },

        switchData: function () {

            if (this.isBookData) {
                this.buttonSwitchDataText = "Switch to books data";
                this.gridData = cartData;
            }
            else {
                this.buttonSwitchDataText = "Switch to shop data";
                this.gridData = booksData;
            }

            this.isBookData = !this.isBookData;
        }
	
	}
	
});