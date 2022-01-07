import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import "./index.css";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import { Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <FeedbackForm />
                <FeedbackStat />
                <FeedbackList />
                <AboutIconLink />
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </FeedbackProvider>
    </>
  );
};

export default App;
