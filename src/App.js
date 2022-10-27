import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = (fullname, bio, profession) => {
    alert(`hello ${fullname}\n  ${bio}\n je tarvail comme un ${profession}`);
  };

  return (
    <section className="tttt">
      <div className="App">
        <div className="cards">
          {" "}
          <Profile
            fullName="Joichiro Yukihira "
            bio="futur commercial"
            profession="Livreur"
            handleName={handleName}
          >
            <img className="image" src="./profile1.jpg" width={200} />
            <h3>pour plus d'info</h3>
          </Profile>
        </div>
        <div className="cards">
          <Profile
            className="cards"
            fullName=" Erina Nakiri"
            bio="futur medcin"
            profession="infirmière"
            handleName={handleName}
          >
            <img className="image" src="./profile2.jpg" width={200} />
            <h3>pour plus d'info</h3>
          </Profile>
        </div>
        <div className="cards">
          <Profile
            className="cards"
            fullName="Ryo Kurokiba"
            bio="futur architecte"
            profession="plombier"
            handleName={handleName}
          >
            <img className="image" src="./profile3.jpg" width={200} />
            <h3>pour plus d'info</h3>
          </Profile>
        </div>
      </div>
    </section>
  );
}

export default App;
