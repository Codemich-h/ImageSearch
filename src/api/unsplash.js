import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yNkN1xCSjSxR3RBRTejJf08vSilqYTXvzHfet8h5CZs'
    }
})
