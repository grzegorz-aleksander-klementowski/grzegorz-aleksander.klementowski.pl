/*
// Funkcja callback, która zostanie wywołana, kiedy obserwowany element
// wejdzie lub wyjdzie z viewportu
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element jest widoczny na ekranie
      console.log('Element jest widoczny');
    } else {
      // Element nie jest widoczny na ekranie
      console.log('Element nie jest widoczny');
    }
  });
};

// Stworzenie instancji IntersectionObserver
const observer = new IntersectionObserver(callback);

// Znalezienie elementu, który chcemy obserwować
const elementDoObserwacji = document.querySelector('.curriculum-vitae');

// Rozpoczęcie obserwacji elementu
observer.observe(elementDoObserwacji);

*/



// Można wywołać tę funkcję w odpowiednim miejscu, na przykład po załadowaniu strony lub po zdarzeniu scrollowania
// window.onload = findCloserElement;
//window.onscroll = findCloserElement;






//funkcja przesuwa ekran do klasy
function scrollToClass(className) {
    const element = document.querySelector('.' + className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

// Funkcja do obsługi zdarzenia przewijania kółkiem myszy
const onWheelEvent = (event) => {
    // `deltaY` wskazuje kierunek przewijania:
    // dodatni wartości `deltaY` oznaczają przewijanie w dół
    if (event.deltaY > 0) {
      console.log('Przewijanie w dół');
      //scrollToClass('main-presentation') przesuń do klasy .main-presentation
      // Tutaj możesz wywołać funkcję, która obsługuje przewijanie do następnej sekcji
    } else {
      console.log('Przewijanie w górę');
      // Funkcja do przewijania do poprzedniej sekcji
    }
  };
  
  // Dodanie nasłuchiwanie na zdarzenie przewijania kółkiem
  document.addEventListener('wheel', onWheelEvent);



  


//funkcja, która sprawdza, czyjesteśmy bliżej klasy .A, czy klasy .B.
function findCloserElement(classNameA, classNameB) {
  const windowHeight = window.innerHeight;
  const centerOfWindow = windowHeight / 2;

  // Pobranie elementów
  const elementA = document.querySelector(classNameA);
  const elementB = document.querySelector(classNameB);


  // Obliczenie odległości od środka ekranu do środka każdego elementu
  const rectA = elementA.getBoundingClientRect();
  const centerOfElementA = rectA.top + (rectA.height / 2);
  const distanceA = Math.abs(centerOfWindow - centerOfElementA);

  const rectB = elementB.getBoundingClientRect();
  const centerOfElementB = rectB.top + (rectB.height / 2);
  const distanceB = Math.abs(centerOfWindow - centerOfElementB);

  // Porównanie odległości i zwrócenie elementu bliższego środkowi ekranu
  if (distanceA < distanceB) {
    console.log('Element A jest bliżej środka wysokości ekranu');
  } else if (distanceB < distanceA) {
    console.log('ElementB jest bliżej środka wysokości ekranu');
  } else {
    console.log('Oba elementy są w jednakowej odległości od środka wysokości ekranu');
  }
}
  

// Zmienna stanu, czy przeciąganie jest aktywne
let isDragging = false;

// Zdarzenie mousedown aktywowane, gdy przycisk myszy zostanie naciśnięty
window.addEventListener('mousedown', function(event) {
  // Sprawdź, czy kliknięto lewy przycisk myszy
  if (event.button === 0) {
    isDragging = true;
  }
});

// Zdarzenie mousemove aktywowane, gdy mysz się przesuwa
window.addEventListener('mousemove', function(event) {
  // Tylko jeśli przeciąganie jest aktywne
  if (isDragging) {
    // Możemy zarejestrować przesunięcie, ale nie logujemy w konsoli na tym etapie
  }
});

// Zdarzenie mouseup aktywowane, gdy przycisk myszy zostanie zwolniony
window.addEventListener('mouseup', function(event) {
  // Sprawdź, czy przeciąganie było aktywne
  if (isDragging) {
    //console.log('Suwak został puszczony po przesunięciu');
    isDragging = false; // Zresetuj stan przeciągania

    findCloserElement('.header-index', '.main-presentation');

  }
});
