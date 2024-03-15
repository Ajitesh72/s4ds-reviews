import "./App.css";
import json from "./A98DB973KW.json";
function App() {
  return (
    <div>
      <p>User Reviews</p>
      {json?.map((eachObj, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: eachObj.reviews }}
        />
      ))}
    </div>
  );
}

export default App;
