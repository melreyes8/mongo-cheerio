// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(scrapedData) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    scrapedData.forEach(function(scrapedData) {
      // Append each of the animal's properties to the table
      $("tbody").append("<tr><td>" + article.title + "</td>" +
                           "<td>" + article.link + "</td>" +
                           "<td>" + article.author + "</td></tr>");
    });
  }
  
    // another way of coding above
        // for (var i=0; i<animals.length; i++){
        //   $("tbody").append("<tr><td>" + animal[i].name + "</td>" +
        //                       "<td>" + animal[i].numLegs + "</td>" +
        //                       "<td>" + animal[i].class + "</td>" +
        //                       "<td>" + animal[i].weight + "</td>" +
        //                       "<td>" + animal[i].whatIWouldReallyCallIt + "</td></tr>");
        // }
  
  // Bonus function to change "active" header
  function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  // 1: On Load
  // ==========
  
  // First thing: ask the back end for json with all animals
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
  
    // another way to code above
      // $.ajax({url: "/all"}).done(function(data) {
      //   // Call our function to generate a table body
      //   displayResults(data);
      // })
  
  
  // 2: Button Interactions
  // ======================
  
  // When user clicks the weight sort button, display table sorted by weight
  $("#saved-articles").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#...");
  
    // Do an api call to the back end for json with all animals sorted by weight
    $.getJSON("/savednews", function(data) {
      // Call our function to generate a table body
      displayResults(data);
    });
  });
  
  // When user clicks the name sort button, display the table sorted by name
  $("#scrape-new-articles").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#...");
  
    // Do an api call to the back end for json with all animals sorted by name
    $.getJSON("/scrapemore", function(data) {
      // Call our function to generate a table body
      displayResults(data);
    });
  });
  