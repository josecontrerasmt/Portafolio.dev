const Tools = ({item}) => {
  return (
    <div className="bg-[#1e1f1f] text-[14px] py-1.5 px-3.5 rounded-md flex items-center gap-2">
      <img
        src={item.icon}
        alt={`Herramienta - ${item.text}}`}
        className={`w-4 object-cover ${item.black && "bg-white p-0.5 rounded-sm"}`}
      />
      {item.nombre}
    </div>
  );
};

export default Tools;
