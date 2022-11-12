import { Link } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  document.title = 'Homepage'

  return (
    <section className="home-content">
      <article className="first-section">
        <div className="create-account">
          <span>Free account, 100% digital and with unlimited services</span>
          <Link to="/">Create an Account</Link>
        </div>
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
      <div>nao</div>
    </section>
  );
};
