// Product data structure
export const ProductModel = {
  id: '',
  name: '',
  price: 0,
  originalPrice: 0,
  images: [],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  description: '',
  shortDescription: '',
  category: '',
  tags: [],
  inStock: true,
  rating: 0,
  reviews: [],
  featured: false,
  createdAt: '',
  updatedAt: ''
};

// Sample product data for development
export const sampleProducts = [
  {
    id: '1',
    name: 'Durga',
    price: 899,
    originalPrice: 1299,
    images: [
      '/images/products/durga-1.jpg',
      '/images/products/durga-2.jpg',
      '/images/products/durga-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Durga is a bold black top featuring intricate lace detailing and a dramatic backless design. Perfect for evening wear and special occasions.',
    shortDescription: 'Black top with intricate lace detailing',
    category: 'tops',
    tags: ['clothing', 'black', 'lace', 'evening'],
    inStock: true,
    rating: 4.5,
    reviews: [],
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Shakti',
    price: 899,
    originalPrice: 1299,
    images: [
      '/images/products/shakti-1.jpg',
      '/images/products/shakti-2.jpg',
      '/images/products/shakti-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Shakti is a powerful red top with intricate lace detailing and a dramatic backless design. Long in the front and open at the back, it\'s made to turn heads with elegance and fire.',
    shortDescription: 'Red top with intricate lace detailing',
    category: 'tops',
    tags: ['clothing', 'red', 'lace', 'evening'],
    inStock: true,
    rating: 5.0,
    reviews: [],
    featured: true,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    name: 'Harsha',
    price: 599,
    originalPrice: 899,
    images: [
      '/images/products/harsha-1.jpg',
      '/images/products/harsha-2.jpg',
      '/images/products/harsha-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Harsha is a pure cotton yellow short kurti with beautiful floral patterns. Perfect for casual wear and comfortable all-day use.',
    shortDescription: 'Yellow cotton kurti with floral patterns',
    category: 'kurtis',
    tags: ['clothing', 'yellow', 'cotton', 'casual'],
    inStock: true,
    rating: 4.2,
    reviews: [],
    featured: false,
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    name: 'Neha',
    price: 599,
    originalPrice: 899,
    images: [
      '/images/products/neha-1.jpg',
      '/images/products/neha-2.jpg',
      '/images/products/neha-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Neha is a pure cotton short kurti featuring vibrant floral patterns. Lightweight and comfortable for everyday wear.',
    shortDescription: 'White cotton kurti with floral patterns',
    category: 'kurtis',
    tags: ['clothing', 'white', 'cotton', 'casual'],
    inStock: true,
    rating: 4.0,
    reviews: [],
    featured: false,
    createdAt: '2024-02-05'
  },
  {
    id: '5',
    name: 'Radha',
    price: 1299,
    originalPrice: 1899,
    images: [
      '/images/products/radha-1.jpg',
      '/images/products/radha-2.jpg',
      '/images/products/radha-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Radha is an elegant peacock blue lehenga choli with intricate zari work and mirror embellishments. Perfect for festivals and special occasions.',
    shortDescription: 'Peacock blue lehenga choli with zari work',
    category: 'ethnic',
    tags: ['clothing', 'blue', 'lehenga', 'festival'],
    inStock: true,
    rating: 4.8,
    reviews: [],
    featured: true,
    createdAt: '2024-01-10'
  },
  {
    id: '6',
    name: 'Sanjh',
    price: 799,
    originalPrice: 1199,
    images: [
      '/images/products/sanjh-1.jpg',
      '/images/products/sanjh-2.jpg',
      '/images/products/sanjh-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sanjh is a beautiful evening dress in deep teal with elegant draping and subtle sequin work. Ideal for dinner parties and evening events.',
    shortDescription: 'Deep teal evening dress with sequins',
    category: 'dresses',
    tags: ['clothing', 'teal', 'evening', 'sequins'],
    inStock: true,
    rating: 4.6,
    reviews: [],
    featured: true,
    createdAt: '2024-01-25'
  },
  {
    id: '7',
    name: 'Shreya',
    price: 699,
    originalPrice: 999,
    images: [
      '/images/products/shreya-1.jpg',
      '/images/products/shreya-2.jpg',
      '/images/products/shreya-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Shreya is a comfortable cotton top in soft mint green with delicate embroidery. Perfect for casual outings and everyday wear.',
    shortDescription: 'Mint green cotton top with embroidery',
    category: 'tops',
    tags: ['clothing', 'green', 'cotton', 'casual'],
    inStock: true,
    rating: 4.3,
    reviews: [],
    featured: false,
    createdAt: '2024-02-10'
  },
  {
    id: '8',
    name: 'Astra',
    price: 1599,
    originalPrice: 2299,
    images: [
      '/images/products/astra-1.jpg',
      '/images/products/astra-2.jpg',
      '/images/products/astra-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Astra is a stunning golden saree with peacock feather motifs and intricate border work. A masterpiece for special celebrations.',
    shortDescription: 'Golden saree with peacock motifs',
    category: 'sarees',
    tags: ['clothing', 'gold', 'saree', 'peacock'],
    inStock: true,
    rating: 4.9,
    reviews: [],
    featured: true,
    createdAt: '2024-01-05'
  },
  {
    id: '9',
    name: 'Kavya',
    price: 899,
    originalPrice: 1299,
    images: [
      '/images/products/kavya-1.jpg',
      '/images/products/kavya-2.jpg',
      '/images/products/kavya-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Kavya is a elegant maroon kurti with beautiful block prints and comfortable fit. Perfect for office wear and semi-formal occasions.',
    shortDescription: 'Maroon kurti with block prints',
    category: 'kurtis',
    tags: ['clothing', 'maroon', 'kurti', 'office'],
    inStock: true,
    rating: 4.4,
    reviews: [],
    featured: false,
    createdAt: '2024-02-15'
  },
  {
    id: '10',
    name: 'Priya',
    price: 1199,
    originalPrice: 1699,
    images: [
      '/images/products/priya-1.jpg',
      '/images/products/priya-2.jpg',
      '/images/products/priya-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Priya is a beautiful indigo blue dress with flowing silhouette and delicate beadwork. Perfect for parties and special occasions.',
    shortDescription: 'Indigo blue dress with beadwork',
    category: 'dresses',
    tags: ['clothing', 'blue', 'dress', 'party'],
    inStock: true,
    rating: 4.7,
    reviews: [],
    featured: true,
    createdAt: '2024-01-30'
  },
  {
    id: '11',
    name: 'Meera',
    price: 799,
    originalPrice: 1099,
    images: [
      '/images/products/meera-1.jpg',
      '/images/products/meera-2.jpg',
      '/images/products/meera-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Meera is a comfortable cotton top in warm coral with subtle geometric patterns. Great for casual wear and weekend outings.',
    shortDescription: 'Coral cotton top with geometric patterns',
    category: 'tops',
    tags: ['clothing', 'coral', 'cotton', 'casual'],
    inStock: true,
    rating: 4.1,
    reviews: [],
    featured: false,
    createdAt: '2024-02-20'
  },
  {
    id: '12',
    name: 'Lakshmi',
    price: 1899,
    originalPrice: 2599,
    images: [
      '/images/products/lakshmi-1.jpg',
      '/images/products/lakshmi-2.jpg',
      '/images/products/lakshmi-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Lakshmi is an exquisite silk saree in rich burgundy with golden zari work and peacock feather border. Perfect for weddings and festivals.',
    shortDescription: 'Burgundy silk saree with golden zari',
    category: 'sarees',
    tags: ['clothing', 'burgundy', 'silk', 'wedding'],
    inStock: true,
    rating: 4.9,
    reviews: [],
    featured: true,
    createdAt: '2024-01-01'
  },
  {
    id: '13',
    name: 'Sita',
    price: 999,
    originalPrice: 1399,
    images: [
      '/images/products/sita-1.jpg',
      '/images/products/sita-2.jpg',
      '/images/products/sita-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sita is a elegant olive green kurti with beautiful embroidery and comfortable fit. Perfect for office wear and formal occasions.',
    shortDescription: 'Olive green kurti with embroidery',
    category: 'kurtis',
    tags: ['clothing', 'green', 'kurti', 'formal'],
    inStock: true,
    rating: 4.5,
    reviews: [],
    featured: false,
    createdAt: '2024-02-25'
  },
  {
    id: '14',
    name: 'Ganga',
    price: 1299,
    originalPrice: 1799,
    images: [
      '/images/products/ganga-1.jpg',
      '/images/products/ganga-2.jpg',
      '/images/products/ganga-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ganga is a flowing maxi dress in soft aqua blue with delicate lace details. Perfect for summer parties and beach weddings.',
    shortDescription: 'Aqua blue maxi dress with lace',
    category: 'dresses',
    tags: ['clothing', 'blue', 'maxi', 'summer'],
    inStock: true,
    rating: 4.6,
    reviews: [],
    featured: true,
    createdAt: '2024-01-18'
  },
  {
    id: '15',
    name: 'Yamuna',
    price: 699,
    originalPrice: 999,
    images: [
      '/images/products/yamuna-1.jpg',
      '/images/products/yamuna-2.jpg',
      '/images/products/yamuna-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Yamuna is a comfortable cotton top in soft lavender with subtle floral prints. Great for casual wear and everyday comfort.',
    shortDescription: 'Lavender cotton top with floral prints',
    category: 'tops',
    tags: ['clothing', 'lavender', 'cotton', 'casual'],
    inStock: true,
    rating: 4.2,
    reviews: [],
    featured: false,
    createdAt: '2024-03-01'
  },
  {
    id: '16',
    name: 'Saraswati',
    price: 1599,
    originalPrice: 2199,
    images: [
      '/images/products/saraswati-1.jpg',
      '/images/products/saraswati-2.jpg',
      '/images/products/saraswati-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Saraswati is a elegant white saree with golden peacock motifs and intricate border work. Perfect for religious ceremonies and special occasions.',
    shortDescription: 'White saree with golden peacock motifs',
    category: 'sarees',
    tags: ['clothing', 'white', 'saree', 'ceremony'],
    inStock: true,
    rating: 4.8,
    reviews: [],
    featured: true,
    createdAt: '2024-01-12'
  },
  {
    id: '17',
    name: 'Parvati',
    price: 899,
    originalPrice: 1299,
    images: [
      '/images/products/parvati-1.jpg',
      '/images/products/parvati-2.jpg',
      '/images/products/parvati-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Parvati is a beautiful pink kurti with delicate embroidery and comfortable fit. Perfect for casual outings and everyday wear.',
    shortDescription: 'Pink kurti with delicate embroidery',
    category: 'kurtis',
    tags: ['clothing', 'pink', 'kurti', 'casual'],
    inStock: true,
    rating: 4.3,
    reviews: [],
    featured: false,
    createdAt: '2024-03-05'
  },
  {
    id: '18',
    name: 'Kali',
    price: 1199,
    originalPrice: 1699,
    images: [
      '/images/products/kali-1.jpg',
      '/images/products/kali-2.jpg',
      '/images/products/kali-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Kali is a bold black dress with silver embellishments and dramatic silhouette. Perfect for evening parties and special events.',
    shortDescription: 'Black dress with silver embellishments',
    category: 'dresses',
    tags: ['clothing', 'black', 'dress', 'evening'],
    inStock: true,
    rating: 4.7,
    reviews: [],
    featured: true,
    createdAt: '2024-01-28'
  },
  {
    id: '19',
    name: 'Uma',
    price: 799,
    originalPrice: 1099,
    images: [
      '/images/products/uma-1.jpg',
      '/images/products/uma-2.jpg',
      '/images/products/uma-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Uma is a comfortable cotton top in soft peach with subtle geometric patterns. Great for casual wear and weekend outings.',
    shortDescription: 'Peach cotton top with geometric patterns',
    category: 'tops',
    tags: ['clothing', 'peach', 'cotton', 'casual'],
    inStock: true,
    rating: 4.0,
    reviews: [],
    featured: false,
    createdAt: '2024-03-10'
  },
  {
    id: '20',
    name: 'Annapurna',
    price: 1799,
    originalPrice: 2499,
    images: [
      '/images/products/annapurna-1.jpg',
      '/images/products/annapurna-2.jpg',
      '/images/products/annapurna-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Annapurna is a luxurious silk saree in rich golden yellow with intricate peacock feather motifs and zari work. Perfect for grand celebrations.',
    shortDescription: 'Golden silk saree with peacock motifs',
    category: 'sarees',
    tags: ['clothing', 'gold', 'silk', 'celebration'],
    inStock: true,
    rating: 4.9,
    reviews: [],
    featured: true,
    createdAt: '2024-01-08'
  },
  {
    id: '21',
    name: 'Chandra',
    price: 999,
    originalPrice: 1399,
    images: [
      '/images/products/chandra-1.jpg',
      '/images/products/chandra-2.jpg',
      '/images/products/chandra-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Chandra is a elegant silver grey kurti with beautiful embroidery and comfortable fit. Perfect for office wear and formal occasions.',
    shortDescription: 'Silver grey kurti with embroidery',
    category: 'kurtis',
    tags: ['clothing', 'grey', 'kurti', 'formal'],
    inStock: true,
    rating: 4.4,
    reviews: [],
    featured: false,
    createdAt: '2024-03-15'
  },
  {
    id: '22',
    name: 'Surya',
    price: 1299,
    originalPrice: 1799,
    images: [
      '/images/products/surya-1.jpg',
      '/images/products/surya-2.jpg',
      '/images/products/surya-3.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Surya is a vibrant orange dress with flowing silhouette and delicate beadwork. Perfect for parties and special occasions.',
    shortDescription: 'Orange dress with flowing silhouette',
    category: 'dresses',
    tags: ['clothing', 'orange', 'dress', 'party'],
    inStock: true,
    rating: 4.6,
    reviews: [],
    featured: true,
    createdAt: '2024-01-22'
  }
];
