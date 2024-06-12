sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function(Controller, MessageToast, MessageBox) {
    'use strict';

    return Controller.extend("lorkgroup.project02.controller.App",{



        onInit: function () {
            // Inicializar las variables necesarias
            this._currentValue = "";
            this._operator = null;
            this._previousValue = null;
            this._timer = null;

            // Configurar el reinicio automático
            this._startAutoResetTimer();
        },

        onNumberPress: function (oEvent) {
            this._resetAutoResetTimer();

            // Obtener el número del botón presionado
            var sNumber = oEvent.getSource().getText();

            // Añadir el número a la pantalla
            this._currentValue += sNumber;
            this._updateDisplay();
        },

        onOperatorPress: function (oEvent) {
            this._resetAutoResetTimer();

            // Guardar el operador y el valor actual
            var sOperator = oEvent.getSource().getText();
            if (this._currentValue !== "") {
                this._previousValue = parseFloat(this._currentValue);
                this._currentValue = "";
                this._operator = sOperator;
            }
        },

        onEqualsPress: function () {
            this._resetAutoResetTimer();

            if (this._operator && this._currentValue !== "" && this._previousValue !== null) {
                var fCurrentValue = parseFloat(this._currentValue);
                var fResult = 0;

                switch (this._operator) {
                    case "+":
                        fResult = this._previousValue + fCurrentValue;
                        break;
                    case "-":
                        fResult = this._previousValue - fCurrentValue;
                        break;
                    case "*":
                        fResult = this._previousValue * fCurrentValue;
                        break;
                    case "/":
                        fResult = this._previousValue / fCurrentValue;
                        break;
                }

                // Mostrar el resultado
                this._currentValue = fResult.toString();
                this._updateDisplay();

                // Resetear los valores
                this._previousValue = null;
                this._operator = null;
            }
        },

        _updateDisplay: function () {
            // Actualizar la pantalla de la calculadora
            var oDisplay = this.getView().byId("calculatorDisplay");
            oDisplay.setText(this._currentValue);
        },

        _startAutoResetTimer: function () {
            // Iniciar el temporizador para reiniciar automáticamente
            this._timer = setTimeout(function () {
                this._resetCalculator();
            }.bind(this), 10000); // 10 segundos
        },

        _resetAutoResetTimer: function () {
            // Reiniciar el temporizador
            if (this._timer) {
                clearTimeout(this._timer);
            }
            this._startAutoResetTimer();
        },

        _resetCalculator: function () {
            // Reiniciar los valores de la calculadora
            this._currentValue = "";
            this._operator = null;
            this._previousValue = null;
            this._updateDisplay();
        }

    });
    
});