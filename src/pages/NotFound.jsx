import Breadcrumb from "../components/Breadcrumb.jsx"

const NotFound = () => {
  return (
    <div>
      <Breadcrumb/>
      <div>
        <h1>Error 404 - Page Not Found</h1>
        <p>Check the URL or contact the Admins, if this page is malfunctioning.</p>
      </div>
    </div>
  )
}

export default NotFound
