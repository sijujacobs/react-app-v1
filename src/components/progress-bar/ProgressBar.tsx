import { useState } from "react";

const ProgressBar: React.FC = () => {
  const [progressValue, setProgressValue] = useState(0);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    if (name === "fill") {
      if (progressValue >= 100) return;
      const intervalId = setInterval(() => {
        setProgressValue((prev) => {
          if (prev + 2 >= 100) {
            clearInterval(intervalId);
            return 100;
          }
          return prev + 2;
        });
      }, 60);
    } else if (name === "clear") {
      setProgressValue(0);
    }
  };
  return (
    <div>
      <label>Progress:</label>
      <progress id="file" value={progressValue} max="100">
        {" "}
        32%{" "}
      </progress>
      <button name="fill" onClick={onClickHandler}>
        Fill
      </button>
      <button name="clear" onClick={onClickHandler}>
        Clear
      </button>
    </div>
  );
};
export default ProgressBar;
