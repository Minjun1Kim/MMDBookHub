const initialBooks = [
    {
      id: 1,
      title: 'Uyghur History',
      author: 'Uyghur',
      summary: 'Uyghur History',
      image: '/assets/images/uyghurHistory.jpg',
    },
    {
      id: 2,
      title: 'Korean Book',
      author: 'Korean',
      summary: 'Korean Book',
      image: '/assets/images/kor.jpg',
    },
    {
      id: 3,
      title: 'Indian Book',
      author: 'Indian',
      summary: 'Indian Book',
      image: '/assets/images/ind.jpg',
    },
    {
      id: 4,
      title: 'Indian History',
      author: 'Indian',
      summary: 'Indian History',
      image: '/assets/images/indianHistory.jpg',
    },
    {
      id: 5,
      title: 'Korean History',
      author: 'Korean',
      summary: 'Korean History',
      image: '/assets/images/koreanHistory.jpg',
    },
];

let storedData = localStorage.getItem('bookArray');
if (!storedData) {
  localStorage.setItem('bookArray', JSON.stringify(initialBooks));
  storedData = JSON.stringify(initialBooks);
}
let bookArray = JSON.parse(storedData);