

var result = window.document.getElementById("resultado");
var contar = window.document.getElementById("contar");
var img = window.document.createElement("img");
var img2 = window.document.createElement("img");
img2.setAttribute("src", "/imagens/finish.png");
img.setAttribute("src", "/imagens/hands.png");
img2.style.height = "30px"
img2.style.width = "30px"
img.style.height = "30px"
img.style.width = "30px"

contar.addEventListener("click", somar)

function somar() {
    result.innerHTML = "";
    var v1 = Number(window.document.getElementById("valor1").value);
    var v2 = Number(window.document.getElementById("valor2").value);
    var passo = Number(window.document.getElementById("passo").value);
    if (v1 == 0) {
        window.alert("Por favor preencha o campo de início");
    }
    else if (v2 == 0) {
        window.alert("Por favor preencha o campo de fim");
    }
    else if(v2<v1)
    {
        window.alert("O fim não pode ser menor que o começo");
    }
    else if(v1==v2)
    {
        window.alert("Começo e fim não podem ter o mesmo número")
    }
    else if (passo == 0) {
        window.alert("Passo não pode ser zero, considerando como passo 1");
        passo = 1;
        for (var v1; v1 <= v2; v1 += passo) {
            result.innerHTML += `${v1} `
            result.appendChild(img);
        }
        result.appendChild(img);
        result.appendChild(img2);
    }
    else {
        for (var v1; v1 <= v2; v1 += passo) {
            result.innerHTML += `${v1} `
            result.appendChild(img);
        }
        result.appendChild(img);
        result.appendChild(img2);
    }
}
