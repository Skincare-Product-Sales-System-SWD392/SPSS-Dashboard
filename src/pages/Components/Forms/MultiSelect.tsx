import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import { MoveRight } from "lucide-react";

const options= [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "cherry", label: "Cherry" },
    { value: "coconut", label: "Coconut" },
    { value: "grapefruit", label: "Grapefruit" },
    { value: "kiwi", label: "Kiwi" },
    { value: "lemon", label: "Lemon" },
    { value: "lime", label: "Lime" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "papaya", label: "Papaya" },
];

const Optgroup = [
    {
        label: "Cars",
        options: [
            { value: "chevrolet", label: "Chevrolet" },
            { value: "fiat", label: "Fiat" },
            { value: "ford", label: "Ford" },
            { value: "honda", label: "Honda" },
            { value: "hyundai", label: "Hyundai" },
            { value: "kia", label: "Kia" },
            { value: "mahindra", label: "Mahindra" },
            { value: "maruti", label: "Maruti" },
            { value: "mistubishi", label: "Mistubishi" },
            { value: "mg", label: "MG" },
            { value: "nissan", label: "Nissan" },
            { value: "renault", label: "Renault" },
            { value: "skoda", label: "Skoda" },
            { value: "tata", label: "Tata" },
            { value: "toyota", label: "Toyota" },
            { value: "volkswagen", label: "Volkswagen" },
        ],
    },
];

const OptgroupFilter= [
    {
        label: "Skoda",
        options: [
            { value: "kushaq", label: "Kushaq" },
            { value: "superb", label: "Superb" },
            { value: "octavia", label: "Octavia" },
            { value: "rapid", label: "Rapid" },
        ],
    },
    {
        label: "Volkswagen",
        options: [
            { value: "polo", label: "Polo" },
            { value: "taigun", label: "Taigun" },
            { value: "vento", label: "Vento" },
        ],
    },
];

const FormMultiSelect = () => {

    const [selected, setSelected] = React.useState(["apple", "blueberry", "cherry"]);
    const [selectedOptGroup, setSelectedOptGroup] = React.useState(["hyundai", "skoda", "tata", "toyota",]);
    const [selectedFilter, setSelectedFilter] = React.useState(["luna"]);

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Multi Select" pageTitle="Forms" />

                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="border-slate-200 card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Basic Example</h6>
                            <DualListBox
                                options={options}
                                selected={selected}
                                onChange={(e: any) => setSelected(e)}
                                icons={{
                                    moveLeft: <span className="mdi mdi-chevron-left" key="key" />,
                                    moveAllLeft: [
                                        <span className="mdi mdi-chevron-double-left" key="key" />,
                                    ],
                                    moveRight: <MoveRight />,
                                    moveAllRight: [
                                        <span className="mdi mdi-chevron-double-right" key="key" />,
                                    ],
                                    moveDown: <span className="mdi mdi-chevron-down" key="key" />,
                                    moveUp: <span className="mdi mdi-chevron-up" key="key" />,
                                    moveTop: (
                                        <span className="mdi mdi-chevron-double-up" key="key" />
                                    ),
                                    moveBottom: (
                                        <span className="mdi mdi-chevron-double-down" key="key" />
                                    ),
                                }}
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Headers Multi Select</h6>
                            <DualListBox
                                canFilter
                                filterCallback={(Optgroup: any, filterInput: any) => {
                                    if (filterInput === "") {
                                        return true;
                                    }
                                    return new RegExp(filterInput, "i").test(Optgroup.label);
                                }}
                                filterPlaceholder="Search..."
                                options={Optgroup}
                                selected={selectedOptGroup}
                                onChange={(e: any) => setSelectedOptGroup(e)}
                                icons={{
                                    moveLeft: <span className="fa fa-chevron-left" />,
                                    moveAllLeft: [
                                        <span key={0} className="fa fa-chevron-left" />,
                                        <span key={1} className="fa fa-chevron-left" />,
                                    ],
                                    moveRight: <span className="fa fa-chevron-right" />,
                                    moveAllRight: [
                                        <span key={0} className="fa fa-chevron-right" />,
                                        <span key={1} className="fa fa-chevron-right" />,
                                    ],
                                    moveDown: <span className="fa fa-chevron-down" />,
                                    moveUp: <span className="fa fa-chevron-up" />,
                                    moveTop: <span className="fa fa-double-angle-up" />,
                                    moveBottom: <span className="fa fa-double-angle-down" />,
                                }}
                            />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Option Groups</h6>
                            <DualListBox
                                canFilter
                                filterCallback={(Optgroup: any, filterInput: any) => {
                                    if (filterInput === "") {
                                        return true;
                                    }
                                    return new RegExp(filterInput, "i").test(Optgroup.label);
                                }}
                                filterPlaceholder="Search..."
                                options={OptgroupFilter}
                                selected={selectedFilter}
                                onChange={(e: any) => setSelectedFilter(e)}
                                icons={{
                                    moveLeft: <span className="mdi mdi-chevron-left" key="key" />,
                                    moveAllLeft: [
                                        <span className="mdi mdi-chevron-double-left" key="key" />,
                                    ],
                                    moveRight: <span className="mdi mdi-chevron-right" key="key" />,
                                    moveAllRight: [
                                        <span className="mdi mdi-chevron-double-right" key="key" />,
                                    ],
                                    moveDown: <span className="mdi mdi-chevron-down" key="key" />,
                                    moveUp: <span className="mdi mdi-chevron-up" key="key" />,
                                    moveTop: (
                                        <span className="mdi mdi-chevron-double-up" key="key" />
                                    ),
                                    moveBottom: (
                                        <span className="mdi mdi-chevron-double-down" key="key" />
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FormMultiSelect;