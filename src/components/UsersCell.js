import { useContext } from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import UserViewModel from "./UserViewModel"

function UsersCell(props) {
  const { user, page } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const { addHR, addEmployee, profile } = useContext(JobsContext)
  if (!profile) return null
  console.log(user.Work === null)
  return (
    <>
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

          <Button onClick={() => addHR(user._id)} variant="outline-primary" className="me-2">
            Add as HR
          </Button>
          <Button onClick={() => addEmployee(user._id)} variant="outline-primary" className="me-2">
            Add as Employee
          </Button>
        </td>

        <UserViewModel user={user} show={viewShow} setShow={setViewShow} />
      </tr>
    </>
  )
}

export default UsersCell
