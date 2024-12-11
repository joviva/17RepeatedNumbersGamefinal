let numbers = {
  numberInput1: JSON.parse(localStorage.getItem("numbers1")) || [],
  numberInput2: JSON.parse(localStorage.getItem("numbers2")) || [],
  numberInput3: JSON.parse(localStorage.getItem("numbers3")) || [],
  numberInput4: JSON.parse(localStorage.getItem("numbers4")) || [],
  numberInput5: JSON.parse(localStorage.getItem("numbers5")) || [],
  numberInput6: JSON.parse(localStorage.getItem("numbers6")) || [],
};

// Function to add numbers to the respective arrays and display most repeated numbers
function addNumber() {
  for (let i = 1; i <= 6; i++) {
    const inputId = `numberInput${i}`;
    const input = document.getElementById(inputId);
    const number = parseInt(input.value);

    if (!isNaN(number)) {
      numbers[inputId].push(number);
      // Store numbers in localStorage
      localStorage.setItem(`numbers${i}`, JSON.stringify(numbers[inputId]));
      input.value = ""; // Clear input field after adding number
    }
  }

  displayMostRepeatedNumbers();
}

// Function to find the most repeated numbers in the array
function findMostRepeatedNumbers() {
  let mostRepeated = {};
  for (let i = 1; i <= 6; i++) {
    const inputId = `numberInput${i}`;
    const frequency = {};

    // Calculate frequency of each number
    for (const num of numbers[inputId]) {
      frequency[num] = (frequency[num] || 0) + 1;
    }

    // Sort numbers by frequency
    const sortedNumbers = Object.keys(frequency).sort(
      (a, b) => frequency[b] - frequency[a]
    );

    // Store the most repeated numbers
    mostRepeated[inputId] = sortedNumbers.slice(0, 11);
  }
  return mostRepeated;
}

// Function to display the most repeated numbers
function displayMostRepeatedNumbers() {
  const resultDiv = document.getElementById("result");
  const mostRepeatedNumbers = findMostRepeatedNumbers();

  // Display most repeated numbers for each input
  let resultText = "";
  for (let i = 1; i <= 6; i++) {
    const inputId = `numberInput${i}`;
    const repeated = mostRepeatedNumbers[inputId];
    resultText += `<br>${inputId}: Most repeated numbers<br>${
      repeated[0] || "None"
    }, ${repeated[1] || "None"}, ${repeated[2] || "None"}, ${
      repeated[3] || "None"
    }, ${repeated[4] || "None"}, ${repeated[5] || "None"}, ${
      repeated[6] || "None"
    }, ${repeated[7] || "None"}, ${repeated[8] || "None"}, ${
      repeated[9] || "None"
    }, ${repeated[10] || "None"}<br>`;
  }
  resultDiv.innerHTML = resultText;
}

// Function to clear all inputs and reset arrays
function clearInputs() {
  for (let i = 1; i <= 6; i++) {
    const inputId = `numberInput${i}`;
    numbers[inputId] = [];
    localStorage.removeItem(`numbers${i}`); // Clear numbers from localStorage
    document.getElementById(inputId).value = "";
  }
  document.getElementById("result").innerHTML = "";
}
