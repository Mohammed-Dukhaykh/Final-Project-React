import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import AddIcon from "@mui/icons-material/Add"
import AddTaskIcon from "@mui/icons-material/AddTask"


function JobHome() {
  const { jobs, jobFavourite, profile } = useContext(JobsContext)

  let allJobs = jobs
  // allJobs = allJobs.sort((a, b) => b.dateCreated - a.dateCreated)
  allJobs = allJobs.slice(0, 10)
  if (!profile) return <h1>Loading...</h1>
  let favourite
  favourite = profile.jobInterest.map(job => job._id)
  console.log(favourite)

  //   const Alljobs = jobs.slice(7)
  return (

    <div style={{ position: "absolute", left: "5%", top: "100%" }}>
      <h3 style={{position:"relative" , left:"140px"}}>Jobs</h3>
      <Card style={{ width: "20rem", margin: "20px", display: "flex", alignItems: "center" }}>
        {allJobs.map(job => (
          <>
            <img
              class="rounded-circle"
              style={{ objectFit: "cover", margin: "10px" }}
              width={50}
              height={50}
              src={job.poster}
              data-holder-rendered="true"
            />
            <span>{job.title}</span>
            <Button onClick={() => jobFavourite(job._id)} variant="light">
              {favourite.includes(job._id) ? <AddTaskIcon sx={{ fontSize: 16 }} /> : <AddIcon sx={{ fontSize: 16 }} />}
            </Button>
            <hr />
          </>
        ))}
      </Card>
    </div>
  )
}

export default JobHome
