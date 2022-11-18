sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/library",
    "sap/ui/core/Fragment",
  ],
  function (Controller, MessageToast, mobileLibrary, Fragment) {
    "use strict";
    var URLHelper = mobileLibrary.URLHelper;
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
      handleUrlPress: function (oEvent) {
        var oButton = oEvent.getSource(),
          oView = this.getView();

        // create popover
        if (!this._pPopover) {
          this._pPopover = Fragment.load({
            id: oView.getId(),
            name: "sikhoerp.view.Popover",
            controller: this,
          }).then(function (oPopover) {
            oView.addDependent(oPopover);

            return oPopover;
          });
        }
        this._pPopover.then(function (oPopover) {
          oPopover.openBy(oButton);
        });
      },
      onCall: function (evt) {
        URLHelper.triggerTel(this._getVal(evt));
      },
      _getVal: function (evt) {
        return evt.getSource().getValue();
      },
      onEmail: function (evt) {
        URLHelper.triggerEmail(
          this._getVal(evt),
          "Info Request",
          false,
          false,
          false,
          true
        );
      },
    });
  }
);
