// Interface for Inventory
interface Inventory {
  sku: string;
}

// Interface for Category
interface Category {
  id: string;
  name: string;
  slug: string;
}

// Interface for Gallery Image
interface GalleryImage {
  image: string;
  thumbnail: string;
  medium: string;
  full: string;
}

// Interface for Images
interface Images {
  featured_image: string;
  featured_video: string | null;
  other_images: string[];
  gallery_images: GalleryImage[];
}

// Interface for Delivery Icon
interface DeliveryIcon {
  until: string;
  icon: string;
  label: string;
}

// Interface for Stock
interface Stock {
  max: number;
  delivery_icons: DeliveryIcon[];
}

// Interface for Sale
interface Sale {
  currency: string;
  regular_price: number;
  offer_price: number;
  offer_label: string;
  offer_type: string;
  member_price: number;
  subscription_price: number;
}

// Interface for Label
interface Label {
  label_text: string;
  sub_label_text: string | null;
  icon_type: string;
  color_code: string;
}

// Main Product Interface
export interface Product {
  id: string;
  title: string;
  inventory: Inventory;
  slug: string;
  categories: Category[];
  pre_order: boolean;
  type: string;
  images: Images;
  label: Label;
  ad: boolean;
  ad_id: string;
  rating: string;
  stock: Stock;
  sale: Sale;
}
