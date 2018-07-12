var allButtons = $('#buttons>span')
console.log(allButtons[0]);
for(let i = 0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',(x)=>{
        let index = $(x.currentTarget).index()
        let p = index * (-200)
        $('#images').css({
            transform: 'translateX('+ p +'px)'
        })
        n = index //使定时切换按照新的顺序
        allButtons.eq(index).addClass('selected')
            .siblings('.selected').removeClass('selected')

    })
}

var size = allButtons.length
var n = 0

var timerId = setInterval(()=>{//先等3s再执行n+=1，n%size=1、2、0、1
    n += 1
    allButtons.eq(n%size).trigger('click')
},3000)

$('.window').on('mouseenter',() => {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',() => {
    n += 1
    allButtons.eq(n%size).trigger('click')//光标移走后图片立即切换效果，不管停留在该图片的时间大于小于3s
    timerId = setInterval(()=>{
        n += 1
        allButtons.eq(n%size).trigger('click')
    },3000)
})





