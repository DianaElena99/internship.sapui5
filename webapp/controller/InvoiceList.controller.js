sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("org.ubb.hw.controller.InvoiceList", {
        formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "LEI"
			});
			this.getView().setModel(oViewModel, "view");
        },
        
        onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("title", FilterOperator.Contains, sQuery, false));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        },
        
        handleIconTabBarSelect : function(oEvent){
            var sKey = oEvent.getParameter("key");
            var aFilter = [];
            var filter = null;
            console.log(sKey);

            if (sKey == "All"){
                var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            }
            else{
                filter = new Filter("status", FilterOperator.EQ, sKey);
                aFilter.push(filter);
            }

            
   
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
           },
   
           

        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}

	});
});