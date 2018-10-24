sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("Table.Assignment.controller.V2", {

	
			onInit: function() {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetView2").attachPatternMatched(this._onObjectMatched, this);
			},

	
		
		_onObjectMatched: function(oevent){
		var name = oevent.getParameters().arguments.id,
			obj = {},
			json = this.getView().getModel("jModel");
			obj.title = name;
			obj.zip = oevent.getParameters().arguments.name ;
	
			obj.street = oevent.getParameters().arguments.street;
			obj.city = oevent.getParameters().arguments.city;
			json.setProperty("/title5", obj);
			
		},
		getRouter: function(){
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onShowResume : function (oEvent) {
			// var oCtx = this.getView().getElementBinding().getBoundContext();

			this.getRouter().navTo("TargetView3", {
				employeeId : "How are you"
			});
		},
		
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

	});

});