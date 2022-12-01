import { Link } from "react-router-dom";
import { useUserStore } from "../stores/user";
import Shield from '../assets/shield.png'
import "./home.scss";

export const Home = () => {
  document.title = 'Homepage'
  const [user] = useUserStore((state) => [state.user])

  return (
    <section className="home-content">
      <article className="first-section">
        {!user ?
          (
            <div className="create-account">
              <span>Free account, 100% digital and with unlimited services</span>
              <Link to="/sign-up">Create an Account</Link>
            </div>
          )
          :
          (
            <div className="create-account">
              <span>Welcome {user.name}, to our journey!</span>
              <Link to={`/user/id:${user.userAccountNumberFk}/profile`}>See your beauty!</Link>
            </div>
          )}
        <div className="cards">
          <div>
            <span>Data Security</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div>
            <span>Anywhere Any Time</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div>
            <span>Certification</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
