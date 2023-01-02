import http from "./http-common";

async function getAllProducts(){
    return await http.get('/products');
}

async function getProductById(id){
    return await http.get(`/product/${id}`);
}

async function deleteProductById(id){
    return await http.delete(`/product/${id}`);
}

async function updateProduct(product){
    return await http.put(`/product/${product._id}`,product);
}

async function addProduct(product){
    return await http.post(`/products`,product)
}

const productService = {getAllProducts,getProductById,deleteProductById,addProduct,updateProduct}
export default productService

