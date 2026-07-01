import { Link } from 'react-router-dom';
import { RiArrowRightDownLine, RiArrowRightUpLine } from 'react-icons/ri';
import './circularButton.css';

const CircularButton = ({ tag, name, submitButtonRef }) => {
    const slug = name?.toLowerCase();
    const label = <span>{name}</span>;

    let button = null;
    if (tag === 'a') button = <a href={`#${slug}`}>{label}</a>;
    if (tag === 'link') button = <Link to={`/${slug}`}>{label}</Link>;
    if (tag === 'button')
        button = (
            <button type="submit" ref={submitButtonRef}>
                {label}
            </button>
        );

    return (
        <>
            <div className="right-down-arrow">
                <RiArrowRightDownLine />
            </div>
            <div className="right-up-arrow">
                <RiArrowRightUpLine />
            </div>
            <div className="circular-btn">{button}</div>
        </>
    );
};

export default CircularButton;
