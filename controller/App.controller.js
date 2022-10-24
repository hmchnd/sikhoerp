sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sikhoerp.controller.App", {

		onShowHello : function () {
			
		

			// show message
			MessageToast.show("Hi");
		}
	});

});
