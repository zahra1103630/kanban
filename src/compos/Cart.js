import LableTag from "./LabalsTag";

export default function Cart({ cartList }) {
  return (
    <div className="container-todo flex flex-col gap-6 ">
      <p className="font-extrabold text-[#000000] text-3xl">TO DO</p>
      {cartList.map((cart) => {
        return (
          <div
            key={cart.id}
            className="Cart-- w-80 gap-4 bg-[#fff] shadow-md rounded-lg flex flex-col p-5 "
          >
            <div className="NameAndAssign  flex flex-col gap-[6px] ">
              <p className="font-bold text-xl text-[#2B2D31]">{cart.name}</p>
              <div className="flex gap-2 items-center  text-[#98A2B3] font-semibold text-sm ">
                <p className="Date ">{cart.date}</p>
                <span className="text-lg font-extrabold ">.</span>
                <p>
                  Assigned to{" "}
                  <span className="text-[#667085]">{cart.assign}</span>
                </p>
              </div>
            </div>
            <div className="Description text-[#98A2B3] font-semibold text-sm">
              {cart.description}
            </div>
            <div className="TaskList flex flex-col">
              {cart.tasks.map((task) => {
                return (
                  <div
                    key={task.id}
                    className="CartTaskItem flex items-center px-2 "
                  >
                    <input
                      type="checkbox"
                      id={`check${task.id}`}
                      name={`check${task.id}`}
                      className="w-[18px] h-[18px] m-[8px]"
                    />
                    <p className="text-[#2B2D31] font-bold text-[16px]">
                      {task.name}
                    </p>
                  </div>
                );
              })}
              <div />
            </div>
            <div className="TagList">
              <LableTag tagArr={cart.tags} justrender={true} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
