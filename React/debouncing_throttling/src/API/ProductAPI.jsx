import axois from 'axios';

export let product = async () => {
    let response = await axois.get('https://fakestoreapi.com/products');
    return response.data;
}