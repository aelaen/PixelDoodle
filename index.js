// Select color
let colorVal = $("#colorPicker");
$("#pixelCanvas").on("click", "tr td", function(){
  //This adds event listened to the grid
	$(this).css("background-color", colorVal.val());
});

$("#sizePicker").submit(function(event){
  // Event Listener
  event.preventDefault();
  makeGrid();
})

function makeGrid() {
  /*Sets up a grid to according to values submitted on form*/
  let gridStart = $("#pixelCanvas");
  var tableHeight, tableWidth;
  tableHeight=$("#inputHeight").val();
  tableWidth= $("#inputWidth").val();
  
  gridStart.empty();
  for (var r = 0; r < tableHeight; r++){
    gridStart.append("<tr></tr>"); /*This adds the rows*/
    for (var c = 0; c < tableWidth; c++){
      $("tr").last().append("<td></td>"); /*This adds the columns +++NEEDS .last()+++*/
    }
  }
}
