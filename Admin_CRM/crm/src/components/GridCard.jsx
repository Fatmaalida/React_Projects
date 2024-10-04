
import {UserImageCard} from '../components/UserImageCard'; 
import {ContentCard} from '../components/ContentCard'; 
import {FooterCard} from '../components/FooterCard'; 

export default function GridCard(props) {
    const { imageSrc, title, description, status, date } = props;

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="d-flex">
                    <UserImageCard imageSrc={imageSrc} />
                    <ContentCard title={title} description={description} />
                </div>
            </div>
            <FooterCard status={status} date={date} />
        </div>

    );
}
