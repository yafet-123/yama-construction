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
  equipment: EquipmentItem[];
}

export interface EquipmentItem {
  name: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  industrySlug: string;
  equipment: EquipmentItem[];
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
export const SITE_PHONE = '+251-934-78-1038';
export const SITE_EMAIL = 'info@yamaconstruction.com';
export const SITE_WHATSAPP = '+251934781038';
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
  {
    name: 'Renewable Energy',
    slug: 'renewable-energy',
    description: 'Solar panels, wind turbines, and sustainable power generation systems.',
    image: '/images/categories/renewable-energy.jpg',
    productCount: 120,
  },
  {
    name: 'Pumping Solutions',
    slug: 'pumping-solutions',
    description: 'Water pumps, industrial pumps, and fluid management systems for various applications.',
    image: '/images/categories/pumps.jpg',
    productCount: 150,
  },
  {
    name: 'Electric Motors',
    slug: 'electric-motors',
    description: 'High-efficiency electric motors for industrial, manufacturing, and commercial use.',
    image: '/images/categories/motors.jpg',
    productCount: 180,
  },
  {
    name: 'Engines & Parts',
    slug: 'engines-parts',
    description: 'Diesel engines, spare parts, and components for heavy machinery and power generators.',
    image: '/images/categories/engines.jpg',
    productCount: 450,
  },
  {
    name: 'Motorcycles & Marine Products',
    slug: 'motorcycles-marine',
    description: 'Motorcycles, outboard motors, and marine equipment for transportation and water activities.',
    image: '/images/categories/marine.jpg',
    productCount: 85,
  },
  {
    name: 'Processing Machinery',
    slug: 'processing-machinery',
    description: 'Industrial processing, packaging, and manufacturing machinery.',
    image: '/images/categories/processing.jpg',
    productCount: 90,
  },
  {
    name: 'Industrial Tools',
    slug: 'industrial-tools',
    description: 'Professional grade power tools, hand tools, and workshop equipment.',
    image: '/images/categories/tools.jpg',
    productCount: 320,
  },
];

export const brands: Brand[] = [
  { name: 'Caterpillar', slug: 'caterpillar', logo: '/images/brands/caterpillar.svg', description: 'World\'s leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.', website: 'https://www.caterpillar.com' },
  { name: 'Komatsu', slug: 'komatsu', logo: '/images/brands/komatsu.svg', description: 'Japanese multinational that manufactures construction, mining, forestry, and military equipment, as well as industrial machinery.', website: 'https://www.komatsu.com' },
  { name: 'Volvo CE', slug: 'volvo-ce', logo: '/images/brands/volvo.svg', description: 'Swedish construction equipment manufacturer known for excavators, wheel loaders, articulated haulers, and road development machinery.', website: 'https://www.volvoce.com' },
  { name: 'JCB', slug: 'jcb', logo: '/images/brands/jcb.svg', description: 'British multinational manufacturer of equipment for construction, agriculture, waste handling, and demolition.', website: 'https://www.jcb.com' },
  { name: 'Cummins', slug: 'cummins', logo: '/images/brands/cummins.svg', description: 'American multinational that designs, manufactures, and distributes engines, filtration, and power generation products.', website: 'https://www.cummins.com' },
  { name: 'Perkins', slug: 'perkins', logo: '/images/brands/perkins.svg', description: 'British manufacturer of diesel and gas engines for industrial, agricultural, and power generation applications.', website: 'https://www.perkins.com' },
  { name: 'Hyundai CE', slug: 'hyundai-ce', logo: '/images/brands/hyundai.svg', description: 'South Korean construction equipment brand offering excavators, wheel loaders, and compact equipment.', website: 'https://www.hyundai-ce.com' },
  { name: 'Hitachi', slug: 'hitachi', logo: '/images/brands/hitachi.svg', description: 'Japanese conglomerate providing hydraulic excavators, mining equipment, and construction machinery.', website: 'https://www.hitachi.com' },
  { name: 'New Holland', slug: 'new-holland', logo: '/images/brands/new-holland.svg', description: 'Global brand of agricultural machinery and construction equipment.', website: 'https://www.newholland.com' },
  { name: 'ROSTSELMASH', slug: 'rostselmash', logo: '/images/brands/rostselmash.svg', description: 'Manufacturer of agricultural equipment, including combine harvesters.', website: 'https://www.rostselmash.com' },
  { name: 'Generic', slug: 'generic', logo: '/images/brands/generic.svg', description: 'Standard industrial and construction equipment.' },
];

