import { useContext } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import UsersApplyViewModel from "./UsersApplyViewModel"

function UsersApplyCell(props) {
  const { user } = props
  const [show, setShow] = useState(false)

  return (
    <>
      {user.progress == "Submitted" ? (
        //  <Form  onSubmit={e => changeProgress(e, user.jobId, user._id, )}>
        <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          <td>
            {user.firstName} {user.lastName}
          </td>
          <td>
            <img
              class="rounded-circle"
              style={{ objectFit: "cover" }}
              width={100}
              height={100}
              src={user.owner.avatar}
              data-holder-rendered="true"
            />
          </td>
          <td>
            <Button variant="primary" type="submit" onClick={() => setShow(true)}>
              View
            </Button>
          </td>
        </tr>
      ) : null}
      <UsersApplyViewModel show={show} setShow={setShow} user={user} />
    </>
  )
}

export default UsersApplyCell
