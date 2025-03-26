import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ReactPlayer from 'react-player';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Dra. Maria Silva",
      role: "Psicóloga do CAPS",
      text: "Nosso trabalho no CAPS de Sobradinho-BA tem transformado vidas. Ver o progresso dos pacientes é gratificante.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. João Santos",
      role: "Psiquiatra",
      text: "O tratamento adequado pode transformar completamente a vida de uma pessoa.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Ana Oliveira",
      role: "Paciente",
      text: "O CAPS de Sobradinho mudou minha vida. O acolhimento e tratamento são excepcionais.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Carlos Mendes",
      role: "Familiar de Paciente",
      text: "O suporte que recebemos aqui é fundamental para nossa família.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const services = [
    {
      title: "Atendimento Psicológico",
      description: "Consultas individuais e em grupo com profissionais especializados",
      icon: "🧠"
    },
    {
      title: "Terapia Ocupacional",
      description: "Atividades para desenvolvimento de habilidades e autonomia",
      icon: "🎨"
    },
    {
      title: "Assistência Social",
      description: "Suporte para famílias e orientação sobre direitos e benefícios",
      icon: "👥"
    },
    {
      title: "Oficinas Terapêuticas",
      description: "Atividades em grupo para socialização e desenvolvimento",
      icon: "🎯"
    }
  ];

  const capsInfo = {
    address: "Rua Principal, 123 - Centro, Sobradinho - BA",
    phone: "(74) 3538-XXXX",
    hours: "Segunda a Sexta, 8h às 17h",
    services: [
      "Atendimento psicológico individual",
      "Terapia em grupo",
      "Oficinas terapêuticas",
      "Assistência social",
      "Atendimento psiquiátrico",
      "Acompanhamento familiar"
    ]
  };

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
              <span className="ml-2 text-xl font-bold text-indigo-800">CAPS Sobradinho-BA</span>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-gray-500 hover:text-gray-600">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-indigo-600">Início</a>
              <a href="#sobre" className="text-gray-600 hover:text-indigo-600">Sobre</a>
              <a href="#servicos" className="text-gray-600 hover:text-indigo-600">Serviços</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-indigo-600">Depoimentos</a>
              <a href="#contato" className="text-gray-600 hover:text-indigo-600">Contato</a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Início</a>
              <a href="#sobre" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Sobre</a>
              <a href="#servicos" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Serviços</a>
              <a href="#depoimentos" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Depoimentos</a>
              <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contato</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Banner */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070&h=1200" 
            alt="CAPS Sobradinho"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              CAPS Sobradinho-BA
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Centro de Atenção Psicossocial - Cuidando da saúde mental da nossa comunidade
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-indigo-800 px-8 py-3 rounded-full hover:bg-indigo-100 transition-colors">
                Agende seu Atendimento
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Conheça Nosso Trabalho
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CAPS */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-6">
              Sobre o CAPS Sobradinho
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Centro de Atenção Psicossocial (CAPS) de Sobradinho-BA é uma unidade especializada em saúde mental,
              oferecendo atendimento à população e realizando o acompanhamento clínico e social dos usuários.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&h=1200" 
                alt="Equipe CAPS"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">
                Nossa Missão
              </h3>
              <p className="text-gray-600 mb-6">
                Proporcionar atendimento humanizado e de qualidade em saúde mental para a população de Sobradinho
                e região, promovendo a reintegração social e o bem-estar dos usuários e suas famílias.
              </p>
              <ul className="space-y-4">
                {capsInfo.services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de serviços especializados para atender às necessidades
              de nossa comunidade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-6">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as histórias de quem já foi impactado pelo nosso trabalho.
            </p>
          </motion.div>

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

      {/* Contact */}
      <section id="contato" className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco para mais informações.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center">
              <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="opacity-90">{capsInfo.address}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center">
              <FaPhone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="opacity-90">{capsInfo.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center">
              <FaEnvelope className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="opacity-90">{capsInfo.hours}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre o CAPS</h3>
              <p className="text-gray-300">
                Centro de Atenção Psicossocial de Sobradinho-BA, dedicado ao cuidado e desenvolvimento da saúde mental em nossa comunidade.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-300">
                <li>{capsInfo.phone}</li>
                <li>caps@sobradinho.ba.gov.br</li>
                <li>{capsInfo.address}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Agendamento</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Serviços</a></li>
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
            <p>© 2023 CAPS Sobradinho-BA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;