import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import CompanyEditPostModel from "./CompanyEditPostModel"
import CompanyEditShow from "./CompanyEditShow"
import CompanyViewPost from "./CompanyViewPost"


function CompanyPostsCell(props) {
  const { post } = props
  const {deletePost} = useContext(JobsContext)
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <>
      {" "}
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{post._id}</td>
        <td>{post.description}</td>
        <td>
          <img
            class=""
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={post.photo}
            data-holder-rendered="true"
          />
        </td>
        <td>
          <Button variant="outline-primary" className="me-2" onClick={() => setViewShow(true)}>
            View
          </Button>

          <Button variant="outline-success" className="me-2" onClick={() => setEditShow(true)}>
            Edit
          </Button>
          <Button variant="outline-danger" className="me-2" onClick={e => deletePost(e, post._id)}>
            Delete
          </Button>
        </td>
      </tr>
      <CompanyViewPost show={viewShow} setShow={setViewShow} post={post} />
      <CompanyEditPostModel show={editShow} setShow={setEditShow} post={post}  />
    </>
  )
}

export default CompanyPostsCell
