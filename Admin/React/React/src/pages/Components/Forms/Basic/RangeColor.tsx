import React from "react";

const RangeColor = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Range Color Variant</h6>

                    <div className="grid items-center grid-cols-1 gap-5 xl:grid-cols-3">
                        <div>
                            <label htmlFor="DefaultRange" className="inline-block mb-2 text-base font-medium">Default Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none bg-slate-200 dark:bg-zink-600" id="DefaultRange" />
                        </div>
                        <div>
                            <label htmlFor="GreenRange" className="inline-block mb-2 text-base font-medium">Green Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-green bg-slate-200 dark:bg-zink-600" id="GreenRange" />
                        </div>
                        <div>
                            <label htmlFor="OrangeRange" className="inline-block mb-2 text-base font-medium">Orange Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-orange bg-slate-200 dark:bg-zink-600" id="OrangeRange" />
                        </div>
                        <div>
                            <label htmlFor="SkyRange" className="inline-block mb-2 text-base font-medium">Sky Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-sky bg-slate-200 dark:bg-zink-600" id="SkyRange" />
                        </div>
                        <div>
                            <label htmlFor="YellowRange" className="inline-block mb-2 text-base font-medium">Yellow Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-yellow bg-slate-200 dark:bg-zink-600" id="YellowRange" />
                        </div>
                        <div>
                            <label htmlFor="RedRange" className="inline-block mb-2 text-base font-medium">Red Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-red bg-slate-200 dark:bg-zink-600" id="RedRange" />
                        </div>
                        <div>
                            <label htmlFor="PurpleRange" className="inline-block mb-2 text-base font-medium">Purple Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-purple bg-slate-200 dark:bg-zink-600" id="PurpleRange" />
                        </div>
                        <div>
                            <label htmlFor="darkRange" className="inline-block mb-2 text-base font-medium">Dark Range</label>
                            <input type="range" min="0" max="5" step="3" className="w-full h-2 rounded-md appearance-none range-dark bg-slate-200 dark:bg-zink-600" id="darkRange" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RangeColor;