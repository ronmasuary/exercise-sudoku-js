
///////////////////////////////////////////////////////////////////////////////////
function chooseBoard(){
    const boards = [[[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]],
    
    [[8,2,7,1,5,4,3,9,6],
    [9,6,5,3,2,7,1,4,8],
    [3,4,1,6,8,9,7,5,2],
    [5,9,3,4,6,8,2,7,1],
    [4,7,2,5,1,3,6,8,9],
    [6,1,8,9,7,2,4,3,5],
    [7,8,6,2,3,5,9,1,4],
    [1,5,4,7,9,6,8,2,3],
    [2,3,9,8,4,1,5,6,7]],
    
    [[7,3,5,6,1,4,8,9,2],
    [8,4,2,9,7,3,5,6,1],
    [9,6,1,2,8,5,3,7,4],
    [2,8,6,3,4,9,1,5,7],
    [4,1,3,8,5,7,9,2,6],
    [5,7,9,1,2,6,4,3,8],
    [1,5,7,4,9,2,6,8,3],
    [6,9,4,7,3,8,2,1,5],
    [3,2,8,5,6,1,7,4,9]],
    
    [[9,1,5,7,2,3,4,6,8],
    [7,6,3,8,9,4,5,2,1],
    [2,4,8,5,1,6,7,9,3],
    [4,8,2,6,7,5,3,1,9],
    [1,5,9,3,8,2,6,7,4],
    [6,3,7,9,4,1,2,8,5],
    [5,9,1,2,3,7,8,4,6],
    [8,2,6,4,5,9,1,3,7],
    [3,7,4,1,6,8,9,5,2]],
    
    [[7,3,6,4,5,2,9,8,1],
    [1,9,8,6,3,7,4,5,2],
    [4,2,5,9,8,1,3,7,6],
    [3,6,4,5,2,8,1,9,7],
    [9,5,2,7,1,4,6,3,8],
    [8,1,7,3,9,6,2,4,5],
    [2,8,9,1,7,3,5,6,4],
    [6,7,3,2,4,5,8,1,9],
    [5,4,1,8,6,9,7,2,3]],
    
    [[2,9,5,7,4,3,8,6,1],
    [4,3,1,8,6,5,9,2,7],
    [8,7,6,1,9,2,5,4,3],
    [3,8,7,4,5,9,2,1,6],
    [6,1,2,3,8,7,4,9,5],
    [5,4,9,2,1,6,7,3,8],
    [7,6,3,5,2,4,1,8,9],
    [9,2,8,6,7,1,3,5,4],
    [1,5,4,9,3,8,6,7,2]],
    
    [[1,5,2,4,8,9,3,7,6],
    [7,3,9,2,5,6,8,4,1],
    [4,6,8,3,7,1,2,9,5],
    [3,8,7,1,2,4,6,5,9],
    [5,9,1,7,6,3,4,2,8],
    [2,4,6,8,9,5,7,1,3],
    [9,1,4,6,3,7,5,8,2],
    [6,2,5,9,4,8,1,3,7],
    [8,7,3,5,1,2,9,6,4]],
    
    [[4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9]],
    
    [[2,4,8,3,9,5,7,1,6],
    [5,7,1,6,2,8,3,4,9],
    [9,3,6,7,4,1,5,8,2],
    [6,8,2,5,3,9,1,7,4],
    [3,5,9,1,7,4,6,2,8],
    [7,1,4,8,6,2,9,5,3],
    [8,6,3,4,1,7,2,9,5],
    [1,9,5,2,8,6,4,3,7],
    [4,2,7,9,5,3,8,6,1]],
    
    [[1,5,4,8,7,3,2,9,6],
    [3,8,6,5,9,2,7,1,4],
    [7,2,9,6,4,1,8,3,5],
    [8,6,3,7,2,5,1,4,9],
    [9,7,5,3,1,4,6,2,8],
    [4,1,2,9,6,8,3,5,7],
    [6,3,1,4,5,7,9,8,2],
    [5,9,8,2,3,6,4,7,1],
    [2,4,7,1,8,9,5,6,3]],
    ];
        
    let randIndexBoard = Math.floor(Math.random()*boards.length);
    let playBoard = [];


    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
     playBoard[rowIndex] = [];
    }
    
    
    for(let row = 0;row<9;row++){
            for(let col = 0 ; col <9;col++){
                playBoard[row][col]= boards[randIndexBoard][row][col] ;
            }
        }
  


        let tempBoard=boards[randIndexBoard]; 


}
/////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////
function start(difficultyLevel){
  
  
// לולאה לביטול משבצות חסומות מהמשחק הקודם
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            document.getElementById('t' + row + col).disabled = false;
        }
    }
    for (let i =0; i<difficultyLevel; i++){
        let randRow=Math.floor(Math.random()*(9));
        let randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]="";                    
    }
    let n=0;
    while (n<difficultyLevel){
        for(let row = 0; row<9; row++){
            for(let col = 0; col<9; col++){
                if (playBoard[row][col]==""){
                    n++;
                }
            }    
        }
        let randRow=Math.floor(Math.random()*(9));
       let randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]=""; 



    } 


