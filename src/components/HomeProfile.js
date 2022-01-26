import { useContext } from "react"
import { Card } from "react-bootstrap"
import JobsContext from "../utils/JobsContext"
import PersonIcon from "@mui/icons-material/Person"
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar"
import WorkIcon from "@mui/icons-material/Work"
import BookmarkIcon from '@mui/icons-material/Bookmark';

function HomeProfile() {
  const { profile } = useContext(JobsContext)
  if (!profile) return <h1>Loading ...</h1>
  return (
    <div style={{ position: "absolute", right: "5%", top: "100%" }}>
      <Card style={{ width: "20rem", margin: "20px", display: "flex", alignItems: "center" }}>
        <img
          class="rounded-circle"
          style={{ objectFit: "cover", margin: "10px" }}
          width={50}
          height={50}
          src={profile.avatar}
          data-holder-rendered="true"
        />
        <h5>
          {profile.firstName} {profile.lastName}
        </h5>
        <p>{profile.summary}</p>
        <span>
          Following <PersonIcon /> : {profile.followwnig.length}
        </span>
        <hr />
        <span>
          Followers <PersonIcon /> : {profile.followers.length}
        </span>
        <hr />
        <span>
          Profile Watch <PermContactCalendarIcon /> : {profile.profileWatch.length}
        </span>
        <hr />
        <span>
          Jobs Interest <BookmarkIcon /> : {profile.jobInterest.length}
        </span>
      </Card>
    </div>
  )
}

export default HomeProfile
