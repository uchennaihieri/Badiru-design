const filterBtn = [...document.querySelectorAll('.facilities_btn')];
const pro

filterBtn.map(btn => {
    btn.addEventListener('click', e => {
        const currentItem = e.currentTarget.dataset.id;
        if(currentItem === 'first_class') {
            console.log('Yep')
        }
    })
})