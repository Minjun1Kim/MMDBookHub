const initialBooks = [
    {
      id: 1,
      title: 'Uyghur History',
      author: 'Muhammad Amin',
      summary: 'The Uyghur language is part of the Turkic group of Altaic languages, and the Uyghurs are among the oldest Turkic-speaking peoples of Central Asia.',
      image: '/assets/images/uyghurHistory.jpg',
    },
    {
      id: 2,
      title: 'Korean Book',
      author: 'JI sung han',
      summary: 'The history of the Korean nation began in Manchuria and the Korean Peninsula when people started settling there 700,000 years ago.',
      image: '/assets/images/kor.jpg',
    },
    {
      id: 3,
      title: 'Indian Book',
      author: 'Andrew Auchie',
      summary: 'The Great Indian Novel is a satirical novel by Shashi Tharoor. It is a fictional work that takes the story of the Mahabharata, and the epic of Hindu mythology.',
      image: '/assets/images/ind.jpg',
    },
    {
      id: 4,
      title: 'Indian History',
      author: 'M. G. Basham',
      summary: 'This book is considered a useful source of history for aspirants to the Indian civil services. It is a comprehensive book on Indian history.',
      image: '/assets/images/indianHistory.jpg',
    },
    {
      id: 5,
      title: 'Korean History',
      author: 'Ji Hyeon Kim',
      summary: 'In Korea, the Neolithic Age began around 8,000 BCE. People started farming, cultivating cereals such as millet, and used polished stone tools.',
      image: '/assets/images/koreanHistory.jpg',
    },
];

let storedData = localStorage.getItem('bookArray');
if (!storedData) {
  localStorage.setItem('bookArray', JSON.stringify(initialBooks));
  storedData = JSON.stringify(initialBooks);
}
let bookArray = JSON.parse(storedData);