/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Flame, PhoneCall, Menu, X, CalendarCheck2 } from 'lucide-react';
import RibLogo from './RibLogo';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '🔥 El Menú', href: '#reservas' },
    { name: '📸 Galería de Adán', href: '#estudio-gourmet' },
    { name: '📞 Contacto Directo', href: '#contacto' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-[#242021]/80">
      {/* Mini notification banner for order constraint */}
      <div className="bg-gradient-warm px-4 py-1.5 text-center text-[10px] md:text-xs text-brand-cream font-mono font-bold tracking-wider flex items-center justify-center gap-1.5 shadow-inner">
        <Flame size={12} className="animate-bounce" />
        <span>PEDIDOS ÚNICAMENTE LOS JUEVES • ENTREGAS LOS VIERNES • COSTILLAS GLASEADAS A LA BARBIEUE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center text-brand-cream shadow-md shadow-brand-red/20">
              <RibLogo size={32} />
            </div>
            <div>
              <span className="font-display font-black text-lg md:text-xl text-brand-cream tracking-tight block leading-none">
                Las Costillas de Adán
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-accent font-bold">
                Craft Wood-Smoked Barbecue
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-brand-orange text-sm font-display font-bold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#reservas"
              className="bg-brand-dark/40 hover:bg-brand-orange/10 border border-[#242021] hover:border-brand-orange/40 text-brand-orange text-xs font-display font-black px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 uppercase tracking-wide cursor-pointer"
              style={{ minHeight: '44px' }}
            >
              <CalendarCheck2 size={16} />
              Reservar Rack
            </a>
          </div>

          {/* Mobile hamburger button >= 44px */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-brand-cream focus:outline-none"
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Abrir Menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#141213] border-b border-[#242021] px-4 py-6 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-brand-orange text-base font-display font-bold py-2 transition-colors uppercase tracking-wider block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={(e) => {
                setIsOpen(false);
                const elem = document.querySelector('#reservas');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-warm text-brand-cream font-display font-black text-center py-3.5 rounded-xl uppercase tracking-wider text-sm block cursor-pointer"
              style={{ minHeight: '44px' }}
            >
              🔥 Armar mi Combo 24h
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
