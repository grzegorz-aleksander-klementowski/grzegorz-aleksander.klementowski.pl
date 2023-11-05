



//funkcja przesuwa ekran do klasy
function scrollToClass(className) {
    const element = document.querySelector('.' + className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }






// Tablica z klasami w odpowiedniej kolejności
const sectionClasses = [
  'header-index',
  'main-presentation',
  'hero-skills',
  'curriculum-vitae',
  'footer-index'
];

// Funkcja do przewijania do danej klasy
function scrollToClass(className) {
  const element = document.querySelector('.' + className);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Funkcja do znajdowania aktualnej sekcji
function getCurrentSectionIndex() {
  const scrollPosition = window.pageYOffset;
  const sections = sectionClasses.map(className => document.querySelector('.' + className));

  let closestSectionIndex = 0;
  let smallestDistance = Infinity;

  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    const sectionTop = rect.top + scrollPosition;
    const distance = Math.abs(scrollPosition - sectionTop);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestSectionIndex = i;
    }
  }

  return closestSectionIndex;
}

// Funkcja do obsługi zdarzenia przewijania kółkiem myszy
const onWheelEvent = (event) => {
  // Pobranie aktualnego indeksu sekcji
  let currentSectionIndex = getCurrentSectionIndex();

  // `deltaY` wskazuje kierunek przewijania:
  // dodatni wartości `deltaY` oznaczają przewijanie w dół
  if (event.deltaY > 0) {
    console.log('Przewijanie w dół');
    // Przesuń do klasy pod aktualnym indeksem, o ile nie jest to ostatnia sekcja
    if (currentSectionIndex < sectionClasses.length - 1) {
      scrollToClass(sectionClasses[currentSectionIndex + 1]);
    }
  } else {
    console.log('Przewijanie w górę');
    // Przesuń do klasy nad aktualnym indeksem, o ile nie jest to pierwsza sekcja
    if (currentSectionIndex > 0) {
      scrollToClass(sectionClasses[currentSectionIndex - 1]);
    }
  }
};

// Dodanie nasłuchiwania na zdarzenie przewijania kółkiem
document.addEventListener('wheel', onWheelEvent);

  




//funkcja, która sprawdza, czyjesteśmy bliżej klasy .A, czy klasy .B.
function scrollToClass(className) {
  // Logika przewijania do danej klasy
  console.log('Przewijanie do:', className);
  // Przykładowo, użyjemy 'scrollIntoView' dla elementu
  const element = document.querySelector('.' + className);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Funkcja, która sprawdza, który element jest bliżej środka ekranu.
function findCloserElement() {
  const windowHeight = window.innerHeight;
  const centerOfWindow = windowHeight / 2;

  // Pobranie elementów
  const elementA = document.querySelector('.header-index');
  const elementB = document.querySelector('.main-presentation');
  const elementC = document.querySelector('.hero-skills');
  const elementD = document.querySelector('.curriculum-vitae');
  const elementE = document.querySelector('.footer-index');

  // Obliczenie odległości od środka ekranu do środka każdego elementu
  const calculateDistance = (element) => {
    const rect = element.getBoundingClientRect();
    const centerOfElement = rect.top + (rect.height / 2);
    return Math.abs(centerOfWindow - centerOfElement);
  };

  // Obliczenie odległości dla każdego elementu
  const distances = [
    { element: 'header-index', distance: calculateDistance(elementA) },
    { element: 'main-presentation', distance: calculateDistance(elementB) },
    { element: 'hero-skills', distance: calculateDistance(elementC) },
    { element: 'curriculum-vitae', distance: calculateDistance(elementD) },
    { element: 'footer-index', distance: calculateDistance(elementE) }
  ];

  // Posortuj elementy według odległości od centrum
  distances.sort((a, b) => a.distance - b.distance);

  // Zwróć klasę elementu najbliższego środkowi ekranu
  const closest = distances[0].element;

  console.log(`${closest} jest najbliżej środka wysokości ekranu`);
  scrollToClass(closest);
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

    findCloserElement();

  }
});
