import React from "react";

// Image
import avatar2 from "assets/images/users/avatar-2.png";

const SquareCircular = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Square Avatar with Radius</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <img src={avatar2} alt="" className="h-8 rounded-md" />
                            <img src={avatar2} alt="" className="h-10 rounded-md" />
                            <img src={avatar2} alt="" className="h-12 rounded-md" />
                            <img src={avatar2} alt="" className="rounded-md h-14" />
                            <img src={avatar2} alt="" className="h-16 rounded-md" />
                            <img src={avatar2} alt="" className="h-20 rounded-md" />
                            <img src={avatar2} alt="" className="h-24 rounded-md" />
                            <img src={avatar2} alt="" className="rounded-md h-28" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Circular Avatar</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <img src={avatar2} alt="" className="h-8 rounded-full" />
                            <img src={avatar2} alt="" className="h-10 rounded-full" />
                            <img src={avatar2} alt="" className="h-12 rounded-full" />
                            <img src={avatar2} alt="" className="rounded-full h-14" />
                            <img src={avatar2} alt="" className="h-16 rounded-full" />
                            <img src={avatar2} alt="" className="h-20 rounded-full" />
                            <img src={avatar2} alt="" className="h-24 rounded-full" />
                            <img src={avatar2} alt="" className="rounded-full h-28" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SquareCircular;