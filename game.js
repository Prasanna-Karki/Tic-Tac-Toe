let BoxVal = document.querySelectorAll(".button");
let player = 0;
let para=document.getElementById("para");
let Gamesakkyo=false;
let Restart=document.getElementById("new");

BoxVal.forEach((box) => {
    box.addEventListener("click",()=>{
        if(Gamesakkyo){
            return;
        }
        if (player == 0) {
            if(box.innerText==""){
                box.innerText = "X"; 
                player=1-player;
            }
        } else {
            if(box.innerText==""){
            box.innerText = "O";
            player--;
        }}
        check();
    });
});
let Winpattern=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
[0,1,2]
];
function check(){
    for(let pattern of Winpattern)
    {
        let pattern1=BoxVal[pattern[0]].innerText;
        let pattern2=BoxVal[pattern[1]].innerText;
        let pattern3=BoxVal[pattern[2]].innerText;
        if(pattern1!=""&&pattern2!=""&&pattern3!="")
        {
            if(pattern1==pattern2&&pattern2==pattern3){
            para.innerText=`Congratulation ${pattern1} has won`;
            Gamesakkyo=true;
            return;

            }
        }
    }

}
function Newgame(){
    BoxVal.forEach((value)=>{
        value.innerText="";
        para.innerText="";
        player=0;
        Gamesakkyo=false;
    })
}
