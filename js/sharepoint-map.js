
//This object defines which sharepoint columns should be created for each field type.
//It also defines the default validations for a field.
var sharepointMap = {
  "text" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },
  "textarea" : {
    neededColumns : [
      {
        columnType: "Note",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },

  "hidden" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },
  "file" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },

  "repeater" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },
  "calculated" : {
    neededColumns : [
      {
        columnType: "Number",
        columnSuffix: "_number",
        displayNameSuffix: ""
      }
    ]
  },
  "email" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: "",
        validation:["EMAIL"]
      }
    ]
  },
  "url" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: "",
        validation:["URL"]
      }
    ]
  },
  "date" : {
    neededColumns : [
      {
        columnType: "DateTime",
        columnSuffix: "_date",
        displayNameSuffix: ""
      }
    ]
  },
  "currency" : {
    neededColumns : [
      {
        columnType: "Number",
        columnSuffix: "_number",
        displayNameSuffix: "",
        validation:["NUMBER"]
      }
    ]
  },
  "checkbox" : {
    neededColumns : [
      {
        columnType: "Boolean",
        columnSuffix: "_boolean",
        displayNameSuffix: ""
      }
    ]
  },
  "hidden_bool" : {
    neededColumns : [
      {
        columnType: "Boolean",
        columnSuffix: "_boolean",
        displayNameSuffix: ""
      }
    ]
  },

  "number" : {
    neededColumns : [
      {
        columnType: "Number",
        columnSuffix: "_number",
        displayNameSuffix: "",
        validation:["NUMBER"]
      }
    ]
  },
  "select" : {
    neededColumns : [
      {
        columnType: "Choice",
        columnSuffix: "_select",
        displayNameSuffix: ""
      }
    ]
  },
  "checkbox-select" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_text",
        displayNameSuffix: ""
      }
    ]
  },

  "select-other" : {
    neededColumns : [
      {
        columnType: "Choice",
        columnSuffix: "_select",
        displayNameSuffix: ""
      }
    ]
  },

  "address" : {
    neededColumns : [
      {
        columnType: "Text",
        columnSuffix: "_address1_text",
        displayNameSuffix: " Address 1"
      },
      {
        columnType: "Text",
        columnSuffix: "_address2_text",
        displayNameSuffix: " Address 2"
      },
      {
        columnType: "Text",
        columnSuffix: "_city_text",
        displayNameSuffix: " City"
      },
      {
        columnType: "Text",
        columnSuffix: "_state_text",
        displayNameSuffix: " State"
      },
      {
        columnType: "Text",
        columnSuffix: "_zipcode_text",
        displayNameSuffix: " Zip",
        validation:["NUMBER"]
      }
    ]
  }
};
