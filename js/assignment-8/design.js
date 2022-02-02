var wrapper = document.createElement("div");
wrapper.style.backgroundColor = "#296ca8";
wrapper.style.width = "97%";
wrapper.style.padding = "20px";

wrapper.style.backgroundAttachment = "fixed";
document.body.appendChild(wrapper);

var heading = document.createElement("h1");
heading.innerHTML = "My Blog"
heading.style.textAlign = "center";
heading.style.fontSize = "40px";
// heading.style.margin = "0 auto";
heading.style.color = "white";
wrapper.appendChild(heading);

var input = document.createElement("input");
input.placeholder = "Filter Post...";
input.setAttribute("id", "filter");
input.style.padding = "15px";
input.style.width = "60%";
input.style.marginLeft = "15%";

wrapper.appendChild(input);

var blogContainer = document.createElement("div");
blogContainer.setAttribute("id", "blogcontainer");
blogContainer.style.marginBottom = "20px";
wrapper.appendChild(blogContainer);

var loader = document.createElement("div");
loader.className = "loader";
loader.setAttribute("id", "loader");
wrapper.appendChild(loader);

var circle = document.createElement("div");
circle.classList.add('circle');
loader.appendChild(circle);

var circle1 = document.createElement("div");
circle1.classList.add('circle');
loader.appendChild(circle1);

var circle2 = document.createElement("div");
circle2.classList.add('circle');
loader.appendChild(circle2);


