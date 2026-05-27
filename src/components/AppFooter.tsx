/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Mail, 
  Phone, 
  ShieldCheck, 
  ArrowUpRight,
  Flame,
  ThumbsUp
} from 'lucide-react';
import { SOCIAL_POSTS } from '../data';
import RibLogo from './RibLogo';

export default function AppFooter() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-[#0f0d0e] border-t border-[#242021] pt-20 pb-10 text-[#fbf9f5] relative overflow-hidden">
      {/* Visual background divider overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eea132]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER ROW: Social Hub Mocking Feeds */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-brand-accent text-xs font-bold uppercase tracking-widest block mb-2">Comunidad en Línea</span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-cream">¿Dónde Nos Recomiendan?</h3>
            </div>
            
            {/* CTA targeting statistical networks */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-pink-600/10 hover:bg-pink-600 text-pink-400 hover:text-brand-cream border border-pink-500/20 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer"
                style={{ minHeight: '44px' }}
              >
                <Instagram size={14} />
                @LasCostillasDeAdan
                <ArrowUpRight size={12} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-brand-cream border border-blue-500/20 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer"
                style={{ minHeight: '44px' }}
              >
                <Facebook size={14} />
                FB /LasCostillasDeAdan
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Render Social Mocks with elegant interactive overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOCIAL_POSTS.map(post => (
              <div 
                key={post.id} 
                className="bg-[#141213] rounded-2xl overflow-hidden border border-[#242021] flex flex-col md:flex-row shadow-lg group hover:border-[#f26419]/35 transition-colors duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden bg-brand-dark">
                  <img 
                    src={post.image} 
                    alt="Social feed" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Content */}
                <div className="p-6 md:w-2/3 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-bold ${
                        post.platform === 'instagram' ? 'text-pink-400' : 'text-blue-400'
                      }`}>
                        {post.platform === 'instagram' ? <Instagram size={12} /> : <Facebook size={12} />}
                        Post Recomendado en {post.platform}
                      </span>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                        <ThumbsUp size={12} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed italic line-clamp-3">
                      "{post.caption}"
                    </p>
                  </div>

                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:text-brand-orange text-xs font-display font-medium inline-flex items-center gap-1 group/link"
                  >
                    Ver hilo y comentarios de clientes 
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MID ROW: Contact structure, map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-[#242021] pt-12 pb-16">
          
          {/* Logo Brand / Pitch Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-warm flex items-center justify-center text-brand-cream">
                <RibLogo size={24} />
              </div>
              <span className="font-display font-black text-xl text-brand-cream">
                Las Costillas de Adán
              </span>
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Inspirados en la perfección del asado artesanal. 
              Elaboramos costillas marinadas en seco con especias de autor, sometidas a 12 horas continuas de calor indirecto e infusión herbal para un desprendimiento celestial del hueso.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <Phone size={16} className="text-brand-orange shrink-0" />
                <span>+52 (1) 23 4567 8900</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <Mail size={16} className="text-brand-orange shrink-0" />
                <span>hola2@lascostillasdeadan.com</span>
              </div>
            </div>
          </div>

          {/* Operational Hours / Guidelines Column (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-brand-cream border-l-2 border-brand-orange pl-3">Horario de Atención</h4>
            
            <div className="space-y-4 text-xs md:text-sm text-gray-400">
              <div className="flex gap-2 items-start">
                <Clock size={16} className="text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-gray-300 uppercase font-mono tracking-wide text-xs">Levantamiento de Pedidos</p>
                  <p className="mt-1">Únicamente los <strong>Jueves</strong></p>
                  <p className="font-mono text-xs text-brand-orange">De 9:00 hrs a 18:00 hrs</p>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <ShieldCheck size={16} className="text-[#a8a29e] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-gray-300 uppercase font-mono tracking-wide text-xs">Entregas de Asado</p>
                  <p className="mt-1">Cada semana los <strong>Viernes</strong></p>
                  <p className="font-mono text-xs text-[#06b6d4]">En la puerta de tu hogar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Succursal / Map Replacement: Ghost Kitchen Info Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-brand-cream border-l-2 border-brand-orange pl-3">Cocina Fantasma Directa</h4>
            
            <div className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400">
              <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <p className="leading-relaxed text-gray-300">
                Operamos bajo un modelo exclusivo de <strong className="text-brand-orange">Cocina Fantasma (Dark Kitchen)</strong>. No contamos con local físico al público ni sucursales comerciales abiertos, lo cual garantiza la máxima higiene, atención personalizada y costos sumamente accesibles para tu bolsillo.
              </p>
            </div>

            {/* Stylized Information Board confirming Delivery / WhatsApp custom dispatch */}
            <div 
              className="p-5 rounded-xl border border-[#242021] bg-brand-dark/60 overflow-hidden relative group shadow-md space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-orange">
                <Flame size={16} className="text-brand-orange animate-pulse" />
                <span className="font-display font-black text-xs uppercase tracking-wider">Costillas Perfectas a la Barbieue</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Nuestras rústicas costillas de cerdo son glaseadas generosamente <strong className="text-brand-cream font-medium">a la barbieue</strong> caramelizada. Al no contar con sucursal física de atención, distribuimos todo en empaques térmicos sellados al vacío que preservan el gran sabor del marinado.
              </p>
              
              <div className="pt-2 border-t border-[#242021] flex justify-between items-center text-[10px] uppercase font-mono">
                <span className="text-brand-accent">Sabor 100% Garantizado</span>
                <span className="text-gray-500">• CDMX Envíos</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Legal & design signature */}
        <div className="border-t border-[#242021] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} Las Costillas de Adán. Todos los derechos reservados.</p>
            <p className="mt-1 text-[10px] text-gray-600">Marinado artesanal premium operado en Ciudad de México.</p>
          </div>

          <div className="flex gap-6 items-center">
            <span className="text-[10px] uppercase text-[#7a6f66] flex items-center gap-1">
              <ShieldCheck size={12} className="text-brand-orange" />
              Comprometidos con el Comercio Justo Local
            </span>
            <button 
              onClick={handleScrollTop}
              className="text-brand-orange hover:text-brand-accent text-xs font-extrabold focus:outline-none flex items-center gap-1 cursor-pointer"
              style={{ minHeight: '44px' }}
            >
              Volver Arriba ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
