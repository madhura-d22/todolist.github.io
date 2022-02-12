function Tasks()
{
    var list = document.createElement("div");
    list.className = "list";
    document.getElementById("items").appendChild(list);
    var addTask = document.createElement("p");
    addTask.className = "item";
    addTask.innerHTML = document.getElementById("Text").value;
    list.appendChild(addTask);

    //Crossing button
    var crossBtn = document.createElement("button");
    crossBtn.innerHTML = "Cut";
    crossBtn.className = "crossBtn";
    list.appendChild(crossBtn);
    var cross = document.getElementsByClassName("crossBtn");
    var j;
    for(j=0;j<cross.length;j++)
    {
        cross[j].onclick = function()
        {
            var crossDiv = this.parentElement;
            var childDiv = crossDiv.children[0];
            childDiv.style.textDecoration = "line-through";
        }
    }

    //Closing button
    var delButton = document.createElement("button");
    delButton.innerHTML = "Done"; //HTML code for cross mark
    delButton.className = "delButton";
    list.appendChild(delButton);
    var close = document.getElementsByClassName("delButton");
    var i;
    for(i=0;i<close.length;i++)
    {
        close[i].onclick = function()
        {
            var closeDiv = this.parentElement;
            closeDiv.style.display = "none";
        }
    }
}