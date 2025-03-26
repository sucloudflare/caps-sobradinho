import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Dra. Maria Silva",
      role: "Psicóloga",
      text: "Trabalhar com crianças autistas é uma experiência única que nos ensina todos os dias.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. João Santos",
      role: "Psiquiatra",
      text: "O tratamento adequado pode transformar completamente a vida de uma pessoa.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    // ... more testimonials
  ];

  const games = [
    {
      title: "Jogo das Emoções",
      description: "Ajuda crianças a identificar e expressar emoções",
      image: "https://images.unsplash.com/photo-1632507399767-c00722d0c432?auto=format&fit=crop&q=80&w=300&h=200",
      link: "#"
    },
    {
      title: "Quebra-Cabeça Sensorial",
      description: "Desenvolve habilidades motoras e cognitivas",
      image: "https://images.unsplash.com/photo-1632507399767-c00722d0c432?auto=format&fit=crop&q=80&w=300&h=200",
      link: "#"
    },
    // ... more games
  ];

  const videos = [
    {
      title: "Entendendo o Autismo",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      title: "Tratamentos Modernos",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80&w=300&h=200"
    },
    // ... more videos
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=50&h=50" 
                   alt="Logo" 
                   className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-bold text-indigo-800">Saúde Mental</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-gray-500 hover:text-gray-600">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-indigo-600">Início</a>
              <a href="#sobre" className="text-gray-600 hover:text-indigo-600">Sobre</a>
              <a href="#servicos" className="text-gray-600 hover:text-indigo-600">Serviços</a>
              <a href="#jogos" className="text-gray-600 hover:text-indigo-600">Jogos</a>
              <a href="#contato" className="text-gray-600 hover:text-indigo-600">Contato</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Início</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Sobre</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Serviços</a>
              <a href="#jogos" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Jogos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contato</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-6">
              Cuidando da Sua Saúde Mental
            </h1>
            <p className="text-xl md:text-2xl text-purple-700 mb-8">
              Apoio profissional e acolhedor para você e sua família
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Agende uma Consulta
              </button>
              <button className="bg-purple-100 text-purple-700 px-8 py-3 rounded-full hover:bg-purple-200 transition-colors">
                Saiba Mais
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Professional */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Profissional"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                Dra. Ana Silva
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Especialista em Psicologia Infantil e Autismo
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  20 anos de experiência
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Pós-graduação em Neuropsicologia
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Especialista em Terapia Comportamental
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
            Conteúdo Educativo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    light={video.thumbnail}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 md:py-24 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
            Jogos Educativos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <a href={game.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Jogar Agora →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-12 text-center">
            Depoimentos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-indigo-800">{testimonial.name}</h3>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-gray-300">
                Dedicados ao cuidado e desenvolvimento de pessoas com autismo e suas famílias.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Tel: (XX) XXXX-XXXX</li>
                <li>Email: contato@exemplo.com</li>
                <li>Endereço: Rua Exemplo, 123</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Recursos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaYoutube size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaWhatsapp size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-gray-300">
            <p>© 2023 Saúde Mental. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;