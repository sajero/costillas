/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'combos' | 'individual' | 'guarniciones' | 'bebidas';
  image: string;
  badge?: string;
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedSoda?: string;
}

export interface ReservationForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  method: 'pickup' | 'delivery';
  address?: string;
  notes?: string;
  items: CartItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface SocialFeedPost {
  id: string;
  platform: 'instagram' | 'facebook';
  image: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
}
