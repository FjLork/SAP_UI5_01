/*global QUnit*/

sap.ui.define([
	"lorkgroup/project_02/controller/View_02.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_02 Controller");

	QUnit.test("I should test the View_02 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
