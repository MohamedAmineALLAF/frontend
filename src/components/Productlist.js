import {useEffect, useState} from "react"
import axios from "axios"
import { Button, Table } from 'react-bootstrap';
import productService from "../services/product.services";
import categoryService from "../services/categoryServices";
import { Link } from "react-router-dom";

function ProductList(){
   const [products,setProducts]=useState([])
   const getAllProducts =async () =>{

    try {
        const result =await productService.getAllProducts()
        setProducts(result.data)
    } catch (error) {
        console.log(error);
    }

   }
    useEffect(()=>{
        
        getAllProducts()
        
    },[])

    async function deleteProduct(id){
        await productService.deleteProductById(id);
        console.log(id);
        getAllProducts()
    }

    console.log(products)
    return(

        <div className="container">
            <div className="row mt-8">
                <div className="col-12">
                    <h3 className="text-center mt-4 mb-4">Liste des produits</h3>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        {products.map((elem,i)=>{
                        return <tr key={i} >
                            <td>{i}</td>
                            <td>{elem.name}</td>
                            <td>{elem.price}</td>
                            <td>{elem.description}</td>
                            <td>{elem.category.name}</td>
                            <td><Button onClick={()=>deleteProduct(elem._id)} variant="danger " className="btn-delete" >Supprimer</Button>
                            <Link to={`/product/edit/${elem._id}`} className="btn btn-success" >Editer</Link>
                            </td>
                        </tr>
                        })}  
                    </tbody>
                
            
        </Table>
                </div>
            </div>
        </div>

        
    )

}

export default ProductList;