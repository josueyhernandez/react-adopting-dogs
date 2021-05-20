const {useState, useEffect} = React;

function App() {
  // Your Code Here

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>Press the arrow keys on your keyboard. Left to skip, Right to Adopt.</h3>
      <section>
        Your HTML Here!
      </section>
    </div>
  );
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);