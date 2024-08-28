var sidenav= document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close= document.getElementById("close")
menuicon.addEventListener("click", function()
{
  sidenav.style.right=0;
})


close.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})
    
//selecting products

var productContainer = document.getElementById("product_container")
 var search= document.getElementById("search")
 var productList= productContainer.querySelectorAll("div")

search.addEventListener("keyup", function()
{

    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productList.length;count=count+1)
    {
        //from the specifc div selecting H1 tag as it has product name
        var productName=productList[count].querySelector("h1").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})
