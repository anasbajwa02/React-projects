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
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 12)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-history">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Get Help</p> : null}
        </div>
        <div className="bottom-item recent-history">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-history">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
