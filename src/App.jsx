import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Speaker, Smartphone, Monitor, Heart, Lock, Phone, Mail, Instagram, MapPin, Package } from 'lucide-react';

const NexusCRStore = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('inicio');

  const categories = [
    { id: 'inicio', name: 'Inicio', icon: null },
    { id: 'parlantes', name: 'Parlantes', icon: Speaker },
    { id: 'telefonos', name: 'Accesorios Móviles', icon: Smartphone },
    { id: 'computadoras', name: 'Accesorios PC', icon: Monitor },
    { id: 'wellness', name: 'Cuidado Personal', icon: Heart },
    { id: 'contacto', name: 'Contacto', icon: Phone },
  ];

  const products = {
    parlantes: [
      { 
        id: 1, 
        name: 'XO-F55', 
        price: 45176, 
        image: '/productos/1.png', 
        category: 'parlantes',
        description: 'PARLANTE BLUETOOTH WOOFER DUAL XO-F55 8 PULGADAS RGB 20W'
      },
      { 
        id: 2, 
        name: 'PPB0168', 
        price: 15300, 
        image: '/productos/3.jpg', 
        category: 'parlantes',
        description: 'ALTAVOCES BLUETOOTH PORTÁTILES CON LUCES COLOR NEGRO'
      },
      { 
        id: 3, 
        name: 'PPB0156', 
        price: 25574, 
        image: '/productos/4.jpg', 
        category: 'parlantes',
        description: 'BOXE PORTABILE BLUETOOTH - WK DESIGN D33 BLACK'
      },
      { 
        id: 4, 
        name: 'PPB0171', 
        price: 17780, 
        image: '/productos/5.png', 
        category: 'parlantes',
        description: 'ALTAVOZ PORTATIL BLUETOOTH - WEKOME D8'
      },
      { 
        id: 5, 
        name: 'PPB0164', 
        price: 11800, 
        image: '/productos/6.jpg', 
        category: 'parlantes',
        description: 'ALTAVOZ INALAMBRICO PORTATIL AZEADA PD-S108 MEIKA'
      },
      { 
        id: 6, 
        name: 'PPB0152', 
        price: 29300, 
        image: '/productos/7.png', 
        category: 'parlantes',
        description: 'ALTAVOZ WEKOME D57 BLUETOOTH SPEAKER - WEKOME'
      },
      { 
        id: 7, 
        name: 'PPB0155', 
        price: 14200, 
        image: '/productos/8.png', 
        category: 'parlantes',
        description: 'ALTAVOZ BLUETOOTH PORTÁTIL PULSE 4 MINI CON SONIDO 360º Y LUCES LED RGB'
      },
      { 
        id: 8, 
        name: 'PPB0154', 
        price: 14300, 
        image: '/productos/9.jpg', 
        category: 'parlantes',
        description: 'ALTAVOZ WEKOME D29 PORTABLE BLUETOOTH SPEAKER'
      },
      { 
        id: 9, 
        name: 'PPB0153', 
        price: 15100, 
        image: '/productos/10.png', 
        category: 'parlantes',
        description: 'ALTAVOZ BLUETOOTH PORTÁTIL WEKOME D46 PHANTOM'
      },
    ],
    telefonos: [
      { 
        id: 10, 
        name: 'CCT0127', 
        price: 5200, 
        image: '/productos/11.jpg', 
        category: 'telefonos',
        description: 'CARGADOR PARA CELULAR TYPEC/LIGHTNING PZX P13'
      },
      { 
        id: 11, 
        name: 'AAC0005', 
        price: 4800, 
        image: '/productos/12.jpg', 
        category: 'telefonos',
        description: 'MAGSAFE WALLET APPLE'
      },
    ],
    computadoras: [
      { 
        id: 16, 
        name: 'ST983', 
        price: 14100, 
        image: '/productos/17.jpg', 
        category: 'computadoras',
        description: 'WIFI SMART CAMARA, EDICION PTZ 360°, ST-983'
      },
    ],
    wellness: [
      { 
        id: 12, 
        name: 'R4102W', 
        price: 4500, 
        image: '/productos/13.jpg', 
        category: 'wellness',
        description: 'REMOVEDOR QUITA PELUSAS ELÉCTRICO PORTÁTIL RAF R 4102W'
      },
      { 
        id: 13, 
        name: 'R10028', 
        price: 7560, 
        image: '/productos/14.jpg', 
        category: 'wellness',
        description: 'BÁSCULA DE BAÑO RAF, ELECTRÓNICA BLUETOOTH BMI SMART BODY FAT, PANTALLA LCD'
      },
      { 
        id: 14, 
        name: 'WJ12', 
        price: 4750, 
        image: '/productos/15.png', 
        category: 'wellness',
        description: 'AFEITADORA WINMAX J12, DETALLA Y CONTORNO, INALAMBRICA'
      },
      { 
        id: 15, 
        name: 'AMS0022', 
        price: 15900, 
        image: '/productos/16.jpg', 
        category: 'wellness',
        description: 'PISTOLA DE MASAJE, INALAMBRICA, FUNCION DE CALOR, ALTA FRECUENCIA, INCLUYE VARIOS CABEZALES'
      },
    ],
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId ? {...item, quantity: newQuantity} : item
      ));
    }
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const sendWhatsAppOrder = () => {
    let message = '¡Hola! Quiero hacer un pedido:%0A%0A';
    
    cart.forEach(item => {
      message += `${item.name} x${item.quantity} - ₡${(item.price * item.quantity).toLocaleString()}%0A`;
    });
    
    const total = getTotal();
    message += `%0ATotal: ₡${total.toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/50671157005?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => setCurrentCategory('inicio')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  NEXUS CR
                </span>
              </div>
              <span className="hidden md:inline-block text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                Tienda Virtual
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all text-sm ${
                    currentCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {cat.icon && <cat.icon size={16} />}
                  <span>{cat.name}</span>
                </button>
              ))}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden text-cyan-400"
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <nav className="md:hidden mt-4 space-y-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCurrentCategory(cat.id);
                    setMobileMenu(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {cat.icon && <cat.icon size={18} />}
                  <span>{cat.name}</span>
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentCategory === 'inicio' ? (
          <div className="space-y-12">
            {/* Hero Section */}
<div className="text-center py-4">
  {/* Logo con fondo degradado */}
  <div className="flex justify-center mb-2">
    <div className="relative ml-18"> {/* <-- margen izquierdo para empujar el logo a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-orange-500/30 blur-xl rounded-full"></div>
      <img
        src="/logo-hero.png"
        alt="Logo de NEXUS CR"
        className="relative max-w-[800px] h-auto object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
      />
    </div>
  </div>

  {/* Etiqueta destacada */}
  <div
    className="inline-flex items-center mb-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
    aria-label="Tienda 100% Virtual"
  >
    <Package className="text-cyan-400 mr-2" size={20} aria-hidden="true" />
    <span className="text-cyan-300 font-semibold">Tienda 100% Virtual</span>
  </div>

  {/* Texto descriptivo */}
  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-3 font-light">
    Tu destino para tecnología, accesorios y productos de bienestar
  </p>

  {/* Ubicación/envíos */}
  <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-400">
    <MapPin size={18} className="text-cyan-400" aria-hidden="true" />
    <span>Envíos a toda Costa Rica</span>
  </div>
</div>

          {/* Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(1, -1).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105 group"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    <cat.icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                </button>
              ))}
            </div>

            {/* Private Section Banner */}
            <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Lock className="text-purple-400" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sección Privada</h3>
              <p className="text-gray-300 mb-4">Productos para adultos disponibles</p>
              <button
                onClick={() => setCurrentCategory('privada')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Acceder (18+)
              </button>
            </div>
          </div>
        ) : currentCategory === 'contacto' ? (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Contáctanos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/message/VI24NAWWORQGM1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 hover:border-green-500/60 transition-all hover:scale-105 group"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300">Envíanos un mensaje</p>
                <p className="text-green-400 text-sm mt-4">Click para chatear →</p>
              </a>

              {/* Email */}
              <a
                href="mailto:nexushcr@gmail.com"
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">nexushcr@gmail.com</p>
                <p className="text-cyan-400 text-sm mt-4">Enviar correo →</p>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/nexuscr_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-8 hover:border-pink-500/60 transition-all hover:scale-105 group"
              >
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                  <Instagram size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Instagram</h3>
                <p className="text-gray-300">@nexuscr_</p>
                <p className="text-pink-400 text-sm mt-4">Síguenos →</p>
              </a>

              {/* Envíos */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8">
                <div className="text-orange-400 mb-4">
                  <MapPin size={48} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Envíos</h3>
                <p className="text-gray-300">A toda Costa Rica</p>
                <p className="text-orange-400 text-sm mt-4">Entrega a domicilio ✓</p>
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-8 bg-slate-800/30 border border-cyan-500/20 rounded-xl p-6 text-center">
              <p className="text-gray-300 mb-2">💬 Pedidos y consultas por WhatsApp</p>
              <p className="text-sm text-gray-400">Horario: Lunes a Domingo</p>
            </div>
          </div>
        ) : currentCategory === 'privada' ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
              <Lock className="text-purple-400 mx-auto mb-4" size={64} />
              <h2 className="text-3xl font-bold text-white mb-4">Sección para Adultos</h2>
              <p className="text-gray-300 mb-6">
                Esta sección contiene productos para mayores de 18 años.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="text-white font-semibold mb-2">Juguetes</h3>
                  <p className="text-sm text-gray-400">Desde ₡15,000</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-3">💝</div>
                  <h3 className="text-white font-semibold mb-2">Accesorios</h3>
                  <p className="text-sm text-gray-400">Desde ₡8,000</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-3">🌹</div>
                  <h3 className="text-white font-semibold mb-2">Cuidado Íntimo</h3>
                  <p className="text-sm text-gray-400">Desde ₡12,000</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6">
                Envíos discretos y confidenciales
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              {categories.find(c => c.id === currentCategory)?.name}
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products[currentCategory]?.map(product => (
                <div
                  key={product.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:scale-105"
                >
                  {product.image.startsWith('/') ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-contain mb-4 rounded-lg"
                    />
                  ) : (
                    <div className="text-6xl mb-4 text-center">{product.image}</div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  {product.description && (
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                  )}
                  <p className="text-2xl font-bold text-cyan-400 mb-4">
                    ₡{product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Carrito</h2>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Tu carrito está vacío</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-slate-800 rounded-lg p-4 border border-cyan-500/20">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{item.name}</h3>
                          <p className="text-cyan-400">₡{item.price.toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-slate-700 text-white w-8 h-8 rounded hover:bg-slate-600"
                        >
                          -
                        </button>
                        <span className="text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-slate-700 text-white w-8 h-8 rounded hover:bg-slate-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-700 pt-4 mt-6">
                    <div className="flex justify-between text-xl font-bold text-white mb-4">
                      <span>Total:</span>
                      <span className="text-cyan-400">₡{getTotal().toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={sendWhatsAppOrder}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <Phone size={20} />
                      <span>Pedir por WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-cyan-500/20 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-lg mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent font-bold">
                  NEXUS CR
                </span>
              </p>
              <p className="text-sm text-gray-400">Periféricos Tecnológicos</p>
              <p className="text-xs text-gray-500 mt-2">Tienda 100% Virtual</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contacto</h4>
              <p className="text-sm text-gray-400">nexushcr@gmail.com</p>
              <p className="text-sm text-gray-400 mt-1">@nexuscr_</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Envíos</h4>
              <p className="text-sm text-gray-400">A toda Costa Rica</p>
              <p className="text-sm text-gray-400 mt-1">Entrega a domicilio</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">© 2026 NEXUS CR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NexusCRStore;