var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var SetEsq = window.document.getElementById("seta-esq");
var SetDir = window.document.getElementById("seta-dir");

function rolardireita(){
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    SetDir.style = "display:none"
    SetEsq.style = "display:flex"

}
function rolaresquerda(){
    Bruna.style = "display:flex"
    Leonardo.style = "display:none"
    SetDir.style = "display:flex"
    SetEsq.style = "display:none"
}