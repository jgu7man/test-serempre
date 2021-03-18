export interface iProductInfo {
  title: string;
  shortDescription: string;
  price: number;
  overview: string;
  images: iProductImage[];
  iconFeatures?: iIconFeature[];
  description: iProductDescription[];
  variables?: iProductVariable[]
  details?: iProductDetails[];
  isNew?: boolean;
  shipping?: number;
  id?: string;
}

export interface iProductImage {
  src: string;
  alt?: string;
}

export interface iProductDescription {
  title: string;
  content: any;
}

export interface iProductDetails {
  kind: string;
  value: string;
}

export interface iIconFeature {
  icon: string;
  feature: string;
}

export interface iProductVariable {
  name: string;
  title: string;
  options: iProductOption []
}

export interface iProductOption {
  option: string;
  description?: string;
  price?:number;
}
