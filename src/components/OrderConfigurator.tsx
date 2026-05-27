/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Minus, 
  Trash2, 
  Send, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle, 
  ShoppingBag,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS } from '../data';
import RibLogo from './RibLogo';
import ImageWithFallback from './ImageWithFallback';

export default function OrderConfigurator() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '14:00',
    method: 'delivery' as 'pickup' | 'delivery',
    address: '',
    notes: ''
  });
  const [showNotificationMock, setShowNotificationMock] = useState(false);

  // Cart operations with 44px friendly layout targets
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(it => it.item.id === item.id);
      if (existing) {
        return prev.map(it => it.item.id === item.id ? { ...it, quantity: it.quantity + 1 } : it);
      }
      return [...prev, { item, quantity: 1, selectedSoda: 'Coca-Cola Original' }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(it => {
        if (it.item.id === itemId) {
          const newQty = it.quantity + delta;
          return newQty > 0 ? { ...it, quantity: newQty } : it;
        }
        return it;
      }).filter(it => it.quantity > 0);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(it => it.item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, it) => acc + (it.item.price * it.quantity), 0);
  }, [cart]);

  const deliveryFee = formData.method === 'delivery' ? 50 : 0;
  const total = subtotal + deliveryFee;

  // Friday delivery validation logic per guidelines
  const isDateValidation = useMemo(() => {
    if (!formData.date) return { isValid: true, message: '' };
    
    try {
      // Split the date to avoid local timezone displacement
      const parts = formData.date.split('-');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      
      const selectedDate = new Date(year, month, day);
      const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 5 = Friday
      
      const today = new Date();
      today.setHours(0,0,0,0);

      if (selectedDate < today) {
        return { 
          isValid: false, 
          message: '¡El tiempo vuela! Por favor escoge una fecha de entrega en el futuro.' 
        };
      }

      if (dayOfWeek !== 5) {
        return { 
          isValid: false, 
          message: '⚠️ Horario de Atención: Recibimos tus pedidos los Jueves e implementamos nuestras ricas entregas de costillas a la barbieue exclusivamente los días VIERNES. Por favor selecciona un día Viernes en el calendario.' 
        };
      }

      return { 
        isValid: true, 
        message: '✓ ¡Fecha magnífica! Tu pedido se preparará con mimo y se entregará calientito este Viernes.' 
      };
    } catch {
      return { isValid: true, message: '' };
    }
  }, [formData.date]);

  // Dynamic order reference generator
  const orderId = useMemo(() => {
    return 'ADA-' + Math.floor(1000 + Math.random() * 9000);
  }, [cart.length]);

  // Formats WhatsApp messages
  const whatsappUrl = useMemo(() => {
    if (cart.length === 0) return '#';
    
    const itemsText = cart.map(it => `• ${it.quantity}x ${it.item.name}\n  🥤 Refresco: ${it.selectedSoda || 'Coca-Cola Original'}\n  💰 Precio: $${it.item.price * it.quantity} MXN`).join('\n\n');
    let msg = `🔥 *NUEVO PEDIDO ANTICIPADO - LAS COSTILLAS DE ADÁN* 🔥\n`;
    msg += `--------------------------------------\n`;
    msg += `🆔 *Folio:* ${orderId}\n`;
    msg += `👤 *Cliente:* ${formData.name || 'Sin Nombre'}\n`;
    msg += `📞 *Teléfono:* ${formData.phone || 'Sin Especificar'}\n`;
    msg += `🍽️ *Modo:* Entrega a Domicilio (Cocina Fantasma)\n`;
    if (formData.address) {
      msg += `📍 *Dirección:* ${formData.address}\n`;
    }
    msg += `📅 *Fecha Entrega (Viernes):* ${formData.date || 'Pendiente'}\n`;
    msg += `🕒 *Hora Entrega:* ${formData.time || '14:00'} hrs (Sujeto a confirmación)\n`;
    msg += `--------------------------------------\n`;
    msg += `🥩 *Detalle de las Costillas Barbieue:*\n${itemsText}\n`;
    msg += `--------------------------------------\n`;
    if (formData.notes) {
      msg += `✍ *Notas del Chef:* ${formData.notes}\n`;
    }
    msg += `💰 *Subtotal:* $${subtotal} MXN\n`;
    if (deliveryFee > 0) {
      msg += `🛵 *Envío:* $${deliveryFee} MXN\n`;
    }
    msg += `💵 *Gran Total Estimado:* *$${total} MXN*\n\n`;
    msg += `*Aviso:* Entiendo que mi pedido se levanta en Jueves para entrega a domicilio el Viernes por nuestra cocina fantasma. Quedo en espera de la confirmación de depósito para comenzar el marinado. ¡Gracias!`;

    return `https://api.whatsapp.com/send?phone=521234567890&text=${encodeURIComponent(msg)}`;
  }, [cart, formData, total, subtotal, orderId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setShowNotificationMock(true);
    // Smooth scroll to simulated notification mockup preview
    setTimeout(() => {
      document.getElementById('whatsapp-preview-target')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section id="reservas" className="py-20 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ea2b1f_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-semibold mb-4 uppercase tracking-wider font-mono">
            <RibLogo size={14} className="text-brand-accent" />
            Presentación Anita & Brenda
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-cream tracking-tight mb-4">
            Prepara tu <span className="text-gradient">Banquete BBQ</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            El secreto culinario de Adán requiere paciencia: <strong className="text-brand-orange">12 horas de marinado artesanal</strong>. 
            Arma tu pedido (recibimos pedidos los Jueves y entregamos los Viernes) y de inmediato abriremos tu ticket en nuestro WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Complete Rib Menu (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-[#242021]/80 pb-4 mb-2">
              <h3 className="font-display font-extrabold text-xl text-brand-cream tracking-tight uppercase">
                🥩 Menú Exclusivo de Costillas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MENU_ITEMS.map(item => (
                <div 
                  key={item.id} 
                  className="bg-[#141213] rounded-xl overflow-hidden border border-[#242021] hover:border-brand-orange/40 transition-all duration-300 flex flex-col group justify-between"
                  id={`menu-card-${item.id}`}
                >
                  <div className="relative h-48 overflow-hidden bg-brand-dark">
                    <ImageWithFallback 
                      localName={item.id === 'presentacion-anita' ? 'presentacion_anita' : 'presentacion_brenda'}
                      fallbackSrc={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-brand-red text-brand-cream font-mono text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow">
                        {item.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-dark to-transparent"></div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="mb-4">
                      <h4 className="font-display font-extrabold text-lg text-brand-cream leading-tight mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#242021]/60">
                      <span className="font-mono text-lg font-bold text-brand-accent">
                        ${item.price} <span className="text-xs text-gray-500">MXN</span>
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 hover:bg-brand-orange hover:text-brand-cream font-display font-extrabold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                        style={{ minHeight: '44px' }}
                      >
                        <Plus size={16} />
                        Agregar y Elegir Bebida
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Pre-Order Configurator Tray & Dates (5 cols) */}
          <div className="lg:col-span-5 bg-[#141213] rounded-2xl border border-brand-orange/15 shadow-xl shadow-brand-red/5 p-6 md:p-8 space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-[#242021]/80 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/15 flex items-center justify-center text-brand-orange">
                  <ShoppingBag size={18} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-brand-cream">Bandeja de Asado</h3>
              </div>
              {cart.length > 0 && (
                <button 
                  onClick={clearCart} 
                  className="text-gray-500 hover:text-brand-red text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  style={{ minHeight: '44px' }}
                >
                  <Trash2 size={14} />
                  Vaciar
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="py-12 text-center text-gray-500 space-y-3">
                <p className="text-sm">Tu bandeja de pre-pedido está vacía.</p>
                <p className="text-xs text-gray-600">Elige la Presentación Anita o Brenda para iniciar tu asado.</p>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#242021] mx-auto flex items-center justify-center mt-2">
                  <Plus size={20} className="text-[#242021]/60" />
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-h-[290px] overflow-y-auto pr-1">
                {cart.map(item => (
                  <div key={item.item.id} className="flex flex-col gap-3 bg-brand-dark/40 py-3.5 px-4 rounded-xl border border-[#242021]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-extrabold text-sm text-brand-cream truncate">{item.item.name}</p>
                        <p className="font-mono text-xs text-brand-accent">${item.item.price * item.quantity} MXN</p>
                      </div>
                      
                      {/* Steppers touch targets >= 44px */}
                      <div className="flex items-center gap-1 bg-brand-dark/80 rounded-lg p-0.5 border border-[#242021]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-cream rounded-md"
                          style={{ minHeight: '40px', minWidth: '40px' }}
                          aria-label="Disminuir"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-mono text-xs font-bold text-center w-6 text-brand-cream">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand-cream rounded-md"
                          style={{ minHeight: '40px', minWidth: '40px' }}
                          aria-label="Aumentar"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.item.id)}
                        className="text-gray-600 hover:text-brand-red p-1"
                        style={{ minHeight: '44px', minWidth: '44px' }}
                        aria-label="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Integrated dynamic soda picker dropdown as requested */}
                    <div className="flex items-center justify-between gap-2 border-t border-[#242021]/60 pt-2 text-xs">
                      <span className="text-gray-400 font-mono text-[10px] uppercase font-bold">🥤 Refresco a elegir:</span>
                      <select
                        value={item.selectedSoda || 'Coca-Cola Original'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setCart(prev => prev.map(it => it.item.id === item.item.id ? { ...it, selectedSoda: val } : it));
                        }}
                        className="bg-brand-dark border border-[#242021] text-brand-cream text-xs rounded px-2.5 py-1.5 focus:border-brand-orange focus:outline-none max-w-[170px]"
                        style={{ minHeight: '38px', color: '#fff' }}
                      >
                        {['Coca-Cola Original', 'Coca-Cola Sin Azúcar', 'Sidral Mundet', 'Fanta', 'Sprite', 'Agua Mineral'].map(soda => (
                          <option key={soda} value={soda} className="bg-brand-dark">{soda}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Configurator Form Details */}
            {cart.length > 0 && (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#242021]/80">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">Concepto de Entrega</label>
                    <div className="bg-brand-dark px-3 py-2.5 rounded-lg border border-[#242021] text-xs text-brand-orange font-display font-black uppercase flex items-center gap-2" style={{ minHeight: '44px' }}>
                      <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"></span>
                      Domicilio (Cocina Fantasma)
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">Tu Teléfono</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 55 1234 5678"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none placeholder-gray-600"
                      style={{ minHeight: '44px' }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">Tu Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Saúl Jerónimo"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none placeholder-gray-600"
                      style={{ minHeight: '44px' }}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">Dirección Completa de Envío</label>
                    <input
                      type="text"
                      required
                      placeholder="Calle, Número, Colonia, Delegación"
                      value={formData.address}
                      onChange={e => setFormData(p => ({ ...p, address: e.target.value }))}
                      className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none placeholder-gray-600"
                      style={{ minHeight: '44px' }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1">
                        <Calendar size={12} /> Fecha Deseada
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={e => setFormData(p => ({ ...p, date: e.target.value }))}
                        className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none"
                        style={{ minHeight: '44px' }}
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1">
                        <Clock size={12} /> Hora de entrega
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={e => setFormData(p => ({ ...p, time: e.target.value }))}
                        className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none"
                        style={{ minHeight: '44px' }}
                      />
                    </div>
                  </div>

                  {/* Date Notice Real-time Verification Feedback */}
                  {formData.date && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-lg text-xs flex gap-2 ${
                        isDateValidation.isValid 
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
                          : 'bg-brand-orange/10 border border-brand-orange/20 text-brand-orange'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {isDateValidation.isValid ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                      </div>
                      <p className="leading-relaxed font-sans">{isDateValidation.message}</p>
                    </motion.div>
                  )}

                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">Instrucciones Especiales (Opcional)</label>
                    <textarea
                      placeholder="Ej. Enviar puré de papa adicional o indicaciones especiales de la salsa BBQ..."
                      value={formData.notes}
                      onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                      rows={2}
                      className="w-full bg-brand-dark border border-[#242021] rounded-lg px-3 py-2 text-xs text-brand-cream focus:border-brand-orange focus:outline-none placeholder-gray-600 resize-none"
                    />
                  </div>
                </div>

                {/* Subtotal metrics */}
                <div className="bg-brand-dark/60 p-4 rounded-xl space-y-2 border border-[#242021]/80">
                  <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>Subtotal Asado:</span>
                    <span>${subtotal} MXN</span>
                  </div>
                  {formData.method === 'delivery' && (
                    <div className="flex justify-between text-xs text-brand-orange font-mono">
                      <span>Envío a domicilio:</span>
                      <span>+$50 MXN</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-display font-extrabold text-brand-cream border-t border-[#242021] pt-2">
                    <span>TOTAL ESTIMADO:</span>
                    <span className="text-brand-accent">${total} MXN</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  disabled={!isDateValidation.isValid}
                  className={`w-full bg-gradient-warm text-brand-cream font-display font-black py-4 rounded-xl text-center flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-brand-red/10 ${
                    !isDateValidation.isValid ? 'opacity-40 cursor-not-allowed filter grayscale' : ''
                  }`}
                  style={{ minHeight: '52px' }}
                >
                  <MessageSquare size={18} />
                  Generar Pedido por WhatsApp
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* WhatsApp Real-time Smart Notification Simulation Frame */}
        <AnimatePresence>
          {showNotificationMock && (
            <motion.div 
              id="whatsapp-preview-target"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-16 max-w-2xl mx-auto bg-[#1b1718] border border-brand-orange/35 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* WhatsApp Mock Top Header */}
              <div className="bg-[#128c7e] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark font-display font-black text-sm">
                    CA
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-brand-cream">Las Costillas de Adán 🪵🔥</h4>
                    <span className="text-[10px] text-emerald-100 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Canal de Reserva de Asados
                    </span>
                  </div>
                </div>
                <div className="font-mono text-center text-[10px] text-emerald-100 bg-[#075e54] px-2 py-1 rounded">
                  FOLIO: {orderId}
                </div>
              </div>

              {/* Chat Body simulating user message */}
              <div className="p-6 space-y-4 bg-[#ece5dd]/95 text-[#303030]">
                <div className="text-center font-mono text-[10px] text-[#707070] bg-[#e1f3f0] py-1 px-3 rounded-full w-max mx-auto shadow-sm">
                  Hoy • Conversación de Pedido Automática
                </div>

                <div className="bg-white p-4 rounded-xl rounded-tr-none shadow-sm max-w-[85%] ml-auto text-xs space-y-2 border-l-4 border-emerald-500 relative">
                  <div className="absolute top-0 right-0 translate-x-1.5 -translate-y-1.5 w-3 h-3 bg-white rotate-45"></div>
                  <p className="font-mono text-[#075e54] font-bold">¡Listo para enviar a cocina!</p>
                  
                  <div className="font-sans leading-relaxed whitespace-pre-line text-xs font-medium text-[#111111]">
                    🔥 *NUEVO PEDIDO ANTICIPADO - LAS COSTILLAS DE ADÁN* 🔥
                    {`\n🆔 Folio: ${orderId}`}
                    {`\n👤 Cliente: ${formData.name}`}
                    {`\n📞 Teléfono: ${formData.phone}`}
                    {`\n🍽️ Modo: Entrega a Domicilio (Cocina Fantasma)`}
                    {`\n📍 Dirección: ${formData.address}`}
                    {`\n📅 Fecha Entrega (Viernes): ${formData.date}`}
                    {`\n🕒 Hora: ${formData.time} hrs`}
                    {`\n--------------------------------------`}
                    {`\n🥩 Detalle de las Costillas Barbieue:`}
                    {cart.map(it => `\n • ${it.quantity}x ${it.item.name}\n   🥤 Refresco: ${it.selectedSoda || 'Coca-Cola Original'}`).join('')}
                    {`\n--------------------------------------`}
                    {formData.notes && `\n✍️ Notas: ${formData.notes}`}
                    {`\n💰 Subtotal: $${subtotal} MXN`}
                    {`\n🛵 Envío: $${deliveryFee} MXN`}
                    {`\n💵 *Gran Total Estimado: $${total} MXN*`}
                  </div>
                </div>

                <div className="bg-[#e1f3f6] p-4 rounded-xl rounded-tl-none shadow-sm max-w-[85%] text-xs space-y-2 text-[#242424]">
                  <p className="font-mono text-cyan-800 font-bold flex items-center gap-1">
                    <CheckCircle size={12} className="text-cyan-700" />
                    Buzón Inteligente de Confirmación
                  </p>
                  <p className="font-sans text-xs leading-relaxed">
                    Estimado(a) <strong>{formData.name}</strong>, tu pre-pedido ha sido estructurado perfectamente. 
                    Al hacer clic abajo, se abrirá tu aplicación de WhatsApp con tu mensaje formateado de asado (incluyendo tus refrescos seleccionados). 
                    Nuestros maestros asadores verificarán disponibilidad del rack en nuestra cámara de maduración y te enviarán de inmediato los datos correspondientes.
                  </p>
                </div>
              </div>

              {/* Chat action bottom button */}
              <div className="bg-[#f0f0f0] p-4 border-t border-gray-200 text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366] text-white hover:bg-[#20ba5a] font-display font-black text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                  style={{ minHeight: '44px' }}
                >
                  <Send size={16} />
                  Enviar Ticket Directo por WhatsApp
                </a>
                <p className="text-[10px] text-gray-500 mt-2 font-mono">
                  Se abrirá tu WhatsApp o WhatsApp Web de forma automática y gratuita.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
