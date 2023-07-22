let body =document.querySelector("body")
let icon = document.querySelector(".links .icon")
let parent = document.querySelector(".header .links")
let span =document.querySelector(".header .links .icon span:nth-child(2)")
document.addEventListener('click', (event) => {
    let ul = document.createElement("ul")
    if (parent.children[1] === undefined) {

        for (let i = 0; i < 4; i++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            li.append(a)
            ul.append(li)
        }
        parent.append(ul)
    
        ul.children[0].firstChild.innerHTML = "Services";
        ul.children[1].firstChild.innerHTML = "Portfolio";
        ul.children[2].firstChild.innerHTML = "About";
        ul.children[3].firstChild.innerHTML = "Contact";
    
        ul.children[0].firstChild.setAttribute("href","#services")
        ul.children[1].firstChild.setAttribute("href","#portfolio")
        ul.children[2].firstChild.setAttribute("href","#about")
        ul.children[3].firstChild.setAttribute("href","#contact")
        span.style.width = "100%";
    }
    else 
    {
        parent.children[1].remove();
        span.style.width = `60%`;
    }
    if (!icon.contains(event.target))
    {
        parent.children[1].remove();
        span.style.width = `60%`;
    }
    console.log(icon.contains(span));
});



