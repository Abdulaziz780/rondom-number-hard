    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
      }

      function displayRandomNumber() {
        var randomNumber = generateRandomNumber();
        var randomNumberElement = document.getElementById("randomNumber");
        randomNumberElement.textContent = randomNumber;
      }
      displayRandomNumber();