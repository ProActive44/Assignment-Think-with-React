// Progression-2 CHECK N CHECK

// const container = document.getElementById("react-container");
// ReactDOM.render("Hello! Welcome to React", container);


// Progression-3 IS IT A FUNCTION

// Functional Based
// const Container = () => {
//   return React.createElement(
//     "div",
//     null,
//     "Hey Kalvians! Welcome to React Learning",
//     React.createElement("div", null, "Let's rock and roll")
//   );
// };


// Progression-4 NOW IT'S CLASS TIME

// Class Based
class ReactContainer extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hey Kalvians! Welcome to React Learning",
      React.createElement("div", null, "Let's rock and roll")
    );
  }
}

const container = document.getElementById("react-container");
ReactDOM.render(React.createElement(ReactContainer), container)
