import BigCards from "./components/BigCards";
import SmallCards from "./components/SmallCards";

const App = () => {
  return (
    <div className="container">
      <h2> Social Media Dashboard</h2>
      <section className="followersMode">
        <h4>Total Followers: 23,004</h4>
        <nav className="modeButton">
          <p>Dark Mode</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </nav>
      </section>
      <BigCards />
      <h3>Overview - Today</h3>
      <SmallCards />
    </div>
  );
};

export default App;
