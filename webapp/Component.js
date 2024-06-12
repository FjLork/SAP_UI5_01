/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "lorkgroup/project02/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("lorkgroup.project02.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);


                // Establecer el idioma del navegador
                var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
                var i18nModel = new ResourceModel({
                    bundleName: "ruta.a.tu.proyecto.i18n.i18n",
                    bundleLocale: sLocale
                });
                this.setModel(i18nModel, "i18n")              

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);