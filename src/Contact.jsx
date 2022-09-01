import React from 'react';
const Contact=() => {
    return (
      <>
      <div className='my-3'><h1 className='text-center'>Contact Us</h1></div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
<form className='length'>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input activeclassName="saba"type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Messsage</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
            </div>
            </div>
          </div>
      
      </>
    );
  };
  
  export default Contact;
  