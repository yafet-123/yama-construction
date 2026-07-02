export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  category: string;
  categorySlug: string;
  image: string;
  images: string[];
  operatingWeight?: string;
  powerOutput?: string;
  engine?: string;
  bucketCapacity?: string;
  fuelConsumption?: string;
  description: string;
  specs: Record<string, string>;
  featured: boolean;
}

export interface Brand {
  name: string;
  slug: string;
  logo: string;
  description: string;
  website?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Industry {
  name: string;
  slug: string;
  description: string;
  image: string;
  equipment: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  equipment: string[];
  year: string;
  image: string;
  description: string;
  result: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  company: string;
  author: string;
  position: string;
  project: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

export const SITE_NAME = 'YAMA Construction';
export const SITE_DESCRIPTION = 'Ethiopia\'s leading supplier of heavy industrial machinery — excavators, loaders, tractors, generators, compressors, and commercial vehicles for construction, mining, agriculture, and government projects.';
export const SITE_PHONE = '+251-11-550-1234';
export const SITE_EMAIL = 'info@yamaconstruction.com';
export const SITE_WHATSAPP = '+251911123456';
export const SITE_YEARS = '25+';
export const SITE_ADDRESS = 'Bole Road, Addis Ababa, Ethiopia';

export const categories: Category[] = [
  {
    name: 'Construction & Mining',
    slug: 'construction-mining',
    description: 'Excavators, bulldozers, wheel loaders, graders, and mining trucks for heavy earthmoving and extraction operations.',
    image: '/images/categories/construction.jpg',
    productCount: 340,
  },
  {
    name: 'Agriculture & Forestry',
    slug: 'agriculture',
    description: 'Tractors, harvesters, ploughs, and forestry equipment for commercial farming and land management.',
    image: '/images/categories/agriculture.jpg',
    productCount: 180,
  },
  {
    name: 'Power Solutions',
    slug: 'power-solutions',
    description: 'Industrial generators, compressors, and power distribution equipment for construction sites and permanent installations.',
    image: '/images/categories/power.jpg',
    productCount: 220,
  },
  {
    name: 'Commercial Vehicles',
    slug: 'commercial-vehicles',
    description: 'Dump trucks, fuel tankers, flatbed trucks, and fleet vehicles for logistics and transport operations.',
    image: '/images/categories/vehicles.jpg',
    productCount: 290,
  },
  {
    name: 'Material Handling',
    slug: 'material-handling',
    description: 'Forklifts, telehandlers, cranes, and conveyor systems for warehouse and construction site logistics.',
    image: '/images/categories/material-handling.jpg',
    productCount: 210,
  },
];

export const brands: Brand[] = [
  { name: 'Caterpillar', slug: 'caterpillar', logo: '/images/brands/caterpillar.svg', description: 'World\'s leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.' },
  { name: 'Komatsu', slug: 'komatsu', logo: '/images/brands/komatsu.svg', description: 'Japanese multinational that manufactures construction, mining, forestry, and military equipment, as well as industrial machinery.' },
  { name: 'Volvo CE', slug: 'volvo-ce', logo: '/images/brands/volvo.svg', description: 'Swedish construction equipment manufacturer known for excavators, wheel loaders, articulated haulers, and road development machinery.' },
  { name: 'JCB', slug: 'jcb', logo: '/images/brands/jcb.svg', description: 'British multinational manufacturer of equipment for construction, agriculture, waste handling, and demolition.' },
  { name: 'Cummins', slug: 'cummins', logo: '/images/brands/cummins.svg', description: 'American multinational that designs, manufactures, and distributes engines, filtration, and power generation products.' },
  { name: 'Perkins', slug: 'perkins', logo: '/images/brands/perkins.svg', description: 'British manufacturer of diesel and gas engines for industrial, agricultural, and power generation applications.' },
  { name: 'Hyundai CE', slug: 'hyundai-ce', logo: '/images/brands/hyundai.svg', description: 'South Korean construction equipment brand offering excavators, wheel loaders, and compact equipment.' },
  { name: 'Hitachi', slug: 'hitachi', logo: '/images/brands/hitachi.svg', description: 'Japanese conglomerate providing hydraulic excavators, mining equipment, and construction machinery.' },
];

export const industries: Industry[] = [
  { name: 'Construction', slug: 'construction', description: 'Full range of heavy equipment for building, road construction, and infrastructure development projects across Ethiopia.', image: '/images/industries/construction.jpg', equipment: ['Excavators', 'Bulldozers', 'Wheel Loaders', 'Cranes', 'Concrete Equipment'] },
  { name: 'Mining', slug: 'mining', description: 'Heavy-duty mining equipment for surface and underground operations, including haul trucks, drills, and loaders.', image: '/images/industries/mining.jpg', equipment: ['Mining Excavators', 'Haul Trucks', 'Drill Rigs', 'Underground Loaders'] },
  { name: 'Agriculture', slug: 'agriculture', description: 'Tractors, harvesters, and implements for large-scale commercial farming and agribusiness operations.', image: '/images/industries/agriculture.jpg', equipment: ['Tractors', 'Harvesters', 'Ploughs', 'Irrigation Systems'] },
  { name: 'Government & Public Works', slug: 'government', description: 'Equipment procurement solutions for federal and regional government infrastructure projects and public works.', image: '/images/industries/government.jpg', equipment: ['Road Construction', 'Utility Vehicles', 'Generators', 'Water Trucks'] },
  { name: 'NGO & Development', slug: 'ngo', description: 'Reliable equipment for humanitarian, development, and infrastructure projects funded by international organizations.', image: '/images/industries/ngo.jpg', equipment: ['Generators', 'Water Pumps', 'Compact Loaders', 'Utility Vehicles'] },
  { name: 'Manufacturing', slug: 'manufacturing', description: 'Industrial machinery and material handling equipment for factories, processing plants, and production facilities.', image: '/images/industries/manufacturing.jpg', equipment: ['Forklifts', 'Conveyors', 'Compressors', 'Generators'] },
  { name: 'Logistics & Transport', slug: 'logistics', description: 'Commercial vehicles, fleet solutions, and material handling equipment for logistics companies and transport operators.', image: '/images/industries/logistics.jpg', equipment: ['Trucks', 'Forklifts', 'Telehandlers', 'Fleet Vehicles'] },
  { name: 'Banking & Finance', slug: 'banking', description: 'Asset financing, leasing, and procurement support for banks and financial institutions acquiring equipment fleets.', image: '/images/industries/banking.jpg', equipment: ['Fleet Vehicles', 'Generators', 'Security Equipment'] },
];

export const testimonials: Testimonial[] = [
  { quote: 'YAMA Construction supplied 12 excavators and 8 wheel loaders for our Grand Ethiopian Renaissance Dam auxiliary project. The equipment arrived on schedule and has performed reliably under extreme conditions. Their after-sales support is unmatched.', company: 'Ethiopian Electric Power', author: 'Amanuel Tesfaye', position: 'Senior Procurement Manager', project: 'GERD Auxiliary Works' },
  { quote: 'We have a fleet of 45 YAMA-supplied vehicles and generators across our 120 branches nationwide. Their preventive maintenance program keeps our uptime above 97%. A true partner in our operations.', company: 'Commercial Bank of Ethiopia', author: 'Sara Wondimu', position: 'Director of Facilities', project: 'Nationwide Branch Fleet' },
  { quote: 'For our road construction projects in the Somali Region, we needed equipment that could handle extreme heat and remote conditions. YAMA\'s Komatsu graders and Volvo compactors have delivered exceptional performance.', company: 'Ethiopian Roads Authority', author: 'Dereje Hailu', position: 'Project Manager', project: 'Somali Region Highway Development' },
  { quote: 'The tender process was transparent, the financing terms were competitive, and the equipment quality exceeded our specifications. YAMA has become our preferred supplier for government infrastructure projects.', company: 'Ministry of Water & Energy', author: 'Dr. Mekonnen Assefa', position: 'Director of Infrastructure', project: 'Irrigation Development Program' },
];

export const projects: Project[] = [
  { slug: 'gerd-auxiliary-equipment', title: 'Equipment Supply for GERD Auxiliary Works', client: 'Ethiopian Electric Power (EEP)', location: 'Benishangul-Gumuz, Ethiopia', industry: 'Construction', equipment: ['CAT 336 Excavators', 'Komatsu WA500 Loaders', 'Volvo A40G Dump Trucks'], year: '2024', image: '/images/projects/gerd.jpg', description: 'Supplied 20 units of heavy earthmoving equipment for auxiliary construction works at the Grand Ethiopian Renaissance Dam, including excavation, material handling, and site preparation.', result: 'All equipment delivered on schedule. 98% uptime maintained over 18 months of continuous operation.', featured: true },
  { slug: 'cbe-fleet-expansion', title: 'Nationwide Fleet & Power Expansion', client: 'Commercial Bank of Ethiopia', location: 'Addis Ababa & 120 Branches Nationwide', industry: 'Banking', equipment: ['Toyota Hilux Fleet', 'Perkins Generators', 'Mitsubishi Forklifts'], year: '2023-2024', image: '/images/projects/cbe-fleet.jpg', description: 'Comprehensive fleet and power solution for Ethiopia\'s largest bank, including 120 branch generators, 45 fleet vehicles, and material handling equipment for the central vault and logistics hub.', result: '97.3% power uptime across all branches. Fleet operating costs reduced by 22% through standardized maintenance.', featured: true },
  { slug: 'somali-highway', title: 'Somali Region Highway Development', client: 'Ethiopian Roads Authority', location: 'Jijiga to Degehabur, Somali Region', industry: 'Construction', equipment: ['Komatsu GD655 Graders', 'Volvo SD110 Compactors', 'CAT D6T Dozers'], year: '2023-2025', image: '/images/projects/highway.jpg', description: 'Supplied road construction equipment for 340km of highway development in the Somali Region, including graders, compactors, dozers, and support vehicles.', result: 'Phase 1 completed 2 months ahead of schedule. Equipment performed reliably in extreme temperatures exceeding 45°C.', featured: true },
  { slug: 'irrigation-development', title: 'Irrigation Development Program', client: 'Ministry of Water & Energy', location: 'Oromia & SNNPR Regions', industry: 'Government', equipment: ['Tractors', 'Water Pumps', 'Generator Sets', 'Pipe Layers'], year: '2024', image: '/images/projects/irrigation.jpg', description: 'Provided agricultural and irrigation equipment for a large-scale irrigation development program covering 15,000 hectares across two regions.', result: 'Irrigation capacity increased by 40%. Over 5,000 farming families benefited from improved water access.', featured: false },
];

export const featuredProducts: Product[] = [
  { id: 'cat-336', slug: 'cat-336-hydraulic-excavator', name: 'CAT 336 Hydraulic Excavator', brand: 'Caterpillar', brandSlug: 'caterpillar', category: 'Construction & Mining', categorySlug: 'construction-mining', image: '/images/products/cat-336.jpg', images: ['/images/products/cat-336.jpg'], operatingWeight: '36,500 kg', powerOutput: '268 kW', engine: 'CAT C7.1', bucketCapacity: '1.8 m³', fuelConsumption: '28 L/hr', description: 'The CAT 336 is a next-generation hydraulic excavator designed for heavy construction and mining applications. Features advanced hydraulic efficiency, reduced fuel consumption, and enhanced operator comfort.', specs: { 'Operating Weight': '36,500 kg', 'Engine': 'CAT C7.1', 'Power Output': '268 kW', 'Bucket Capacity': '1.8 m³', 'Fuel Consumption': '28 L/hr', 'Max Dig Depth': '7,340 mm', 'Max Reach': '10,980 mm' }, featured: true },
  { id: 'komatsu-d375a', slug: 'komatsu-d375a-bulldozer', name: 'Komatsu D375A-8 Bulldozer', brand: 'Komatsu', brandSlug: 'komatsu', category: 'Construction & Mining', categorySlug: 'construction-mining', image: '/images/products/komatsu-d375a.jpg', images: ['/images/products/komatsu-d375a.jpg'], operatingWeight: '68,200 kg', powerOutput: '391 kW', engine: 'Komatsu SAA6D170E-7', description: 'The D375A-8 is a large bulldozer built for the most demanding mining and heavy construction applications. Equipped with Komatsu\'s advanced hydraulic system and eco-friendly engine technology.', specs: { 'Operating Weight': '68,200 kg', 'Engine': 'Komatsu SAA6D170E-7', 'Power Output': '391 kW', 'Blade Capacity': '14.5 m³', 'Fuel Tank': '685 L', 'Track Gauge': '2,540 mm' }, featured: true },
  { id: 'volvo-a40g', slug: 'volvo-a40g-articulated-hauler', name: 'Volvo A40G Articulated Hauler', brand: 'Volvo CE', brandSlug: 'volvo-ce', category: 'Construction & Mining', categorySlug: 'construction-mining', image: '/images/products/volvo-a40g.jpg', images: ['/images/products/volvo-a40g.jpg'], operatingWeight: '40,000 kg', powerOutput: '331 kW', engine: 'Volvo D16J', description: 'The A40G articulated hauler delivers superior productivity in the toughest conditions. With a 40-tonne payload capacity and Volvo\'s advanced suspension system, it ensures high speed and comfort.', specs: { 'Payload Capacity': '40,000 kg', 'Engine': 'Volvo D16J', 'Power Output': '331 kW', 'Max Speed': '57 km/h', 'Fuel Tank': '400 L', 'Turning Radius': '8,200 mm' }, featured: true },
  { id: 'jcb-3cx', slug: 'jcb-3cx-backhoe-loader', name: 'JCB 3CX Backhoe Loader', brand: 'JCB', brandSlug: 'jcb', category: 'Construction & Mining', categorySlug: 'construction-mining', image: '/images/products/jcb-3cx.jpg', images: ['/images/products/jcb-3cx.jpg'], operatingWeight: '8,500 kg', powerOutput: '81 kW', engine: 'JCB Dieselmax 444', description: 'The world\'s best-selling backhoe loader. The JCB 3CX combines exceptional digging power with loader performance, making it the most versatile machine on any job site.', specs: { 'Operating Weight': '8,500 kg', 'Engine': 'JCB Dieselmax 444', 'Power Output': '81 kW', 'Dig Depth': '4,300 mm', 'Loader Bucket': '1.0 m³', 'Fuel Consumption': '12 L/hr' }, featured: true },
  { id: 'cummins-c200d5', slug: 'cummins-c200d5-generator', name: 'Cummins C200D5 Generator', brand: 'Cummins', brandSlug: 'cummins', category: 'Power Solutions', categorySlug: 'power-solutions', image: '/images/products/cummins-c200d5.jpg', images: ['/images/products/cummins-c200d5.jpg'], powerOutput: '200 kVA', engine: 'Cummins QSL9-G3', description: 'Reliable 200 kVA diesel generator set for prime and standby power applications. Built with Cummins heavy-duty engine technology for continuous operation in demanding environments.', specs: { 'Power Output': '200 kVA / 160 kW', 'Engine': 'Cummins QSL9-G3', 'Fuel Consumption': '38 L/hr at 100% load', 'Fuel Tank': '400 L', 'Sound Level': '75 dB(A)', 'Weight': '2,100 kg' }, featured: true },
  { id: 'perkins-4006', slug: 'perkins-4006-industrial-engine', name: 'Perkins 4006 Industrial Engine', brand: 'Perkins', brandSlug: 'perkins', category: 'Power Solutions', categorySlug: 'power-solutions', image: '/images/products/perkins-4006.jpg', images: ['/images/products/perkins-4006.jpg'], powerOutput: '560 kW', engine: 'Perkins 4006-23TAG3A', description: 'High-performance industrial diesel engine designed for heavy-duty power generation and industrial applications. Known for reliability and low operating costs.', specs: { 'Power Output': '560 kW', 'Engine': 'Perkins 4006-23TAG3A', 'Displacement': '23.15 L', 'Fuel Consumption': '132 L/hr', 'Weight': '2,850 kg', 'Emissions': 'Stage IIIA compliant' }, featured: true },
];

export const blogPosts: BlogPost[] = [
  { slug: 'how-to-choose-excavator', title: 'How to Choose an Excavator for Your Project in Ethiopia', excerpt: 'A comprehensive guide to selecting the right excavator size, type, and configuration for construction, mining, and infrastructure projects in Ethiopia.', date: '2024-12-15', author: 'YAMA Technical Team', category: 'Equipment Guide', image: '/images/blog/excavator-guide.jpg', content: '...' },
  { slug: 'generator-sizing-guide', title: 'Generator Sizing Guide for Ethiopian Businesses', excerpt: 'Learn how to properly size a generator for your business operations, from small offices to industrial facilities and construction sites.', date: '2024-11-28', author: 'YAMA Technical Team', category: 'Technical Guide', image: '/images/blog/generator-guide.jpg', content: '...' },
  { slug: 'preventive-maintenance-checklist', title: 'Preventive Maintenance Checklist for Heavy Equipment', excerpt: 'A detailed preventive maintenance schedule and checklist to maximize equipment lifespan and minimize costly downtime.', date: '2024-11-10', author: 'YAMA Service Team', category: 'Maintenance', image: '/images/blog/maintenance-checklist.jpg', content: '...' },
  { slug: 'construction-equipment-financing', title: 'Construction Equipment Financing Options in Ethiopia', excerpt: 'An overview of financing, leasing, and procurement options available for Ethiopian construction firms and government enterprises.', date: '2024-10-22', author: 'YAMA Finance Team', category: 'Finance', image: '/images/blog/financing.jpg', content: '...' },
  { slug: 'heavy-machinery-trends-ethiopia', title: 'Heavy Machinery Trends in Ethiopia: 2025 Outlook', excerpt: 'Analysis of emerging trends in Ethiopia\'s heavy machinery sector, including electrification, telematics, and local assembly developments.', date: '2024-10-05', author: 'YAMA Research Team', category: 'Industry Insights', image: '/images/blog/trends.jpg', content: '...' },
];

export const branches: Branch[] = [
  { name: 'Addis Ababa — Headquarters', address: 'Bole Road, Near Bole International Airport, Addis Ababa, Ethiopia', phone: '+251-11-550-1234', email: 'info@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 8.9806, lng: 38.7578 } },
  { name: 'Addis Ababa — Parts & Service Center', address: 'Kality Industrial Zone, Addis Ababa, Ethiopia', phone: '+251-11-550-5678', email: 'parts@yamaconstruction.com', hours: 'Mon–Fri: 7:30–18:00 | Sat: 8:00–15:00', coordinates: { lat: 8.9000, lng: 38.7500 } },
  { name: 'Dire Dawa Branch', address: 'Dire Dawa Industrial Park, Dire Dawa, Ethiopia', phone: '+251-25-111-2345', email: 'diredawa@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 9.6000, lng: 41.8500 } },
  { name: 'Bahir Dar Branch', address: 'Bahir Dar City Center, Near Stadium, Bahir Dar, Ethiopia', phone: '+251-58-220-3456', email: 'bahirdar@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 11.6000, lng: 37.3833 } },
  { name: 'Hawassa Branch', address: 'Hawassa Industrial Park, Hawassa, Ethiopia', phone: '+251-46-220-4567', email: 'hawassa@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 7.0500, lng: 38.4667 } },
  { name: 'Mekelle Branch', address: 'Mekelle City, Tigray Region, Ethiopia', phone: '+251-34-240-5678', email: 'mekelle@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 13.4967, lng: 39.4753 } },
];