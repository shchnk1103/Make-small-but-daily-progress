import {Navbar} from "./Navbar";

export const Home = () => {
  return (
      <div className="container-fluid text-center home-page" id="home">
          <Navbar/>
          <div className="row">
            <p>Batman is my hero!</p>
          </div>
      </div>
  )
}
