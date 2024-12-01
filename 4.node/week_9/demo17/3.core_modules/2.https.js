import https from 'https'

// https.get("https://fakestoreapi.com/products/1",(req, res)=> {
//     console.log('req:', req)
//     console.log('res:', res)
// })

// * Asynchronous example
const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Error:', error)
    }
}

fetchData();