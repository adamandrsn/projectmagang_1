import { useEffect } from 'react';

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const scrollPosition = window.scrollY;
        // Asersi bahwa elemen memiliki properti offsetTop
        const elementTop = (element as HTMLElement).offsetTop;
        // Asersi bahwa elemen memiliki atribut 'data-speed' dan mengonversi nilainya menjadi angka
        const parallaxSpeed = parseFloat(
          (element as HTMLElement).getAttribute('data-speed') || '0',
        );

        // Asersi bahwa elemen memiliki properti style
        // eslint-disable-next-line no-param-reassign
        (element as HTMLElement).style.transform =
          `translateY(${(scrollPosition - elementTop) * parallaxSpeed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ParallaxEffect;
