//1 pending
//2 Fullfiled
//3 reject
// var promise = new Promise(
//     function(resolve, reject) {
//         // reject()
//         resolve({
//             id:1,
//             name: 'lam huy'
//         })
// })

// promise
//     .then(function(course){
//         console.log(course)

            
//     })

//     .catch(function(){
//         console.log('failure')
   
//     })

//     .finally(function(){
//         console.log('Done')
        
//     })


// template string

// const course1 = "javascript"
// const course2 = `php + ${course1}` 
// console.log(course2)

// const line = `line1 line2
// line3`

// console.log(line)


// var postAPI = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch(postAPI)
//     .then(function(response){
//         return response.json()
//     })

//     .then(function(post){
//         console.log(post)
//     })

//     .catch(function(err){
//         console.log('co loi')
//     })


const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})