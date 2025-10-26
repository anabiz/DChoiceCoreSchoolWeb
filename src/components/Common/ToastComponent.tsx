import * as React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

type Props = {
  icon?: React.ReactElement;
  title: string;
  body?: string;
  timeInMs?: number;
  error?: boolean;
};

const ToastComponent: React.FC<Props> = ({
  error,
  title,
  body,
  timeInMs = 30000,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, timeInMs / 100);

    return () => {
      clearInterval(interval);
      setProgress(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 z-50">
        <div className="flex justify-center items-center gap-1">
          <p className="font-display text-xs font-semibold text-center">
            {title}{" "}
            <span className="font-normal font-display text-xs">{body}</span>
          </p>
        </div>
      </div>
      <div className="w-[27px] h-[27px] absolute top-[7px] right-[10px] cursor-pointer">
        <CircularProgressbar
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Text size
            textSize: "32px",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: error || title.includes("Error") ? "#ef4444" : "#037a7a",
            textColor: "#484848",
            trailColor: "#EFF1F3",
            backgroundColor:
              error || title.includes("Error") ? "#ef4444" : "#037a7a",
          })}
          strokeWidth={8}
          value={progress}
          text=""
          className="font-10"
        />
      </div>
    </>
  );
};

export default ToastComponent;
