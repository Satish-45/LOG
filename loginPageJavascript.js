
        function togglePasswordVisibility(passwordId, iconId) {
            var passwordInput = document.getElementById(passwordId);
            var icon = document.getElementById(iconId);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.className = "bx bx-lock-open-alt icon";
            } else {
                passwordInput.type = "password";
                icon.className = "bx bx-lock-alt icon";
            }
        }
