export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location : Location;
}

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type TypeOffer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host:Host;
  id:string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location : Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating:number;
  title: string;
  type: string;
}

export type User = {
  avatarUrl: string;
  id: string;
  isPro: boolean;
  name: string;
}

export type TypeReview = {
  comment: string;
  date?: string;
  id?: string;
  rating: number;
  user?: User;
};
