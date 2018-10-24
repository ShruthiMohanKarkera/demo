sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Table.Assignment.controller.View1", {


		onItemPress: function (oevent) {

			var ob = oevent.getParameters().listItem.getBindingContext("jModel").getObject();
			// 	omodel = this.getView().getModel("jModel");
			// omodel.setProperty("/Form", ob);
			var routing = sap.ui.core.UIComponent.getRouterFor(this);
			routing.navTo("TargetView2", {
				id: ob.title,
				name:ob.zip ,
				street:ob.street,
				city:ob.city
			});
		},
		onNavToEmployeeOverview : function (oEvent) {
			var routing = sap.ui.core.UIComponent.getRouterFor(this);
			routing.navTo("TargetView4");
		}

	});

});