import { useState } from "react";
// import TodoItems from "./TodoItems";
import { RiCalendarTodoFill } from "react-icons/ri";

import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Todo = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState<Todo[]>([]);

	const handleAdd = () => {
	if (task.trim() === "") return;

	const newTodo: Todo = {
		id: Date.now(),
		text: task,
		completed: false,
	};

	setTasks((prev) => [...prev, newTodo]);
	setTask("");
	};

	const handleComplete = (id: number) => {
		setTasks((prev) =>
			prev.map((todo) => {
				if (todo.id !== id) return todo;

				return {...todo,
					completed: !todo.completed,
				};
			}))
	};

	return (
	<div className="bg-white w-full max-w-md flex flex-col p-7 min-h-100 rounded-xl">
	{/* title */}
		<div className="flex items-center mt-7 gap-2">
		<RiCalendarTodoFill size={35} />
		<h1 className="text-2xl font-semibold">To-Do-List</h1>
	</div>

	{/* input box */}
	<div className="flex items-center mt-3 bg-teal-100 rounded-full h-10">
		<input
			className="bg-transparent outline-none flex-1 h-10 pl-6 pr-2"
			type="text"
			placeholder="Add your task."
			value={task}
			onChange={(e) => setTask(e.target.value)}
		/>
		<button
			onClick={handleAdd}
			className="bg-teal-800 hover:bg-teal-900 text-white w-20 h-full rounded-full cursor-pointer"
		>
			ADD
		</button>
		</div>

	{/* todo list */}
	<div>
		{tasks.map((todo) => {
		// return <TodoItems key={todo.id} todo={todo} completedTodo={() => {}} />;
		return (
			<div className="flex item-center my-3 gap-2">
			  <div className="flex flex-1 items-center cursor-pointer">
				{/* <FaCircle onClick={() => handleComplete(todo.id)} size={25} className="text-teal-800" /> */}
				<div onClick={() => handleComplete(todo.id)}>
					{todo.completed ? (
						<FaCheckCircle size={25} className="text-teal-800" />
					) : (
						<FaCircle size={25} className="text-teal-800" />
					)}
				</div>
				<p className="text-slate-700 ml-4 text-[17px]">{todo.text}</p>
			  </div>
			  <RiDeleteBin6Line
				size={24}
				className="text-teal-800 hover:text-teal-600 cursor-pointer"
			  />
			</div>
		  );
		})}
	  </div>
	</div>
  );
};

export default Todo;
