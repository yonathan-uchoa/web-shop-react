import { Container } from "react-bootstrap";
import "./styles.scss";

const Home = () => {
  return (
    <Container className="home-container">
      <h1>The web-shop is alive! </h1>
      <p>
        This project its simple, he pick some items to a Cart and generate a
        Order log when it is finished. But he doesn't have a official payment
        method - like PayPal -, the project itself is just for a bit more
        practice whit React, Express and TS.
      </p>
      <p>
        For the full functionalities of the project, you will need to check if
        the <i>server</i> is online. The server is up in a{" "}
        <b>
          <a href="https://webshop-backend.adaptable.app/" target="_blank">
            Adaptable server
          </a>
        </b>{" "}
        - free tier, he will go up automatically in the first http request!
      </p>
      <p>
        And here is the{" "}
        <b>
          <a href="https://github.com/yonathan-uchoa/web-shop" target="_blank">
            GitHub repository
          </a>
        </b>{" "}
      </p>
    </Container>
  );
};

export default Home;
