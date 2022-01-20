import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import JobsContext from "./utils/JobsContext"
import { Navbar } from "react-bootstrap"
import NavbarItem from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import EmailVerified from "./pages/EmailVerified"
import CompanyAction from "./pages/CompanyAction"
import Sidebar from "./components/Sidebar"
import AddEmployees from "./pages/AddEmployees"
import CompanyEmployees from "./pages/CompanyEmployees"
import CompanyJobs from "./pages/CompanyJobs"
import AddJobs from "./pages/AddJobs"
import OneCompanyJob from "./pages/OneCompanyJob"
import CompanyPosts from "./pages/CompanyPosts"
import Profile from "./pages/Profile"
import Follow from "./pages/Followiwng"
import Followwing from "./pages/Followiwng"
import Followers from "./pages/Followers"
import ProfileWatch from "./pages/ProfileWatch"
import JobsInterest from "./pages/JobsInterest"
import ProfileJobsApply from "./pages/ProfileJobsApply"
import ProfilePost from "./pages/ProfilePost"
import AddPost from "./pages/AddPost"
import UserProfile from "./pages/UserProfile"

function App() {
  const [users, setUsers] = useState([])
  const [company, setCompany] = useState([])
  const [jobs, setJobs] = useState([])
  const [posts, setPosts] = useState([])
  const [educations, setEducations] = useState([])
  const [skills, setSkills] = useState([])
  const [interests, setInterests] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.tokenEmployment) {
      getProfile()
    }
    getCompany()
    getUsers()
    getJobs()
    getPosts()
    getEducations()
    getSkills()
    getInterest()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth")
    setUsers(response.data)
  }
  const getCompany = async () => {
    const response = await axios.get("http://localhost:5000/api/company")
    setCompany(response.data)
  }
  const getJobs = async () => {
    const response = await axios.get("http://localhost:5000/api/jobs")
    setJobs(response.data)
  }
  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts")
    setPosts(response.data)
  }
  const getEducations = async () => {
    const response = await axios.get("http://localhost:5000/api/education")
    setEducations(response.data)
  }

  const getSkills = async () => {
    const response = await axios.get("http://localhost:5000/api/skills")
    setSkills(response.data)
  }
  const getInterest = async () => {
    const response = await axios.get("http://localhost:5000/api/interesting")
    setInterests(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenEmployment,
      },
    })
    setProfile(response.data)
  }
  const login = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenEmployment = token
      toast.success("Login Success")
      getProfile()
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = async () => {
    try {
      localStorage.removeItem("tokenEmployment")
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const signup = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/signup", userBody)
      toast.success(response.data)
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addHR = async userId => {
    try {
      console.log(localStorage.tokenEmployment)
      await fetch(`http://localhost:5000/api/company/add-HR/${userId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
        method: "POST",
      })
      getCompany()
      getUsers()
      toast.success("The user Join , to Your company as HR")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addEmployee = async userId => {
    try {
      await fetch(`http://localhost:5000/api/company/add-users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
        method: "POST",
      })
      getCompany()
      getUsers()
      toast.success("The user Join , to Your company as User Employee")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteEmployeeHR = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/company/delete-HR/${userId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getUsers()
      toast.success("The User is Delete , From You company")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteEmployeeUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/company/delete-users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getUsers()
      toast.success("The Employee User is delete")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const changeProgress = async (e, jobId, apllyId) => {
    try {
      e.preventDefault()
      const form = e.target
      const progressBody = {
        progress: form.elements.progress.value,
      }
      await axios.put(`http://localhost:5000/api/jobs/${jobId}/${apllyId}`, progressBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getJobs()
      toast.success("The Job Progress is Change")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addJob = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const jobBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
      }
      await axios.post("http://localhost:5000/api/jobs", jobBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getJobs()
      getCompany()
      toast.success("The Job is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteJob = async (e, jobId) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${jobId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getJobs()
      toast.success("The Job is Delete")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addQuestion = async (e, jobId) => {
    e.preventDefault()
    try {
      const form = e.target
      const jobBody = {
        question: form.elements.question.value,
      }
      await axios.post(`http://localhost:5000/api/jobs/add-question/${jobId}`, jobBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getJobs()
      toast.success("The Qusetion is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editJob = async (e, jobId) => {
    try {
      e.preventDefault()
      const form = e.target
      const jobBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
      }
      await axios.put(`http://localhost:5000/api/jobs/${jobId}`, jobBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getJobs()
      toast.success("The Job is Edit")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const jobFavourite = async jobId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/jobs/interest/${jobId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getJobs()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const follow = async userId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/${userId}/follow`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getPosts()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editCompanyPost = async (e, postId) => {
    try {
      e.preventDefault()
      const form = e.target
      const postBody = {
        photo: form.elements.photo.value,
        description: form.elements.description.value,
      }
      const response = await axios.put(`http://localhost:5000/api/posts/company/${postId}`, postBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getPosts()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deletePost = async (e, postId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/posts/company/${postId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getPosts()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddCompanyPost = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const postBody = {
        photo: form.elements.photo.value,
        description: form.elements.description.value,
      }
      const response = await axios.post(`http://localhost:5000/api/posts/company`, postBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getPosts()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddEducation = async e => {
    console.log("slslssl")
    try {
      e.preventDefault()
      const form = e.target
      const educationBody = {
        university: form.elements.university.value,
        field: form.elements.field.value,
        degree: form.elements.degree.value,
        start: form.elements.start.value,
        end: form.elements.end.value,
      }
      await axios.post("http://localhost:5000/api/education", educationBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      toast.success("The Education is Added")
      getProfile()
      getEducations()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const EditEducation = async (e, educationId) => {
    try {
      e.preventDefault()
      const form = e.target
      const EducationBody = {
        university: form.elements.university.value,
        field: form.elements.field.value,
        degree: form.elements.degree.value,
        start: form.elements.start.value,
        end: form.elements.end.value,
      }
      const response = await axios.put(`http://localhost:5000/api/education/${educationId}`, EducationBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getEducations()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteEducation = async educationId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/education/${educationId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getEducations()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddExperience = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const experienceBody = {
        company: form.elements.company.value,
        jobtitle: form.elements.jobTitle.value,
        start: form.elements.start.value,
        end: form.elements.end.value,
      }
      await axios.post("http://localhost:5000/api/experience", experienceBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Experience is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const EditExperience = async (e, experienceId) => {
    try {
      e.preventDefault()
      const form = e.target
      const experienceBody = {
        company: form.elements.company.value,
        jobtitle: form.elements.jobTitle.value,
        start: form.elements.start.value,
        end: form.elements.end.value,
      }
      await axios.put(`http://localhost:5000/api/experience/${experienceId}`, experienceBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Experience is Update")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteExperience = async experienceId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/experience/${experienceId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddSkills = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const skill = []
      form.elements.skills.forEach(profileSkill => {
        if (profileSkill.checked) {
          skill.push(profileSkill.value)
        }
      })
      const skillsBody = {
        skill: skill,
      }
      await axios.post("http://localhost:5000/api/skills/profile-skills", skillsBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getSkills()
      toast.success("The Skill is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteSkill = async skillId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/skills/profile-skills/${skillId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getSkills()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddCertificate = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const certificateBody = {
        title: form.elements.title.value,
        authority: form.elements.authority.value,
      }
      await axios.post("http://localhost:5000/api/certificates", certificateBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Certificate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editCertificate = async (e, certificateId) => {
    try {
      e.preventDefault()
      const form = e.target
      const certificateBody = {
        title: form.elements.title.value,
        authority: form.elements.authority.value,
      }
      await axios.put(`http://localhost:5000/api/certificates/${certificateId}`, certificateBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Certificate is Edit")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteCertificate = async certificateId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/certificates/${certificateId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const AddInterest = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const interests = []
      form.elements.interest.forEach(profileInterest => {
        if (profileInterest.checked) {
          interests.push(profileInterest.value)
        }
      })
      const interestBody = {
        interesting: interests,
      }
      await axios.post("http://localhost:5000/api/interesting/profile-interesting", interestBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getInterest()
      toast.success("The Interest is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteInterest = async interestId => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/interesting/profile-interesting/${interestId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getInterest()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const summary = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const summaryBody = {
        summary: form.elements.summary.value,
      }
      await axios.post("http://localhost:5000/api/auth/summary", summaryBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Summary is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteProfilePost = async postId => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getPosts()
      toast.success("The Post is Delete")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const profileAddPost = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const postBody = {
        photo: form.elements.photo.value,
        description: form.elements.description.value,
      }
      await axios.post("http://localhost:5000/api/posts", postBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getPosts()
      getProfile()
      toast.success("The Post is Added")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    users,
    login,
    logout,
    signup,
    company,
    jobs,
    profile,
    addHR,
    addEmployee,
    deleteEmployeeHR,
    deleteEmployeeUser,
    changeProgress,
    addJob,
    deleteJob,
    addQuestion,
    editJob,
    posts,
    jobFavourite,
    follow,
    editCompanyPost,
    deletePost,
    AddCompanyPost,
    AddEducation,
    EditEducation,
    deleteEducation,
    AddExperience,
    EditExperience,
    deleteExperience,
    skills,
    AddSkills,
    deleteSkill,
    AddCertificate,
    editCertificate,
    deleteCertificate,
    interests,
    AddInterest,
    deleteInterest,
    summary,
    deleteProfilePost,
    profileAddPost,
  }

  return (
    <JobsContext.Provider value={store}>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/companyActions" element={<CompanyAction />} />
        <Route path="/add-employees" element={<AddEmployees />} />
        <Route path="/company-employees" element={<CompanyEmployees />} />
        <Route path="/company-jobs" element={<CompanyJobs />} />
        <Route path="/company-posts" element={<CompanyPosts />} />
        <Route path="/jobs-company/:companyJob" element={<OneCompanyJob />} />
        <Route path="/add-job" element={<AddJobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/following" element={<Followwing />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/profileWatch" element={<ProfileWatch />} />
        <Route path="/jobInterest" element={<JobsInterest />} />
        <Route path="/jobsApply" element={<ProfileJobsApply />} />
        <Route path="/profilePosts" element={<ProfilePost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/email_verified/:token" element={<EmailVerified />} />
      </Routes>
    </JobsContext.Provider>
  )
}

export default App
