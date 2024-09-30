
const Experience = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col ">
      <div className=''>
        <h1 className="text-2xl text-violet-950 rounded-3xl p-2 md:text-4xl font-bold 
          flex text-center justify-center m-12   opacity-100 ">
          Temos a solução perfeita para suas necessidades, independente
          do tamanho do projeto. Vamos Conversar!
        </h1>
      </div>
      <div className='flex px-10'>
        <div className=" mx-auto">

          <div className="grid  gap-2 sm:grid-cols-3 md:grid-cols-3 md:mt-20 text-white ">
            <div className="text-center text-violet-950 bg-white rounded-3xl p-2 shadow-lg">
              <h1 className=" text-3xl  md:text-5xl font-bold">+4</h1>
              <p className="text-xl font-semibold">Anos de Experiência</p>
            </div>

            <div className="text-center text-violet-950 bg-white rounded-3xl p-2 shadow-lg">
              <h1 className="text-3xl  md:text-5xl font-bold">+1</h1>
              <p className="text-xl font-semibold">Clicks transformados em sucesso</p>
            </div>

            <div className="  text-center text-violet-950 bg-white rounded-3xl p-2 shadow-lg">
              <h1 className="text-3xl  md:text-5xl font-bold">1</h1>
              <p className="text-xl font-semibold">Objetivo: Sua empresa Vendendo mais todos os dias</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
