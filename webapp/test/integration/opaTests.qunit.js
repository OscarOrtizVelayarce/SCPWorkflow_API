/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fabboo/SCPWorkflow_API/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});