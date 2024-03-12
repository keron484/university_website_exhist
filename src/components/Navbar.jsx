function Navbar(){
    return(
        <>
    <nav className="navbar navbar-expand-lg justify-content-around px-4">
   <div className="logo-area">
    <p className="logo fw-bolder fs-4">Logo</p>
   </div>
   <div className="d-flex justify-content-evenly align-items-center w-50 align-items-center">
      <p className="fw-bold my-0">Home</p>
      <p className="fw-bold my-0">Contact</p>
      <p className="fw-bold my-0">Courses</p>
      <p className="fw-bold my-0">Apply</p>
   </div>
   <div>
   <button className="btn btn-primary  rounded-5 action-btn">Apply Now</button>
   </div>
</nav>

        </>
    )
}
export default Navbar;