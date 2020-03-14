fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72") // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    // Create and append the li's to the ul
	// console.log(data);
	
	var html = "";
	data.forEach(item => {
        html += `   
    <li class="card">

        <img src="${item.photo}">
        <h2>${item.property_type}</h2>
        <h3>${item.name}</h3>
        <p>${item.price}</p>

    </li>`


		
		// console.log(item);
	})
	
	// console.log(html)
	document.getElementById('lista').innerHTML = html;
})