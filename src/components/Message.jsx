const Message = ({ messageData }) => {
  if (!messageData) return <></>;
  const { msg, color } = messageData;

  return (
    <div
      className={`fixed top-10 left-1/2 flex items-center justify-center h-7 w-100 -translate-x-1/2 transform bg-${color}-300 rounded-2xl`}
    >
      {msg}
    </div>
  );
};

export default Message;
