import { Link } from "react-router-dom";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import "./circularButton.css";

const CircularButton = ({ tag, name, submitButtonRef }) => {
    return (
        <>
            <div className="right-down-arrow">
                <RiArrowRightDownLine />
            </div>
            <div className="right-up-arrow">
                <RiArrowRightUpLine />
            </div>
            <div className="circular-btn">
                {tag === "a" && (
                    <a href={`#${name}`}>
                        <span>{name}</span>
                    </a>
                )}
                {tag === "link" && (
                    <Link to={`/${name}`}>
                        <span>{name}</span>
                    </Link>
                )}
                {tag === "button" && (
                    <button type="submit" ref={submitButtonRef}>
                        <span>{name}</span>
                    </button>
                )}
            </div>
        </>
    );
};

export default CircularButton;
