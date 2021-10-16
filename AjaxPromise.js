let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;


function makePromiseCall(methodType,url,async=true,data=null)
{
    return new Promise(function(resolve,request)
    {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            console.log(methodType+" state changed called Ready state: "+xhr.readyState+" Status: "+xhr.status)
            if(xhr.readyState==4)
            {
                if(xhr.status.toString().match('^[2][0-9]{2}$'))
                {
                    resolve(xhr.responseText)
                }
                else if(xhr.status.toString().match('^[4,5][0-9]{2}$'))
                {
                    reject({
                        status:xhr.status,
                        statusText:xhr.statusText
                    });
                    console.log("XHR failed");
                }

            }
            
        }
        xhr.open(methodType,url,async);

        if(data)
        {
            console.log(JSON.stringify(data));
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(data));
        }
        else
        {
            xhr.send();
        }
        console.log(methodType+" Request sent to server ")
    
    });
}
