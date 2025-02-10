import React from "react";

// Image
import image4 from "assets/images/small/img-4.jpg";
import image9 from "assets/images/small/img-9.jpg";
import image10 from "assets/images/small/img-10.jpg";


const CardAnimation = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Card Animation</h5>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
                <a className="block overflow-hidden transition card group/card hover:shadow-lg" href="#!">
                    <div className="relative">
                        <img className="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-t-md" src={image4} alt="" />
                    </div>
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="mt-2 text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                </a>
                <a className="block overflow-hidden transition card group/card hover:shadow-lg" href="#!">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                    <div className="relative">
                        <img className="transition-transform duration-500 ease-in-out group-hover/card:scale-105 rounded-b-md" src={image9} alt="" />
                    </div>
                </a>
                <a className="block overflow-hidden transition card hover:shadow-lg" href="#!">
                    <img className="rounded-t-md" src={image10} alt="" />
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                </a>
                <a className="block overflow-hidden transition card hover:shadow-lg hover:-translate-y-1" href="#!">
                    <img className="rounded-t-md" src={image10} alt="" />
                    <div className="card-body">
                        <h6 className="mb-4 text-15">
                            Card title
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                </a>
            </div>
        </React.Fragment>
    );
}

export default CardAnimation;