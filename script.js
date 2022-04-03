//adicionando um evento em que pegando o conteudo carregado
//sem analisar o css, imagens e etc e executa as funções
//obs: pra que funcione o script deve ser carregado no head do html
document.addEventListener("DOMContentLoaded", 
function (event){ 
    function sayHello(event){
        this.textContent = "Said it!";
        var name = document.getElementById("name").value;
        var msg = "<h2>Hello " + name + "!</h2>"
        document.getElementById("content").innerHTML = msg;
    
        if(name === "Herbert"){
            var title = document.querySelector("#title").textContent;
            title += " & lovin it!";
            document.querySelector("h1").textContent = title;
        }
    }
    document.querySelector("button").addEventListener("click", sayHello);
})