// מכניס את הערך מהלוח אל הטבלה
    for(let row = 0;row<9;row++){
        for(let col = 0 ; col <9;col++){
            document.getElementById('t'+row+col).value = playBoard[row][col];
        }
    }  
// חסימת משבצות שאינן ריקות
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++){
            if (document.getElementById('t' + row + col).value != ""){
                document.getElementById('t' + row + col).disabled = true;   
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////









//////////////////////////////////////////////////////////////////////
// בטענית האתר, הצג מסך פתיחה
function loadSite() {
    document.getElementById("login").style.display = "block";
}
////////////////////////////////////////////////////////////////////





let username = "abcd";
let password = 1234;
///////////////////////////////////////////////////////////////////////
// בלחיצה על כניסה,במידה והכל נכון יעלם מסך כניסה ויוצג מסך בחירה
function enter() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (pass == password && user == username) {
        document.getElementById("login").style.display = "none";
        document.getElementById("difficulty").style.display = "block";
    }
    if (pass != password) {
        document.getElementById("wrongPassword").style.display = "block";
    }
    if (user != username) {
        document.getElementById("wrongUsername").style.display = "block";
    }
    if (pass == password) {
        document.getElementById("wrongPassword").style.display = "none";
    }
    if (user == username) {
        document.getElementById("wrongUsername").style.display = "none";
    }
}

////////////////////////////////////////////////////////////////////////









////////////////////////////////////////////////////////////////////////
// בבחירת רמת קושי, נעלם מסך הבחירה ורצות הפונקציות להשמת הלוח בטבלה
function difficulty1() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard();
    start(20);
    let level = 1;
}
function difficulty2() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard();
    start(40);
    let level = 2;
}
function difficulty3() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard();
    start(60)  ; 
    let level = 3
}

///////////////////////////////////////////////////////////////////////////










/////////////////////////////////////////////////////////////////////////////
// בלחיצה עלל שוב יעלם הלוח הקודם ויבחר לוח חדש באותה רמת קושי
function again(){
  let level;
  
    if(level=1){
        difficulty1();
    }
    else if(level=2){
        difficulty2();
    }
    else if(level=3){
        difficulty3();
    }
}
////////////////////////////////////////////////////////////////////////////////










///////////////////////////////////////////////////////////////////////////////
function finish(){
    for(let row = 0;row<9;row++){
        for(let col = 0 ; col <9;col++){
            if (playBoard[row][col]!== tempBoard[row][col]){
                return false;
            }
            return true;
            
        }
    }

}
//////////////////////////////////////////////////////////////////////////////
   
























