sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("Table.Assignment.controller.EmployeeOverview", {
onNavBack:function(oEvent){
		var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("RouteView1", {}, true /*no history*/);
			}
		}
// 	sap.ui.define([
// 	"sap/ui/demo/nav/controller/BaseController"
// ], function (BaseController) {
// 	"use strict";
//	return BaseController.extend("sap.ui.demo.nav.controller.employee.overview.EmployeeOverview", {
// 	});
// });

	});

});