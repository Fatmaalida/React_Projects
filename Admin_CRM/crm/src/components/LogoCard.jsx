

export default function LogoCard({ href, imgSrc, altText, imgHeight = 34 }) {
    return (
        <div>
            <a href={href}>
                <div className="avatar-md profile-user-wid mb-4">
                    <span className="avatar-title rounded-circle bg-light">
                        <img 
                            src={imgSrc} 
                            alt={altText} 
                            className="rounded-circle" 
                            height={imgHeight} 
                        />
                    </span>
                </div>
            </a>
        </div>
    );
}
