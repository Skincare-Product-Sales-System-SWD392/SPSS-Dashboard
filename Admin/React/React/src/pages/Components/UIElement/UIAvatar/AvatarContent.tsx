import React from "react";

const AvatarContent = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Square Avatar with Content</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center justify-center size-8 rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-10 rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-12 rounded-md text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center rounded-md size-14 text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-16 text-xl rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-20 text-2xl rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-24 text-2xl rounded-md bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center text-3xl rounded-md size-28 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4">Circular Avatar with Content</h6>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center justify-center size-8 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-12 rounded-full text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center rounded-full size-14 text-15 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-16 text-xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-20 text-2xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center size-24 text-2xl rounded-full bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                            <div className="flex items-center justify-center text-3xl rounded-full size-28 bg-custom-100 text-custom-500 dark:bg-custom-950">A</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AvatarContent;