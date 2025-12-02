import { Link } from 'react-router-dom';
import { FirstAidKit, Heart, ShieldCheck } from '@phosphor-icons/react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          <FirstAidKit size={120} weight="fill" className="text-green-600 animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Bem-vindo à <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Farmácia Saúde+</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            Sua saúde e bem-estar são nossa prioridade. Encontre medicamentos, 
            cosméticos e produtos de qualidade com atendimento especializado.
          </p>

          <div className="flex gap-4 mt-8">
            <Link 
              to="/categorias"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              <FirstAidKit size={24} weight="fill" />
              Ver Categorias
            </Link>
            <Link 
              to="/cadastroCategoria"
              className="flex items-center gap-2 bg-transparent border-2 border-green-600 hover:bg-green-50 text-green-700 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-green-600 mb-4 flex justify-center">
              <Heart size={60} weight="fill" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualidade</h3>
            <p className="text-gray-600">Produtos certificados e de alta qualidade para sua saúde</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-teal-600 mb-4 flex justify-center">
              <FirstAidKit size={60} weight="fill" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Variedade</h3>
            <p className="text-gray-600">Amplo catálogo de medicamentos e produtos de saúde</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-cyan-600 mb-4 flex justify-center">
              <ShieldCheck size={60} weight="fill" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Confiança</h3>
            <p className="text-gray-600">Atendimento especializado e compromisso com você</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;