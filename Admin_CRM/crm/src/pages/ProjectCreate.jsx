

import InputTextCard from '../components/InputTextCard';
import UploadImageCard from '../components/UploadImageCard';
import TextAreaCard from '../components/TextAreaCard';
import FileUploadCard from '../components/FileUploadCard';
import MemberSelectionCard from '../components/MemberSelectionCard';

const ProjectCreate = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <InputTextCard title="Project Name" />
                    <UploadImageCard  title="Project Image"/>
                    <TextAreaCard title="Project Description" />
                    <MemberSelectionCard title="Assigned To 0 Members" optionName="Brandon"/>
                    <FileUploadCard title="Attached Files"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCreate;
