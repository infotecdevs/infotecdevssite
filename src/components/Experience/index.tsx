
const Experience = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col ">
      <div
        className="min-h-screen bg-red-800 opacity-100 absolute inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/images/time-g.jpg')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,

          backgroundSize: 'cover',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <div className='px-4 sm:px-10 lg:px-[10rem]  pt-20 md:pb-[25rem]'>
          <div className='py-20 '>
            <h1 className="text-2xl text-black bg-gray-100 rounded-3xl p-2 md:text-4xl font-bold 
          flex text-center justify-center m-12  relative z-20 opacity-100 ">
              Temos a solução perfeita para suas necessidades, independente
              do tamanho do projeto. Vamos Conversar!
            </h1>
          </div>
          <div className='flex px-10'>
            <div className=" mx-auto relative  z-10">

              <div className="grid  gap-4 sm:grid-cols-3 md:grid-cols-3 md:mt-20 text-white ">

                <div className="   p-4 grid  relative z-10"
                >
                  <div className="text-center text-black bg-white rounded-3xl p-2">
                    <h1 className=" text-3xl  md:text-5xl font-bold">+4</h1>
                    <p className="text-xl font-semibold">Anos de Experiência</p>
                  </div>
                </div>

                <div className=" grid grid-rows-1 relative z-10">
                  <div className="  text-center text-black bg-white rounded-3xl p-2">
                    <h1 className="text-3xl  md:text-5xl font-bold">+15</h1>
                    <p>Clicks transformados em sucesso</p>
                  </div>
                </div>

                <div className="grid grid-rows-1 pt-4 relative z-10">
                  <div className="  text-center text-black bg-white rounded-3xl p-2">
                    <h1 className="text-3xl  md:text-5xl font-bold">1</h1>
                    <p>Objetivo: Sua empresa Vendendo mais todos os dias</p>
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
