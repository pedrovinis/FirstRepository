function impossible(){
    botdelay=1
    var num = parseInt(Math.random()*8+1)
    console.log(num)
    if(oPos.length+oPos.length==0){
        num = parseInt(Math.random()*8+1)
        switch (num){
            case 1:
                num = 1
                break
            case 2:
                num = 1
                break
            case 3:
                num = 3
                break
            case 4:
                num = 3
                break
            case 5:
                num = 9
                break
            case 6:
                num = 3
                break
            case 7:
                num = 7
                break
            case 8:
                num = 7
                break
            case 9:
                num = 9
                break
        }
    }
    if(xPos.length==1&&oPos==0){
        random = Math.ceil(Math.random() *4)

        if(xPos==1||xPos==3||xPos==7||xPos==9){
            num=5
        }
        else if(xPos==2||xPos==4||xPos==5||xPos==6||xPos==8){
            if(xPos==2){
                if(random>2){
                    num = 1
                    }
                else{
                    num = 3
                }
            }
            if(xPos==4){
                if(random>2){
                    num = 1
                }
                else{
                    num = 7
                }
            }
            if(xPos==5){
                if(random==1){
                    num = 1
                }
                else if(random==2){
                    num = 3
                }
                else if(random==3){
                    num = 7
                }
                else if(random==4){
                    num = 9
                }
            }
            if(xPos==6){
                if(random>2){
                    num = 3
                }
                else{
                    num = 9 
                }
            }
            if(xPos==8){
                if(random>2){
                    num = 7
                }
                else{
                    num = 9
                }
            }
        }
    }
    
    if(xPos.length==2){
        if(xPos.search(1)>=0&&xPos.search(9)>=0){
            num = 4
        }
        else if(xPos.search(3)>=0&&xPos.search(7)>=0){
            num = 6
        }
        if(xPos.search(2)>=0||xPos.search(4)>=0||xPos.search(6)>=0||xPos.search(8)>=0&&p[5].value==~"  "){
            num = 5
        }
    }
        
    if(xPos.length==3){
        if(xPos.search(1)>=0&&xPos.search(9)>=0&&xPos.search(6)>=0){
            num = 3
        }
        if(xPos.search(3)>=0&&xPos.search(7)>=0&&xPos.search(4)>=0){
            num = 1
        }
    }

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
    console.log(num)
    if(p[num].value=="  "){
        p[num].value= "O"
        oPos+=num
        xo=0
        interfaceRefresh()
        verifyWin()
    }
    else{
        impossible()
    }
}