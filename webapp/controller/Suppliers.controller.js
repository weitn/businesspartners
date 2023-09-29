sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.businesspartners.controller.Suppliers", {
            onInit: function () {

            },

            pressMe: function() {
                var oView = this.getView();

                var lv_InputValue = oView.byId("input0").getValue();

                alert(`Welcome! ${lv_InputValue}`);
            }
        });
    });
