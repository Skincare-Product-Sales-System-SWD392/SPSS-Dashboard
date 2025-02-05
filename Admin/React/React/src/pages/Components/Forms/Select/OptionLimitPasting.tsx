import React from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

interface Option {
    readonly label: string;
    readonly value?: string;
    readonly options?: Option[];
    readonly isDisabled?: boolean
}

const OptionLimitPasting = () => {

    const CitiesOption: Option[] = [
        { label: "Choose a city", value: "" },
        {
            label: "UK",
            options: [
                { label: "London", value: "London" },
                { label: "Manchester", value: "Manchester" },
                { label: "Liverpool", value: "Liverpool" },
            ],
        },
        {
            label: "FR",
            options: [
                { label: "Paris", value: "Paris" },
                { label: "Lyon", value: "Lyon" },
                { label: "Marseille", value: "Marseille" },
            ],
        },
        {
            label: "DE",
            options: [
                { label: "Hamburg", value: "Hamburg" },
                { label: "Munich", value: "Munich" },
                { label: "Berlin", value: "Berlin" },
            ],
            isDisabled: true,
        },
        {
            label: "US",
            options: [
                { label: "New York", value: "New York" },
                { label: "Washington", value: "Washington", isDisabled: true },
                { label: "Michigan", value: "Michigan" },
            ],
        },
        {
            label: "SP",
            options: [
                { label: "Madrid", value: "Madrid" },
                { label: "Barcelona", value: "Barcelona" },
                { label: "Malaga", value: "Malaga" },
            ],
        },
        {
            label: "CA",
            options: [
                { label: "Montreal", value: "Montreal" },
                { label: "Toronto", value: "Toronto" },
                { label: "Vancouver", value: "Vancouver" },
            ],
        },
    ];

    const projectValues: Option[] = [
        { label: "Project-A", value: "Project-A" },
        { label: "Project-B", value: "Project-B" },
    ];
    const taskValues: Option[] = [
        { label: "Task-1", value: "Task-1" },
    ];

    const disableOption: Option[] = [
        { label: "josh@joshuajohnson.co.uk", value: "josh@joshuajohnson.co.uk", isDisabled: true },
        { label: "joe@bloggs.co.uk", value: "joe@bloggs.co.uk", isDisabled: true }
    ]

    const [task1, setTask1] = React.useState<readonly Option[]>([taskValues[0]]);
    const [project, setProject] = React.useState<readonly Option[]>([projectValues[0], projectValues[1]]);

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Option Groups Multiple</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-multiple-groups="true" multiple</code> attribute.</p>
                    <Select
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-multiple-groups"
                        name="choices-multiple-groups"
                        data-choices data-choices-multiple-groups="true"
                        isMulti
                        options={CitiesOption} />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Set limit values with remove button</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-limit="Required Limit" data-choices-removeItem</code> attribute.</p>
                    <CreatableSelect
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-text-remove-button"
                        data-choices data-choices-limit="3" data-choices-removeItem
                        isMulti
                        delimiter="true"
                        onChange={(newValue: any) => setTask1(newValue)}
                        value={task1} />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Unique values only, no pasting</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-text-unique-true</code> attribute.</p>
                    <CreatableSelect
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-text-unique-values"
                        data-choices data-choices-text-unique-true
                        isMulti
                        onChange={(newValue: any) => setProject(newValue)}
                        value={project}
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Disabled</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-text-disabled-true</code> attribute.</p>
                    <CreatableSelect
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        id="choices-text-disabled"
                        data-choices data-choices-text-disabled-true
                        isDisabled
                        value={[disableOption[0], disableOption[1]]} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default OptionLimitPasting;