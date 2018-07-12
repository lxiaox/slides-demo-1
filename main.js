var allButtons = $('#buttons>span')
for(let i = 0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',(x)=>{
        let index = $(x.currentTarget).index()
        n = index  //使自动播放按照新的顺序
        slide(index)  //slide()里改变按钮颜色是通过n，这行写下面
        //解决按钮与自动播放的时间冲突
        window.clearInterval(timerId)
        timerId = setTimer()

    })
}
//温故：解决按钮与自动播放的时间冲突不能在点击事件添加kill/setTimer，
//因为setTimer里就是触发点击事件，会造成自动播放无法停止以及n多bug
var size = allButtons.length
var n = 0

var timerId = setTimer()


$('.window').on('mouseenter',() => {
    window.clearInterval(timerId)

})
$('.window').on('mouseleave',() => {
    n += 1
    slide(n % size)//使光标移走后图片立即切换
    timerId = setTimer()
})

/****************************************/
function setTimer(){
    return setInterval(()=>{//先等3s再执行n+=1，n%size=1、2、0、1
        n += 1
        slide(n % size)
    },3000)
}
function killTimer(){
    window.clearInterval(timerId)
}
function activeButton($button){
    $button.addClass('selected')
        .siblings('.selected').removeClass('selected')
}
function slide(i){
    let p = i * (-200)
    $('#images').css({
        transform: 'translateX('+ p +'px)'
    })
    activeButton(allButtons.eq(n % size))
}





