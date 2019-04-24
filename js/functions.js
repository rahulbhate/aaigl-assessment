let inputArray = [];
let distinctArray = [];
let size = 5; //Maximum Array size

for (let i = 0; i < size; i++) {
  //Taking Input from user
  inputArray[i] = prompt("Enter array Element " + (i + 1));
}

//Print the array in the console.
distinctArray = inputArray.filter(
  (value, index, array) => array.indexOf(value) == index
);
alert("Distinct elements from list: " + distinctArray);

function StockPicker(arr) { 

var max_profit = -1;
var buy_price = 0;
var sell_price = 0;

// this allows our loop to keep iterating the buying
// price until a cheap stock price is found
var change_buy_index = true;

// loop through list of stock prices once
for (var i = 0; i < arr.length-1; i++) {

// selling price is the next element in list
sell_price = arr[i+1]; 

// if we have not found a suitable cheap buying price yet
// we set the buying price equal to the current element
if (change_buy_index) { buy_price = arr[i]; }

// if the selling price is less than the buying price
// we know we cannot make a profit so we continue to the 
// next element in the list which will be the new buying price
if (sell_price < buy_price) {
change_buy_index = true; 
continue;
}

// if the selling price is greater than the buying price
// we check to see if these two indices give us a better 
// profit then what we currently have
else { 
var temp_profit = sell_price - buy_price;
if (temp_profit > max_profit) { max_profit = temp_profit; }
change_buy_index = false;
}

}

return max_profit;
   
}

console.log("Maximum profit: " + StockPicker([45, 24, 35, 31, 40, 38, 11]));

function displayData(){
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PCDtvFpDDfuj8Z1NImNsz1d0KovzKxRo1p2nCjZj')
  .then(res => res.json())//response type
  .then(data => document.getElementById("data").innerHTML =JSON.stringify(data, null, 2).replace(/ /g, '&nbsp;').replace(/ \\n/g, '&lt;br;&gt;')); //log the data;

}
//call the fetch function
function filterByValue(){
  var searchText = document.getElementById("txtSearch").value;
     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PCDtvFpDDfuj8Z1NImNsz1d0KovzKxRo1p2nCjZj')
  .then(res => res.json())//response type
  .then(data => {
  const photosArray = data.photos.filter((photo) => {
    return JSON.stringify(photo).indexOf(JSON.stringify(parseInt(searchText)) !== -1)
  });
  document.getElementById("data").innerHTML =JSON.stringify(photosArray, 2).replace(/ /g, '&nbsp;').replace(/ \\n/g, '&lt;br;&gt;');
})
.catch( error => console.log(error))
}
function reMapData() {
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PCDtvFpDDfuj8Z1NImNsz1d0KovzKxRo1p2nCjZj"
  )
    .then(res => res.json()) //response type
    .then(data => {
      const photosArray = data.photos.map((photo, value) => {
        return {
          id: photo.id,
          camera: {
            id: photo.camera.id,
            full_name: photo.camera.full_name
          },
          image: photo.img_src,
          earth_date: photo.earth_date
        };
      });
      document.getElementById("data").innerHTML = JSON.stringify(
        photosArray,
        null,
        2
      )
        .replace(/ /g, "&nbsp;")
        .replace(/ \\n/g, "&lt;br;&gt;");
    })
    .catch( error => console.log(error));
}
function displayDataById() {
  var searchText = document.getElementById("txtSearch").value;
  alert(searchText);
}
