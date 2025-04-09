const Message = ({ messageData }) => {
  if (!messageData) return <></>;
  const { msg, color } = messageData;
  return (
    <div
      className={`fixed top-10 left-1/2 flex h-7 w-100 -translate-x-1/2 transform items-center justify-center ${color === "green" ? "bg-green-300" : ""} ${color === "red" ? "bg-red-300" : ""} rounded-2xl`}
    >
      {msg}
    </div>
  );
};

export default Message;
