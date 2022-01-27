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
          src="https://scontent.fmed1-1.fna.fbcdn.net/v/t39.30808-6/269675384_2145909032228655_4239034493093183794_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=5AY_xFtNEmEAX9k_rqH&_nc_ht=scontent.fmed1-1.fna&oh=00_AT_dgJ8XjhFBAE1ZYzbYzRroWLWLwLgEmTVX5sW0H4Z_Ag&oe=61F1D6B9"
          alt=""
          height="500px"
        />
      </div>
      <hr />
    </>
  )
}

export default PageHeader
