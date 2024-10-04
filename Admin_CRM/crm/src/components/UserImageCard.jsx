

export function UserImageCard({imageSrc}) {

    return (
        <div className="flex-shrink-0 me-4">
            <div className="avatar-md">
                <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    <img src={imageSrc} height="30" />
                </span>
            </div>
        </div>
    );
}

