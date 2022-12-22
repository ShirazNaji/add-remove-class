/////////////////////////////////////////////////////////Q17 EX2 //////////////////////////////////////////////////////////////////////////////

let addel1 = document.querySelector(".classes-to-add");
let remov1 = document.querySelector(".classes-to-remove");
let cur1 =  document.querySelector("[title='current']");
let result1 = document.querySelector(".classes-list div");


if(cur1.classList.length === 0){
    result1.innerHTML ="no class to show"
}else {
    result1.innerHTML = cur1.classList;
}



addel1.onblur =function(){
    let transadde = addel1.value.toLowerCase().split(" ");
    
    for(let i=0;i<transadde.length;i++){
        if(cur1.classList.contains(transadde[i])){
            alert("exist");
            addel1.value = '';
        }else{
            cur1.classList.add(transadde[i]);
            addel1.value = '';

        }

    }
    
    if(cur1.classList.length === 0){
            result1.innerHTML ="no class to show"
        }else {
            result1.innerHTML = cur1.classList;
    }

}



remov1.onblur = function(){
    let transremove = remov1.value.toLowerCase().split(" ");
    for(let i=0;i<transremove.length;i++){
            if(cur1.classList.contains(transremove[i])){
                cur1.classList.remove(transremove[i]);
                 remov1.value = '';
            } else {

                cur1.classList.add(transremove[i]);
                remov1.value = '';
            }
}
    if(cur1.classList.length === 0){
        result1.innerHTML ="no class to show"
    }else {
        result1.innerHTML = cur1.classList;
    }

        
}
        