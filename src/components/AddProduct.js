import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import productService from "../services/product.services";
import categoryService from "../services/categoryServices";
import ProductList from "./Productlist";

function AddProduct(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState("");
    const [categories,setCategories] = useState([]);
    const [selectedCat,setSelectedCat] = useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        getCategories()

    },[])

    async function getCategories(){
        const result = await categoryService.getAllCategories()
        setCategories(result.data)
    }

    function submitProduct(){
        const p ={"name":name,"price":price,"description":description,"category":categories[selectedCat]}
        productService.addProduct(p)
        navigate("/products");
    }

    return(

        <div className="container">
            <div className="row">
                
                <div className="col-6 offset-3">
                    <h1 className="text-center mt-4 mb-4" >Ajouter un produit </h1>
                <form onSubmit={submitProduct} >
                    <label>Name</label>
                   
                    <Form.Control type="text" id="name" onChange={(e)=>setName(e.target.value)} className="mb-2"/>
                    <label>Price</label>
                   
                    <Form.Control type="text" id="price" onChange={(e)=>setPrice(e.target.value)} className="mb-2" />
                    <label>Description</label>
                    
                    <Form.Control type="text" id="description" onChange={(e)=>setDescription(e.target.value)} className="mb-2" />
                    
                    <label>Categories</label>
                        <Form.Select onChange={(e)=>setSelectedCat(e.target.value)}>

                            {categories.map((elem,index)=>{
                                return <option value={index} key={index}>{elem.name}</option>
                            })}
                        </Form.Select>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="text-center mt-4 mb-4">
                            Ajouter un produit
                        </Button>
                    </div>

                    
                </form>
                </div>
            </div>
        </div>

        
    )
}

export default AddProduct