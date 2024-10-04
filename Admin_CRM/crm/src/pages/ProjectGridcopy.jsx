

import GridCard from "../components/GridCard";


export default function ProjectGrid() {


 



    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Projects Grid</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                                            <li className="breadcrumb-item active">Projects Grid</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-sm-6">
                                <div className="card">
                                    <GridCard
                                        imageSrc="jcnjcn"
                                        title="jcnjcn"
                                        description="jcnjcn"
                                        status="jcnjcn"
                                        date="jcnjcn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
