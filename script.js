const PasswordBox = document.getElementById("Password");
        const length = 12;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "@#$%^&*(){}[]<>/-=";

        const allchars = upperCase + lowercase + number + symbol;

        function createPassword() {
            let password = "";

            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];

            while (password.length < length) {
                password += allchars[Math.floor(Math.random() * allchars.length)];
            }

            PasswordBox.value = password;
        }

        function copyPassword(){
            PasswordBox.select();
            document.execCommand("copy");
        }