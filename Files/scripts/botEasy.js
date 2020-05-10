function easy(){
    botdelay=1
    var trys
    num = parseInt(Math.random()*8+1)
    
    if(p[num].value=="  "){
        p[num].value= "O"
        oPos+=num
        xo=0
        interfaceRefresh()
        verifyWin()
        trys=0
    } else if(trys==5){
            for(i=1;i<9;i++){
                if(p[i].value=="  "){
                    p[num].value= "O"
                    oPos+=num
                    xo=0
                    interfaceRefresh()
                    verifyWin()
                    trys=0
                }
            }
        }
    else{
        trys++
        easy()
    }
}