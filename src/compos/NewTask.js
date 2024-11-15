// import React, { useEffect } from "react";
import IssueLogo from "../logos/IssiuLogo";
import NewFeature from "../logos/NewFeature";

export default function NewTask({
  setTaskList,
  taskList,
  addTask,
  handleTaskPush,
}) {
  return (
    <div className="subTask flex flex-col w-full">
      <div className="subTask-header py-3 flex justify-center items-center">
        <div className="flex w-11/12 justify-between items-center">
          <div className="Logo flex gap-2">
            <div>{<IssueLogo />}</div>
            <p className="text-black">Subtask</p>
          </div>
          <div className="NewFeature">
            <button onClick={addTask} className="w-[20px] h-[20px]">
              <NewFeature />
            </button>
          </div>
        </div>
      </div>
      <div className="Task-List UL-- flex flex-col items-center justify-center w-full">
        {taskList.map((task) => (
          <div
            className="Task-items LI-- w-11/12 flex gap-2 align-baseline"
            key={task.id}
          >
            <input
              type="checkbox"
              id={`check${task.id}`}
              name={`check${task.id}`}
              className="w-[18px] h-[18px] m-0.5"
              checked={task.completed}
              onChange={() =>
                setTaskList(
                  taskList.map((t) =>
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }
            />
            <input
              type="text"
              placeholder="Enter task name"
              value={task.name}
              onChange={(e) => handleTaskPush(task.id, e.target.value)}
              className="border-none text-[#414141] text-sm focus:outline-none font-medium"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

{
  // const [taskName, setTaskName] = useState("");
  // let taskList = [{ name: taskName, id: 1 }];
  // const [taskList, setTaskList] = useState(() => {
  //   // Load tasks from localStorage on initial load
  //   const savedTasks = localStorage.getItem("taskList");
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // });
  // Update localStorage whenever taskList changes
  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(taskList));
  // }, [taskList]);
  // const addTask = () => {
  //   const newTask = {
  //     id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, // Unique ID
  //     name: "", // Default empty name
  //     completed: false, // Default incomplete
  //   };
  //   setTaskList([...taskList, newTask]);
  // };
  // const handleTaskPush = (id, value) => {
  //   const updatedTasks = taskList.map((task) =>
  //     task.id === id ? { ...task, name: value } : task
  //   );
  //   setTaskList(updatedTasks);
  // };
  /* <div className="Task-items LI-- w-11/12   flex gap-2 align-baseline ">
        <input
          type="checkbox"
          id="task1"
          name="task1"
          className="w-[18px] h-[18px] m-0.5"
          />
        <input
          type="text"
          placeholder="Create an app"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border-none  text-[#414141] text-sm focus:outline-none font-medium"
          />
          </div> */
  /* 
          ///////////////////////////////////////////////////////////
          <div className="subTask flex flex-col w-full ">
            <div className=" subTask-header  py-3 flex justify-center items-center ">
              <div className="flex w-11/12 justify-between items-center ">
                <div className="Logo  flex gap-2 ">
                  <div>{<IssueLogo />}</div>
                  <p className="text-black">Subtask</p>
                </div>
                <div className="NewFeature">
                  <div className="w-[20px] h-[20px]" onClick={handlenewfeatur}>
                    <NewFeature />
                  </div>
                </div>
              </div>
            </div>
            <NewTask />
          </div> */
}
