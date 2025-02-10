import React from "react";
import Select from 'react-select';
interface Option {
    readonly label: string;
    readonly value?: string;
    readonly options?: Option[];
    readonly isDisabled?: boolean
}

const OptionsMultipleRemove = () => {

    const CitiesOption: Option[] = [
        { label: "Madrid", value: "Madrid" },
        { label: "Toronto", value: "Toronto" },
        { label: "Vancouver", value: "Vancouver" },
        { label: "London", value: "London" },
        { label: "Manchester", value: "Manchester" },
        { label: "Liverpool", value: "Liverpool" },
        { label: "Paris", value: "Paris" },
        { label: "Malaga", value: "Malaga" },
        { label: "Washington", value: "Washington", isDisabled: true },
        { label: "Lyon", value: "Lyon" },
        { label: "Marseille", value: "Marseille" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
        { label: "Barcelona", value: "Barcelona" },
        { label: "Berlin", value: "Berlin" },
        { label: "Montreal", value: "Montreal" },
        { label: "New York", value: "New York" },
        { label: "Michigan", value: "Michigan" },
    ];

    const RemoveMultipleOptions: Option[] = [
        { label: "Choice 1", value: "Choice 1" },
        { label: "Choice 2", value: "Choice 2" },
        { label: "Choice 3", value: "Choice 3" },
        { label: "Choice 4", value: "Choice 4" }
    ];

    const MultipleOptions: Option[] = [
        { label: "Choice 1", value: "Choice 1" },
        { label: "Choice 2", value: "Choice 2" },
        { label: "Choice 3", value: "Choice 3" },
        { label: "Choice 4", value: "Choice 4" }
    ];

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Options added via config with no sorting</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-sorting-false</code> attribute.</p>
                    <Select
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-single-no-sorting"
                        name="choices-single-no-sorting"
                        data-choices data-choices-sorting-false
                        options={CitiesOption} />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Default Multiple Select</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices multiple</code> attribute.</p>
                    <Select
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-multiple-default"
                        data-choices name="choices-multiple-default"
                        defaultValue={[MultipleOptions[0]]}
                        isMulti
                        options={MultipleOptions}
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">With Remove Button</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices isClearable isMulti</code> attribute.</p>
                    <Select
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="choices-multiple-remove-button"
                        name="choices-multiple-remove-button"
                        defaultValue={[RemoveMultipleOptions[0]]}
                        isClearable
                        isMulti
                        options={RemoveMultipleOptions}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default OptionsMultipleRemove;