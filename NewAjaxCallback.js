let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;


const getURL="http://127.0.0.1:3000/employees/1"
function getUserDetails(data)
{
    console.log("get user data at: "+showTime()+" data: "+data)
}

makeAJAXCall("GET",getURL,getUserDetails,true);
console.log("Made GET AJAX Call to Server at "+showTime());