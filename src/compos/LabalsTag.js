export default function LableTag({ toggleLabelTag, flag, tagArr, justrender }) {
  // const selectedBorderClass = function (item) {
  //   return clsx("selected", true, item.name);
  // };

  return (
    <div className="Lable-body flex flex-wrap w-full gap-2">
      {tagArr.map((item) => {
        return (
          <div
            id={item.id.toString()}
            key={item.id}
            className={`Lable-compo px-3 py-[6px] ${item.bg} inline-block border-[1.4px] border-solid border-[#fff] text-sm font-bold  rounded-[6px] ${item.textColor} `}
            onClick={!justrender ? (e) => toggleLabelTag(e, item, flag) : ""}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
