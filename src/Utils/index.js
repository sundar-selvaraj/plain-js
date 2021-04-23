export const onDragStart = (event, id) => {
    console.log('onDragStart', event, event.target.id);
    event.dataTransfer.setData("taskName", event.target.id);
};

export const onDragOver = (event) => {
    event.preventDefault();
};

export const onDragEnter = (event) => {
    event.target.style.boxShadow = "1px 1px 3px green";
};

export const onDragLeave = (event) => {
    event.target.style.boxShadow = "none";
};

export const onDrop = (event) => {
    event.preventDefault();
    const element = event.dataTransfer.getData("taskName");
    console.log('onDrop', element);
    // var div = document.getElementById(element);
    //     // div.style.backgroundColor = "red";
    //     div.draggable = true;
    //     // div.style.height = "10px";
    //     // div.style.width = "10px";
    //     // div.innerHTML = element;
    //     div.ondragstart = onDragStart;
    //     div.ondragover = onDragOver;
    // event.target.appendChild(div);
};