document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("govNumber").addEventListener("input", function () {
    this.value = this.value.replace(/[^А-Яа-я0-9\s]/g, "").toUpperCase();
  });

  document
    .getElementById("passportSeries")
    .addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "").substring(0, 4);
    });

  document
    .getElementById("passportNumber")
    .addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "").substring(0, 6);
    });

  const arrivalDateInput = document.getElementById("arrivalDate");
  flatpickr(arrivalDateInput, {
    dateFormat: "d-m-Y",
  });

  const DateTakeInput = document.getElementById("passportIssueDate");
  flatpickr(DateTakeInput, {
    dateFormat: "d-m-Y",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const cancelButton = document.getElementById("cancelButton");

  cancelButton.addEventListener("click", function () {
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const notification = document.getElementById("notification");

  const savedData = localStorage.getItem("formData");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    for (const key in parsedData) {
      if (parsedData.hasOwnProperty(key)) {
        const input = document.getElementById(key);
        if (input) {
          input.value = parsedData[key];
        }
      }
    }
  }

  //сохранение через localstorage
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {};
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      formData[input.id] = input.value;
    });

    localStorage.setItem("formData", JSON.stringify(formData));

    notification.style.display = "block";

    setTimeout(function () {
      notification.style.display = "none";
    }, 5000);
  });

  // очистка
  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", function () {
    form.reset();
    localStorage.removeItem("formData");
  });
});
