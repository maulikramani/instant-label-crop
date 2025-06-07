import "./MessageBox.css";
import { CircleX } from "lucide-react";

interface MessageBoxProps {
  message: string;
  type: "success" | "info" | "warning" | "error" | null;
  onClose: () => void;
}

function MessageBox({ message, type, onClose }: MessageBoxProps) {
  let containerStyles: string = "message mt-3";
  if (type) {
    containerStyles += ` ${type}-message`;
  }

  console.log(containerStyles);

  return (
    <div id="message-container" className={containerStyles} role="alert">
      <span>{message}</span>
      {message && type != "info" && (
        <button className="message-close" aria-label="Close Message">
          <CircleX onClick={onClose} />
        </button>
      )}
    </div>
  );
}

export default MessageBox;
