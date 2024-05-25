import React from "react";

const Inbox = ({ placeholder }: any) => {
  return (
    <div>
      <input className="border-2" type="text" placeholder={placeholder} />
    </div>
  );
};

export default Inbox;
