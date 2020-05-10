function medium(){
    botdelay=1
    var num = parseInt(Math.random()*8+1)
    var trys

    for(i=0; i<winPos.length; i++){
        if(xPos.search(winPos[i].slice(0,1))>=0&&xPos.search(winPos[i].slice(1,2))>=0&&p[winPos[i].slice(2,3)].value=="  "){
            num = winPos[i].slice(2,3)
            console.log("Condition 1: "+num+"    WinPos:"+i)
        } 
        else if(xPos.search(winPos[i].slice(0,1))>=0&&xPos.search(winPos[i].slice(2,3))>=0&&p[winPos[i].slice(1,2)].value=="  "){
            num = winPos[i].slice(1,2)
            console.log("Condition 2: "+num+"    WinPos:"+i)
        }
        else if(xPos.search(winPos[i].slice(1,2))>=0&&xPos.search(winPos[i].slice(2,3))>=0&&p[winPos[i].slice(0,1)].value=="  "){
            num = winPos[i].slice(0,1)
            console.log("Condition 3: "+num+"    WinPos:"+i)
        }


        if(oPos.search(winPos[i].slice(0,1))>=0&&oPos.search(winPos[i].slice(1,2))>=0&&p[winPos[i].slice(2,3)].value=="  "){
            num = winPos[i].slice(2,3)
            console.log("Condition 4: "+num+"    WinPos:"+i)
            i=winPos.length
        }
        else if(oPos.search(winPos[i].slice(0,1))>=0&&oPos.search(winPos[i].slice(2,3))>=0&&p[winPos[i].slice(1,2)].value=="  "){
            num = winPos[i].slice(1,2)
            console.log("Condition 5: "+num+"    WinPos:"+i)
            i=winPos.length
        }
        else if(oPos.search(winPos[i].slice(1,2))>=0&&oPos.search(winPos[i].slice(2,3))>=0&&p[winPos[i].slice(0,1)].value=="  "){
            num = winPos[i].slice(0,1)
            console.log("Condition 6: "+num+"    WinPos:"+i)
            i=winPos.length
        }
    }
    
    
    if(p[num].value=="  "){
        p[num].value= "O"
        oPos+=num
        xo=0
        interfaceRefresh()
        verifyWin()
        trys=0
    } 
    else if(trys==5){
            for(i=1;i<10;i++){
                console.log("i: "+i)
                if(p[i].value=="  "){
                    p[num].value= "O"
                    oPos+=num
                    interfaceRefresh()
                    verifyWin()
                    trys=0
                }
            }
    }
    else{
            trys++
            medium()
        }
 
}