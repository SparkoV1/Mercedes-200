const forms = document.querySelectorAll('.universal_form')
const formURL = 'https://jsonplaceholder.typicode.com/posts'

forms.forEach(form =>{
    form.addEventListener('submit', (e) => {
        let data = {}
        let emptyField = false

        e.preventDefault()

        for (let {name, value} of form.elements) {
            if (name) {
                value = value.trim();
                data[name] = value
                if (value === '') emptyField = true
            }
        }
        if (emptyField) {
            alert('Заполнены не все поля формы! ')
        } else {
            fetch(formURL, {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (response.status === 200 || response.status === 201) {
                        return response.json()
                    } else {
                        throw new Error(response.message)
                    }
                })
                .then(() => {
                    alert('Данные успешно сохранены!')
                    form.reset()

                })
                .catch(error => {
                    alert('Произошла ошибка, статус ' + error.message)
                })
        }


    })
})



// form.addEventListener('submit', (e) => {
//     let data = {}
//     let emptyField = false
//
//     e.preventDefault()
//
//     for (let {name, value} of form.elements) {
//         if (name) {
//             value = value.trim();
//             data[name] = value
//             if (value === '') emptyField = true
//         }
//     }
//     if (emptyField) {
//         alert('Заполнены не все поля формы! ')
//     } else {
//         fetch(formURL, {
//             method: 'POST',
//             body: JSON.stringify(data),
//         })
//             .then(response => {
//                 if (response.status === 200 || response.status === 201) {
//                     return response.json()
//                 } else {
//                     throw new Error(response.message)
//                 }
//             })
//             .then(() => {
//                 alert('Данные успешно сохранены!')
//                 form.reset()
//             })
//             .catch(error => {
//                 alert('Произошла ошибка, статус ' + error.message)
//             })
//     }
//
//
// })