import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import productService from "../services/product.services";

function EditProduct(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState("");
    const navigate = useNavigate();

    async function prodById(){
        const res = await productService.getProductById(id)
        setName(res.data.name)
        setDescription(res.data.description)
        setPrice(res.data.price)
    }

    useEffect(()=>{
        prodById()
    },[])

    async function submitProduct(e){
        e.preventDefault(); 
        const p ={"_id":id  ,"name":name,"price":price,"description":description}
        await productService.updateProduct(p)
        navigate("/products");
    }

    const{id} = useParams()
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h1 className="text-center mt-4 mb-4">Modifier un produit </h1>
                <form onSubmit={(e)=>submitProduct(e)} >
                    <label>Name</label>
                   
                    <Form.Control value={name} type="text" id="name" onChange={(e)=>setName(e.target.value)} />
                    <label>Price</label>
                   
                    <Form.Control value={price} type="text" id="price" onChange={(e)=>setPrice(e.target.value)} />
                    <label>Description</label>
                    
                    <Form.Control value={description} type="text" id="description" onChange={(e)=>setDescription(e.target.value)}  />
                    <div className="d-grid gap-2">
                        <Button variant="info" type="submit" className="text-center mt-4 mb-4">
                            Modifier le produit 
                        </Button>
                    </div>
                   
                </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct