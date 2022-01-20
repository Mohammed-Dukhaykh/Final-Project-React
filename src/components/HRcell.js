import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import UserViewModel from "./UserViewModel"

function HRcell(props) {
    const {user} = props
    const [viewShow, setViewShow] = useState(false)
    const {deleteEmployeeHR} = useContext(JobsContext)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{user.email}</td>
      <td>
        <img
          class="rounded-circle"
          style={{ objectFit: "cover" }}
          width={100}
          height={100}
          src={user.avatar}
          data-holder-rendered="true"
        />
      </td>

      <td>
        <Button variant="outline-primary" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button onClick={() => deleteEmployeeHR(user._id)} variant="outline-danger" className="me-2">
          Delete HR
        </Button>
      </td>
      <UserViewModel user={user} show={viewShow} setShow={setViewShow} />
    </tr>
  )
}

export default HRcell
