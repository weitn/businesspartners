sap.ui.define([
    //"sap/ui/core/mvc/Controller"
    "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ns.businesspartners.controller.NotFound", {
       onInit: function () {
       }

       //onDisplaySuppliers : function () {
        //alert('In onDisplaySuppliers function');

        //display the "notFound" target without changing the hash
        //this.getRouter().getTargets().display("notFound");
        //this.getOwnerComponent().getRouter().getTargets().display("Suppliers");
        //},

        //onNavBack : function () {

        //}

    });
});