import React from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

interface Options {
    label: string; value?: string; isDisabled?: boolean; options?: Options[];
}

const DefaultGroupSearch = () => {

    const DefaultOptions: Options[] = [
        { label: "", value: "This is a placeholder" },
        { label: "Choice 1", value: "Choice 1" },
        { label: "Choice 2", value: "Choice 2" },
        { label: "Choice 3", value: "Choice 3" }
    ];

    const CitiesOptions: Options[] = [
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

    const OptionGroups: Options[] = [
        { label: "Zero", value: "Zero" },
        { label: "One", value: "One" },
        { label: "Two", value: "Two" },
        { label: "Three", value: "Three" },
        { label: "Four", value: "Four" },
        { label: "Five", value: "Five" },
        { label: "Six", value: "Six" }
    ]
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Default Single Select</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices</code> attribute to set a default single select.</p>
                    <Select
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices name="choices-single-default"
                        options={DefaultOptions}
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Option Groups</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices data-choices-groups</code> attribute to set option group.</p>
                    <CreatableSelect
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="choices-single-groups"
                        data-placeholder="Select City"
                        name="choices-single-groups"
                        options={CitiesOptions} />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Options added via config with no search</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Set <code className="text-xs text-pink-500 select-all">data-choices isSearchable="false" isClearable</code></p>
                    <CreatableSelect
                        className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="choices-single-no-search" name="choices-single-no-search"
                        isClearable
                        isSearchable={false}
                        options={OptionGroups}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default DefaultGroupSearch;