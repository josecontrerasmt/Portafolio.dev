import { useState } from "react";
import Tools from "../tools/Tools";

export default function Trabajo({ data }) {
  const [dropdown, setDropdown] = useState(true);

  return (
    <li className="ml-4 bg-[#121313] rounded-md p-5 shadow-sm shadow-black">
      <div className="absolute w-3 h-3 mt-2 bg-green-500 rounded-full -start-1.5"></div>
      <div className="flex justify-between gap-2 items-center mb-2.5">
        <h3 className="text-[21px] font-semibold text-gray-900 dark:text-green-400">
          {data.titulo}
          {data.empresaLink && (
            <>
              <span> - </span>
              <a
                className="underline max-w-max"
                href={data.empresaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.empresa}
              </a>
            </>
          )}
        </h3>
        <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {data.fechaInicio}
          <span> - </span>
          {data.fechaFin}
        </time>
      </div>
      <span className="text-[16px] font-normal block">
        {data.tituloFuncion}
      </span>
      <ol className="flex gap-4 mt-5 w-full justify-center flex-wrap text-[13px]">
        {data?.tecnologias?.map((item) => (
          <li key={item.nombre}>
            <Tools item={item} client:load />
          </li>
        ))}
      </ol>
      <div
        className={`overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] grid grid-cols-2 transition-all gap-x-5 rounded-md ${dropdown ? "max-h-[800px] overflow-auto pointer-events-auto mt-5" : "max-h-0 overflow-hidden pointer-events-none"}`}
      >
        <div>
          <span className="block text-green-400 text-[17px]">Funciones principales</span>
          <ol className="space-y-2 font-normal text-sm mt-3">
            {data.funciones.map((text) => (
              <li
                key={text}
                className="bg-[#1c1d1d] text-[15px] p-2 rounded-md flex gap-2 items-center"
              >
                <i className="bx bx-code-alt text-green-500"></i>
                {text}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <span className="block text-green-400 text-[17px]">Logros destacados</span>
          <ol className="space-y-2 font-normal text-sm mt-3">
            {data.logros.map((text) => (
              <li
                key={text}
                className="bg-[#1c1d1d] text-[15px] p-2 rounded-md flex gap-2 items-center"
              >
                <i className="bx bx-code-alt text-green-500"></i>
                {text}
              </li>
            ))}
          </ol>
        </div>
        {/* <div className="col-span-full flex justify-center w-full gap-5 mt-5">
          <img
            className="h-40 md:h-40 rounded-md object-cover"
            src="/ExperienciaIMGs/Img1.png"
            alt="Experiencia Realidario"
          />
          <img
            className="h-40 md:h-40 rounded-md object-cover"
            src="/ExperienciaIMGs/Img1.png"
            alt="Experiencia Realidario"
          />
        </div> */}
      </div>
      <div className={`w-full flex ${dropdown ? "mt-5" : "mt-2"}`}>
        <button
          onClick={() => setDropdown((prev) => !prev)}
          className={`ml-auto opacity-70 p-1 rounded-sm flex gap-0.5 items-center hover:bg-[#212121] hover:opacity-100 transition-all text-white`}
        >
          {dropdown ? (
            <>
              <span className="text-[12px]">Ver menos</span>
              <i className="bx bx-chevron-up"></i>
            </>
          ) : (
            <>
              <span className="text-[12px]">Ver mas</span>
              <i className="bx bx-chevron-down"></i>
            </>
          )}
        </button>
      </div>
    </li>
  );
}
