sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Table.Assignment.controller.Resume", {
		
			onInit: function() {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetView3").attachPatternMatched(this._onObjectMatched, this);
			},

	
		
		_onObjectMatched: function(oevent){
		var name = oevent.getParameters().arguments.employeeId,
			obj = {},
			json = this.getView().getModel("jModel");
			obj.title = name;
			
			json.setProperty("/title5", obj);
			
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Table.Assignment.view.Resume
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Table.Assignment.view.Resume
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Table.Assignment.view.Resume
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Table.Assignment.view.Resume
		 */
		//	onExit: function() {
		//
		//	}

	});

});