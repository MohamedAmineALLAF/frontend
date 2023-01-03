import http from "./http-common";

async function getAllCategories(){
    return await http.get('/categories');
}


async function addCategory(category){
    return await http.post(`/categories`,category)
}

const categoryService = {getAllCategories,addCategory}
export default categoryService

