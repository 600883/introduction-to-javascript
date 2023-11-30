(function() {
    // Create an object representing yourself
    var myInfo = {
      name: "Sivert",
      age: 23,
      favoriteFoods: ["Pizza", "Taco", "Pepsi Max"],
      favoriteMovies: [
        {
          name: "Inception",
          credits: { director: "Christopher Nolan", star: "Leonardo DiCaprio" }
        },
        {
          name: "The Shawshank Redemption",
          credits: { director: "Frank Darabont", star: "Tim Robbins" }
        },
        {
          name: "The Matrix",
          credits: { director: "Lana and Lilly Wachowski", star: "Keanu Reeves" }
        }
      ]
    };
  
    // Function to present yourself
    function presentMyself(info) {
      var presentationText = "Hello, my name is " + info.name + ". I'm " + info.age + " years old and my favorite movies are ";
  
      for (var i = info.favoriteMovies.length - 1; i >= 0; i--) {
        var movie = info.favoriteMovies[i];
        presentationText += movie.name + " which is directed by " + movie.credits.director + " and stars " + movie.credits.star;
  
        if (i > 0) {
          presentationText += ", ";
        }
      }
  
      return presentationText;
    }
  
    // Create a new DOM element to hold the text
    var paragraphElement = document.createElement("p");
    paragraphElement.textContent = presentMyself(myInfo);
  
    // Insert the element into the HTML page
    document.body.appendChild(paragraphElement);
})();
  