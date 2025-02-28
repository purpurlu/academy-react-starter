import PageFooter from "./components/pageFooter";
import PageHeader from "./components/pageHeader";
import Place from "./components/Place";

function App(): JSX.Element {
  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <PageHeader title={"My favourite places"} />
      </div>
      <Place
        title={"BAO"}
        place={"Almaty"}
        country={"Kazakhstan"}
        main={
          "https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80"
        }
        link={
          "https://www.google.com/maps/place/%D2%AE%D0%BB%D0%BA%D0%B5%D0%BD+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+%D0%BA%D3%A9%D0%BB%D1%96/@43.0426364,76.967748,12z/data=!4m5!3m4!1s0x3883629f25a024ff:0xb55b4eb1c8de0866!8m2!3d43.050556!4d76.985"
        }
        description={"BAO"}
      />
      <Place
        title={"Portobello Beach"}
        place={"Edinburgh"}
        country={"UK"}
        main={
          "https://images.unsplash.com/photo-1620428016862-8a51f7fe8828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        link={
          "https://www.google.com/maps/place/Portobello+Beach/@55.9550809,-3.1106909,15z/data=!3m1!4b1!4m5!3m4!1s0x4887c79bc91f0cd1:0xad1711a6fa430cc8!8m2!3d55.9550814!4d-3.1106909"
        }
        description={"Quite place with amazing view"}
      />
      <Place
        title={"San Giovanni Beach"}
        place={"Sardinia"}
        country={"Italy"}
        main={
          "https://images.unsplash.com/photo-1534248889024-3983df68b49d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80"
        }
        link={
          "https://www.google.com/maps/place/Spiaggia+di+San+Giovanni/@40.4330656,7.7327869,9z/data=!4m5!3m4!1s0x12dcf1fed5caaaed:0xd2ba3f2228f1dec0!8m2!3d40.575973!4d8.3141181"
        }
        description={"Quite place with amazing view"}
      />
      <Place
        title={"Bermondsey Street💜"}
        place={"London"}
        country={"UK"}
        main={
          "https://images.unsplash.com/photo-1563493934-b1e5519e7be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        }
        link={
          "https://www.google.com/maps/place/Bermondsey+St,+London,+UK/@51.4990427,-0.0923738,14z/data=!4m5!3m4!1s0x48760344c9823bdf:0xda831ed87e8aea2b!8m2!3d51.5007926!4d-0.0818488"
        }
        description={"Quite place with amazing view"}
      />

      <div style={{ justifyContent: "center", display: "flex" }}>
        <PageFooter title={"End"} />
      </div>
    </>
  );
}

export default App;

// const food = ["pizza", "tiramisu", "sushi"]
// food.map(item => {console.log(item)})
