let root = document.getElementById("root"); 
let body = document.getElementsByTagName("body")[0];
let header = document.createElement("div");
	header.className = "header";
let title = document.createElement("h2");
	title.innerHTML = "My Shopping List";
let input = document.createElement("input");
	input.id = "task";
	input.placeholder = "Enter Task...";
let addBtn = document.createElement("span");
	addBtn.id = "addBtn";
	addBtn.innerHTML = "Add";
let clearBtn = document.createElement("span");
	clearBtn.id = "clearBtn";
	clearBtn.innerHTML = "Clear";
let listContainer = document.createElement("ul");

	root.append(header);
	header.append(title);
	header.append(input);
	header.append(addBtn);
	header.append(clearBtn);
	root.append(listContainer);


addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", deleteAll);

body.addEventListener("keydown", function(event){
	if(event.keyCode == 13){
		addTask();
	}
	if(event.keyCode == 27){
		clearBtn.click();
	}
});

function addTask() {
	let text = input.value.trim();
	if(text == ""){
		return;
	}
	let item = buildItem(text);
	listContainer.append(item);
	input.value = "";
	input.focus();
	addAction(item);

}

function deleteAll(){
	if(listContainer.childNodes.length != 0 && confirm("Are youy sure?")){
	for (let i = listContainer.childNodes.length - 1; i >= 0 ; i--) {
			listContainer.childNodes[i].remove();
	}
	}
	
}

function addAction(item) {
	let checkbox = item.childNodes[0];
	let text = item.childNodes[1];
	let close = item.childNodes[2];

	close.addEventListener("click", function () {
		item.remove();
	})

	checkbox.addEventListener("click", function () {
		if(checkbox.checked ===false){
			text.style.textDecoration = "";
		}else text.style.textDecoration = "line-through";

		
	})

}

function buildItem(text) {
	let box = document.createElement("li");
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	let item = document.createElement("span");
	item.innerHTML = text;
	let close = document.createElement("span");
	close.className = "close";
	close.innerHTML = "x";

	box.append(checkbox);
	box.append(item);
	box.append(close);

	return box;
}