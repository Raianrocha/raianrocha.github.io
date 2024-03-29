window.onload = function() {
    var nome = prompt("Qual é o seu nome?");
    if (nome != null) {
        alert("Olá, " + nome + "! Bem-vindo ao nosso site sobre Dengue.");
        
        var sintoma = prompt("Você está sentindo algum sintoma de Dengue? (sim/não)");
        if (sintoma != null && sintoma.toLowerCase() === "sim") {
            alert("É importante procurar um médico se estiver sentindo sintomas de Dengue. Cuide-se!");
        } else {
            alert("Continue se cuidando e seguindo as medidas de prevenção!");
        }
    }
}