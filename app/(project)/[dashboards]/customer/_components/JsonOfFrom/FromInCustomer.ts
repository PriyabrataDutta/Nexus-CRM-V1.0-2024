export const profile = {
  customername: {
    type: "text",
    id: "customername",
    name: "customername",
    label: "Customer Name",
  },
  companyname: {
    type: "text",
    id: "companyname",
    name: "companyname",
    label: "Company Name",
  },
  phonenumber: {
    type: "tel",
    id: "phonenumber",
    name: "phonenumber",
    label: "Phone Number",
  },
  customergroup: {
    type: "select",
    id: "customergroup",
    name: "customergroup",
    label: "Customer Group",
  },
  address: {
    textarea: {
      type: "textarea",
      id: "addressinfo",
      name: "addressinfo",
      label: "Address Info",
    },
    address: {
      city: {
        type: "text",
        id: "city",
        name: "city",
        label: "City",
      },
      state: {
        type: "text",
        id: "state",
        name: "state",
        label: "State",
      },
      zip: {
        type: "text",
        id: "zip",
        name: "zip",
        label: "ZIP Code",
      },
      country: {
        type: "text",
        id: "country",
        name: "country",
        label: "Country",
      },
    },
  },
  uploadfile: {
    type: "file",
    id: "uploadfile",
    name: "uploadfile",
    label: "Upload File",
  },
};
