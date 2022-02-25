var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')

form.addEventListener('submit', function(event){
	event.preventDefault();
	let val = input.value.trim()
	if(val){

	}
}) 


function addTodoElement(todo){
	// {
		// text:
	 	// status
	// }
	// <li>
	// 			<span>Test</span>
	// 			<i class='bx bxs-trash-alt' ></i>
	// 		</li>	
	var li = document.createElement('li')
	li.innerHTML = `
				<span>${todo.text}</span>
				<i class='bx bxs-trash-alt' ></i>
	`
	li.setAtribute('class', 'com')
}