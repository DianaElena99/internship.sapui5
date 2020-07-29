sap.ui.define(['sap/ui/core/mvc/Controller','sap/ui/model/json/JSONModel'],
	function(Controller, JSONModel) {
	"use strict";

	var CarouselController = Controller.extend("org.ubb.hw.controller.Carousel", {

		onInit : function (evt) {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("../products.json"));
			this.getView().setModel(oModel, "cover");
			
			
		}
	});


	return CarouselController;

});