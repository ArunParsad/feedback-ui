import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import './AboutPage.css'
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="container">
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
          rerum quo at, deleniti earum voluptate culpa odit expedita tempora!
        </p>
      </Card>
      <Link to={'/'}>
      <Button version="secondary">Back to home</Button>
      </Link>
    </div>
  );
};

export default AboutPage;
