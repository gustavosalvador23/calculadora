
const visor = document.getElementById("visor");

function adicionar(valor) {
    if (visor.value === "Erro") {
        visor.value = "0";
    }

    if (visor.value === "0" && valor !== ".") {
        visor.value = valor;
    } else {
        visor.value += valor;
    }
}

function limpar() {
    visor.value = "0";
}

function apagar() {
    visor.value = visor.value.slice(0, -1);

    if (visor.value === "") {
        visor.value = "0";
    }
}

function calcular() {
    try {
        const expressao = visor.value;

        // Aceita apenas números e operadores matemáticos.
        if (!/^[0-9+\-*/.() ]+$/.test(expressao)) {
            throw new Error("Expressão inválida");
        }

        const resultado = Function(
            '"use strict"; return (' + expressao + ')'
        )();

        if (!Number.isFinite(resultado)) {
            throw new Error("Resultado inválido");
        }

        visor.value = String(
            Math.round((resultado + Number.EPSILON) * 1e10) / 1e10
        );
    } catch {
        visor.value = "Erro";
    }
}