export const industries: Industry[] = [
  { name: 'Construction', slug: 'construction', description: 'Full range of heavy equipment for building, road construction, and infrastructure development projects across Ethiopia.', image: '/images/industries/construction.jpg', equipment: [
    { name: 'Excavators', description: 'Hydraulic excavators from 1-ton mini to 50-ton heavy class for digging, trenching, and material handling on construction sites of all sizes.' },
    { name: 'Bulldozers', description: 'Track-type tractors with powerful blades for land clearing, grading, and pushing heavy materials across rough terrain.' },
    { name: 'Wheel Loaders', description: 'Versatile front-end loaders for loading, carrying, and stockpiling materials with quick cycle times and excellent fuel efficiency.' },
    { name: 'Cranes', description: 'Mobile and tower cranes for lifting and placing heavy materials, structural components, and equipment at height.' },
    { name: 'Concrete Equipment', description: 'Concrete mixers, batch plants, and pumps for producing and placing high-quality concrete in construction projects.' },
  ]},
  { name: 'Mining', slug: 'mining', description: 'Heavy-duty mining equipment for surface and underground operations, including haul trucks, drills, and loaders.', image: '/images/industries/mining.jpg', equipment: [
    { name: 'Mining Excavators', description: 'Large-scale hydraulic excavators designed for high-volume digging and loading in open-pit and underground mining operations.' },
    { name: 'Haul Trucks', description: 'Heavy-duty off-highway dump trucks with high payload capacity for transporting mined materials over rough terrain.' },
    { name: 'Drill Rigs', description: 'Rotary and percussion drilling equipment for exploration, blasthole drilling, and geotechnical investigation in mining sites.' },
    { name: 'Underground Loaders', description: 'Compact, high-traction loaders designed specifically for underground mining tunnels and confined spaces.' },
  ]},
  { name: 'Agriculture', slug: 'agriculture', description: 'Tractors, harvesters, and implements for large-scale commercial farming and agribusiness operations.', image: '/images/industries/agriculture.jpg', equipment: [
    { name: 'Tractors', description: 'High-horsepower agricultural tractors with PTO and three-point linkage for pulling ploughs, harrows, and tillage implements.' },
    { name: 'Harvesters', description: 'Combine harvesters and specialized crop harvesting equipment for efficient grain and crop collection.' },
    { name: 'Ploughs', description: 'Heavy-duty ploughs and tillage equipment for primary soil preparation and land cultivation.' },
    { name: 'Irrigation Systems', description: 'Pumps, pipes, and sprinkler systems for efficient water distribution across agricultural land.' },
  ]},
  { name: 'Government & Public Works', slug: 'government', description: 'Equipment procurement solutions for federal and regional government infrastructure projects and public works.', image: '/images/industries/government.jpg', equipment: [
    { name: 'Road Construction', description: 'Graders, compactors, asphalt pavers, and road rollers for building and maintaining road infrastructure.' },
    { name: 'Utility Vehicles', description: 'Multi-purpose vehicles for public works, including water trucks, dump trucks, and service vehicles.' },
    { name: 'Generators', description: 'Industrial diesel generators for powering government facilities, public buildings, and critical infrastructure.' },
    { name: 'Water Trucks', description: 'Specialized tanker trucks for water distribution, dust suppression, and emergency water supply in public works.' },
  ]},
  { name: 'NGO & Development', slug: 'ngo', description: 'Reliable equipment for humanitarian, development, and infrastructure projects funded by international organizations.', image: '/images/industries/ngo.jpg', equipment: [
    { name: 'Generators', description: 'Portable and stationary generators for powering field offices, clinics, and community facilities in remote areas.' },
    { name: 'Water Pumps', description: 'Solar-powered and diesel water pumps for clean water access, irrigation, and sanitation projects.' },
    { name: 'Compact Loaders', description: 'Small, versatile loaders for construction and material handling in confined spaces and community projects.' },
    { name: 'Utility Vehicles', description: 'Durable 4x4 vehicles for transporting personnel, supplies, and equipment in challenging terrain.' },
  ]},
  { name: 'Manufacturing', slug: 'manufacturing', description: 'Industrial machinery and material handling equipment for factories, processing plants, and production facilities.', image: '/images/industries/manufacturing.jpg', equipment: [
    { name: 'Forklifts', description: 'Electric and diesel forklifts for material handling, warehousing, and production line support in manufacturing facilities.' },
    { name: 'Conveyors', description: 'Belt and roller conveyor systems for automated material transport and production line efficiency.' },
    { name: 'Compressors', description: 'Industrial air compressors for powering pneumatic tools, machinery, and production equipment.' },
    { name: 'Generators', description: 'Backup and prime power generators for uninterrupted manufacturing operations and production continuity.' },
  ]},
  { name: 'Logistics & Transport', slug: 'logistics', description: 'Commercial vehicles, fleet solutions, and material handling equipment for logistics companies and transport operators.', image: '/images/industries/logistics.jpg', equipment: [
    { name: 'Trucks', description: 'Heavy-duty trucks and trailers for long-haul freight, container transport, and bulk material delivery.' },
    { name: 'Forklifts', description: 'Warehouse forklifts and reach trucks for loading, unloading, and organizing goods in distribution centers.' },
    { name: 'Telehandlers', description: 'Telescopic handlers for lifting and placing materials at height in warehouses and logistics yards.' },
    { name: 'Fleet Vehicles', description: 'Light and medium commercial vehicles for last-mile delivery, service fleets, and logistics operations.' },
  ]},
  { name: 'Banking & Finance', slug: 'banking', description: 'Asset financing, leasing, and procurement support for banks and financial institutions acquiring equipment fleets.', image: '/images/industries/banking.jpg', equipment: [
    { name: 'Fleet Vehicles', description: 'Armored and standard fleet vehicles for cash transport, branch operations, and mobile banking services.' },
    { name: 'Generators', description: 'Reliable backup generators for maintaining banking operations, ATMs, and data centers during power outages.' },
    { name: 'Security Equipment', description: 'Surveillance systems, access control, and security infrastructure for protecting banking facilities and assets.' },
  ]},
];

export const testimonials: Testimonial[] = [
  { quote: 'YAMA Construction supplied 12 excavators and 8 wheel loaders for our Grand Ethiopian Renaissance Dam auxiliary project. The equipment arrived on schedule and has performed reliably under extreme conditions. Their after-sales support is unmatched.', company: 'Ethiopian Electric Power', author: 'Amanuel Tesfaye', position: 'Senior Procurement Manager', project: 'GERD Auxiliary Works' },
  { quote: 'We have a fleet of 45 YAMA-supplied vehicles and generators across our 120 branches nationwide. Their preventive maintenance program keeps our uptime above 97%. A true partner in our operations.', company: 'Commercial Bank of Ethiopia', author: 'Sara Wondimu', position: 'Director of Facilities', project: 'Nationwide Branch Fleet' },
  { quote: 'For our road construction projects in the Somali Region, we needed equipment that could handle extreme heat and remote conditions. YAMA\'s Komatsu graders and Volvo compactors have delivered exceptional performance.', company: 'Ethiopian Roads Authority', author: 'Dereje Hailu', position: 'Project Manager', project: 'Somali Region Highway Development' },
  { quote: 'The tender process was transparent, the financing terms were competitive, and the equipment quality exceeded our specifications. YAMA has become our preferred supplier for government infrastructure projects.', company: 'Ministry of Water & Energy', author: 'Dr. Mekonnen Assefa', position: 'Director of Infrastructure', project: 'Irrigation Development Program' },
];

