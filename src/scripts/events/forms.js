"use strict";

import phoneMask from "../utils/masks/phoneMask.js";

const formsName = document.getElementById("forms-name");
const formsEmail = document.getElementById("forms-email");
const formsCellphone = document.getElementById("forms-cellphone");
const formsCompany = document.getElementById("forms-company");
const formsMessage = document.getElementById("forms-message");
const formsSubmit = document.getElementById("forms-submit");

const formsPayload = {
  name: "",
  email: "",
  cellphone: "",
  company: "",
  message: "",
  active: true,
};

const forms_url = "https://hook.us1.make.com/hhif9fa4hqbbyfg7i3f4a22kaupv2ss6";

formsName.addEventListener("input", () => {
  formsPayload.name = formsName.value;
});

formsEmail.addEventListener("input", () => {
  formsPayload.email = formsEmail.value;
});

formsCellphone.addEventListener("input", () => {
  formsPayload.cellphone = phoneMask(formsCellphone.value);
  formsCellphone.value = formsPayload.cellphone;
});

formsCompany.addEventListener("input", () => {
  formsPayload.company = formsCompany.value;
});

formsMessage.addEventListener("input", () => {
  formsPayload.message = formsMessage.value;
});

formsSubmit.addEventListener("click", () => {
  fetch(forms_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formsPayload),
  })
    .then((response) => console.log(response))
    .catch((error) => {
      console.error("Error:", error);
    });
});
