import { useState } from "react";
import productService from "../../../services/productService";


function AddProduct() {
  const [data,setData] = useState();
  const [image,setImage] = useState();
  const onChangeHandler =  (e) => {
    setData({
      ...data, 
      [e.target.name] : e.target.value
    });
    console.log(data);
  };
  const onChangeImage=(e)=>{
    e.preventDefault()
    setImage(e.target.files)
  }

  const onSubmitHandler = (e) =>{
    const formdata=new FormData()
    e.preventDefault()
formdata.append("name",data.name)
formdata.append("ref",data.ref)
formdata.append("price",data.price)
formdata.append("description",data.description)
formdata.append("qte",data.qte)
/* formdata.append("subcategory",data.subcategory) */
for(let i =0; i<image?.length; i++){
  formdata.append("photos",image[i])
}
    productService.create(formdata)

    .then((res)=>{
      console.log(res)

    })
    .catch((err)=>{
      console.log(err)
    })
  };
 
    return(
        <>
<div className="col-12 grid-margin stretch-card">
  <div className="card"  style={{width: '86%',minWidth: '76%'}}>
    <div className="card-body">
      <h4 className="card-title">Add Product</h4>
      <p className="card-description">
        Add Product
      </p>
      <form className="forms-sample"  onSubmit={onSubmitHandler}>

        {/*Reference*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Referance</label>
          <input type="text" name="ref" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="Referance" />
        </div>
        
        {/*description*/}
        <div className="form-group">
          <label htmlFor="exampleInputName1">Description</label>
          <input type="text" name="description" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="description" />
        </div>

         {/*price*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Price</label>
          <input type="Number" name="prcie" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="price" />
        </div>
          {/*quantité*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Quantité</label>
          <input type="Number" name="qte" onChange={onChangeHandler} className="form-control" id="exampleInputName1" placeholder="quantité" />
        </div>

         {/*gallery*/}
         <div className="form-group">
          <label htmlFor="exampleInputName1">Photo</label>
          <input type="file" name="photos" onChange={onChangeImage} multiple className="form-control" id="exampleInputName1" placeholder="photo" />
        </div>
        
        
        {/*Subcategory*/}
        <div className="col-md-12">
          <div className="form-group row">
               <label className="col-sm-3 col-form-label">Subcategory</label>
               <div className="col-sm-9">
               {/* <input type="text" name="subcategory" className="form-control" onChange={onChangeHandler} id="exampleInputName1" placeholder="Subcategory" /> */}
                  {/*  <select className="form-control">
                     <option>Subcategory1</option>
                     <option>Subcategory2</option>
                     <option>Subcategory3</option>
                     <option>Subcategory4</option>
                   </select> */}
               </div>
           </div>
        </div>

      

       

        
       


        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
export default AddProduct;