export const projects: Project[] = [
  { slug: 'gerd-auxiliary-equipment', title: 'Equipment Supply for GERD Auxiliary Works', client: 'Ethiopian Electric Power (EEP)', location: 'Benishangul-Gumuz, Ethiopia', industry: 'Construction', industrySlug: 'construction', equipment: [
    { name: 'CAT 336 Excavators', description: 'Heavy-duty 36-ton excavators with advanced hydraulic systems for deep excavation and material handling in challenging terrain, providing precise control and high productivity for dam construction.' },
    { name: 'Komatsu WA500 Loaders', description: 'Large-capacity wheel loaders designed for high-volume material handling, featuring quick cycle times and excellent fuel efficiency for moving earth and aggregate on the construction site.' },
    { name: 'Volvo A40G Dump Trucks', description: '40-ton articulated haulers engineered for rough terrain, with superior traction and load capacity for transporting excavated material across uneven construction surfaces.' },
  ], year: '2024', image: '/images/projects/project (1).jpg', description: 'Supplied 20 units of heavy earthmoving equipment for auxiliary construction works at the Grand Ethiopian Renaissance Dam, including excavation, material handling, and site preparation.', result: 'All equipment delivered on schedule. 98% uptime maintained over 18 months of continuous operation.', featured: true },
  { slug: 'cbe-fleet-expansion', title: 'Nationwide Fleet & Power Expansion', client: 'Commercial Bank of Ethiopia', location: 'Addis Ababa & 120 Branches Nationwide', industry: 'Banking', industrySlug: 'banking', equipment: [
    { name: 'Toyota Hilux Fleet', description: 'Reliable double-cab pickup trucks equipped for multi-terrain operations, serving as mobile banking units and service vehicles for branch operations across Ethiopia\'s diverse geography.' },
    { name: 'Perkins Generators', description: 'Industrial-grade diesel generators ranging from 60-150 kVA, providing uninterrupted power supply for banking operations, ATMs, and IT infrastructure at all branch locations.' },
    { name: 'Mitsubishi Forklifts', description: '3-ton capacity forklifts for material handling at the central vault and logistics hub, designed for efficient movement of cash, documents, and equipment.' },
  ], year: '2023-2024', image: '/images/projects/project (2).jpg', description: 'Comprehensive fleet and power solution for Ethiopia\'s largest bank, including 120 branch generators, 45 fleet vehicles, and material handling equipment for the central vault and logistics hub.', result: '97.3% power uptime across all branches. Fleet operating costs reduced by 22% through standardized maintenance.', featured: true },
  { slug: 'somali-highway', title: 'Somali Region Highway Development', client: 'Ethiopian Roads Authority', location: 'Jijiga to Degehabur, Somali Region', industry: 'Construction', industrySlug: 'construction', equipment: [
    { name: 'Komatsu GD655 Graders', description: 'Heavy-duty motor graders with precision blade control for achieving exact road gradients and surface finishes, essential for highway base preparation and final grading.' },
    { name: 'Volvo SD110 Compactors', description: 'Large vibratory soil compactors delivering high compaction force for achieving optimal soil density in road base and embankment construction under extreme conditions.' },
    { name: 'CAT D6T Dozers', description: 'Medium-sized track-type tractors with exceptional pushing power and blade capacity for land clearing, dozing, and road formation work in remote, high-temperature environments.' },
  ], year: '2023-2025', image: '/images/projects/project (3).jpg', description: 'Supplied road construction equipment for 340km of highway development in the Somali Region, including graders, compactors, dozers, and support vehicles.', result: 'Phase 1 completed 2 months ahead of schedule. Equipment performed reliably in extreme temperatures exceeding 45°C.', featured: true },
  { slug: 'irrigation-development', title: 'Irrigation Development Program', client: 'Ministry of Water & Energy', location: 'Oromia & SNNPR Regions', industry: 'Government', industrySlug: 'government', equipment: [
    { name: 'Tractors', description: 'High-horsepower agricultural tractors equipped with PTO and three-point linkage for pulling ploughs, harrows, and other tillage implements across large farmland areas.' },
    { name: 'Water Pumps', description: 'High-capacity centrifugal and submersible pumps for drawing water from rivers, reservoirs, and boreholes to supply the irrigation network across 15,000 hectares.' },
    { name: 'Generator Sets', description: 'Reliable diesel generator sets providing off-grid power for pump stations, control systems, and field operation centres in remote agricultural areas.' },
    { name: 'Pipe Layers', description: 'Specialized tractor-mounted pipelaying equipment for trenching, laying, and covering irrigation pipes efficiently across long distances.' },
  ], year: '2024', image: '/images/projects/project (4).jpg', description: 'Provided agricultural and irrigation equipment for a large-scale irrigation development program covering 15,000 hectares across two regions.', result: 'Irrigation capacity increased by 40%. Over 5,000 farming families benefited from improved water access.', featured: false },
];

