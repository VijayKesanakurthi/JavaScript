
   window.onload=()=>{
    const inp=document.querySelector("#in");
    const butt=document.querySelector("#butt");
    const lis=document.querySelector(".lis")

    

    const sty="border"
    const but_cls="material-icons cursor-pointer border bg-red-200 rounded hover:bg-red-100 hover:scale-110 mr-2 p-1 transition duration-500 ease-in-out transform ".trim().split(" ")
    const li_text="flex-1 mr-2".split(" ")
    const li="flex flex-row min-w-max bg-red-200 items-center m-2 p-2 rounded-lg".split(" ");

    butt.addEventListener("click",addlist);
    function addlist(e){
        e.preventDefault()
        var value=inp.value;
        if(inp.value.trim()==="")
            return 
        value=value[0].toUpperCase()+value.substr(1)
        const a=document.createElement("li");
        const del=document.createElement("span");
        const pin=document.createElement("span");

        const txt=document.createElement("p");

        txt.innerHTML=value;
        li_text.forEach((sty)=> {
            txt.classList.add(sty);
        });
        
        a.classList.add(sty);

        del.innerHTML="delete";
        pin.innerHTML="task_alt";

        del.classList.add("hover:text-red-500")
        pin.classList.add("hover:text-green-500")

        but_cls.forEach((sty)=>{     
        del.classList.add(sty);
        pin.classList.add(sty);
        })
        li.forEach((sty)=>{
        a.classList.add(sty)})

        a.appendChild(txt)
        a.appendChild(pin)
        
        a.appendChild(del)
        // a.innerHTML=pin;
        lis.appendChild(a)
        inp.value=""
        console.log(but_cls)

    }

    lis.addEventListener("click",detect);
    var ev;
    function detect(e){
        ev=e.target
        if ("delete"===ev.innerHTML.trim()){
            setTimeout(
                ()=>{lis.removeChild(ev.parentNode)},500)
        ev.parentNode.classList.add("animate-ping")
        
        


    }
    if ("task_alt"===ev.innerHTML.trim()){
        ev.previousSibling.classList.toggle("line-through")
        ev.parentNode.classList.toggle("bg-opacity-50")
        ev.parentNode.classList.toggle("text-black")


        ev.classList.toggle("text-green-500")

      
    }

    }

}

