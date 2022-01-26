import "./App.css"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
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
import UserProfile from "./pages/UserProfile"
import Jobs from "./pages/Jobs"
import OneJob from "./pages/OneJob"
import firebase from "./utils/firebase"
import UserFollowing from "./pages/UserFollowing"
import UserFollowers from "./pages/UserFollowers"
import CreateCompany from "./pages/CreateCompany"
import JobsRecommend from "./pages/JobsRecommend"

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
  const editProfile = async e => {
    try {
      e.preventDefault()
      const form = e.target
      let AvatarUrl
      if (form.elements.avatar.files[0]){
      const avatarImage = form.elements.avatar.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      AvatarUrl = await avatarRef.getDownloadURL()
      } else{
        AvatarUrl = form.elements.avatar.id
      }
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        avatar: AvatarUrl,
      }
      await axios.put("http://localhost:5000/api/auth/profile", userBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      getUsers()
      toast.success("The Profile is Edit")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
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
      const avatarImage = form.elements.avatar.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      const AvatarUrl = await avatarRef.getDownloadURL()
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: AvatarUrl,
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
      getUsers()
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
      const jobImage = form.elements.poster.files[0]
      const jobRef = firebase.storage().ref("photo").child(`${jobImage.lastModified}-${jobImage.name}`)
      await jobRef.put(jobImage)
      const jobUrl = await jobRef.getDownloadURL()
      const jobBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: jobUrl,
        jobField: form.elements.interest.value,
      }
      await axios.post("http://localhost:5000/api/jobs", jobBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getJobs()
      getCompany()
      navigate("/company-jobs")
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
      form.reset()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editJob = async (e, jobId) => {
    try {
      e.preventDefault()
      const form = e.target
      const jobImage = form.elements.poster.files[0]
      const jobRef = firebase.storage().ref("photo").child(`${jobImage.lastModified}-${jobImage.name}`)
      await jobRef.put(jobImage)
      const jobUrl = await jobRef.getDownloadURL()
      const jobBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: jobUrl,
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
      getUsers()
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
      getUsers()
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
      let AvatarUrl
      if (form.elements.photo.files[0]) {
        const avatarImage = form.elements.photo.files[0]
        const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
        await avatarRef.put(avatarImage)
        AvatarUrl = await avatarRef.getDownloadURL()
      } else {
        AvatarUrl = form.elements.photo.id
      }
      const postBody = {
        photo: AvatarUrl,
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
      const avatarImage = form.elements.photo.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      const AvatarUrl = await avatarRef.getDownloadURL()
      const postBody = {
        photo: AvatarUrl,
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
      getUsers()
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
      getUsers()
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
      const avatarImage = form.elements.photo.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      const AvatarUrl = await avatarRef.getDownloadURL()
      const postBody = {
        photo: AvatarUrl,
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
  const getOneProfile = async userId => {
    try {
      await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getUsers()
      getProfile()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const applyJob = async (e, jobId) => {
    try {
      e.preventDefault()
      const form = e.target
      const skill = []

      form.elements.skills.forEach(profileSkill => {
        if (profileSkill.checked) {
          skill.push(profileSkill.value)
        }
      })
      const Resume = form.elements.cv.files[0]
      const ResumeRef = firebase.storage().ref("resume").child(`${Resume.lastModified}-${Resume.name}`)
      await ResumeRef.put(Resume)
      const ResumeUrl = await ResumeRef.getDownloadURL()

      const answers = []
      const questions = form.elements.questions
      if (questions) {
        if (questions.forEach) {
          questions.forEach(qustionObject => {
            answers.push({ answer: qustionObject.value, question: qustionObject.id })
          })
        } else {
          answers.push({ answer: questions.value, question: questions.id })
        }
      }
      console.log(answers)

      const appllyBody = {
        phoneNumber: form.elements.phoneNumber.value,
        skills: skill,
        ResumeCv: ResumeUrl,
        answers: answers,
      }

      await axios.post(`http://localhost:5000/api/jobs/apply/${jobId}`, appllyBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getJobs()
      getProfile()
      getUsers()
      getPosts()
      toast.success("Apply Correct")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const formSearch = async e => {
    e.preventDefault()
    console.log("uujunhu")
    const form = e.target
    const userSearch = form.elements.userSearch.value
    const userFound = users.find(user => `${user.firstName} ${user.lastName}` === userSearch)
    if (!userFound) return toast.error("The User Not Found")
    if (userFound._id != profile._id) {
      await axios.get(`http://localhost:5000/api/auth/profile/${userFound._id}`, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getUsers()
      getProfile()
    navigate(`/user/${userFound._id}`)
    }
    else {
      return navigate(`/profile`)
    }
  }
  const addResume = async e => {
    try {
      console.log("ubjew")
      e.preventDefault()
      const form = e.target
      const Resume = form.elements.resume.files[0]
      const ResumeRef = firebase.storage().ref("resume").child(`${Resume.lastModified}-${Resume.name}`)
      await ResumeRef.put(Resume)
      const ResumeUrl = await ResumeRef.getDownloadURL()

      const resumeBody = {
        resume: ResumeUrl,
      }
      await axios.put("http://localhost:5000/api/auth/resume", resumeBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getProfile()
      toast.success("The Resume is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const createCompany = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const avatarImage = form.elements.avatar.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      const AvatarUrl = await avatarRef.getDownloadURL()
      const companyBody = {
        companyName: form.elements.name.value,
        avatar: AvatarUrl,
        commenicalNumber: form.elements.number.value,
      }
      await axios.post("http://localhost:5000/api/company/Add", companyBody, {
        headers: {
          Authorization: localStorage.tokenEmployment,
        },
      })
      getCompany()
      getProfile()
      getUsers()
      toast.success("The Company is Added")
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
    editProfile,
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
    getOneProfile,
    applyJob,
    formSearch,
    addResume,
    createCompany,
  }

  return (
    <JobsContext.Provider value={store}>
      <ToastContainer />

      <Routes>
        <Route path="/" element={localStorage.tokenEmployment ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/companyActions"
          element={localStorage.tokenEmployment ? <CompanyAction /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-employees"
          element={localStorage.tokenEmployment ? <AddEmployees /> : <Navigate to="/login" />}
        />
        <Route
          path="/company-employees"
          element={localStorage.tokenEmployment ? <CompanyEmployees /> : <Navigate to="/login" />}
        />
        <Route
          path="/company-jobs"
          element={localStorage.tokenEmployment ? <CompanyJobs /> : <Navigate to="/login" />}
        />
        <Route
          path="/company-posts"
          element={localStorage.tokenEmployment ? <CompanyPosts /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs-company/:companyJob"
          element={localStorage.tokenEmployment ? <OneCompanyJob /> : <Navigate to="/login" />}
        />
        <Route path="/add-job" element={localStorage.tokenEmployment ? <AddJobs /> : <Navigate to="/login" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/following" element={localStorage.tokenEmployment ? <Followwing /> : <Navigate to="/login" />} />
        <Route path="/followers" element={localStorage.tokenEmployment ? <Followers /> : <Navigate to="/login" />} />
        <Route
          path="/profileWatch"
          element={localStorage.tokenEmployment ? <ProfileWatch /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobInterest"
          element={localStorage.tokenEmployment ? <JobsInterest /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobsApply"
          element={localStorage.tokenEmployment ? <ProfileJobsApply /> : <Navigate to="/login" />}
        />
        <Route
          path="/user/:userId"
          element={localStorage.tokenEmployment ? <UserProfile /> : <Navigate to="/login" />}
        />
        <Route path="/jobs" element={localStorage.tokenEmployment ? <Jobs /> : <Navigate to="/login" />} />
        <Route path="/job/:jobId" element={localStorage.tokenEmployment ? <OneJob /> : <Navigate to="/login" />} />
        <Route
          path="/following/:userFollow"
          element={localStorage.tokenEmployment ? <UserFollowing /> : <Navigate to="/login" />}
        />
        <Route
          path="/followers/:userFollowers"
          element={localStorage.tokenEmployment ? <UserFollowers /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-company"
          element={localStorage.tokenEmployment ? <CreateCompany /> : <Navigate to="/login" />}
        />
        <Route
          path="/email_verified/:token"
          element={localStorage.tokenEmployment ? <EmailVerified /> : <Navigate to="/login" />}
        />
         <Route
          path="/job-recommend"
          element={localStorage.tokenEmployment ? <JobsRecommend /> : <Navigate to="/login" />}
        />
      </Routes>
      
    </JobsContext.Provider>
  )
}

export default App
