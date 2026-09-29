(function () {
    var apiBase = window.PHARMAKON_API_URL || "http://localhost:5000";

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("contact-form");
        if (!form) return;

        var status = document.createElement("p");
        status.className = "contact-enquiry-status";
        status.setAttribute("role", "status");
        status.style.marginTop = "14px";
        status.style.fontSize = "13px";
        form.appendChild(status);

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var button = form.querySelector("button[type='submit']");
            var originalButton = button ? button.innerHTML : "";
            var formData = new FormData(form);
            var enquiry = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                subject: "Website contact enquiry",
                message: formData.get("message")
            };

            status.textContent = "Sending your enquiry...";
            status.className = "contact-enquiry-status is-pending";
            status.style.color = "#5c6f7f";
            if (button) button.disabled = true;

            fetch(apiBase + "/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(enquiry)
            })
                .then(function (response) {
                    return response.json().then(function (result) {
                        if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");
                        return result;
                    });
                })
                .then(function () {
                    form.reset();
                    status.textContent = "Thank you. Your enquiry has been sent to our team.";
                    status.className = "contact-enquiry-status is-success";
                    status.style.color = "#087f58";
                })
                .catch(function (error) {
                    status.textContent = error.message + " Please email info@pharmakonlifesciences.com instead.";
                    status.className = "contact-enquiry-status is-error";
                    status.style.color = "#b33627";
                })
                .finally(function () {
                    if (button) {
                        button.disabled = false;
                        button.innerHTML = originalButton;
                    }
                });
        });
    });
})();
