import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import JobsContext from "../utils/JobsContext"
import CompanyEditShow from "./CompanyEditShow"
import CompanyViewJobs from "./CompanyiewJobs"

function CompanyJobsCell(props) {
  const { companyJob } = useParams()
  const { job  } = props
  const [editShow, setEditShow] = useState(false)
  const { deleteJob } = useContext(JobsContext)

  return (
    <>
      {" "}
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{job._id}</td>
        <td>{job.title}</td>
        <td>{job.description}</td>
        <td>
          <img
            class=""
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={job.poster}
            data-holder-rendered="true"
          />
        </td>
        <td>
          <img
            class="rounded-circle"
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={job.employeeId.avatar}
            data-holder-rendered="true"
          />
          <center>
            <strong>
              {job.employeeId.firstName} {job.employeeId.lastName}{" "}
            </strong>
          </center>
        </td>

        <td>
          <Link to={`/jobs-company/${job._id}`}>
            <Button variant="outline-primary" className="me-2">
              View
            </Button>
          </Link>
          <Button variant="outline-success" className="me-2" onClick={() => setEditShow(true)}>
            Edit
          </Button>
          <Button variant="outline-danger" className="me-2" onClick={e => deleteJob(e, job._id)}>
            Delete
          </Button>
        </td>
        <CompanyEditShow show={editShow} setShow={setEditShow} job={job} />
      </tr>
    </>
  )
}

export default CompanyJobsCell
