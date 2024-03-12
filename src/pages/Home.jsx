import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
function Home(){
   return(
    <>
      <Navbar></Navbar>
      <div className="hero-section">
       <div className="container">
         <div className="row">
            <div className="col-lg-6 mt-5">
                <p className="text-danger fs-4 my-0 fw-bolder text-uppercase">Leave, Learn, Grow</p>
                <h1 id="text"><span>Education</span> Investment Goes a long way !</h1>
                <p className="fs-5"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quas cum
                 repudiandae vitae quo officiis repellendus aliquid. Sed molestias eos deleniti facil </p>
                 <button className="btn btn-primary w-50">Apply for a course</button>
            </div>
            <div className="col-lg-6">
            </div>
         </div>
        </div> 
      </div>
      <section>
        <div className="container">
          <div className="d-flex col-lg-12 col-sm-8 col-12 flex-row justify-content-around box-one py-2">
              <div className="text-center">
                <p className="fs-6">Number of students</p>
                <h1 className="fs-1">500+</h1>
              </div>
              <div className="text-center">
                <p className="fs-6">Number of students</p>
                <h1 className="fs-1">500+</h1>
              </div>
              <div className="text-center">
                <p className="fs-6">Number of students</p>
                <h1 className="fs-1">500+</h1>
              </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h1 className="text-center fs-3 fw-bolder my-2">HND Programs</h1>
          <div className="row">
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Health Sciences</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Computer Engineering</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Food Science</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Management</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h1 className="text-center fs-3 fw-bolder my-2">Masters Programs</h1>
          <div className="row">
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Health Sciences</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Computer Engineering</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Food Science</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-primary shadow-sm my-3 rounded-3">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="fs-5 fw-bold">Management</h2>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Nursing</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Pharmacy</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Midwifery</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle" className="c-green"/>
                  <p className="mx-2 my-0">HND Labtech</p>
                  </div>
                  <div className="d-block">
                  <p className="my-0">Features</p>
                  <div className="d-flex justify-content-start align-items-center my-2">
                  <Icon icon="pajamas:check-circle"className="c-green" />
                  <p className="mx-2 my-0">Free Wifi</p>
                  </div>
                  </div>
                  <div className="d-flex flex-start">
                    <div className="d-block">
                      <p className="my-0">Ratings</p>
                      <div className="d-flex">
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      <Icon icon="mingcute:star-fill" className="c-yellow fs-4 mx-1" />
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="btn btn-primary w-100 fs-12">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h1 className="fs-3 my-2 text-center">About us</h1>
        <div className="container">
          <div className="row d-flex flex-row align-items-center">
            <div className="col-lg-7">
              <div className="image-box">
              <img src="/images/about-us.jpg" alt="about us image"  className="about-us-img"/>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="text-center fs-5">Quality Education for holistic training</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Totam atque nobis, obcaecati pariatur aliquid quidem maiores
                  dolorum voluptatum eaque odit provident illum
                , facere enim magni nostrum quas molestiae perspiciatis sequi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Totam atque nobis, obcaecati pariatur aliquid quidem maiores
                  dolorum voluptatum eaque odit provident illum
                , facere enim magni nostrum quas molestiae perspiciatis sequi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Totam atque nobis, obcaecati pariatur aliquid quidem maiores
                  dolorum voluptatum eaque odit provident illum
                , facere enim magni nostrum quas molestiae perspiciatis sequi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Totam atque nobis, obcaecati pariatur aliquid quidem maiores
                  dolorum voluptatum eaque odit provident illum
                , facere enim magni nostrum quas molestiae perspiciatis sequi!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-2 py-4">
        <h1 className="text-center fs-3 fw-bolder my-2">Archievements</h1>
        <div className="container">
          <div className="row">
           <div className="col-lg-12 tag-list">
            <div className="flex-row inner">
            <div className="col-lg-3">
              <div className="card border-none shadow">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="card-title fs-4">
                    archivement one
                  </h2>
                  <p className="fs-6">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Amet, reprehenderit  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-none shadow">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="card-title fs-4">
                    archivement one
                  </h2>
                  <p className="fs-6">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Amet, reprehenderit  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-none shadow">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="card-title fs-4">
                    archivement one
                  </h2>
                  <p className="fs-6">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Amet, reprehenderit  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card border-none shadow">
                <img src="" alt="" />
                <div className="card-body">
                  <h2 className="card-title fs-4">
                    archivement one
                  </h2>
                  <p className="fs-6">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Amet, reprehenderit  
                  </p>
                </div>
              </div>
            </div>
            </div>
           </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="my-3 fs-3 text-center fw-bolder">Our Patners</h1>
        <div className="container">
          <div className="row">
            <div className="d-flex flex-row justify-content-between">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="d-block">
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-block">
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-block">
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-block">
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                  <p>lsaldkj</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-evenly my-2">
             <p>Social one</p>
             <p>Social two</p>
             <p>Social three</p>
             <p>Social four</p>
          </div>
        </footer>
      </section>
    </>
   )    
}
export default Home;
