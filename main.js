var allButtons = $('#buttons>span')
console.log(allButtons[0]);
for(let i = 0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',(x)=>{
        let index = $(x.currentTarget).index()
        let p = index * (-200)
        $('#images').css({
            transform: 'translateX('+ p +'px)'
        })
        allButtons.eq(index).addClass('selected')
            .siblings('.selected').removeClass('selected')

    })
}


