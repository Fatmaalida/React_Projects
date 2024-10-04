
const SocialMediaCard = ({ platform, iconClass, bgColor, textColor }) => {
    return (
        <li className="list-inline-item">
            <a href="javascript:void(0)" className={`social-list-item ${bgColor} ${textColor} border-${bgColor}`}>
                <i className={iconClass}></i>
            </a>
        </li>
    );
};

export default SocialMediaCard;