export const featuredProducts: Product[] = [
  { id: 'cat-336', slug: 'cat-336-hydraulic-excavator', name: 'CAT 336 Hydraulic Excavator', brand: 'Caterpillar', brandSlug: 'caterpillar', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.caterpillar.com/content/dam/cat-mini/cat-336-hydraulic-excavator.jpg', images: ['https://www.caterpillar.com/content/dam/cat-mini/cat-336-hydraulic-excavator.jpg'], operatingWeight: '36,000 - 38,500 kg', powerOutput: '221 kW (296 HP)', bucketCapacity: '1.80 - 2.50 m³', description: 'The CAT 336 hydraulic excavator delivers exceptional power and fuel efficiency for heavy construction and mining applications across Ethiopia.', specs: { 'Operating Weight': '36,000 - 38,500 kg', 'Power Output': '221 kW (296 HP)', 'Bucket Capacity': '1.80 - 2.50 m³', 'Engine Model': 'Caterpillar C9.3', 'Max Digging Depth': '7.5 m', 'Max Reach': '10.5 m' }, featured: true },
  { id: 'komatsu-pc300', slug: 'komatsu-pc300-8-excavator', name: 'Komatsu PC300-8 Excavator', brand: 'Komatsu', brandSlug: 'komatsu', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.komatsu.com/global/en/products/excavators/pc300-8/', images: ['https://www.komatsu.com/global/en/products/excavators/pc300-8/'], operatingWeight: '30,500 - 32,000 kg', powerOutput: '187 kW (251 HP)', bucketCapacity: '1.40 - 2.00 m³', description: 'The Komatsu PC300-8 excavator features advanced hydraulic technology for superior digging force and fuel efficiency in demanding conditions.', specs: { 'Operating Weight': '30,500 - 32,000 kg', 'Power Output': '187 kW (251 HP)', 'Bucket Capacity': '1.40 - 2.00 m³', 'Engine Model': 'Komatsu SAA6D107E', 'Max Digging Depth': '7.2 m', 'Max Reach': '10.3 m' }, featured: true },
  { id: 'volvo-ec220', slug: 'volvo-ec220e-excavator', name: 'Volvo EC220E Excavator', brand: 'Volvo CE', brandSlug: 'volvo-ce', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.volvoce.com/global/en/products/excavators/ec220e/', images: ['https://www.volvoce.com/global/en/products/excavators/ec220e/'], operatingWeight: '22,000 - 24,500 kg', powerOutput: '129 kW (173 HP)', bucketCapacity: '0.75 - 1.50 m³', description: 'The Volvo EC220E excavator combines powerful performance with class-leading fuel economy and operator comfort for productive earthmoving.', specs: { 'Operating Weight': '22,000 - 24,500 kg', 'Power Output': '129 kW (173 HP)', 'Bucket Capacity': '0.75 - 1.50 m³', 'Engine Model': 'Volvo D5J', 'Max Digging Depth': '6.8 m', 'Max Reach': '9.8 m' }, featured: true },
  { id: 'jcb-3cx', slug: 'jcb-3cx-backhoe-loader', name: 'JCB 3CX Backhoe Loader', brand: 'JCB', brandSlug: 'jcb', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.jcb.com/en-us/products/backhoe-loaders/3cx/', images: ['https://www.jcb.com/en-us/products/backhoe-loaders/3cx/'], operatingWeight: '7,800 - 8,400 kg', powerOutput: '68 kW (91 HP)', bucketCapacity: '1.00 m³', description: 'The JCB 3CX is the world\'s best-selling backhoe loader, offering unmatched versatility, reliability, and resale value for construction projects.', specs: { 'Operating Weight': '7,800 - 8,400 kg', 'Power Output': '68 kW (91 HP)', 'Bucket Capacity': '1.00 m³', 'Engine Model': 'JCB Dieselmax', 'Max Digging Depth': '4.3 m', 'Max Reach': '5.6 m' }, featured: true },
  { id: 'cummins-qsx15', slug: 'cummins-qsx15-engine', name: 'Cummins QSX15 Industrial Engine', brand: 'Cummins', brandSlug: 'cummins', category: 'Engines & Parts', categorySlug: 'engines-parts', image: 'https://www.cummins.com/engines/qsx15/', images: ['https://www.cummins.com/engines/qsx15/'], powerOutput: '447 - 559 kW (600 - 750 HP)', engine: 'Cummins QSX15', description: 'The Cummins QSX15 is a 15-litre industrial diesel engine delivering reliable power for heavy equipment, generators, and industrial applications.', specs: { 'Power Output': '447 - 559 kW (600 - 750 HP)', 'Displacement': '15 litres', 'Configuration': 'Inline 6-cylinder', 'Emissions': 'Tier 3 / Stage IIIA', 'Bore x Stroke': '137 x 169 mm' }, featured: true },
  { id: 'perkins-4006', slug: 'perkins-4006-industrial-engine', name: 'Perkins 4006 Industrial Engine', brand: 'Perkins', brandSlug: 'perkins', category: 'Engines & Parts', categorySlug: 'engines-parts', image: 'https://www.perkins.com/engines/4006/', images: ['https://www.perkins.com/engines/4006/'], powerOutput: '200 - 320 kW (268 - 429 HP)', engine: 'Perkins 4006', description: 'The Perkins 4006 series industrial engine provides reliable power for generator sets, construction equipment, and agricultural machinery.', specs: { 'Power Output': '200 - 320 kW (268 - 429 HP)', 'Displacement': '12.5 litres', 'Configuration': 'Inline 6-cylinder', 'Emissions': 'Tier 3 / Stage IIIA', 'Bore x Stroke': '130 x 157 mm' }, featured: true },
  { id: 'hyundai-hx330l', slug: 'hyundai-hx330l-excavator', name: 'Hyundai HX330L Excavator', brand: 'Hyundai CE', brandSlug: 'hyundai-ce', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.hyundai-ce.com/en/product/excavator/hx330l/', images: ['https://www.hyundai-ce.com/en/product/excavator/hx330l/'], operatingWeight: '32,000 - 34,000 kg', powerOutput: '197 kW (264 HP)', bucketCapacity: '1.50 - 2.00 m³', description: 'The Hyundai HX330L excavator delivers powerful performance with advanced hydraulic control and excellent fuel efficiency for large-scale projects.', specs: { 'Operating Weight': '32,000 - 34,000 kg', 'Power Output': '197 kW (264 HP)', 'Bucket Capacity': '1.50 - 2.00 m³', 'Engine Model': 'Hyundai Hino', 'Max Digging Depth': '7.1 m', 'Max Reach': '10.2 m' }, featured: true },
  { id: 'hitachi-zw220-5a', slug: 'hitachi-zw220-5a-wheel-loader', name: 'Hitachi ZW220-5A Wheel Loader', brand: 'Hitachi', brandSlug: 'hitachi', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.hitachi.com/en/products/construction-equipment/zw220-5a/', images: ['https://www.hitachi.com/en/products/construction-equipment/zw220-5a/'], operatingWeight: '16,810 - 17,450 kg', powerOutput: '144 kW (193 HP)', bucketCapacity: '2.70 - 4.40 m³', description: 'The Hitachi ZW220-5A wheel loader offers exceptional performance with a 144 kW engine, designed for efficiency and reliability in heavy earthmoving operations.', specs: { 'Operating Weight': '16,810 - 17,450 kg', 'Power Output': '144 kW (193 HP)', 'Bucket Capacity': '2.70 - 4.40 m³', 'Engine Model': 'Hitachi Isuzu', 'Rated Operating Load': '7,500 kg', 'Breakout Force': '155 kN' }, featured: true },
  { id: 'new-holland-b110b-max', slug: 'new-holland-b110b-max-backhoe', name: 'New Holland B110B MAX Backhoe Loader', brand: 'New Holland', brandSlug: 'new-holland', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://agriculture.newholland.com/na/en/backhoe-loaders/b110b-max/', images: ['https://agriculture.newholland.com/na/en/backhoe-loaders/b110b-max/'], powerOutput: '106.8 HP', description: 'The New Holland B110B MAX backhoe loader provides 106.8 HP of dependable power for demanding excavation and loading tasks.', specs: { 'Power Output': '106.8 HP', 'Series Models': 'B-90BMAX (87.7HP), B-100BMAX (97.3HP)', 'Engine Model': 'New Holland', 'Max Digging Depth': '4.2 m', 'Max Reach': '5.7 m' }, featured: true },
  { id: 'heavy-excavator-47t', slug: 'heavy-excavator-47t', name: '47-Ton Heavy Hydraulic Excavator', brand: 'Hitachi', brandSlug: 'hitachi', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.hitachi.com/en/products/construction-equipment/excavators/47t-class/', images: ['https://www.hitachi.com/en/products/construction-equipment/excavators/47t-class/'], operatingWeight: '46,500 - 49,700 kg', powerOutput: '296 kW (397 HP)', description: 'A massive 47-ton class hydraulic excavator designed for major mining and earthmoving projects. Features a max dig reach of 10.55m.', specs: { 'Operating Weight': '46,500 - 49,700 kg', 'Net Power': '296 kW (397 HP)', 'Max Dig Reach': '10.55 m', 'Max Dig Depth': '5.96 m', 'Engine Model': 'Hitachi Isuzu', 'Bucket Capacity': '1.8 - 2.5 m³' }, featured: true },
  { id: 'hitachi-zx170w-5a', slug: 'hitachi-zx170w-5a-wheeled-excavator', name: 'Hitachi ZX170W-5A Wheeled Excavator', brand: 'Hitachi', brandSlug: 'hitachi', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.hitachi.com/en/products/construction-equipment/zx170w-5a/', images: ['https://www.hitachi.com/en/products/construction-equipment/zx170w-5a/'], operatingWeight: '16,800 - 18,300 kg', powerOutput: '113 kW (152 HP)', bucketCapacity: '0.52 - 0.82 m³', description: 'The ZX170W-5A is a highly mobile wheeled excavator featuring a powerful 113 kW engine and a bucket capacity up to 0.82 cubic meters.', specs: { 'Operating Weight': '16,800 - 18,300 kg', 'Power Output': '113 kW (152 HP)', 'Bucket Capacity': '0.52 - 0.82 m³', 'Engine Model': 'Hitachi Isuzu', 'Max Digging Depth': '5.5 m', 'Max Reach': '8.8 m' }, featured: true },
  { id: 'rostselmash-nova-320', slug: 'rostselmash-nova-320-harvester', name: 'ROSTSELMASH Nova 320 Combine Harvester', brand: 'ROSTSELMASH', brandSlug: 'rostselmash', category: 'Agriculture & Forestry', categorySlug: 'agriculture', image: 'https://www.rostselmash.com/en/products/nova-320/', images: ['https://www.rostselmash.com/en/products/nova-320/'], powerOutput: '160 HP', engine: 'Cummins', description: 'The Nova 320 is an efficient combine harvester featuring a 160 HP Cummins engine, multiple header width options, and a 4500L grain tank.', specs: { 'Engine': 'Cummins (160 HP)', 'Header Width': '4/5/6 m', 'Grain Tank Capacity': '4,500 L', 'Cutting Width': 'Up to 6 m', 'Fuel Capacity': '400 L' }, featured: true },
  { id: 'bx100-backhoe', slug: 'bx100-backhoe-loader', name: 'BX100 Backhoe Loader', brand: 'Generic', brandSlug: 'generic', category: 'Construction & Mining', categorySlug: 'construction-mining', image: 'https://www.bx100.com/products/backhoe-loader/', images: ['https://www.bx100.com/products/backhoe-loader/'], operatingWeight: '8,600 - 8,800 kg', powerOutput: '74 kW (99 HP)', bucketCapacity: '1.1 m³', description: 'The BX100 is a versatile backhoe loader with an 8.6 to 8.8 ton operating weight and a powerful 74 kW engine.', specs: { 'Operating Weight': '8,600 - 8,800 kg', 'Power Output': '74 kW (99 HP)', 'Bucket Capacity': '1.1 m³', 'Engine Model': 'Generic Diesel', 'Max Digging Depth': '4.0 m', 'Max Reach': '5.5 m' }, featured: true }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-excavator',
    title: 'How to Choose an Excavator for Your Project in Ethiopia',
    excerpt: 'A comprehensive guide to selecting the right excavator size, type, and configuration for construction, mining, and infrastructure projects in Ethiopia.',
    date: '2024-12-15',
    author: 'YAMA Technical Team',
    category: 'Equipment Guide',
    image: '/images/blog/blog (1).jpg',
    content: `<p>Choosing the right excavator for your project is one of the most critical equipment decisions you will make. With Ethiopia's diverse terrain — from the highlands of Tigray to the lowlands of the Somali Region — the wrong machine can lead to costly delays, excessive fuel consumption, and premature wear.</p>
<p>At YAMA Construction, we have supplied over 1,200 excavators to projects across Ethiopia, ranging from small urban developments to large-scale mining operations. This guide draws on that experience to help you make an informed decision.</p>
<h2>1. Determine Your Operating Weight Class</h2>
<p>Excavators are categorized by operating weight, which directly correlates to digging depth, lifting capacity, and power. For most Ethiopian construction projects, the following classes apply:</p>
<ul><li><strong>Mini Excavators (1–6 tons):</strong> Ideal for urban infrastructure, utility work, and confined spaces in Addis Ababa and other cities.</li><li><strong>Medium Excavators (12–25 tons):</strong> The most versatile class for general construction, road building, and quarry work across Ethiopia.</li><li><strong>Large Excavators (30–50 tons):</strong> Required for mining operations, major earthmoving, and large infrastructure projects like dams and highways.</li><li><strong>Heavy Excavators (50+ tons):</strong> Used in large-scale mining and major civil engineering projects.</li></ul>
<h2>2. Consider the Terrain and Conditions</h2>
<p>Ethiopia's diverse geography means that a machine suited for the soft soils of the Rift Valley may struggle in the rocky highlands. Key considerations include:</p>
<ul><li><strong>Track type:</strong> Steel tracks for rocky terrain, rubber tracks for urban and paved surfaces.</li><li><strong>Undercarriage configuration:</strong> Long-track undercarriages provide better stability for heavy lifting.</li><li><strong>Engine power:</strong> Higher altitude operations require engines with adequate turbocharging to maintain power output.</li></ul>
<h2>3. Match the Attachment to the Application</h2>
<p>Modern excavators are highly versatile with quick-coupler systems that allow rapid attachment changes. Common attachments for Ethiopian projects include:</p>
<ul><li><strong>Digging buckets:</strong> Standard for excavation and trenching.</li><li><strong>Rock breakers/hammers:</strong> Essential for demolition and rock excavation in Ethiopian construction.</li><li><strong>Grapples:</strong> For material handling and waste management.</li><li><strong>Augers:</strong> For drilling foundation holes and utility poles.</li></ul>
<h2>4. Evaluate Total Cost of Ownership</h2>
<p>Beyond the purchase price, consider fuel efficiency, maintenance intervals, parts availability, and resale value. At YAMA Construction, we recommend machines with strong local dealer support to minimize downtime. Our service centers in Addis Ababa, Dire Dawa, Bahir Dar, Hawassa, and Mekelle ensure that parts and service are never far away.</p>
<h2>5. New vs. Used: Making the Right Choice</h2>
<p>For long-term projects with high utilization, new equipment offers the latest technology, lower fuel consumption, and full warranty coverage. For shorter projects or budget-constrained operations, late-model used equipment from reputable sources can provide excellent value. YAMA Construction offers both new and certified pre-owned excavators from leading brands including Caterpillar, Komatsu, Hitachi, and Hyundai CE.</p>
<p>Contact our sales team for a personalized equipment recommendation based on your specific project requirements, budget, and operating conditions.</p>`
  },
  {
    slug: 'generator-sizing-guide',
    title: 'Generator Sizing Guide for Ethiopian Businesses',
    excerpt: 'Learn how to properly size a generator for your business operations, from small offices to industrial facilities and construction sites.',
    date: '2024-11-28',
    author: 'YAMA Technical Team',
    category: 'Technical Guide',
    image: '/images/blog/blog (2).jpg',
    content: `<p>Reliable power is essential for business operations in Ethiopia, where grid instability can disrupt productivity and damage sensitive equipment. Choosing the right generator size is critical — an undersized generator will struggle under load, while an oversized unit wastes fuel and operates inefficiently.</p>
<p>This guide from YAMA Construction's power solutions team will help you calculate your exact power requirements and select the optimal generator for your needs.</p>
<h2>Understanding Power Ratings</h2>
<p>Generators have two power ratings that are important to understand:</p>
<ul><li><strong>Standby Power:</strong> The maximum power a generator can supply for a limited time (typically 1 hour in a 12-hour period) during a power outage. This is the rating most commonly used for backup power applications.</li><li><strong>Prime Power:</strong> The continuous power a generator can supply for an unlimited number of hours per year, with variable load. This rating applies when the generator is the primary power source.</li></ul>
<h2>Step 1: Calculate Your Total Load</h2>
<p>Start by listing all equipment and appliances that will be powered by the generator. For each item, note the running watts and starting watts. Motors and compressors require significantly more power to start than to run. Key considerations for Ethiopian businesses include:</p>
<ul><li><strong>Office equipment:</strong> Computers, servers, lighting, air conditioning, and security systems.</li><li><strong>Industrial equipment:</strong> Motors, pumps, compressors, welding machines, and production machinery.</li><li><strong>Construction equipment:</strong> Lighting towers, concrete mixers, vibrators, and power tools.</li><li><strong>Commercial facilities:</strong> Refrigeration, HVAC, elevators, and water pumps.</li></ul>
<h2>Step 2: Account for Starting Surge</h2>
<p>Electric motors can draw 3–7 times their running wattage during startup. This starting surge must be factored into your generator sizing. As a rule of thumb, add the largest starting surge to your total running load to determine the minimum generator size.</p>
<h2>Step 3: Consider Future Expansion</h2>
<p>It is wise to size your generator with 20–30% additional capacity to accommodate future growth. This prevents the need for a costly generator replacement when you add new equipment or expand your facility.</p>
<h2>Step 4: Choose the Right Fuel Type</h2>
<p>In Ethiopia, diesel generators are the most common choice due to fuel availability and efficiency. However, for smaller applications, petrol or dual-fuel generators may be suitable. YAMA Construction offers generators from Perkins, Cummins, and other leading manufacturers, with power outputs ranging from 5 kVA to 2,000 kVA.</p>
<h2>Recommended Generator Sizes for Common Applications</h2>
<ul><li><strong>Small office (5–10 staff):</strong> 10–20 kVA</li><li><strong>Medium office (20–50 staff):</strong> 30–60 kVA</li><li><strong>Large office / bank branch:</strong> 60–150 kVA</li><li><strong>Construction site:</strong> 50–200 kVA depending on equipment</li><li><strong>Manufacturing facility:</strong> 200–500 kVA</li><li><strong>Hospital / data center:</strong> 500–1,000 kVA with redundancy</li></ul>
<p>For a precise generator sizing calculation tailored to your specific requirements, contact YAMA Construction's power solutions team. We provide free site assessments and load calculations.</p>`
  },
  {
    slug: 'preventive-maintenance-checklist',
    title: 'Preventive Maintenance Checklist for Heavy Equipment',
    excerpt: 'A detailed preventive maintenance schedule and checklist to maximize equipment lifespan and minimize costly downtime.',
    date: '2024-11-10',
    author: 'YAMA Service Team',
    category: 'Maintenance',
    image: '/images/blog/blog (3).jpg',
    content: `<p>Regular preventive maintenance is the single most effective way to maximize equipment lifespan, reduce operating costs, and prevent unexpected breakdowns. At YAMA Construction, our service team has developed this comprehensive maintenance checklist based on decades of experience servicing heavy equipment across Ethiopia.</p>
<p>Following this schedule can extend equipment life by 30–50% and reduce total cost of ownership significantly.</p>
<h2>Daily Pre-Operation Checks (Operator Level)</h2>
<ul><li>Check engine oil level and coolant level.</li><li>Inspect hydraulic fluid level and look for leaks.</li><li>Check fuel level and water separator.</li><li>Inspect tires or tracks for damage and proper pressure.</li><li>Check all lights, signals, and alarms.</li><li>Verify that all safety guards and structures are in place.</li><li>Walk around the machine to check for visible damage or leaks.</li><li>Test brakes, steering, and controls before operation.</li></ul>
<h2>Weekly Maintenance</h2>
<ul><li>Grease all pivot points and fittings according to the manufacturer's specifications.</li><li>Check and clean air filter pre-cleaners.</li><li>Inspect belts and hoses for wear, cracking, or looseness.</li><li>Check battery terminals and electrolyte levels.</li><li>Verify tire/wheel lug nut torque.</li><li>Clean the radiator and oil cooler fins.</li></ul>
<h2>Monthly Maintenance</h2>
<ul><li>Change engine oil and replace oil filter (or follow manufacturer's hour-based schedule).</li><li>Replace fuel filters.</li><li>Inspect and adjust track tension (for tracked equipment).</li><li>Check all fluid levels — transmission, final drives, hydraulic system.</li><li>Inspect exhaust system for leaks or damage.</li><li>Test all safety systems including backup alarms and cameras.</li></ul>
<h2>Quarterly Maintenance</h2>
<ul><li>Replace air filters.</li><li>Change hydraulic oil filter.</li><li>Inspect and service the cooling system — check coolant concentration and condition.</li><li>Check and adjust valve clearances (if applicable).</li><li>Inspect structural components for cracks or damage.</li><li>Test and calibrate instrument panel and sensors.</li></ul>
<h2>Annual / 1,000-Hour Maintenance</h2>
<ul><li>Complete fluid change — engine oil, hydraulic oil, transmission oil, coolant.</li><li>Replace all filters — oil, fuel, hydraulic, air, coolant.</li><li>Injector service and fuel system calibration.</li><li>Turbocharger inspection and service.</li><li>Complete undercarriage inspection and measurement.</li><li>Electrical system inspection — wiring, connectors, alternator, starter.</li><li>Paint touch-up and corrosion protection.</li></ul>
<h2>Record Keeping</h2>
<p>Maintain detailed records of all maintenance activities, including dates, hours, parts replaced, and observations. This history is invaluable for warranty claims, resale value, and identifying recurring issues. YAMA Construction offers a digital maintenance tracking system for fleet customers.</p>
<h2>Why Choose YAMA Construction for Service?</h2>
<p>Our factory-trained technicians service all major brands including Caterpillar, Komatsu, Volvo CE, Hitachi, and JCB. With six branches nationwide and a mobile service fleet, we can reach your equipment anywhere in Ethiopia. We also offer preventive maintenance contracts that guarantee scheduled service and priority response.</p>
<p>Contact our service department to schedule your next maintenance appointment or to discuss a customized maintenance plan for your fleet.</p>`
  },
  {
    slug: 'construction-equipment-financing',
    title: 'Construction Equipment Financing Options in Ethiopia',
    excerpt: 'An overview of financing, leasing, and procurement options available for Ethiopian construction firms and government enterprises.',
    date: '2024-10-22',
    author: 'YAMA Finance Team',
    category: 'Finance',
    image: '/images/blog/blog (4).jpg',
    content: `<p>Acquiring heavy equipment requires significant capital investment. For many Ethiopian construction firms, government agencies, and commercial enterprises, financing is the key to accessing the equipment needed to win and execute projects. YAMA Construction offers a range of flexible financing solutions tailored to the Ethiopian market.</p>
<h2>1. Direct Purchase</h2>
<p>The simplest option — pay the full purchase price upfront. This is ideal for organizations with available capital and provides the lowest total cost. Benefits include immediate ownership, no interest costs, and full control over the asset. YAMA Construction offers competitive pricing and volume discounts for fleet purchases.</p>
<h2>2. Equipment Financing / Loans</h2>
<p>Partnering with Ethiopian banks and microfinance institutions, YAMA Construction can facilitate equipment loans with competitive terms. Typical structures include:</p>
<ul><li><strong>Down payment:</strong> 20–30% of equipment value.</li><li><strong>Repayment period:</strong> 12–60 months.</li><li><strong>Interest rates:</strong> Competitive rates based on the borrower's credit profile and the equipment type.</li><li><strong>Collateral:</strong> The equipment itself often serves as collateral.</li></ul>
<h2>3. Leasing Options</h2>
<p>Leasing is increasingly popular among Ethiopian businesses as it preserves working capital and offers tax advantages. YAMA Construction offers both operating leases and finance leases:</p>
<ul><li><strong>Operating Lease:</strong> Lower monthly payments, equipment returned at lease end, ideal for short-term projects.</li><li><strong>Finance Lease:</strong> Higher payments with ownership transfer at lease end, suitable for long-term equipment needs.</li></ul>
<h2>4. Government Procurement Programs</h2>
<p>For federal and regional government entities, YAMA Construction participates in public tender processes and offers special financing terms aligned with government budget cycles. We have extensive experience supplying equipment for infrastructure projects funded by the Ethiopian government and international development partners.</p>
<h2>5. Rent-to-Own Programs</h2>
<p>For businesses that need equipment immediately but prefer to build ownership over time, YAMA Construction offers rent-to-own programs. A portion of each rental payment goes toward eventual ownership, making this an attractive option for growing companies.</p>
<h2>6. Tender Financing Support</h2>
<p>Winning a construction tender often requires demonstrating equipment availability. YAMA Construction can provide letters of equipment commitment and financing pre-approvals to strengthen your tender submissions. We work with contractors to ensure they have the equipment backing needed to compete for major projects.</p>
<h2>How to Apply</h2>
<p>The financing application process with YAMA Construction is straightforward:</p>
<ol><li>Select your equipment and request a quotation.</li><li>Submit basic business documentation (license, financial statements, project contracts).</li><li>Receive financing pre-approval within 48 hours.</li><li>Finalize terms and take delivery of your equipment.</li></ol>
<p>Our finance team has over 15 years of experience in equipment financing in Ethiopia and can guide you through the entire process. Contact us to discuss the best financing solution for your business.</p>`
  },
  {
    slug: 'heavy-machinery-trends-ethiopia',
    title: 'Heavy Machinery Trends in Ethiopia: 2025 Outlook',
    excerpt: 'Analysis of emerging trends in Ethiopia\'s heavy machinery sector, including electrification, telematics, and local assembly developments.',
    date: '2024-10-05',
    author: 'YAMA Research Team',
    category: 'Industry Insights',
    image: '/images/blog/blog (5).jpg',
    content: `<p>The Ethiopian heavy machinery sector is undergoing significant transformation. As the country continues its ambitious infrastructure development program and industrial expansion, several key trends are shaping the equipment market for 2025 and beyond. YAMA Construction's research team analyzes the most important developments.</p>
<h2>1. Growing Demand for Telematics and Fleet Management</h2>
<p>Ethiopian fleet operators are increasingly adopting telematics systems that provide real-time data on equipment location, fuel consumption, operating hours, and maintenance needs. This technology enables better fleet utilization, reduced fuel costs (typically 10–15% savings), and predictive maintenance that prevents costly breakdowns. YAMA Construction now offers factory-installed telematics on all new equipment and retrofit solutions for existing fleets.</p>
<h2>2. Shift Toward Fuel-Efficient and Tier 3 Engines</h2>
<p>With fuel costs representing a significant portion of operating expenses, Ethiopian contractors are prioritizing fuel-efficient equipment. The transition to Tier 3 compliant engines (and increasingly Tier 4 interim) is underway, offering 5–10% better fuel efficiency compared to older models. This is particularly important for large fleet operators in mining and road construction.</p>
<h2>3. Local Assembly and Manufacturing Initiatives</h2>
<p>Several global OEMs are exploring local assembly partnerships in Ethiopia to reduce import costs and improve parts availability. This trend is expected to accelerate in 2025, potentially reducing equipment costs by 15–25% and creating local jobs. YAMA Construction is actively engaged in discussions with manufacturing partners to bring assembly operations to Ethiopia.</p>
<h2>4. Increased Focus on After-Sales Support</h2>
<p>As equipment fleets grow, the demand for reliable after-sales service, genuine parts, and trained technicians is increasing. Companies that invest in robust service networks will have a competitive advantage. YAMA Construction continues to expand its service center network and technician training programs to meet this growing demand.</p>
<h2>5. Electrification and Hybrid Technology</h2>
<p>While still in early stages in Ethiopia, global trends toward electrification are beginning to influence the local market. Hybrid excavators that reduce fuel consumption by 20–30% are gaining interest from environmentally conscious contractors and projects funded by international development partners. Electric mini-excavators are also being evaluated for urban projects with strict emissions requirements.</p>
<h2>6. Rental Market Expansion</h2>
<p>The equipment rental market in Ethiopia is growing rapidly as contractors seek to avoid large capital expenditures and maintain fleet flexibility. YAMA Construction's rental division has seen 40% year-over-year growth, with particular demand for excavators, wheel loaders, and generators for short-to-medium term projects.</p>
<h2>7. Digital Transformation in Procurement</h2>
<p>Online equipment marketplaces, digital quotation systems, and virtual equipment inspections are becoming standard. YAMA Construction's digital platform allows customers to browse inventory, request quotes, schedule service, and track orders online — reducing procurement cycles by up to 50%.</p>
<h2>Outlook for 2025</h2>
<p>The Ethiopian heavy machinery market is poised for continued growth, driven by major infrastructure projects including the Grand Ethiopian Renaissance Dam completion, road network expansion, industrial park development, and mining sector growth. YAMA Construction remains committed to providing the equipment, service, and financing solutions that Ethiopian businesses need to succeed in this dynamic environment.</p>
<p>For more detailed market analysis or to discuss how these trends may impact your business, contact our research team.</p>`
  },
];
 
export const branches: Branch[] = [
  { name: 'Addis Ababa — Headquarters', address: 'Bole Road, Near Bole International Airport, Addis Ababa, Ethiopia', phone: '+251-11-550-1234', email: 'info@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 8.9806, lng: 38.7578 } },
  { name: 'Addis Ababa — Parts & Service Center', address: 'Kality Industrial Zone, Addis Ababa, Ethiopia', phone: '+251-11-550-5678', email: 'parts@yamaconstruction.com', hours: 'Mon–Fri: 7:30–18:00 | Sat: 8:00–15:00', coordinates: { lat: 8.9000, lng: 38.7500 } },
  { name: 'Dire Dawa Branch', address: 'Dire Dawa Industrial Park, Dire Dawa, Ethiopia', phone: '+251-25-111-2345', email: 'diredawa@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 9.6000, lng: 41.8500 } },
  { name: 'Bahir Dar Branch', address: 'Bahir Dar City Center, Near Stadium, Bahir Dar, Ethiopia', phone: '+251-58-220-3456', email: 'bahirdar@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 11.6000, lng: 37.3833 } },
  { name: 'Hawassa Branch', address: 'Hawassa Industrial Park, Hawassa, Ethiopia', phone: '+251-46-220-4567', email: 'hawassa@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 7.0500, lng: 38.4667 } },
  { name: 'Mekelle Branch', address: 'Mekelle City, Tigray Region, Ethiopia', phone: '+251-34-240-5678', email: 'mekelle@yamaconstruction.com', hours: 'Mon–Fri: 8:00–17:30 | Sat: 8:00–13:00', coordinates: { lat: 13.4967, lng: 39.4753 } },
];