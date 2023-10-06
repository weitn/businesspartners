sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.businesspartners.controller.Products", {
            onInit: function () {

            },

            pressMe: function() {
                var lv_InputValue = this.getView().byId("input0").getValue();

                alert(`Welcome! ${lv_InputValue}`);
            }
        });
    });
