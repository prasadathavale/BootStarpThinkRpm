document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendOtpButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "/OTP/otp.html";
    });
});


document.getElementById("sendToReset").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "/ResetPassword/reset-password.html";
});