/*
let playBoard = [];
let ans =[];

function chooseBoard(){        
    const boards = [[[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]],
    
    [[8,2,7,1,5,4,3,9,6],
    [9,6,5,3,2,7,1,4,8],
    [3,4,1,6,8,9,7,5,2],
    [5,9,3,4,6,8,2,7,1],
    [4,7,2,5,1,3,6,8,9],
    [6,1,8,9,7,2,4,3,5],
    [7,8,6,2,3,5,9,1,4],
    [1,5,4,7,9,6,8,2,3],
    [2,3,9,8,4,1,5,6,7]],
    
    [[7,3,5,6,1,4,8,9,2],
    [8,4,2,9,7,3,5,6,1],
    [9,6,1,2,8,5,3,7,4],
    [2,8,6,3,4,9,1,5,7],
    [4,1,3,8,5,7,9,2,6],
    [5,7,9,1,2,6,4,3,8],
    [1,5,7,4,9,2,6,8,3],
    [6,9,4,7,3,8,2,1,5],
    [3,2,8,5,6,1,7,4,9]],
    
    [[9,1,5,7,2,3,4,6,8],
    [7,6,3,8,9,4,5,2,1],
    [2,4,8,5,1,6,7,9,3],
    [4,8,2,6,7,5,3,1,9],
    [1,5,9,3,8,2,6,7,4],
    [6,3,7,9,4,1,2,8,5],
    [5,9,1,2,3,7,8,4,6],
    [8,2,6,4,5,9,1,3,7],
    [3,7,4,1,6,8,9,5,2]],
    
    [[7,3,6,4,5,2,9,8,1],
    [1,9,8,6,3,7,4,5,2],
    [4,2,5,9,8,1,3,7,6],
    [3,6,4,5,2,8,1,9,7],
    [9,5,2,7,1,4,6,3,8],
    [8,1,7,3,9,6,2,4,5],
    [2,8,9,1,7,3,5,6,4],
    [6,7,3,2,4,5,8,1,9],
    [5,4,1,8,6,9,7,2,3]],
    
    [[2,9,5,7,4,3,8,6,1],
    [4,3,1,8,6,5,9,2,7],
    [8,7,6,1,9,2,5,4,3],
    [3,8,7,4,5,9,2,1,6],
    [6,1,2,3,8,7,4,9,5],
    [5,4,9,2,1,6,7,3,8],
    [7,6,3,5,2,4,1,8,9],
    [9,2,8,6,7,1,3,5,4],
    [1,5,4,9,3,8,6,7,2]],
    
    [[1,5,2,4,8,9,3,7,6],
    [7,3,9,2,5,6,8,4,1],
    [4,6,8,3,7,1,2,9,5],
    [3,8,7,1,2,4,6,5,9],
    [5,9,1,7,6,3,4,2,8],
    [2,4,6,8,9,5,7,1,3],
    [9,1,4,6,3,7,5,8,2],
    [6,2,5,9,4,8,1,3,7],
    [8,7,3,5,1,2,9,6,4]],
    
    [[4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9]],
    
    [[2,4,8,3,9,5,7,1,6],
    [5,7,1,6,2,8,3,4,9],
    [9,3,6,7,4,1,5,8,2],
    [6,8,2,5,3,9,1,7,4],
    [3,5,9,1,7,4,6,2,8],
    [7,1,4,8,6,2,9,5,3],
    [8,6,3,4,1,7,2,9,5],
    [1,9,5,2,8,6,4,3,7],
    [4,2,7,9,5,3,8,6,1]],
    
    [[1,5,4,8,7,3,2,9,6],
    [3,8,6,5,9,2,7,1,4],
    [7,2,9,6,4,1,8,3,5],
    [8,6,3,7,2,5,1,4,9],
    [9,7,5,3,1,4,6,2,8],
    [4,1,2,9,6,8,3,5,7],
    [6,3,1,4,5,7,9,8,2],
    [5,9,8,2,3,6,4,7,1],
    [2,4,7,1,8,9,5,6,3]],
    ];
    
    let randBoard = Math.floor(Math.random()*boards.length);
    playBoard = boards[randBoard]
    ans = boards[randBoard]

}
function start(difficultyLevel){
// לולאה לביטול משבצות חסומות מהמשחק הקודם
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            document.getElementById('t' + row + col).disabled = false;
        }
    }
    for (let i =0; i<difficultyLevel; i++){
        let randRow=Math.floor(Math.random()*(9));
        let randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]="";                    
    }
    let n=0;
    while (n<difficultyLevel){
        for(let row = 0; row<9; row++){
            for(let col = 0; col<9; col++){
                if (playBoard[row][col]==""){
                    n++;
                }
            }    
        }
        randRow=Math.floor(Math.random()*(9));
        randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]=""; 
    }  
// מכניס את הערך מהלוח אל הטבלה
    for(let row = 0;row<9;row++){
        for(let col = 0 ; col <9;col++){
            document.getElementById('t'+row+col).value = playBoard[row][col];
        }
    }  
// חסימת משבצות שאינן ריקות
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++){
            if (document.getElementById('t' + row + col).value != ""){
                document.getElementById('t' + row + col).disabled = true;   
            }
        }
    }
}
// בטענית האתר, הצג מסך פתיחה
function loadSite() {
    document.getElementById("login").style.display = "block";
}

let username = "abcd";
let password = 1234;
// בלחיצה על כניסה,במידה והכל נכון יעלם מסך כניסה ויוצג מסך בחירה
function enter() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (pass == password && user == username) {
        document.getElementById("login").style.display = "none";
        document.getElementById("difficulty").style.display = "block";
    }
    if (pass != password) {
        document.getElementById("wrongPassword").style.display = "block"
    }
    if (user != username) {
        document.getElementById("wrongUsername").style.display = "block"
    }
    if (pass == password) {
        document.getElementById("wrongPassword").style.display = "none"
    }
    if (user == username) {
        document.getElementById("wrongUsername").style.display = "none"
    }
}
// בבחירת רמת קושי, נעלם מסך הבחירה ורצות הפונקציות להשמת הלוח בטבלה
function difficulty1() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(20)
    let level = 1;
}
function difficulty2() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(40)
    let level = 2;
}
function difficulty3() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(60)   
    let level = 3
}
// בלחיצה עלל שוב יעלם הלוח הקודם ויבחר לוח חדש באותה רמת קושי
function again(){
    if(level=1){
        difficulty1();
    }
    else if(level=2){
        difficulty2();
    }
    else if(level=3){
        difficulty3();
    }
}
function finish(){
    let resboard=[];
    let row0=[];
    for (let row = 0; row < 1; row++) {
        for (let col = 0; col < 9; col++) {
            let addrow0 = document.getElementById('t' + row + col).value;
            row0.push(addrow0);
                          
        }
    }
    resboard.push(row0);
    let row1=[];
    for (let row = 1; row < 2; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow1 = document.getElementById('t' + row + col).value;
                row1.push(addrow1);
                              
        }
    }
    resboard.push(row1);
    let row2=[];
    for (let row = 2; row < 3; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow2 = document.getElementById('t' + row + col).value;
                row2.push(addrow2);
                              
        }
    }
    resboard.push(row2);
    let row3=[];
    for (let row = 3; row < 4; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow3 = document.getElementById('t' + row + col).value;
                row3.push(addrow3);
                              
        }
    }
    resboard.push(row3);
    let row4=[];
    for (let row = 4; row < 5; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow4 = document.getElementById('t' + row + col).value;
                row4.push(addrow4);
                              
        }
    }
    resboard.push(row4);
    let row5=[];
    for (let row = 5; row < 6; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow5 = document.getElementById('t' + row + col).value;
                row5.push(addrow5);
                              
        }
    }
    resboard.push(row5);
    let row6=[];
    for (let row = 6; row < 7; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow6 = document.getElementById('t' + row + col).value;
                row6.push(addrow6);
                              
        }
    }
    resboard.push(row6);
    let row7=[];
    for (let row = 7; row < 8; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow7 = document.getElementById('t' + row + col).value;
                row7.push(addrow7);
                              
        }
    }
    resboard.push(row7);
    let row8=[];
    for (let row = 8; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
                let addrow8 = document.getElementById('t' + row + col).value;
                row8.push(addrow8);
                              
        }
    }
    resboard.push(row8);    
  
    
    if (resboard!== ans){
        alert("not quite right")
            console.log(ans);
    }
        
    else {
        if (confirm("congratulations\nwould you like to play in different difficulty?")) {
            document.getElementById("difficulty").style.display = "block";
        }
        else {
            for(let row = 0;row<9;row++){
                for(let col = 0 ; col <9;col++){
                    if (document.getElementById('t'+row+col).disabled = false) {
                        document.getElementById('t'+row+col).value = "";
                    }
                }
            }
        }
    }    
}
















function chooseBoard(){
    const boards = [[[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]],
    
    [[8,2,7,1,5,4,3,9,6],
    [9,6,5,3,2,7,1,4,8],
    [3,4,1,6,8,9,7,5,2],
    [5,9,3,4,6,8,2,7,1],
    [4,7,2,5,1,3,6,8,9],
    [6,1,8,9,7,2,4,3,5],
    [7,8,6,2,3,5,9,1,4],
    [1,5,4,7,9,6,8,2,3],
    [2,3,9,8,4,1,5,6,7]],
    
    [[7,3,5,6,1,4,8,9,2],
    [8,4,2,9,7,3,5,6,1],
    [9,6,1,2,8,5,3,7,4],
    [2,8,6,3,4,9,1,5,7],
    [4,1,3,8,5,7,9,2,6],
    [5,7,9,1,2,6,4,3,8],
    [1,5,7,4,9,2,6,8,3],
    [6,9,4,7,3,8,2,1,5],
    [3,2,8,5,6,1,7,4,9]],
    
    [[9,1,5,7,2,3,4,6,8],
    [7,6,3,8,9,4,5,2,1],
    [2,4,8,5,1,6,7,9,3],
    [4,8,2,6,7,5,3,1,9],
    [1,5,9,3,8,2,6,7,4],
    [6,3,7,9,4,1,2,8,5],
    [5,9,1,2,3,7,8,4,6],
    [8,2,6,4,5,9,1,3,7],
    [3,7,4,1,6,8,9,5,2]],
    
    [[7,3,6,4,5,2,9,8,1],
    [1,9,8,6,3,7,4,5,2],
    [4,2,5,9,8,1,3,7,6],
    [3,6,4,5,2,8,1,9,7],
    [9,5,2,7,1,4,6,3,8],
    [8,1,7,3,9,6,2,4,5],
    [2,8,9,1,7,3,5,6,4],
    [6,7,3,2,4,5,8,1,9],
    [5,4,1,8,6,9,7,2,3]],
    
    [[2,9,5,7,4,3,8,6,1],
    [4,3,1,8,6,5,9,2,7],
    [8,7,6,1,9,2,5,4,3],
    [3,8,7,4,5,9,2,1,6],
    [6,1,2,3,8,7,4,9,5],
    [5,4,9,2,1,6,7,3,8],
    [7,6,3,5,2,4,1,8,9],
    [9,2,8,6,7,1,3,5,4],
    [1,5,4,9,3,8,6,7,2]],
    
    [[1,5,2,4,8,9,3,7,6],
    [7,3,9,2,5,6,8,4,1],
    [4,6,8,3,7,1,2,9,5],
    [3,8,7,1,2,4,6,5,9],
    [5,9,1,7,6,3,4,2,8],
    [2,4,6,8,9,5,7,1,3],
    [9,1,4,6,3,7,5,8,2],
    [6,2,5,9,4,8,1,3,7],
    [8,7,3,5,1,2,9,6,4]],
    
    [[4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9]],
    
    [[2,4,8,3,9,5,7,1,6],
    [5,7,1,6,2,8,3,4,9],
    [9,3,6,7,4,1,5,8,2],
    [6,8,2,5,3,9,1,7,4],
    [3,5,9,1,7,4,6,2,8],
    [7,1,4,8,6,2,9,5,3],
    [8,6,3,4,1,7,2,9,5],
    [1,9,5,2,8,6,4,3,7],
    [4,2,7,9,5,3,8,6,1]],
    
    [[1,5,4,8,7,3,2,9,6],
    [3,8,6,5,9,2,7,1,4],
    [7,2,9,6,4,1,8,3,5],
    [8,6,3,7,2,5,1,4,9],
    [9,7,5,3,1,4,6,2,8],
    [4,1,2,9,6,8,3,5,7],
    [6,3,1,4,5,7,9,8,2],
    [5,9,8,2,3,6,4,7,1],
    [2,4,7,1,8,9,5,6,3]],
    ];
        
    let randIndexBoard = Math.floor(Math.random()*boards.length);
    let playBoard = []


    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
     playBoard[rowIndex] = []
    }
    
    
    for(let row = 0;row<9;row++){
            for(let col = 0 ; col <9;col++){
                playBoard[row][col]= boards[randIndexBoard][row][col] ;
            }
        }

        let tempBoard=boards[randIndexBoard]; 

function start(difficultyLevel){
// לולאה לביטול משבצות חסומות מהמשחק הקודם
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            document.getElementById('t' + row + col).disabled = false;
        }
    }
    for (let i =0; i<difficultyLevel; i++){
        let randRow=Math.floor(Math.random()*(9));
        let randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]="";                    
    }
    let n=0;
    while (n<difficultyLevel){
        for(let row = 0; row<9; row++){
            for(let col = 0; col<9; col++){
                if (playBoard[row][col]==""){
                    n++;
                }
            }    
        }
        randRow=Math.floor(Math.random()*(9));
        randCol=Math.floor(Math.random()*(9));
        playBoard[randRow][randCol]=""; 



    } 

// מכניס את הערך מהלוח אל הטבלה
    for(let row = 0;row<9;row++){
        for(let col = 0 ; col <9;col++){
            document.getElementById('t'+row+col).value = playBoard[row][col];
        }
    }  
// חסימת משבצות שאינן ריקות
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++){
            if (document.getElementById('t' + row + col).value != ""){
                document.getElementById('t' + row + col).disabled = true;   
            }
        }
    }
}



}
// בטענית האתר, הצג מסך פתיחה
function loadSite() {
    document.getElementById("login").style.display = "block";
}

let username = "abcd";
let password = 1234;
// בלחיצה על כניסה,במידה והכל נכון יעלם מסך כניסה ויוצג מסך בחירה
function enter() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (pass == password && user == username) {
        document.getElementById("login").style.display = "none";
        document.getElementById("difficulty").style.display = "block";
    }
    if (pass != password) {
        document.getElementById("wrongPassword").style.display = "block"
    }
    if (user != username) {
        document.getElementById("wrongUsername").style.display = "block"
    }
    if (pass == password) {
        document.getElementById("wrongPassword").style.display = "none"
    }
    if (user == username) {
        document.getElementById("wrongUsername").style.display = "none"
    }
}
// בבחירת רמת קושי, נעלם מסך הבחירה ורצות הפונקציות להשמת הלוח בטבלה
function difficulty1() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(20)
    let level = 1;
}
function difficulty2() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(40)
    let level = 2;
}
function difficulty3() {
    document.getElementById("difficulty").style.display = "none";
    chooseBoard()
    start(60)   
    let level = 3
}
// בלחיצה עלל שוב יעלם הלוח הקודם ויבחר לוח חדש באותה רמת קושי
function again(){
    if(level=1){
        difficulty1();
    }
    else if(level=2){
        difficulty2();
    }
    else if(level=3){
        difficulty3();
    }
}

debugger;
function finish(){
    for(let row = 0;row<9;row++){
        for(let col = 0 ; col <9;col++){
            if (playBoard[row][col]!== tempBoard[row][col]){
                return false;
            }
            return true;
            
        }
    }

}
   
*/