import Portal from "../portal";
import { IMessageProps } from "./interface";

const LaunchDetails = ({ mark }: IMessageProps): JSX.Element => {
  return (
    <Portal>
      <div className="message">
        <div className="message__content">
          <p>Name: {mark.name}</p>
          <p>LaunchPad Name: {mark.pad.name}</p>
          <p>Time Of Launch: {new Date(mark.window_start).toISOString()}</p>
          <p></p>
        </div>
      </div>
    </Portal>
  );
};

export default LaunchDetails;
