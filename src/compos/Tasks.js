<div className="Task-List UL-- flex flex-col items-center justify-center w-full">
  <div className="Task-items LI-- w-11/12   flex gap-2 align-baseline ">
    <input
      type="checkbox"
      id="task1"
      name="task1"
      value="Bike"
      className="w-[18px] h-[18px] m-0.5"
    />
    <input
      type="text"
      placeholder="Create an app"
      className="border-none  text-[#414141] text-sm focus:outline-none font-medium"
    />
  </div>
</div>;

export default function Tasks() {
  return (
    <ul className="Task-List UL-- flex flex-col items-center justify-center w-full">
      <li className="Task-items LI-- w-11/12   flex gap-2 align-baseline ">
        <input
          type="checkbox"
          id="task1"
          name="task1"
          value="Bike"
          className="w-[18px] h-[18px] m-0.5"
        />
        <input
          type="text"
          placeholder="Create an app"
          className="border-none  text-[#414141] text-sm focus:outline-none font-medium"
        />
      </li>
    </ul>
  );
}
