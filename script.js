function sayHello(event){
    var name = document.getElementById("name").value;
    var msg = "<h2>Hello " + name + "!</h2>"
    document.getElementById("content").innerHTML = msg;

    if(name === "Herbert"){
        var title = document.querySelector("#title").textContent;
        title += " & lovin it!";
        document.querySelector("#title").textContent = title;
    }
}