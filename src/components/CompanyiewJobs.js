import { useState } from "react"
import { Col, Modal, Row, Table } from "react-bootstrap"
import { Box } from "@mui/material"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import UsersApplyCell from "./UsersApplyCell"

function CompanyViewJobs(props) {
  const { show, setShow, job } = props
  console.log(job.usersApply.progress)
  return (
    <>
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <h3 style={{ textAlign: "center" }}>{job.title}</h3>
            <hr />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Col>
                <img
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                  src={job.poster}
                  data-holder-rendered="true"
                />
              </Col>

              <Col>
                <h4>{job.description}</h4>
              </Col>
            </div>
            <hr />
            <Col>
              <h3 style={{ textAlign: "center" }}>Users Apply</h3>
              <hr />
              <Table bordered hover style={{ tableLayout: "fixed" }}>
                <thead>
                  <tr>
                    <th style={{ width: "9%" }}>Id</th>
                    <th style={{ width: "14%" }}>Avatar</th>
                    <th style={{ width: "18%" }}>Full Name</th>
                    <th style={{ width: "40%" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {job.usersApply.map(user => (
                    <>
                      <UsersApplyCell user={user} key={user._id} />
                    </>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CompanyViewJobs
