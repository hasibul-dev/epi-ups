import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../../image/logo.png';

const scrollToHash = (hash: string) => {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    if (location.hash) {
      setTimeout(() => scrollToHash(location.hash), 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      scrollToHash(hash);
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { hash: '#home', label: 'Home', onClick: handleHomeClick },
    { hash: '#about', label: 'About' },
    { hash: '#products', label: 'Products' },
    { hash: '#solutions', label: 'Solutions' },
    { hash: '#industries', label: 'Industries' },
    { hash: '#projects', label: 'Projects' },
    { hash: '#bangladesh', label: 'Bangladesh' },
    { hash: '#contact', label: 'Contact' },
  ];

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      scrollToHash('#contact');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-[1700px] items-center justify-between rounded-[1.35rem] border px-4 py-3 shadow-[0_20px_60px_rgba(0,27,61,0.12)] backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled ? 'border-[#D8E1EC] bg-white/90' : 'border-[#D8E1EC] bg-white/85'
        }`}
      >
        <a href="/" onClick={handleHomeClick} className="flex items-center gap-3" aria-label="EPI UPS Bangladesh home">
          <img src={logoImage} alt="EPI UPS Bangladesh logo" className="h-11 w-auto object-contain sm:h-12" />
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-[#D8E1EC] bg-[#F5F8FC] px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.hash}
              onClick={link.onClick ? link.onClick : (e) => handleNavClick(e, link.hash)}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-[#111827] transition hover:bg-[#EAF1FB] hover:text-[#004090]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={handleQuoteClick}
            className="inline-flex items-center rounded-xl bg-[#004090] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#004090]/20 transition hover:translate-y-[-1px] hover:bg-[#003a7a]"
          >
            Get a quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D8E1EC] bg-white text-[#111827] md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-[1700px] rounded-[1.4rem] border border-[#D8E1EC] bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.hash}
                onClick={link.onClick ? link.onClick : (e) => handleNavClick(e, link.hash)}
                className="block rounded-xl px-3 py-2.5 text-base font-bold text-[#111827] transition hover:bg-[#EAF1FB] hover:text-[#004090]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#004090] px-4 py-3 text-sm font-semibold text-white"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
