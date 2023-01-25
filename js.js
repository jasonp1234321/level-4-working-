const List = [];

function initialize(){
  previousIndex = -1;
  previousGrocery = "";
  tempIndex = 0;
  
  groceryOutput = document.getElementById("groceryList");
  input = document.getElementById("inputform");
  log = "";
  
  display();
}
/*displays stuff for the html */
function display(){
  log = "";
  for(let i = 0; i < List.length; i++){
      log += i + 1 + "." + List[i] + "<br />";
  }
  groceryOutput.innerHTML = log;
}
/*adds to the grocery list*/
function add(grocery){
  List.push(grocery);
  input.groceryinput.value = "";
  display();
}
/*deletes from the grocery list*/
function deleteIt(index){
  index -= 1;
  List.splice(index, 1);
  input.groceryinput.value = "";
  display();
}
/*moves object up for the grocery list*/
function Up(index){
  index -= 1;
  if(tempIndex > 0){
    if(previousIndex === index){
      List.splice(tempIndex, 1);
      List.splice(tempIndex-1, 0, previousGrocery);
      tempIndex--;
    }
    else{
      let selectGrocery = List[index];
      List.splice(index, 1);
      List.splice(index-1, 0, selectGrocery);
      previousGrocery = selectGrocery;
      previousIndex = index;
      tempIndex = index-1;
    }
  }
  else{
    if(tempIndex != 0 || previousIndex != index){
      let selectGrocery = List[index];
      List.splice(index, 1);
      List.splice(index-1, 0, selectGrocery);
      previousGrocery = selectGrocery;
      previousIndex = index;
      tempIndex = index-1;
    }
  }
  display();
}
/*moves object down from the grocery list*/
function Down(index){
  index -= 1;
  if(tempIndex < List.length){
    if(previousIndex === index){
        List.splice(tempIndex, 1);
        List.splice(tempIndex+1, 0, previousGrocery);
        tempIndex++;
    }
    else{
        let selectGrocery = List[index];
        List.splice(index, 1);
        List.splice(index+1, 0, selectGrocery);
        previousGrocery = selectGrocery;
        previousIndex = index;
        tempIndex = index+1;
    }
  }
  else{
    if(tempIndex != List.length || previousIndexDown != index){
        let selectGrocery = List[index];
        List.splice(index, 1);
        List.splice(index+1, 0, selectGrocery);
        previousGrocery = selectGrocery;
        previousIndex = index;
        tempIndex = index+1;
    }
  }
  display();
}
