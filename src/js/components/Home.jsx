import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	
	const [inputValue, setInputValue] = useState('');
	const [toDoList,setToDoList] = useState(["Clean Room", "Mop Kitchen", "Walk The Dog","Dust"]);
	const nextTask = ()=>{
		setToDoList([inputValue, ...toDoList])
		setInputValue("")
	}
	//                ^ function to save new tasks to list
	
	
	
	const deleteInputValue = (item) => {

		const filteredInputValues = toDoList.filter(
			(inputData) => inputData != item
	)
	console.log("Walk The Dog:",filteredInputValues)
		setToDoList(filteredInputValues)
	}
	return (
		<div className="text-center">
			<h1>To Do List</h1>
         <input value={inputValue}
		 	className="" 
			type="text" 
			placeholder="Add a new task" 
			onChange={ (e) => {
					const newTask = e.target.value
					setInputValue(newTask)
			}

			}
				
		 	onKeyDown = {
				(e) => {
			if (e.key == 'Enter') {
				nextTask();
			}					
				} 
			}
			 />

		 
		<button onClick={()=> nextTask()}>
			Add task
		</button>

		 <ul>
			{/* <li>Take out the trash</li> */}
			{toDoList.map(
				(item, index)=> {
					return(
						<div>
							<li key = {index + "chore"}>{item}</li>
							<span class="text-danger" onClick={() => {
								deleteInputValue(item)
		 					}}>
									X
							 </span>
						</div>
				)	
			 }
			)}
		 </ul>

		</div>
	);
};

export default Home;