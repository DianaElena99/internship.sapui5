sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
 ], function (UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("org.ubb.hw.Component", {
       metadata : {
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set dialog
         this._helloDialog = new HelloDialog(this.getRootControl());
         // create the views based on the url/hash
			this.getRouter().initialize();
       },
       exit : function() {
			this._helloDialog.destroy();
         delete this._helloDialog;
         
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
    });
 });