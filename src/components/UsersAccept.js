import { useState } from "react"
import { Button } from "react-bootstrap"
import UsersAcceptViewModel from "./UsersAcceptViewModel"

function UsersAccept(props) {
    const {user } = props
    const [show, setShow] = useState(false)
  return (
    <>
      {user.progress == "Accept" ? (
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
      <UsersAcceptViewModel user={user} show={show} setShow={setShow} />
    </>
  )
}

export default UsersAccept
