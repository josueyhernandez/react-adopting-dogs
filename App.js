const {useState, useEffect, useRef} = React;
const url = "https://dog.ceo/api/breeds/image/random"

//Madalyn help me with lines 7-9, 32, and 70. 
function App() {
  const [dogImages, setDogImages] = React.useState("")
  const [time, setTime] = React.useState(5)
  const [adoptedDogs, setAdoptedDogs] = React.useState([])
  const stateRef = React.useRef()
  stateRef.current = dogImages

  function fetchDog() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setDogImages([data.message]))
    setTime(5)
  }

  
  React.useEffect(() => {
    fetchDog()
    changeImage
    console.log("useEffect Works!")
    window.addEventListener("keydown", changeImage)
    return () => {
      window.removeEventListener("keydown", changeImage)
    }
  }, [])

  React.useEffect(() => {
    if (time < 0) {
      return fetchDog()
    }
    let timer = setInterval(() => setTime(time - 1), 1000)
    return () => clearInterval(timer)
  })
 
  function changeImage(event) {
    if (event.code === "ArrowRight") {
      console.log("You press right arrow key")
      setAdoptedDogs((prevState) => [...prevState, stateRef.current])
      fetchDog()
    } else if (event.code === "ArrowLeft") {
      console.log("You press left arrow key")
      fetchDog()
    } else {
      console.log("Not Left or Right arrow key")
    }
  }

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>Press the arrow keys on your keyboard. Left to skip, Right to Adopt.</h3>
      <section>
        <h3>Current Dog:</h3>
        <img 
        width={"200px"}
        height={"200px"}
        src={dogImages}
        />
        <h2>Time Remaining: <span id="time">{time}</span></h2>
      </section>
      <section>
        <h3>Adopted dogs:</h3>
        {adoptedDogs.map((dog, index) => (
          <img
           src={dog}
           height={"200px"}
           weight={"200px"}
           key={index}
           />

        ))}
      </section>
    </div>
  )
}
//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);