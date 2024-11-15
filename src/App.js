// import "./App.css";
import { useState, useEffect } from "react";
// import IssueLogo from "./logos/IssiuLogo";
import Lable from "./logos/Lable";
// import NewFeature from "./logos/NewFeature";
import PersonLogo from "./logos/PersonLogo";
import LableTag from "./compos/LabalsTag";
import NewTask from "./compos/NewTask";
import Cart from "./compos/Cart";
export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignement, setAssignment] = useState("");
  const [flag, setFlag] = useState(false);
  const [tagList, setTagList] = useState([]);
  // const [taskChecked, setTaskCheked] = useState(false);
  const [cartList, setcartList] = useState(() => {
    // Load cart from localStorage on initial load
    const savedCarts = localStorage.getItem("cartList");
    return savedCarts ? JSON.parse(savedCarts) : [];
  });
  const [taskList, setTaskList] = useState(() => {
    // Load tasks from localStorage on initial load
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);
  const toggleLabelTag = function (e, item, flag) {
    let lable = [];

    if (!e.target.classList.contains(item.name)) {
      e.target.classList.add(item.name);
      lable = [...tagList, item];
    } else {
      e.target.classList.remove(item.name);
      lable = tagList.filter((tag) => tag.id !== item.id);
    }
    // if (e.target.classList.contains(item.name)) flag = true;
    // else flag = false;
    // let lable = flag
    //   ? [...tagList, item]
    //   : tagList.filter((tag) => tag.id !== item.id);
    setTagList(lable);
    console.log(tagList);
  };

  const clear = function () {
    localStorage.clear();
    setTitle("");
    setDescription("");
    setAssignment("");
    setTagList([]);
    setFlag(false);
    setTaskList([]);
    localStorage.removeItem(taskList);
  };

  const addTask = () => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, // Unique ID
      name: "", // Default empty name
      completed: false, // Default incomplete
    };
    setTaskList([...taskList, newTask]);
    console.log(taskList);
  };

  const handleTaskPush = (id, value) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, name: value } : task
    );
    localStorage.clear();
    setTaskList(updatedTasks);
  };
  const handleCreateCart = function () {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const formattedDate = `${date.getDate()}th ${months[date.getMonth() + 1]}`;
    console.log(formattedDate);
    const newCart = {
      id: cartList.length ? cartList[cartList.length - 1].id + 1 : 1,
      tags: tagList,
      name: title,
      description: description,
      tasks: taskList,
      assign: assignement,
      date: formattedDate,
    };
    newCart.name.trim !== "" && newCart.assign.trim() !== ""
      ? setcartList([...cartList, newCart])
      : window.alert("title and assign must be fill");
    console.log(cartList);
    console.log(newCart.name);
    console.log(assignement);
    clear();
  };

  const lableList = [
    { name: "Design", bg: " bg-[#F7D4FF]", textColor: "text-[#A300F4]", id: 1 },
    {
      name: "Development",
      bg: "bg-[#D1FADF]",
      textColor: "text-[#12B76A]",
      id: 2,
    },
    {
      name: "Product",
      bg: "bg-[#DFDAFF]",
      textColor: "text-[#3D24F6]",
      id: 3,
    },
    {
      name: "Marketing",
      bg: "bg-[#FFDFDF]",
      textColor: "text-[#FF1616]",
      id: 4,
    },
    {
      name: "Business",
      bg: "bg-[#D1FAF7]",
      textColor: "text-[#00DBC2]",
      id: 5,
    },
    {
      name: "Operation",
      bg: "bg-[#FAFAD1]",
      textColor: "text-[#EBBC00]",
      id: 6,
      classn: "",
    },
  ];
  return (
    <div className="App  flex flex-col bg-[#F2F4F7]  w-full h-full md:flex-row justify-center  ">
      <Nav
        clear={clear}
        handleCreateCart={handleCreateCart}
        handleTaskPush={handleTaskPush}
        addTask={addTask}
        toggleLabelTag={toggleLabelTag}
        taskList={taskList}
        setTaskList={setTaskList}
        cartList={cartList}
        setcartList={setcartList}
        tagList={tagList}
        setTagList={setTagList}
        flag={flag}
        setFlag={setFlag}
        assignement={assignement}
        setAssignment={setAssignment}
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
        lableList={lableList}
      />
      <Section cartList={cartList} />
    </div>
  );
}
export function Nav({
  clear,
  handleCreateCart,
  handleTaskPush,
  addTask,
  toggleLabelTag,
  taskList,
  setTaskList,
  flag,
  assignement,
  setAssignment,
  description,
  setDescription,
  title,
  setTitle,
  lableList,
}) {
  // const handlenewfeatur = function () {
  //   console.log("click");
  // };
  return (
    <nav className=" flex  justify-center items-center   md:h-full w-[366px] bg-[#fff]   md:w-1/4 bg-yellow-700 font-poppins font-bold">
      <div className="container p-[24px] md:m-0  h-full  flex w-11/12  flex-col ">
        <div className="flex flex-col gap-4 ">
          <div className="flex">
            <p className=" text-gray px-1 flex">
              Title <span className="text-[#FF1616]">*</span>
            </p>
            <input
              type="text"
              name="title"
              id="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-none w-[70%] focus:outline-none  "
            />
          </div>
          <textarea
            placeholder="Descripton"
            className="w-full h-[150px] p-3.5
            resize-none bg-[#F2F4F7] rounded-lg  border-none focus:outline-none font-medium"
            rows={20}
            value={description}
            name="description-area"
            id="description-area"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="container w-full flex grow flex-col gap-6">
          <NewTask
            setTaskList={setTaskList}
            taskList={taskList}
            addTask={addTask}
            // handlenewfeatur={handlenewfeatur}
            handleTaskPush={handleTaskPush}
          />
          <div className="Lable flex flex-col w-full   ">
            <div className="Lable-Header py-3 flex gap-2 ">
              {<Lable />} <p className="text-black">Lable </p>
            </div>
            {
              <LableTag
                toggleLabelTag={toggleLabelTag}
                flag={flag}
                tagArr={lableList}
                justrender={false}
              />
            }
          </div>

          <div className=" Person-Asiggns  flex flex-col">
            <div className="Person-Header py-3 flex gap-2 ">
              {<PersonLogo />}{" "}
              <p className="text-black">
                Assignee<span className="text-[#FF1616]">*</span>{" "}
              </p>
            </div>
            <div className="Person-List UL-- flex flex-col items-center justify-center w-full">
              <div className="Person-Items LI-- w-full  ml-1 font-medium  flex gap-2 items-center justify-start text-[#2B2D31] ">
                <input
                  type="radio"
                  id="p1"
                  name="p1"
                  value="taha"
                  checked={assignement === "taha"}
                  onChange={(e) => setAssignment(e.target.value)}
                  className="w-[18px] h-[18px]  "
                />
                <label htmlFor="p1">Taha Hosseinpour</label>
              </div>
              <div className="Person-Items LI-- w-full  ml-1 font-medium  flex gap-2 items-center justify-start text-[#2B2D31] ">
                <input
                  type="radio"
                  id="p2"
                  name="p2"
                  value="hossein"
                  checked={assignement === "hossein"}
                  onChange={(e) => setAssignment(e.target.value)}
                  className="w-[18px] h-[18px]  "
                />
                <label htmlFor="p2">S.h Mostafavi</label>
              </div>
              <div className="Person-Items LI-- w-full  ml-1 font-medium  flex gap-2 items-center justify-start text-[#2B2D31] ">
                <input
                  type="radio"
                  id="p3"
                  name="p3"
                  value="milad"
                  checked={assignement === "milad"}
                  onChange={(e) => setAssignment(e.target.value)}
                  className="w-[18px] h-[18px]  "
                />
                <label htmlFor="p3">Milad Mirzaei</label>
              </div>
            </div>
          </div>
        </div>
        <div className="BTN-NAV flex gap-3  mt-[61px] md:mt-[213px] w-full ">
          <button
            onClick={clear}
            className="CLEAR-ALL py-3 px-4 shrink rounded-lg bg-[#FFFFFF] text-[#FF1616] h-fit w-fit font-medium border "
          >
            Clear All
          </button>
          <button
            onClick={handleCreateCart}
            className="CLEAR-ALL py-3 grow rounded-lg  bg-[#000] text-[#fff]  h-fit w-fit font-medium border "
            type="submit"
          >
            Create Card
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Section({ cartList }) {
  return (
    <section className="container p-10  w-full">
      <div className="container-lists--   ">
        <Cart cartList={cartList} />
      </div>
    </section>
  );
}
