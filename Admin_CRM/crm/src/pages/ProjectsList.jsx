
import ProjectsListCard from "../components/ProjectListCard";


export default function ProjectsList() {


  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Projects List</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                      <li className="breadcrumb-item active">Projects List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col-sm">
                        <div className="search-box me-2 d-inline-block">
                          <div className="position-relative">
                            <input type="text" className="form-control" autoComplete="off" id="searchTableList" placeholder="Search..." />
                            <i className="bx bx-search-alt search-icon"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div className="text-sm-end">
                          <a href="projects-create.html" className="btn btn-success btn-rounded" id="addProject-btn"><i className="mdi mdi-plus me-1"></i> Add New Project</a>
                        </div>
                      </div>
                    </div>
                    <ProjectsListCard></ProjectsListCard>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </>
  );
}