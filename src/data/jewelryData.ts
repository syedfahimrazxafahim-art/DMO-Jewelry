export interface JewelryItem {
  id: string;
  url: string;
  title: string;
  category: 'Gold & Chains' | 'Diamonds & Rings' | 'Watches & Luxury' | 'Showroom & Displays' | 'Bracelets & Pendants';
  description: string;
  aspectRatioHint: 'square' | 'portrait' | 'landscape';
}

export const BUSINESS_INFO = {
  name: 'DMO Jewelry',
  businessType: 'Luxury Jewelry Business',
  location: 'Houston, TX',
  phone: '1 956-955-0999',
  phoneClean: '+19569550999',
  email: 'aladdinjewelryllc@gmail.com',
  facebook: 'https://www.facebook.com/AladdinJewelry2024/photos',
  instagram: 'https://www.instagram.com/dmopmr/',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=DMO+Jewelry+Houston+TX',
};

export const LOGO_URL = 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/603869173_122206571384367699_3185238872802320_n.jpg';

export const HERO_BG_URL = 'https://res.cloudinary.com/fzobzdco/image/upload/v1789162639/6f88c2c2-fd97-4bbf-a680-5ce864a38535.png';

// Exactly 19 unique website images from the supplied assets (used exactly once in the gallery)
export const GALLERY_IMAGES: JewelryItem[] = [
  {
    id: 'img-1',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/798772108_1970945783596645_1211430489032281576_n.jpg',
    title: 'Precious Gold Bullion & Bars',
    category: 'Gold & Chains',
    description: 'Fine investment-grade bullion and pure gold trading.',
    aspectRatioHint: 'square',
  },
  {
    id: 'img-2',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/802467886_928249763230662_8290337681104937403_n.jpg',
    title: 'Solid Gold Cuban Link & Chains',
    category: 'Gold & Chains',
    description: 'Mastercrafted heavy gold link chains and diamond accents.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-3',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/802702885_2105715340307271_2946841877508205183_n.jpg',
    title: 'Luxury Gold Watch & Diamond Bezel',
    category: 'Watches & Luxury',
    description: 'High-end timepiece styling with precision craftsmanship.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-4',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/741777646_17947960908248656_8476738404435982405_n.jpg',
    title: 'Diamond Encrusted Statement Pendant',
    category: 'Bracelets & Pendants',
    description: 'Exquisite custom pave diamond detailing in warm gold.',
    aspectRatioHint: 'square',
  },
  {
    id: 'img-5',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/802702895_1077372038367976_2767755238539938528_n.jpg',
    title: 'Bespoke Diamond Rings & Bands',
    category: 'Diamonds & Rings',
    description: 'Radiant diamond engagement and statement anniversary rings.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-6',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159322/752708284_17948482005248656_7236523840758804477_n.jpg',
    title: 'Showroom Glass Counter Displays',
    category: 'Showroom & Displays',
    description: 'Immersive showroom atmosphere with illuminated showcases.',
    aspectRatioHint: 'landscape',
  },
  {
    id: 'img-7',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/752741042_17948316873248656_2998710035188167649_n.jpg',
    title: 'Curated Gold Collection Vault',
    category: 'Showroom & Displays',
    description: 'Extensive inventory of precious yellow gold and white gold pieces.',
    aspectRatioHint: 'landscape',
  },
  {
    id: 'img-8',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/752924189_17948316852248656_6751541888628774182_n.jpg',
    title: 'Luxury Gold Chains & Necklaces',
    category: 'Gold & Chains',
    description: 'Classic rope, Franco, and Figaro chains in solid karats.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-9',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/802782747_1557893105465104_1598928914972621523_n.jpg',
    title: 'Fine Diamond Eternity Band',
    category: 'Diamonds & Rings',
    description: 'Sparkling precision-cut diamond pave on solid gold mount.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-10',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/761858744_4263192217267130_5840141559567400139_n.jpg',
    title: 'Houston Showroom Showcase Selection',
    category: 'Showroom & Displays',
    description: 'Refined presentation of jewelry, chains, and bespoke items.',
    aspectRatioHint: 'landscape',
  },
  {
    id: 'img-11',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/802902208_2127399448198114_5710163163274436532_n.jpg',
    title: 'Prestige Watch Timepiece & Gold',
    category: 'Watches & Luxury',
    description: 'Premium horology selection paired with precious gold bracelets.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-12',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/753628213_17948482041248656_7871766128865390579_n.jpg',
    title: 'Necklace & Pendant Exhibition',
    category: 'Showroom & Displays',
    description: 'Velvet bust and showcase displays featuring premier gold necklaces.',
    aspectRatioHint: 'landscape',
  },
  {
    id: 'img-13',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/802976481_1436867671276770_8282481928735896366_n.jpg',
    title: 'Brilliant Cut Solitaire & Halo Rings',
    category: 'Diamonds & Rings',
    description: 'Luminous light dispersion and timeless diamond proportions.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-14',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159323/761497304_1031551036147007_5728587584504825626_n.jpg',
    title: 'High Karat Gold Bracelets & Bangles',
    category: 'Bracelets & Pendants',
    description: 'Substantial gold weight with lustrous mirror polish finish.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-15',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/786915871_17954455980248656_7916297810717187265_n.jpg',
    title: 'Gold Coins & Bullion Valuation',
    category: 'Gold & Chains',
    description: 'Buying and selling rare gold coins, bullion, and scrap jewelry.',
    aspectRatioHint: 'landscape',
  },
  {
    id: 'img-16',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/798116336_2027809331244368_2964708001340909169_n.jpg',
    title: 'Diamond Cluster & Medallion Pendant',
    category: 'Bracelets & Pendants',
    description: 'Intricately prong-set diamonds with radiant gold backplate.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-17',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/794144779_2116737338985531_2416866370693190617_n.jpg',
    title: 'Dual Tone Chronograph & Gold Watch',
    category: 'Watches & Luxury',
    description: 'Iconic timekeeping with luxury bezel and gold link bracelet.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-18',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159324/802986031_1529701332532015_6855802563521181668_n.jpg',
    title: 'Diamond Pave Ring & Wedding Set',
    category: 'Diamonds & Rings',
    description: 'Exceptional clarity and fire in luxury white and yellow gold settings.',
    aspectRatioHint: 'portrait',
  },
  {
    id: 'img-19',
    url: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789159325/787196817_17954456016248656_3349618048458295955_n.jpg',
    title: 'DMO Fine Jewelry Boutique Interior',
    category: 'Showroom & Displays',
    description: 'Private showroom viewing experience with dedicated specialists.',
    aspectRatioHint: 'landscape',
  },
];

