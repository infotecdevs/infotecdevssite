import { useEffect, useState } from 'react';

const Experience = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const opacityValue = 1 - (scrollPosition / (documentHeight - windowHeight));
      setOpacity(opacityValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative py-14 w-full h-screen overflow-hidden flex flex-col justify-end">
      <div
        className="min-h-screen bg-black opacity-100 absolute inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/images/people.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          width: "100%",
          backgroundSize: 'cover',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <div className='px-[20rem]'>
          <h1 className="text-black text-2xl md:text-5xl font-bold 
          flex text-center justify-center m-12 mt-[-10px] relative z-10">
            Temos a solução perfeita para suas necessidades, independente
            do tamanho do projeto. Vamos Conversar!
          </h1>
          <div className='flex justify-end'>
            <div className="mx-2 md:mx-5 relative z-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
                {/* first col */}
                <div className="bg-white hover:bg-gradient-to-r from-violet-950 to-violet-500 border-spacing-1 p-4 grid place-items-bottom relative z-10">
                  <div className="text-center space-y-3">
                    <h1 className="text-5xl font-bold">+4</h1>
                    <p className="text-xl font-semibold">Anos de Experiência</p>
                  </div>
                </div>
                {/* second col */}
                <div className=" grid grid-rows-2 gap-4 relative z-10">
                  <div className="bg-white text-center p-6">
                    <h1 className="text-3xl font-bold">+15</h1>
                    <p>Landing Pages</p>
                  </div>
                  <div className="bg-white text-center p-6">
                    <h1 className="text-3xl font-bold">+20</h1>
                    <p>Projetos Completos</p>
                  </div>
                </div>
                {/* Third col */}
                <div className="grid grid-rows-2 gap-4 relative z-10">
                  <div className="bg-white text-center p-6">
                    <h1 className="text-3xl font-bold">1</h1>
                    <p>Objetivo: Sua empresa Vendendo mais todos os dias</p>
                  </div>
                  <div className="bg-white text-center p-6">
                    <h1 className="text-3xl font-bold">+100</h1>
                    <p>Cliques transformados em sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
