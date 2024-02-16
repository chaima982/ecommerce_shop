import { useState } from 'react';
import adminService from '../../services/adminService';


function Register() {

    const [data, setdata] = useState();
    const onChangeHandler = (e) => {
      setdata({
        ...data,
        [e.target.name] : e.target.value
      });
      console.log(data);
    };
    const onSubmitHandler = (e) =>{
      e.preventDefault()
      adminService.create(data)


      .then((res)=>{
        console.log(res)
        
      })
      .catch((err)=>{
        console.log(err)
      })
    };
  



    return(
        <>
          <div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="../../images/logo-dark.svg" alt="logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <form className="pt-3"  onSubmit={ onSubmitHandler}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" name='fullname' id="exampleInputUsername1"onChange={onChangeHandler}  placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg"name="email" id="exampleInputEmail1" onChange={onChangeHandler}  placeholder="Email" />
              </div>
             
              <div className="form-group">
                <input type="password" className="form-control form-control-lg"  name="password" id="exampleInputPassword1" onChange={onChangeHandler}  placeholder="Password" />
              </div>

              <div className="form-group">
                <input type="number" className="form-control form-control-lg"  name="phone" id="exampleInputphone" onChange={onChangeHandler}  placeholder="Phone Number" />
              </div>
              <div className="mb-4">
            
              </div>
              <button type="submit" className="btn btn-primary mr-2">SIGN UP</button>

             {/*  <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={onSubmitHandler} ></a>
              </div> */}
              <div className="text-center mt-4 font-weight-light">
                Already have an account? <a href="login.html" className="text-primary">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

        </>
    );
}

export default Register;