import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div classNameName="sidebar">
      <div classNameName="top">
        <img
          src={assets.menu_icon}
          alt=""
          classNameName="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div classNameName="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div classNameName="recent">
            <p classNameName="recent-title">Recent</p>
            
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} classNameName="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 12)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div classNameName="bottom">
        <div classNameName="bottom-item recent-history">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Get Help</p> : null}
        </div>
        <div classNameName="bottom-item recent-history">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div classNameName="bottom-item recent-history">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
