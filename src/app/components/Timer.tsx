import * as React from "react";
import TimeInput from "react-time-input";
interface timer {
  description: string;
  isRunning: boolean;
  duration: Date;
  draft: boolean;
  initialTime?: string;
}

export const Timer = (props: timer) => {
  //@ts-ignore comment
  const { draft, description, isRunning, initialTime } = props;
  return (
    <div>
      {draft ? (
        <div>
          ⏰<input type="text" placeholder="add interval" value={description} />
          <TimeInput initTime={initialTime} />
          <input type="button" value="➕" />
        </div>
      ) : (
        <div>
          {isRunning ? <div>{description}▶</div> : <div>{description}⏹</div>}
        </div>
      )}
    </div>
  );
};
