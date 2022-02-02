var loader = document.getElementById("loader");
var filter = document.getElementById("filter");
var show = document.querySelector(".show");
var blogContainer = document.getElementById("blogcontainer");

let i =0;
let initialNumber = 5;


function showBlogs(element) {
    var blog = document.createElement("div");
    blog.className = "blog";
    blog.style = `
    background-color:#4992d3;
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
    border-radius: 3px;
    padding: 20px;
    margin: 40px 50px;
    width:80%;
    `;
 blogContainer.appendChild(blog);

 var blogId = document.createElement("span");
 blogId.innerHTML = ++i;
 blog.appendChild(blogId);
 blogId.style=`
    background-color: #fff;
    color: #4992d3;
    padding:20px;
    border-radius: 50%;
    position: relative;
    top:-20px;
    left:-45px;
    `

    var blogTitle = document.createElement("h2");
    blogTitle.className='blogTitle'
    blogTitle.innerHTML = element.title;
    blog.append(blogTitle);

    var blogContent = document.createElement("p");
    blogContent.className='blogContent'
    blogContent.innerHTML = element.content;
    blog.append(blogContent);
}



blogs.slice(0, initialNumber).forEach((element) =>{
    showBlogs(element);
});



function scrollWindow(e){
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 5 ){
       showLoading();
    }
}

function showLoading(){
    initialNumber += 5;
    loader.classList.add = "show";
    setTimeout(() =>{
        loader.classList.remove = "show";
        setTimeout(() => {
            blogs.slice(0, initialNumber).forEach((element)=>{
            showBlogs(element);
            });
        },500)
    }, 1000);
}

function filterBlogs(e) {
  const inputValue = e.target.value;
  const blogContainer1 = element.querySelectorAll(".blog");

  blogContainer1.forEach(element=>{
      const blogTitle1 = element.querySelector(".blogTitle");
      const blogContent1 = element.querySelector('.blogContent');

      if(blogTitle1.contains(inputValue) || blogContainer1.contains(inputValue)){
  console.log("available");
      }else {
          console.log("not Available");
      }
  })
}

window.addEventListener("scroll", (e)=>{
    scrollWindow(e);
})