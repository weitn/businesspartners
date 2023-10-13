sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History) {
        "use strict";

        return Controller.extend("ns.businesspartners.controller.Products", {
            onInit: function () {

            },

            pressMe: function() {
                var lv_InputValue = this.getView().byId("input0").getValue();

                alert(`Welcome! ${lv_InputValue}`);
            },

            onNavBack: function () {
                alert('In onNavBack function in Product Controller');

                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("TargetSuppliers", {}, true);
                }
            }
        });
    });
