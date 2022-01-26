import { useContext } from "react"
import { Link } from "react-router-dom"
import "../CreateCompany.css"
import JobsContext from "../utils/JobsContext"
function CreateCompany() {
    const {createCompany} = useContext(JobsContext)
  return (
    <>
      <section class="owner-div">
        <div class="cont">
          <form onSubmit={createCompany}>
            <div class="form-login sign-in">
              <h2 class="h2-login">Add Company</h2>
              <label class="label-login">
                <span>Company Name</span>
                <input class="inp-login-company" type="text" name="name" />
              </label>
              <br />
              <label class="label-login">
                <span>Avatar</span>
                <input class="inp-login-company" type="file"  accept="image/png , image/jepg" name="avatar" />
              </label>
              <label class="label-login">
                <span>Commenical Number</span>
                <input class="inp-login-company" type="number" name="number" />
              </label>
              <button class="submit-login" type="submit">
                Add Company
              </button>
              <Link to="/" class="btn">
                <p class="create-account">Back Home</p>
              </Link>
            </div>
          </form>
          <div class="sub-cont">
            <div class="img-login">
              <img
                src="https://scontent.fmed1-2.fna.fbcdn.net/v/t39.30808-6/272161159_2145943825558509_5355786000198811349_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2z0D2ITUzvQAX9KIV96&tn=TieEhei_jtPOUJxM&_nc_ht=scontent.fmed1-2.fna&oh=00_AT9AI91-pp0zqp74fRp3gVgPTkqQI0_w0EwZ4ECQa7uDQw&oe=61F339AD"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateCompany
