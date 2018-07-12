var allButtons = $('#buttons>span')
for(let i = 0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',(x)=>{
        let index = $(x.currentTarget).index()
        let p = index * (-200)
        $('#images').css({
            transform: 'translateX('+ p +'px)'
        })
        activeButton(allButtons.eq(index))
        killTimer() //选中某张图停留时间不够3s，甚至立即移走的bug
        n = index  //使自动播放按照新的顺序
        timerId = setTimer()

    })
}

var size = allButtons.length
var n = 0

var timerId = setTimer()


$('.window').on('mouseenter',() => {
    killTimer()
})
$('.window').on('mouseleave',() => {
    n += 1
    allButtons.eq(n%size).trigger('click')//使光标移走后图片立即切换，不管停留在该图片的时间大于小于3s
    timerId = setTimer()
})

/****************************************/
function setTimer(){
    return setInterval(()=>{//先等3s再执行n+=1，n%size=1、2、0、1
        n += 1
        allButtons.eq(n%size).trigger('click')
    },3000)
}
function killTimer(){
    window.clearInterval(timerId)
}
function activeButton($button){
    $button.addClass('selected')
        .siblings('.selected').removeClass('selected')
}

