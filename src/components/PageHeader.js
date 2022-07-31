import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../HeaderStyle.css"

function PageHeader() {
  return (
    <>
      <div className="div-header1">
        <header>
          <div class="hero">
            <div class="hero__inner">
              <h1 class="hero__heading">
                <span class="hero--highlight">Find Jobs</span> in All Fields
              </h1>
              <p class="hero__content">
                You can Find many Jobs And apply For Jobs and You Can Watch Other Users Profile and Watch There Resume
                And Skills And Educations And Experinces And Other Thing Also We provide To the Company To Add There
                Jobs in Website
              </p>
              <Link to="/jobs" className="btn">
                <button class="hero__btn">See All Jobs</button>
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div className="img-logosite">
        <img
          src="https://scontent.fruh4-6.fna.fbcdn.net/v/t39.30808-6/272161159_2145943825558509_5355786000198811349_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=fPkLtVjKrfEAX90Tmov&tn=TieEhei_jtPOUJxM&_nc_ht=scontent.fruh4-6.fna&oh=00_AT99fT7wfunEghoGTski3bLis5Dqdp-2m5BZQMI4SHmDoA&oe=62EC652D"
          alt=""
          height="500px"
        />
      </div>
      <hr />
    </>
  )
}

export default PageHeader
