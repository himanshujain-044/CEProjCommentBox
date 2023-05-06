import "./App.css";
import CommentBox from "./components/CommentBox/CommentBox";

function App() {
  const data = [
    {
      id: 3434,
      comment: "This is sample comment. All paramters are okay for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 4454,
      comment:
        "This is sample comment. All paramters are okay for this order. Industry Dummy Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliqua.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "08/05/2023 10:30:00",
    },
    {
      id: 5252,
      comment: "Please check your Estimated Dock Date for this order.",
      dateAndTime: "09/05/2023 10:30:00",
    },
  ];

  return <CommentBox data={data} />;
}

export default App;
