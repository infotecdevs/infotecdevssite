const Experience = () => {
  return (
    <div className="bg-violet-950 text-violet-950 py-14 w-full">
      <h1 className="text-white text-2xl md:text-5xl  font-bold flex text-center justify-center m-12 mt-[-10px]">Temos a solução perfeita para suas necessidades, independente do tamanho do projeto.Vamos Conversar!</h1>
      <div className="mx-2 md:mx-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
          {/* first col */}
          <div className="bg-white border-spacing-1 p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">+4</h1>
              <p className="text-xl font-semibold">Anos de Experiência</p>
            </div>
          </div>
          {/* second col */}
          <div className=" grid grid-rows-2 gap-4">
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
          <div className="grid grid-rows-2 gap-4">
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
  );
};

export default Experience;
