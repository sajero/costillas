/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Testimonial, SocialFeedPost } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'presentacion-anita',
    name: 'Presentación Anita (3 Costillas)',
    description: 'Nuestra icónica porción individual de 3 costillas de cerdo tiernas, perfectamente marinadas con nuestra receta secreta. Acompañada de una jugosa pieza de elote dulce tierno, puré de papa rústico casero y un refresco frío a elegir.',
    price: 240,
    category: 'individual',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80',
    badge: '★ Favorita Individual',
    isPopular: true
  },
  {
    id: 'presentacion-brenda',
    name: 'Presentación Brenda (6 Costillas)',
    description: 'La porción ideal para compartir o para el apetito más exigente: 6 jugosas costillas de cerdo deliciosamente marinadas con glaseado BBQ continuo. Acompañadas de elote dulce tierno, puré de papa rústico casero y un refresco frío a elegir.',
    price: 450,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
    badge: '🔥 Ideal para Compartir',
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sencillamente las mejores costillas de la ciudad. El glaseado tiene un equilibrio de humo perfecto. Las pedí con 24 horas de anticipación y la carne se desprendía sola del hueso.',
    date: 'Hace 3 días',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 't2',
    name: 'Sofía Rodríguez',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Me encanta que el pedido sea con anticipación para cuidar el sabor y la jugosidad. Súper organizado el sistema de pre-pedido y reservas por WhatsApp.',
    date: 'Hace 1 semana',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
  }
];

export const SOCIAL_POSTS: SocialFeedPost[] = [
  {
    id: 'p1',
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ¡Nuestros asadores se encienden con 24 horas de anticipación para ti! Prepara tu mesa y haz tu pre-pedido de costillas ahora mismo. 📲 Link en Bio #LasCostillasDeAdan #CraftBBQ',
    likes: 980,
    comments: 42,
    url: 'https://instagram.com'
  },
  {
    id: 'p2',
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&auto=format&fit=crop&q=80',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ¿Presentación Anita para la comida rápida o Brenda para cena familiar? Tú decides y nosotros lo preparamos al momento. Haz tu pedido anticipado por WhatsApp.',
    likes: 540,
    comments: 21,
    url: 'https://facebook.com'
  }
];
