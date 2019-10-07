var instasearchApp = new Vue({
	
	el: '#app-instasearch',
	
	data: { 
		authorNameSearchString: "",
		photoFeed: null
	},
	
	mounted() {
		axios
			.get('https://picsum.photos/v2/list?page=2&limit=10')
			.then(response => {
				this.photoFeed = response.data;
			})
			.catch(error => console.log(error))
	},
	
	 computed: {
        
        filteredPhotoFeed: function () {
			
            var photos = this.photoFeed;
            var authorNameSearchString = this.authorNameSearchString;

            if(!authorNameSearchString){
                return photos;
            }

            searchString = authorNameSearchString.trim().toLowerCase();

            photos = photos.filter(function(item){
                if(item.author.toLowerCase().indexOf(authorNameSearchString) !== -1){
                    return item;
                }
            })

            return photos;
        }
	 }
	
});

// Ci posso mettere un finally loading false ecc