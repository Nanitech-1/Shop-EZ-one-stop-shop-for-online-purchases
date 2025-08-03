import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 156
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 234
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 189
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 97
  },
  {
    id: '5',
    name: 'Food & Beverages',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 312
  },
  {
    id: '6',
    name: 'Home Decor',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    productCount: 145
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.',
    price: 16499,
    originalPrice: 24999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: ['Noise Cancellation', '30hr Battery', 'Wireless Charging', 'Hi-Fi Sound']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking watch with heart rate monitoring, GPS, and smart notifications.',
    price: 24999,
    originalPrice: 33499,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '3',
    name: 'Premium Leather Jacket',
    description: 'Genuine leather jacket with modern design and premium craftsmanship. Perfect for any occasion.',
    price: 14999,
    originalPrice: 20999,
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    features: ['Genuine Leather', 'Modern Design', 'Multiple Pockets', 'Durable']
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    description: 'Compact wireless speaker with powerful sound and long-lasting battery life.',
    price: 6699,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/1706819/pexels-photo-1706819.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1706819/pexels-photo-1706819.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    features: ['360° Sound', 'Waterproof', '12hr Battery', 'Compact Design']
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    description: 'Stylish designer sunglasses with UV protection and premium frame quality.',
    price: 12499,
    originalPrice: 16699,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    features: ['UV Protection', 'Designer Frame', 'Lightweight', 'Scratch Resistant']
  },
  {
    id: '6',
    name: 'Smart Home Assistant',
    description: 'Voice-controlled smart assistant with premium sound quality and smart home integration.',
    price: 10799,
    originalPrice: 14999,
    image: 'https://images.pexels.com/photos/4009601/pexels-photo-4009601.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4009601/pexels-photo-4009601.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    rating: 4.4,
    reviewCount: 92,
    inStock: true,
    features: ['Voice Control', 'Smart Home Hub', 'Premium Audio', 'Multi-room']
  },
  // Food & Beverages
  {
    id: '7',
    name: 'Organic Coffee Beans',
    description: 'Premium organic coffee beans sourced from sustainable farms. Rich, full-bodied flavor with notes of chocolate and caramel.',
    price: 2099,
    originalPrice: 2899,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.9,
    reviewCount: 245,
    inStock: true,
    features: ['100% Organic', 'Fair Trade', 'Medium Roast', 'Whole Bean']
  },
  {
    id: '8',
    name: 'Artisan Chocolate Collection',
    description: 'Handcrafted premium chocolate collection featuring dark, milk, and white chocolate varieties with unique flavor profiles.',
    price: 3299,
    originalPrice: 4599,
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    features: ['Handcrafted', 'Premium Cocoa', 'Gift Box', 'Assorted Flavors']
  },
  {
    id: '9',
    name: 'Gourmet Pasta Set',
    description: 'Authentic Italian pasta collection with premium sauces and seasonings. Perfect for creating restaurant-quality meals at home.',
    price: 2749,
    originalPrice: 3849,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    features: ['Authentic Italian', 'Premium Ingredients', 'Complete Set', 'Easy Preparation']
  },
  {
    id: '10',
    name: 'Organic Green Tea Collection',
    description: 'Premium organic green tea selection featuring jasmine, sencha, and matcha varieties. Rich in antioxidants and natural flavor.',
    price: 2399,
    originalPrice: 3249,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
    features: ['100% Organic', 'Antioxidant Rich', 'Variety Pack', 'Loose Leaf']
  },
  {
    id: '11',
    name: 'Artisan Honey Collection',
    description: 'Pure, raw honey collection from local beekeepers. Includes wildflower, clover, and orange blossom varieties.',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    features: ['Raw & Unfiltered', 'Local Sourced', 'Variety Pack', 'Glass Jars']
  },
  {
    id: '12',
    name: 'Premium Olive Oil Set',
    description: 'Extra virgin olive oil collection from Mediterranean groves. Cold-pressed for maximum flavor and nutritional value.',
    price: 3849,
    originalPrice: 5249,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverages',
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    features: ['Extra Virgin', 'Cold Pressed', 'Mediterranean', 'Premium Quality']
  },
  // Home Decor
  {
    id: '13',
    name: 'Modern Table Lamp',
    description: 'Elegant modern table lamp with adjustable brightness and sleek minimalist design. Perfect for any contemporary space.',
    price: 7499,
    originalPrice: 10799,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.7,
    reviewCount: 143,
    inStock: true,
    features: ['Adjustable Brightness', 'Modern Design', 'Energy Efficient', 'Touch Control']
  },
  {
    id: '14',
    name: 'Decorative Wall Art Set',
    description: 'Beautiful abstract wall art collection featuring three coordinated pieces. High-quality prints with premium frames.',
    price: 10399,
    originalPrice: 14999,
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1579709/pexels-photo-1579709.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1579710/pexels-photo-1579710.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.8,
    reviewCount: 201,
    inStock: true,
    features: ['Set of 3', 'Premium Frames', 'Ready to Hang', 'Abstract Design']
  },
  {
    id: '15',
    name: 'Luxury Throw Pillows',
    description: 'Premium velvet throw pillows with elegant designs. Set of 2 decorative pillows perfect for sofas and beds.',
    price: 5399,
    originalPrice: 7499,
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.6,
    reviewCount: 87,
    inStock: true,
    features: ['Velvet Material', 'Set of 2', 'Removable Covers', 'Elegant Design']
  },
  {
    id: '16',
    name: 'Ceramic Vase Collection',
    description: 'Handcrafted ceramic vases in various sizes and textures. Perfect for fresh flowers or as standalone decorative pieces.',
    price: 6649,
    originalPrice: 9149,
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    features: ['Handcrafted', 'Set of 3', 'Various Sizes', 'Ceramic Material']
  },
  {
    id: '17',
    name: 'Scented Candle Set',
    description: 'Luxury scented candles with natural soy wax and essential oils. Includes lavender, vanilla, and eucalyptus scents.',
    price: 4149,
    originalPrice: 5849,
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    features: ['Natural Soy Wax', 'Essential Oils', 'Set of 3', 'Long Burning']
  },
  {
    id: '18',
    name: 'Decorative Mirror',
    description: 'Elegant round mirror with ornate gold frame. Perfect statement piece for living rooms, bedrooms, or entryways.',
    price: 13299,
    originalPrice: 18349,
    image: 'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home Decor',
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    features: ['Gold Frame', 'Round Design', 'Statement Piece', 'Easy Installation']
  }
];