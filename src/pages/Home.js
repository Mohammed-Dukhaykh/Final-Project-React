import HomeProfile from "../components/HomeProfile";
import JobHome from "../components/JobHome";
import NavbarItem from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Posts from "../components/Posts";

function Home() {
    return ( <>
    <NavbarItem />
    <PageHeader />
    <Posts />
    <HomeProfile />
    <JobHome />
    </>
    );
}

export default Home;