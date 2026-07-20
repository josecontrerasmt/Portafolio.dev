import { useState } from "react";
import Tools from "../tools/Tools";

export default function Trabajo({ data }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="ml-4 bg-white dark:bg-[#121313] rounded-md p-5 shadow-sm shadow-black">
      <div className="absolute w-3 h-3 mt-2 bg-black dark:bg-green-400 rounded-full -inset-s-1.5"></div>
      <div className="flex justify-between gap-2 items-center mb-4 md:mb-2.5">
        <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 dark:text-green-400">
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
        <time className="block text-end text-[13px] md:text-sm font-semibold leading-none text-gray-500">
          {data.fechaInicio}
          <span> - </span>
          {data.fechaFin}
        </time>
      </div>
      <span className="text-[15px] md:text-[17 px] font-semibold block">
        {data.tituloFuncion}
      </span>
      <ol className="flex gap-4 mt-5 w-full justify-center flex-wrap text-[13px] md:text-[14px]">
        {data?.tecnologias?.map((item) => (
          <li key={item.nombre}>
            <Tools textSize={""} item={item} client:load />
          </li>
        ))}
      </ol>
      <div
        className={`md:overflow-y-scroll md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] scrollbar-none grid md:grid-cols-2 transition-all gap-x-5 gap-y-5 md:gap-y-0 rounded-md ${dropdown ? "max-h-350 overflow-auto pointer-events-auto mt-5" : "max-h-0 overflow-hidden pointer-events-none"}`}
      >
        <div>
          <span className="block text-black dark:text-green-400 text-[16px] md:text-[18px]">
            Funciones principales
          </span>
          <ol className="space-y-2 font-normal text-sm mt-3">
            {data.funciones.map((item) => (
              <li
                key={item.text}
                className="bg-[#ededed] dark:bg-[#1c1d1d] text-[14px] font-semibold p-2 rounded-md flex gap-2 items-center"
              >
                <i
                  className={`${item.icon} text-black dark:text-green-500 font-bold dark:font-normal text-[16px]`}
                ></i>
                {item.text}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <span className="block text-black dark:text-green-400 text-[16px] md:text-[18px]">
            Logros destacados
          </span>
          <ol className="space-y-2 font-normal text-sm mt-3">
            {data.logros.map((item) => (
              <li
                key={item.text}
                className="bg-[#ededed] dark:bg-[#1c1d1d] text-[14px] font-semibold p-2 rounded-md flex gap-2 items-center"
              >
                <i
                  className={`${item.icon} text-black dark:text-green-500 font-bold dark:font-normal text-[16px]`}
                ></i>
                {item.text}
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
      <div className={`w-full flex ${dropdown ? "mt-5" : "mt-5 md:mt-2"}`}>
        <button
          onClick={() => setDropdown((prev) => !prev)}
          className={`ml-auto text-gray-400 p-1 rounded-sm flex gap-0.5 items-center dark:hover:bg-[#212121] dark:hover:text-gray-100 transition-all hover:text-black cursor-pointer`}
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
