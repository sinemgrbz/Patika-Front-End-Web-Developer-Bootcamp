// ses dosyaları çalınması için
function playAudio(url) {
        new Audio(url).play();
  }

// her button tıklandığında body arka plan değişikliği için dom elementleri seçildi
  const mybody = document.querySelector(".myb");
  const buttons = document.querySelectorAll(".mybtn");

// her button tıklandığında body arka plan değişikliği için event oluşturuldu
buttons.forEach(button => {
      button.addEventListener("click", () => {
          
          if (mybody.classList.contains("main")) {
              mybody.classList.remove("main");
              mybody.classList.add("second");
          } else {
              mybody.classList.remove("second");
              mybody.classList.add("main");
          }
      });
  });

