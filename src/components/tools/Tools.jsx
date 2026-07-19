const Tools = ({ item, textSize = "14px" }) => {
  return (
    <div
      className={`bg-[#ededed] dark:bg-[#1e1f1f] text-[${textSize}] py-1.5 px-3.5 rounded-md flex items-center gap-2`}
    >
      <img
        src={item.icon}
        alt={`Herramienta - ${item.text}}`}
        className={`w-4 object-cover ${item.black && "bg-white p-0.5 rounded-sm"} ${item.light ? "bg-[#151515] p-0.5 rounded-sm dark:bg-transparent dark:p-0" : ""}`}
      />
      {item.nombre}
    </div>
  );
};

export default Tools;