export const CATEGORIES = [
  {
    name: 'Rings',
    tagline: 'Timeless Solitaires, Halos & Wedding Bands',
    description: 'Crafted in gold and platinum with hand-selected diamonds.',
  },
  {
    name: 'Necklaces',
    tagline: 'Solid Chains, Rope & Custom Pendants',
    description: 'Weighty heirloom chains and diamond-set statement pieces.',
  },
  {
    name: 'Bracelets',
    tagline: 'Cuban Links, Bangles & Tennis Bracelets',
    description: 'Classic luxury wristwear built for longevity and presence.',
  },
  {
    name: 'Earrings',
    tagline: 'Diamond Studs, Hoops & Drops',
    description: 'Pure brilliance designed to capture every beam of light.',
  },
  {
    name: 'Diamonds',
    tagline: 'Loose Stones & Custom Settings',
    description: 'Hand-graded stones certified for fire, sparkle, and elegance.',
  },
  {
    name: 'Watches',
    tagline: 'Prestige Timepieces & Diamond Bezels',
    description: 'Iconic luxury brands bought and sold with verified authenticity.',
  },
];

export const GOLD_BUYING_ITEMS = [
  'Gold Bullion & Bars',
  'Fine Jewelry & Scrap Gold',
  'Gold Coins & Medallions',
  'Heavy Chains & Necklaces',
  'Diamond & Gold Rings',
  'Luxury Timepieces & Watches',
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'QUALITY',
    description: 'Premium jewelry and precious materials.',
  },
  {
    title: 'TRUST',
    description: 'Professional and transparent service.',
  },
  {
    title: 'EXPERTISE',
    description: 'Knowledge of precious metals, diamonds, and luxury pieces.',
  },
  {
    title: 'VALUE',
    description: 'Competitive value when buying and selling.',
  },
];
