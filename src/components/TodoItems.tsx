import { FaCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import type Todo from "./Todo";

type TodoProp = {
	todo: Todo;
  completedTodo: () => void;
};

const TodoItems = ({todo} : TodoProp) => {
  return (
	<div className='flex item-center my-3 gap-2'>
		<div className="flex flex-1 items-center cursor-pointer">
			<FaCircle size={25} className="text-teal-800"/>
			<p className="text-slate-700 ml-4 text-[17px]">
				{todo.text}</p>
		</div>
		<RiDeleteBin6Line size={24} className="text-teal-800 hover:text-teal-600 cursor-pointer"/>

	</div>
  )
}

export default TodoItems
