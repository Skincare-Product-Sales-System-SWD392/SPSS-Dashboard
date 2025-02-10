import React from "react";

const VideoTutorial = () => {
    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Products Video Tutorial</h5>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="card">
                    <div className="card-body">
                        <a href="https://www.youtube.com/embed/qYgogv4R8zg?si=_YxUDmc2fDgHyPae" rel="noopener"><h6 className="mb-4 truncate text-15">Setting Up Tailwind CSS</h6></a>
                        <iframe className="w-full rounded-md aspect-video" src="https://www.youtube.com/embed/qYgogv4R8zg?si=_YxUDmc2fDgHyPae" title="Setting Up Tailwind CSS"></iframe>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <a href="https://www.youtube.com/embed/TrftauE2Vyk?si=HRCFmq5956C01yB3" rel="noopener"><h6 className="mb-4 truncate text-15">Composing Utilities with @apply – Tailwind CSS</h6></a>
                        <iframe className="w-full rounded-md aspect-video" src="https://www.youtube.com/embed/TrftauE2Vyk?si=HRCFmq5956C01yB3" title="Composing Utilities with @apply – Tailwind CSS"></iframe>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <a href="https://www.youtube.com/embed/_CntOc4hBcg?si=-gNbpwS69E8EmjvI" rel="noopener"><h6 className="mb-4 truncate text-15">Sorting Tailwind CSS Classes Automatically with Prettier</h6></a>
                        <iframe className="w-full rounded-md aspect-video" src="https://www.youtube.com/embed/_CntOc4hBcg?si=-gNbpwS69E8EmjvI" title="Sorting Tailwind CSS Classes Automatically with Prettier"></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default VideoTutorial;