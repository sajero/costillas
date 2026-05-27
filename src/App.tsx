/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Sparkles, 
  Award, 
  Clock, 
  Camera, 
  CheckCircle, 
  ArrowRight,
  Heart,
  ChevronRight,
  UtensilsCrossed,
  Info
} from 'lucide-react';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import OrderConfigurator from './components/OrderConfigurator';
import RibLogo from './components/RibLogo';
import ImageWithFallback from './components/ImageWithFallback';
import { TESTIMONIALS } from './data';

export default function App() {
  // Gallery view helper to showcase Anita vs Brenda
  const [galleryView, setGalleryView] = useState<'anita' | 'brenda'>('anita');

  const scrollToReservas = () => {
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-brand-cream selection:bg-brand-orange selection:text-brand-cream">
      
      {/* Sticky Premium Header */}
      <AppHeader />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        
        {/* Background Visual Assets */}
        <div className="absolute inset-0 bg-brand-dark filter brightness-50 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80" 
            alt="Fondo Marinado de Costillas"
            className="w-full h-full object-cover opacity-20 filter blur-sm scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Radial Warm Glow Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--color-brand-orange)_0%,transparent_60%)] opacity-[0.06] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-3.5 py-1.5 rounded-full text-xs text-brand-red font-mono font-bold tracking-wide uppercase mx-auto lg:mx-0 shadow-sm"
              >
                <RibLogo size={14} className="text-brand-red" />
                <span>Presentación Anita & Brenda</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-brand-cream leading-[1.05]"
                >
                  Las Costillas <br />
                  <span className="text-gradient font-black">de Adán</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
                >
                  Un proyecto gastronómico auténtico y familiar operado de forma exclusiva bajo el concepto de <strong className="text-brand-orange font-bold">Cocina Fantasma</strong> (sin sucursal abierta al público). Ofrecemos exquisitas costillas de cerdo tiernas glaseadas generosamente <strong className="text-brand-orange font-bold">a la barbieue</strong>, marinadas despacio durante 12 horas continuas para asegurar que la carne absorba todo el sabor y se desprenda sola del hueso. Levantamos pedidos únicamente los <strong className="text-brand-orange font-bold">Jueves</strong> para consentirte con entregas a domicilio los <strong className="text-brand-orange font-bold">Viernes</strong>. Cada plato se sirve perfectamente acompañado con elote dulce, puré de papa rústica y refresco a elegir.
                </motion.p>
              </div>

              {/* Time and Pre-Order Constraints */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-3 gap-2 py-4 px-5 bg-[#141213]/85 backdrop-blur border border-[#242021] rounded-2xl max-w-md mx-auto lg:mx-0 text-center shadow-lg"
              >
                <div>
                  <span className="block font-display font-extrabold text-lg sm:text-2xl text-brand-accent">Jueves</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mt-0.5">Levantamiento Pedidos</span>
                </div>
                <div className="border-l border-r border-[#242021]">
                  <span className="block font-display font-extrabold text-lg sm:text-2xl text-brand-accent">Viernes</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold block mt-0.5">Día de Entrega</span>
                </div>
                <div>
                  <span className="block font-display font-extrabold text-lg sm:text-2xl text-brand-accent">Barbieue</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mt-0.5">Glaseado Único</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={scrollToReservas}
                  className="w-full sm:w-auto bg-gradient-warm text-brand-cream font-display font-black px-8 py-4.5 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-brand-red/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                  style={{ minHeight: '52px' }}
                >
                  <Flame size={18} />
                  Armar mi Pedido Jueves
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#estudio-gourmet"
                  className="w-full sm:w-auto bg-brand-dark/40 border border-[#242021] hover:border-brand-orange/40 hover:bg-brand-orange/5 text-gray-300 hover:text-brand-cream font-display font-extrabold px-6 py-4.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                  style={{ minHeight: '52px' }}
                >
                  Ver Fotos de Presentación
                </a>
              </motion.div>

            </div>

            {/* Hero Interactive Showcase Card (5 Cols) */}
            <div className="lg:col-span-5 relative animate-fade-in">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="relative rounded-3xl overflow-hidden border border-brand-orange/20 shadow-2xl bg-[#141213]"
              >
                <div className="absolute top-4 left-4 z-10 bg-brand-dark/85 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-[#242021] text-xs font-mono font-bold text-brand-accent flex items-center gap-1.5 shadow">
                  <Award size={14} className="text-brand-orange" />
                  <span>Favorito de la Casa</span>
                </div>

                <div className="h-[280px] sm:h-[350px] overflow-hidden">
                  <ImageWithFallback 
                    localName="presentacion_brenda"
                    fallbackSrc="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80" 
                    alt="Plato de costillas asadas - Presentación Brenda" 
                    className="w-full h-full object-cover filter brightness-95" 
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-black text-xl text-brand-cream">Presentación Brenda</h3>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      El asado auténtico de 6 costillas de cerdo jugosas. Servidas en su punto de cocción con mazorcas tiernas de elote dulce y un cremoso puré de papa de receta familiar.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#242021] text-sm font-mono font-bold">
                    <span className="text-gray-400 uppercase text-[10px] tracking-wider block">Incluye refresco a elegir:</span>
                    <span className="text-lg text-brand-accent">$450 MXN</span>
                  </div>

                  <button
                    onClick={scrollToReservas}
                    className="w-full bg-brand-dark hover:bg-brand-orange border border-brand-orange text-brand-orange hover:text-brand-cream font-display font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{ minHeight: '44px' }}
                  >
                    Elegir Esta Presentación
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CULINARY STUDIO AND IMAGE EDITING ROW (De la Parrilla al Plato) */}
      <section id="estudio-gourmet" className="py-24 bg-brand-dark relative z-10 border-t border-[#242021]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs font-semibold uppercase tracking-widest font-mono">
              <Camera size={14} />
              Nuestras Fotos Reales • La Presentación Anita & Brenda
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-cream tracking-tight">
              Marinado <span className="text-gradient">Auténtico y Sincero</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Sin adornos artificiales ni exageraciones comerciales: te presentamos la deliciosa comida tal cual llega a tu casa desde nuestra cocina fantasma. Costillas tiernas, bañadas en un adobo glaseado a la barbieue brillante que de inmediato desata el antojo familiar.
            </p>
          </div>

          {/* Interactive Selection Tabs representing the two genuine sizes based on photos */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#141213] p-1 rounded-xl border border-[#242021] flex shadow-inner">
              <button
                onClick={() => setGalleryView('anita')}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-display font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  galleryView === 'anita'
                    ? 'bg-brand-orange text-brand-cream shadow font-extrabold'
                    : 'text-gray-400 hover:text-brand-cream'
                }`}
                style={{ minHeight: '44px' }}
              >
                <Sparkles size={14} />
                Presentación Anita (3 Costillas)
              </button>
              <button
                onClick={() => setGalleryView('brenda')}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-display font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  galleryView === 'brenda'
                    ? 'bg-brand-accent/20 text-brand-accent font-extrabold'
                    : 'text-gray-500 hover:text-brand-cream'
                }`}
                style={{ minHeight: '44px' }}
              >
                <UtensilsCrossed size={14} />
                Presentación Brenda (6 Costillas)
              </button>
            </div>
          </div>

          {/* Rendering accurate photo reference details */}
          <AnimatePresence mode="wait">
            {galleryView === 'anita' ? (
              <motion.div 
                key="anita-info"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {/* Photo 1 details */}
                <div className="bg-[#141213] rounded-2xl overflow-hidden border border-[#242021] shadow-xl group">
                  <div className="h-[280px] sm:h-[350px] overflow-hidden relative">
                    <ImageWithFallback 
                      localName="presentacion_anita"
                      fallbackSrc="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=80" 
                      alt="Refresco helado y Costillas de 3 piezas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-dark/95 backdrop-blur-sm border border-brand-orange/35 px-2.5 py-1 rounded text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest shadow">
                      Servido al momento
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-xl text-brand-cream">Detalle Culinario de Anita</h3>
                      <span className="font-mono text-xs text-brand-accent font-bold">$240 MXN</span>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      La ración ideal para el almuerzo del día: 3 piezas carnosas cubiertas con salsa barbieue brillante, colocadas sobre el plato junto con mazorcas jugosas de elote dulce a la mantequilla y puré cremoso de papa. Es el balance perfecto entre sabor intenso y ligereza.
                    </p>
                  </div>
                </div>

                {/* Conceptual reference card for Anita */}
                <div className="bg-[#141213]/60 p-6 md:p-8 rounded-2xl border border-brand-orange/15 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#242021] pb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        <UtensilsCrossed size={18} />
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-base text-brand-cream leading-none">Guarnición y Bebida de Anita</h4>
                        <span className="font-mono text-[9px] uppercase font-bold text-gray-500 tracking-wider">Compromiso de Sabor</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Inspirado fielmente por nuestras fotografías: servimos esta opción individual con deliciosas rebanadas de elote dulce (2 mitades tiernas seleccionadas) y una suave cama de puré de papa rústica. Además, incluye un refresco frío a elegir de nuestra carta para refrescar el paladar en cada bocado de asado.
                    </p>
                    <div className="p-3.5 bg-brand-dark/80 rounded-xl border border-[#242021]/60 font-mono text-xs space-y-2">
                      <p className="text-gray-500 font-bold uppercase text-[9px] tracking-wide">¿Qué incluye Anita?</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        <li>3 Costillas de cerdo glaseadas</li>
                        <li>Mazorca dulce asada</li>
                        <li>Puré artesanal de papa</li>
                        <li>1 Refresco frío a elegir</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-accent bg-brand-accent/5 border border-brand-accent/15 px-3.5 py-2.5 rounded-xl font-mono">
                    <Info size={14} className="shrink-0" />
                    <span>Estilo exclusivo a la barbieue. Los pedidos cierran los Jueves por la tarde.</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="brenda-info"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {/* Photo 2 details */}
                <div className="bg-[#141213] rounded-2xl overflow-hidden border border-[#242021] shadow-xl group">
                  <div className="h-[280px] sm:h-[350px] overflow-hidden relative">
                    <ImageWithFallback 
                      localName="presentacion_brenda"
                      fallbackSrc="https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80" 
                      alt="Costillas de Brenda" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-dark/95 backdrop-blur-sm border border-emerald-500/35 px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest shadow">
                      Marinado de 12 horas
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-xl text-brand-cream">El Banquete de Brenda</h3>
                      <span className="font-mono text-xs text-brand-accent font-bold">$450 MXN</span>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Diseñado para los de buen diente: un rack colosal de 6 costillas suculentas glaseadas a la barbieue dulce. Cada costilla recibe la cantidad ideal de calor indirecto en su proceso de marinado, entregando carne tierna, jugosa y sazonada a la perfección.
                    </p>
                  </div>
                </div>

                {/* Conceptual reference card for Brenda */}
                <div className="bg-[#141213]/60 p-6 md:p-8 rounded-2xl border border-brand-orange/15 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#242021] pb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        <UtensilsCrossed size={18} />
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-base text-brand-cream leading-none">Guarnición y Bebida de Brenda</h4>
                        <span className="font-mono text-[9px] uppercase font-bold text-gray-500 tracking-wider">Perfecto para compartir</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Presentamos esta pieza con una porción doble de elote asado dulce y puré rústico. Una bandeja abundante para festejar desde casa con tus ricas costillas glaseadas a la barbieue. Acompañamos tu pedido exclusivamente con refrescos fríos a tu entera elección.
                    </p>
                    <div className="p-3.5 bg-brand-dark/80 rounded-xl border border-[#242021]/60 font-mono text-xs space-y-2">
                      <p className="text-gray-500 font-bold uppercase text-[9px] tracking-wide">¿Qué incluye Brenda?</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        <li>6 Costillas de cerdo glaseadas</li>
                        <li>Mazorca dulce asada (Porción Doble)</li>
                        <li>Puré artesanal de papa</li>
                        <li>1 Refresco frío a elegir</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-accent bg-brand-accent/5 border border-brand-accent/15 px-3.5 py-2.5 rounded-xl font-mono">
                    <Info size={14} className="shrink-0" />
                    <span>Lamentamos no ofrecer licores; la experiencia de la costilla de Adán incluye únicamente refrescos.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* 3. INTERACTIVE PRE-ORDER SECTION (The Order Configurator Module) */}
      <OrderConfigurator />

      {/* 4. GUEST TESTIMONIALS (The human touch for food joints) */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-wider font-mono">
              <Heart size={12} className="fill-current text-brand-accent" />
              Sabor que enamora
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-cream mt-3 tracking-tight">
              Testimonios Celestiales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map(t => (
              <div 
                key={t.id} 
                className="bg-[#141213]/90 p-8 rounded-2xl border border-[#242021] space-y-4 shadow relative"
                id={`testimonial-${t.id}`}
              >
                <div className="text-brand-orange text-2xl font-mono leading-none">“</div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                  {t.comment}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#242021]">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-cream">{t.name}</h4>
                    <span className="font-mono text-[10px] text-gray-500">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPETIZING PROMOTION CALL-TO-ACTION */}
      <section className="py-16 bg-gradient-warm relative overflow-hidden text-brand-cream">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight uppercase leading-none">
            ¿Hambre de Costillas Perfectas?
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nuestra cocina fantasma opera exclusivamente bajo pedido previo. Recuerda que levantamos pedidos únicamente los <strong>Jueves</strong> y hacemos las entregas los <strong>Viernes</strong> directo a tu domicilio con toda la ricura de la salsa barbieue.
          </p>
          <button
            onClick={scrollToReservas}
            className="inline-flex items-center gap-2 bg-brand-dark/95 hover:bg-brand-dark text-brand-cream font-display font-black px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.02] shadow-xl hover:shadow-brand-dark/30 cursor-pointer"
            style={{ minHeight: '52px' }}
          >
            <Flame size={18} className="text-brand-orange animate-pulse" />
            Empezar Pedidos (Presentación Anita & Brenda)
          </button>
        </div>
      </section>

      {/* Sticky App Footer */}
      <AppFooter />

    </div>
  );
}
