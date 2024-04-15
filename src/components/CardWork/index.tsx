import React from "react";

type Props = {
  link: string;
  urlImage: string;
  name: string;
  short: string;
  description: string;
};

const CardWork = ({ link, urlImage, name, short, description }: Props) => {
  return (
    <div className='rounded-lg h-[436px] flex flex-col bg-white overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-80 hover:opacity-100 transition-all group'>
      <a href={link}>
        <div className="w-full h-48 overflow-hidden" >
          <img
            width={380}
            height={200}
            src={urlImage}
            alt="Thumbnail do projeto"
            className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
          />
        </div>
        <div className='flex-1 flex flex-col p-8 '>
          <span className='font-medium text-gray-800 group-hover:text-violet-500 transition-all'>
            {short}
          </span>
          <span className='mt-2 text-gray-800 line-clamp-4 '>
            {name}
          </span>
          <span className='text-gray-800 text-sm font-medium block mt-[30px] truncate group-hover:text-violet-500'>
            {description}
          </span>
        </div>

      </a>
    </div>



  );
};

export default CardWork;

