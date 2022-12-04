

var siteName = document.getElementById("siteName")
var linkName = document.getElementById("linkName")
var alertName = document.getElementById("alertName")
var alertURL = document.getElementById("alertURL")

var SubmitList = []


function Submit() {
    
 
        var SubmitAdd = {
            name :siteName.value,
            site : linkName.value
        }
        SubmitList.push ( SubmitAdd)
        console.log(SubmitList);
        displayData()
    }





function displayData() {

var temp = ""

for ( var i = 0 ; i  < SubmitList.length ; i++ ) {
temp += ` <tr>

<td class="blod">` +SubmitList[i].name +`</td>
<td>
    <button class="btn btn-primary margen"onclick="VisitData()">Visit</button>
</td>
<td>
    <button class="btn btn-danger margen" onclick="deleteProduct(`+i+`)" >delete</button>
</td>
</tr>`
}
document.getElementById("tableBody").innerHTML = temp 
}



function VisitData() {
    if (  window.open(
        linkName.value , "_blank") == (i) 
    )
    {
window.open
    }
  
   
}
function deleteProduct(x){
    SubmitList.splice(x,1)
    displayData()
}























siteName.addEventListener('blur' ,validName)

function validName(){
    var regexName = "/^[A-Z]$/"
    if (regexName.test(siteName.value) == true){
       siteName.classList.add("is-valid")
       siteName.classList.remove("is-invalid")
       alertName.classList.replace("d-block","d-none" )
       return true 
    }
    else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        alertName.classList.replace("d-none","d-block" )
        return false
    }
}


// linkName.addEventListener('blur' , validURL)
 function validURL(){
    var regexName = "/^(https?:\/\/)/g$/"
    if (regexName.test(linkName.value) == true){
        linkName.classList.add("is-valid")
        linkName.classList.remove("is-invalid")
        alertURL.classList.replace("d-block","d-none" )
        return true
    }
    else{
        linkName.classList.add("is-invalid")
        linkName.classList.remove("is-valid")
        alertURL.classList.replace("d-none","d-block" )
        return false
    }
}








// var nameInput = document.getElementById("productName")
// var priceInput = document.getElementById("productPrice")
// var catagoryInput = document.getElementById("productCategory")
// var descriptionInput = document.getElementById("productDescription")
// var searchInput = document.getElementById("searchInput")
// var productList = []
// if(localStorage.getItem("list") != null){
//     productList = JSON.parse(localStorage.getItem("list"))
//     displayData ()
// }
// else{
//     productList = []
// }

// function addProduct() {
//     var product = {
//         name : nameInput.value,
//         price : priceInput.value,
//         catagory : catagoryInput.value,
//         desc : descriptionInput.value
//     }
//     productList.push(product)
//     localStorage.setItem("list" , JSON.stringify(productList))
//     displayData ()
// }
// function displayData () {
//     var temp = ""
//     for ( var i = 0 ; i < productList.length ; i++) {
//         temp += `   <tr>
//         <td>`+ i+ `</td>
//         <td>`+ productList[i].name +`</td>
//         <td>`+ productList[i].price +`</td>
//         <td>`+ productList[i].catagory +`</td>
//         <td>`+ productList[i].desc +`</td>
//      <td>
//       <button class="btn btn-warning ">update</button>
//       </td>
//       <td>
//       <button class="btn btn-danger" onclick="deleteProduct(`+ i +`)">Delete</button>
//       </td>
//     </tr>`
//     }
//     document.getElementById("tableBody").innerHTML = temp


// }
// function search() {
//     var searchValue = searchInput.value.toLowerCase()
//     var temp = ""
//     for (var i = 0 ; i < productList.length ; i++) {
//         if (productList[i].name.toLowerCase().includes(searchValue) == true){
//             temp += `   <tr>
//             <td>`+ i+ `</td>
//             <td>`+ productList[i].name +`</td>
//             <td>`+ productList[i].price +`</td>
//             <td>`+ productList[i].catagory +`</td>
//             <td>`+ productList[i].desc +`</td>
//          <td>
//           <button class="btn btn-warning ">update</button>
//           </td>
//           <td>
//           <button class="btn btn-danger" onclick="deleteProduct(`+ i +`)">Delete</button>
//           </td>
//         </tr>`
//         }
//     }
//     document.getElementById("tableBody").innerHTML = temp
// }
