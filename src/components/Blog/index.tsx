import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-violet-950 md:mb-12 lg:text-4xl">
            Ultimas do Blog
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div className='rounded-lg h-[436px] flex flex-col bg-white overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-80 hover:opacity-100 transition-all group'>
              <div className="w-full h-48 overflow-hidden" >
                <img
                  width={380}
                  height={200}
                  src="/images/smart-home.jpg"
                  alt="Thumbnail do projeto"
                  className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
                />
              </div>

              <div className='flex-1 flex flex-col p-8 '>
                <strong className='font-medium text-gray-800 group-hover:text-violet-500 transition-all'>
                  Site Profissional
                </strong>
                <p className='mt-2 text-gray-800 line-clamp-4 '>
                  O Que é CTR do Google Ads?: O Segredo da Performance Ideal
                </p>
                <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate group-hover:text-violet-500'>
                  Leia Mais ..
                </span>
              </div>
            </div>

            <div className='rounded-lg h-[436px] flex flex-col bg-white overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-70 hover:opacity-100 transition-all group'>
              <div className="w-full h-48 overflow-hidden" >
                <img
                  width={380}
                  height={200}
                  src="/images/googleads.jpg"
                  alt="Thumbnail do projeto"
                  className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
                />
              </div>

              <div className='flex-1 flex flex-col p-8 '>
                <strong className='font-medium text-gray-800 group-hover:text-violet-500 transition-all'>
                  Marketing
                </strong>
                <p className='mt-2 text-gray-800 line-clamp-4 '>
                  Como Anunciar no Google Ads e Obter Sucesso Agora
                </p>
                <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate group-hover:text-violet-500'>
                  Leia Mais ..
                </span>
              </div>
            </div>

            <div className='rounded-lg h-[436px] flex flex-col bg-gray-white overflow-hidden border-2 border-gray-800
             hover:border-violet-500 opacity-70 hover:opacity-100 transition-all group'>
              <div className="w-full h-48 overflow-hidden" >
                <img
                  width={380}
                  height={200}
                  src="/images/digital-marketing.jpg"
                  alt="Thumbnail do projeto"
                  className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
                />
              </div>

              <div className='flex-1 flex flex-col p-8 '>
                <strong className='font-medium text-gray-800 group-hover:text-violet-500 transition-all'>
                  E-Commerce
                </strong>
                <p className='mt-2 text-gray-800 line-clamp-4 '>
                  Como Escrever o Texto “Quem somos” para Loja Virtual
                </p>
                <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate group-hover:text-violet-500'>
                  Leia Mais ..
                </span>
              </div>
            </div>

            <div className='rounded-lg h-[436px] flex flex-col bg-white overflow-hidden border-2 border-gray-800
             hover:border-violet-500 opacity-70 hover:opacity-100 transition-all group'>
              <div className="w-full h-48 overflow-hidden" >
                <img
                  width={380}
                  height={200}
                  src="/images/people.jpg"
                  alt="Thumbnail do projeto"
                  className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
                />
              </div>

              <div className='flex-1 flex flex-col p-8 '>
                <strong className='font-medium text-gray-800 group-hover:text-violet-500 transition-all'>
                  Landing Page
                </strong>
                <p className='mt-2 text-gray-800 line-clamp-4 '>
                  Como atrair muito mais clientes com uma landing page dinâmica e fluida.
                </p>
                <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate group-hover:text-violet-500'>
                  Leia Mais ..
                </span>
              </div>
            </div>








          </div>
        </div >
      </div >
    </>
  )
}

export default Blog