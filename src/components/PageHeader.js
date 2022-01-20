import { Image } from "react-bootstrap"

function PageHeader() {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        backgroundImage: `url(
          "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg"
        )`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "0.6",
      }}
    ></div>
  )
}

export default PageHeader
