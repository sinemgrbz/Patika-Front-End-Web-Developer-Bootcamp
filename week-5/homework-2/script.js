// ses dosyaları çalınması için
function playAudio(url) {
        new Audio(url).play();
  }


  document.addEventListener('keydown', function(value) {
     if (value.key === 'a' || value.key === 'A') {
        playAudio('./audio/boom.wav')
    }
    else if (value.key === 's' || value.key === 'S') {
        playAudio('./audio/clap.wav')
    }
    else if (value.key === 'd' || value.key === 'D') {
        playAudio('./audio/hihat.wav')
    }
    else if (value.key === 'f' || value.key === 'F') {
        playAudio('./audio/kick.wav')
    }
    else if (value.key === 'g' || value.key === 'G') {
        playAudio('./audio/openhat.wav')
    }
    else if (value.key === 'h' || value.key === 'H') {
        playAudio('./audio/ride.wav')
    }
    else if (value.key === 'j' || value.key === 'J') {
        playAudio('./audio/snare.wav')
    }
    else if (value.key === 'k' || value.key === 'K') {
        playAudio('./audio/tink.wav')
    }
    else if (value.key === 'l' || value.key === 'L') {
        playAudio('./audio/tom.wav')
    }
  });

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

