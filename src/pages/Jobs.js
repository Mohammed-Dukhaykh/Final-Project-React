import { useContext } from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom"
import NavbarItem from "../components/Navbar"
import "../JobsStyle.css"
import JobsContext from "../utils/JobsContext"
function Jobs() {
  const { jobs } = useContext(JobsContext)
  jobs.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))

  return (
    <>
      <NavbarItem />
      <header class="masthead">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="site-heading">
                <h1 class="heading">
                  Jobs <br />
                  Opportunities
                </h1>
                <span class="subheading">Show All Jobs opportunities And Apply To The Job .</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/job-recommend" className="btn">
          <button className="job-btn-header">Jobs we recommend </button>
        </Link>
        <Link to="/jobs" className="btn">
          <button className="job-btn-header">All Jobs</button>
        </Link>
      </div>
      {jobs.map(job => (
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <ul class="job-list">
                  <li class="job-preview">
                    <div class="content float-left">
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4 class="job-title">{job.title}</h4>
                        <span className="span-date">
                          {" "}
                          (<Moment format=" H:mm   , MM/DD   ">{job.dateCreated}</Moment>)
                        </span>
                      </div>
                      <br />
                      <img
                        class="rounded-circle"
                        style={{ objectFit: "cover" }}
                        width={50}
                        height={50}
                        src={job.owner.avatar}
                        data-holder-rendered="true"
                      />{" "}
                      {/* <h5 class="company"></h5> */}
                      <h5 class="company">{job.jobField.name}</h5>
                      <p>{job.description}</p>
                    </div>
                    <Link to={`/job/${job._id}`} className="btn btn-apply float-sm-right float-xs-left">
                      Show Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Jobs
