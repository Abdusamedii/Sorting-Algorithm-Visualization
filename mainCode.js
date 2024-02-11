let x = [5,4,8,1,7,9,10];
let print = console.log;
const insert = document.getElementById("blockContainer");
let elemeti;
let teksti;
function startSort(){
    x = document.getElementById('arrayInput').value;
    x = x.split(',');
    let arrOfNum = x.map(str => {
        return parseInt(str, 10);
    });
    print(arrOfNum);
    createBoxes(arrOfNum);
    sort(arrOfNum);
}

function createBoxes(y){
    for(let i = 0;i<y.length;i++){
        // print(i);  
        elementi = document.createElement("div");
        elementi.id = "block";
        var h1 = document.createElement('p');
        h1.appendChild(document.createTextNode(x[i]));
        elementi.appendChild(h1);
        insert.appendChild(elementi);                        
    }
}
function removeBoxes(){

    location.reload();
}
 function sort(y){
    var elements = document.getElementById("blockContainer").children;
    selectionSort(y);
    function swap(arr,xp, yp) 
        { 
            var temp = arr[xp]; 
            arr[xp] = arr[yp]; 
            arr[yp] = temp;
            elements.item(yp).innerHTML = arr[yp];
            elements.item(xp).innerHTML = arr[xp]; 

        } 
    
        async function selectionSort(arr) 
            { 
                var i, j, min_idx;
                var oldj = null; 
            
                for (i = 0; i < arr.length - 1; i++) 
                {
                    

                    min_idx = i; 
                    for (j = i + 1; j < arr.length; j++) {
                        setColor(elements.item(i),'red');
                        setColor(elements.item(j),'blue');
                        await delay(500);
                        removeColor(elements.item(i),'red');
                        removeColor(elements.item(j),'blue');
                        if (arr[j] < arr[min_idx]){
                            setColor(elements.item(j),'green');
                            if(oldj != null){
                                removeColor(elements.item(oldj),'green');
                            }
                            min_idx = j;
                            oldj = j; 

                        }

                    
                    }
                    oldj = null;
                    removeColor(elements.item(min_idx),'green');
                    
                    swap(arr,min_idx, i); 
                }
                // print(x); 

            } 
    }
    function setColor(elementiById,color) {        
        elementiById.classList.add(color + 'Background');   
    }
    function removeColor(elementiById,color){
        elementiById.classList.remove(color + 'Background');   

    }
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }