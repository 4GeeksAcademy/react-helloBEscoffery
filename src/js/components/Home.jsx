import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDoList,setToDoList] = useState(["Clean Room", "Mop Kitchen", "Walk the Dog", "Dust"]);
	const nextTask = ()=>{
		setInputValue([toDoList])
	}
	
	return (
		<div className="text-center">
         <input onChange={ (event)=> { 
			const newTask = event.target.value
			// console.log(event.target.value)
			setInputValue(newTask)} //hook
		 } />
		<button onClick={()=> nextTask()}>
			Add task to list
		</button>

		 <ul>
			{/* <li>Take out the trash</li> */}
			{toDoList.map(
				(item, index)=> {
					return(
							<li key = {index + "chore"}>{item}</li>
				)
			}
			)}
		 </ul>
		 {inputValue}
		</div>
	);
};

export default Home;