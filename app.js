/*
- name : string
- email : string
- address : object (houseNo, street, postalCode)
*/

/* 
- if lang = 'en', 'Hello'
- if lang = 'cn', 'Nei Ho'
*/

var Un1 = {
    name: 'ball',
    email: 'ball@gmail.com',
    address: {
        houseNo: '123/11',
        street: 'Sukumvit',
        postalCode: '111111'
    }
    
    ,

    hot: 'sss'

}

function speak(lang){
    if(lang === undefined || lang === '' || lang.length <2){
        console.log('Unsupport speak')
        return
    }
    if(lang === 'en'){
        console.log('Hello')
    }else if (lang === 'cn'){
        console.log('Nei Ho')
    }else{
        console.log('Sawaddee')
    }
    return // function ต้องมี return เสมอ    
}
