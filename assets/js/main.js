"use strict";

function Calculadora() {
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function () {
        this.display.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = function () {
        this.display.value = "";
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.cliqueBotoes = function () {
        document.addEventListener("click", (e) => {
            const el = e.target.closest(".btn");
            if (el) {
                const value = el.getAttribute("data-value");
                this.processarValor(value);
            }
        });
    };

    this.processarValor = function (valor) {
        if (valor === "clear") {
            this.clearDisplay();
        } else if (valor === "delete") {
            this.apagaUm();
        } else if (valor === "=") {
            this.realizaConta();
        } else {
            this.btnParaDisplay(valor);
        }
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

    this.realizaConta = function () {
        try {
            this.display.value = eval(this.display.value);
        } catch (e) {
            this.display.value = "Error";
        }
    };
}

let calculadora = new Calculadora();
calculadora.inicia();
