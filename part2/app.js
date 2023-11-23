class ReactContainerTwo extends React.Component {
  // JSX tags
  // JSX there should be one parent element
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>Lets rock and roll - this is babel</div>
      </div>
    );
  }
}

const containerFour = document.getElementById("react-container");
// Direclty pass the component to render
ReactDOM.render(<ReactContainerTwo />, containerFour);