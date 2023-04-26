// DOM Elements

const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optinImages = document.querySelectorAll(".option_image");
let playerScore = 0; // skor pemain
let cpuScore = 0; // skor CPU

const playerScoreElement = document.querySelector(
  ".result_score .result_player"
);
const cpuScoreElement = document.querySelector(".result_score .result_comp");

// loop trough each option image element
optinImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Tunggu..sabar..";

    // loop trough each image option again
    optinImages.forEach((image2, index2) => {
      // if current index doesn`t match the clicked index
      // remove the acrive class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // set delay
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      // get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // set the user imae to the clicked option image
      userResult.src = imageSrc;
      // generate a random number between 0 and 2
      let randomNum = Math.floor(Math.random() * 3);
      // create array of cpu image options
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[randomNum];

      let cpuValue = ["R", "P", "S"][randomNum];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        RS: "Kamu",
        PP: "Draw",
        PR: "Kamu",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "Kamu",
      };
      let outComesValue = outcomes[userValue + cpuValue];
      result.textContent =
        userValue === cpuValue
          ? "Pertandingan Seri!"
          : `${outComesValue} Menang!`;
      // Menghitung skor dan menampilkan di HTML
      // Update skor pemain dan skor CPU
      if (result.textContent === "Kamu Menang!") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
      } else if (result.textContent === "Computer Menang!") {
        cpuScore++;
        cpuScoreElement.textContent = cpuScore;
      }
    }, 2500);
  });
});
