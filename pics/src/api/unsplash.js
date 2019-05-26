import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dd04d3a07a5e378028f446b885295da9d46fcbcdd897220ba82a4485c8ecc601'
    }
})