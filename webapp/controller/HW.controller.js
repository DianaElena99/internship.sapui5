sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("org.ubb.hw.controller.HW", {
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
        

        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		}

	});
});

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//    "sap/ui/model/json/JSONModel",
// 	"sap/ui/core/Fragment"
//  ], function (Controller, MessageToast, JSONModel,Fragment) {
//     "use strict";
//     return Controller.extend("org.ubb.hw.controller.HW", {
//       onInit : function () {
//         // set data model on view
//         var oData = {
//            recipient : {
//               name : "World",
//               asd : "aaaa"
//            }
//         };
//         var oModel = new JSONModel(oData);
//         this.getView().setModel(oModel);
//      },
//       onShowHello : function () {
// 			// read msg from i18n model
//       var oBundle = this.getView().getModel("i18n").getResourceBundle();
//       var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//       var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//       // show message
//       MessageToast.show(sMsg);
//     },
// 		onOpenDialog : function () {
// 			this.getOwnerComponent().openHelloDialog();
// 		}
//     });
//  })