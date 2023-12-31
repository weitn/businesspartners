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

            navToProducts: function() {
                //var lv_InputValue = this.getView().byId("input0").getValue(); //Get value from input box

                //alert(`Welcome! ${lv_InputValue}`);

                //Navigate to Products view
                //this.byId("Suppliers").to(this.byId("Products"));
                //this.getRouter().getTargets().display("Products", { fromTarget: "Suppliers" });
                this.getOwnerComponent().getRouter().getTargets().display("Products", { fromTarget: "TargetSuppliers" });
            },

            onDisplayNotFound : function () {
                alert('In onDisplayNotFound function');

                //display the "notFound" target without changing the hash
                //this.getRouter().getTargets().display("notFound", { fromTarget: "Suppliers" });
                this.getOwnerComponent().getRouter().getTargets().display("NotFound", { fromTarget: "TargetSuppliers" });
            }
        });
    });
