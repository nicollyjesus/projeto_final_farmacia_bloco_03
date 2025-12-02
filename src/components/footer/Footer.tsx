import { FirstAidKit, GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-teal-700 to-cyan-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <FirstAidKit size={32} weight="fill" />
              <span className="text-xl font-bold">Farmácia Saúde+</span>
            </div>
            <p className="text-sm text-gray-200">Cuidando da sua saúde com qualidade</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <GithubLogo size={32} weight="fill" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-teal-600 text-center text-sm text-gray-200">
          <p>© 2025 Farmácia Saúde+. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;