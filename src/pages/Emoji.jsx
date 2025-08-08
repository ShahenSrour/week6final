import { useLocation, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../emoji.css";
import "../index.css";

export default function Emoji() {
  const { state } = useLocation();
  const { id } = useParams();
  const emoji = state?.emoji;

  if (!emoji) {
    return <p>Error: Emoji data not found. Try navigating from the main page.</p>;
  }

  return (
    <div id="singular__emoji--container">
      <main id="singular__emoji">
        <div id="singularemojileft">
          <Link to="/" id="buttonperemoji">
            <FontAwesomeIcon icon={faArrowLeft} />
            <p id="textbackstyling">BACK</p>
          </Link>
          <div id="emojiitself">
            <p
              className="emojicoded"
              dangerouslySetInnerHTML={{
                __html: emoji.htmlCode?.join("") || "",
              }}
            />
          </div>
        </div>
        <div id="singularemojiright">
          <p>Emoji Name: {emoji.name}</p>
          <p id="rightemojidesc">Category: {emoji.category}</p>
          <p>Group: {emoji.group}</p>
          <p>Unicode Name: {emoji.unicodeName}</p>
        </div>
      </main>
    </div>
  );
}
