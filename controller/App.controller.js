sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sikhoerp.controller.App", {
      onInit: function () {
        this.getView().byId("iconTabHeader").fireSelect();
      },
      onSelectTab: function (event) {
        let sSelectedKey = event.getSource().getSelectedKey();
        if (sSelectedKey == "COURSES") {
          this.getView().byId("HomePanel").setVisible(false);
          this.getView().byId("CoursesPanel").setVisible(true);
          this.getView().byId("ContactPanel").setVisible(false);
          this.getView().byId("homepageFooter").setVisible(false);
          //
        }
        if (sSelectedKey == "HOME") {
          this.getView().byId("HomePanel").setVisible(true);
          this.getView().byId("CoursesPanel").setVisible(false);
          this.getView().byId("ContactPanel").setVisible(false);
          this.getView().byId("homepageFooter").setVisible(true);
        }

        if (sSelectedKey == "CONTACT") {
          this.getView().byId("HomePanel").setVisible(false);
          this.getView().byId("CoursesPanel").setVisible(false);
          this.getView().byId("ContactPanel").setVisible(true);
          this.getView().byId("homepageFooter").setVisible(false);
        }
      },
      onLinkedinImagePress: function () {
        alert("Tested");
      },
    });
  }
);
