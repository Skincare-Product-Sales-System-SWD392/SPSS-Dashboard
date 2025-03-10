import React from "react";
import { Dropdown } from "Common/Components/Dropdown";

// Image
import us from "assets/images/flags/us.svg";
import es from "assets/images/flags/es.svg";
import de from "assets/images/flags/de.svg";
import fr from "assets/images/flags/fr.svg";
import jp from "assets/images/flags/jp.svg";
import it from "assets/images/flags/it.svg";
import ru from "assets/images/flags/ru.svg";
import ae from "assets/images/flags/ae.svg";

const AuthDropdown = () => {

    const [dropImage, setDropImage] = React.useState(us);
    const [dropText, setDropText] = React.useState<string>("English")

    return (
        <React.Fragment>
            <div>
                <Dropdown className="relative text-end">
                    <Dropdown.Trigger type="button" className="inline-flex items-center gap-3 transition-all duration-200 ease-linear dropdown-toggle btn border-slate-200 dark:border-zink-500 group/items focus:border-custom-500 dark:focus:border-custom-500" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        <img src={dropImage} alt="" className="object-cover h-5 rounded-full" />
                        <h6 className="text-base font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">{dropText}</h6>
                    </Dropdown.Trigger>

                    <Dropdown.Content placement="right-end" className="absolute z-50 p-3 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[9rem] flex flex-col gap-3 dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(us); setDropText("English") }}>
                            <img src={us} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">English</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(es); setDropText("Spanish") }}>
                            <img src={es} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Spanish</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(de); setDropText("German") }}>
                            <img src={de} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">German</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(fr); setDropText("French") }}>
                            <img src={fr} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">French</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(jp); setDropText("Japanese") }}>
                            <img src={jp} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Japanese</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(it); setDropText("Italian") }}>
                            <img src={it} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Italian</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(ru); setDropText("Russian") }}>
                            <img src={ru} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Russian</h6>
                        </a>
                        <a href="#!" className="flex items-center gap-3 group/items" onClick={() => { setDropImage(ae); setDropText("Arabic") }}>
                            <img src={ae} alt="" className="object-cover h-4 rounded-full" />
                            <h6 className="text-sm font-medium transition-all duration-200 ease-linear text-slate-600 group-hover/items:text-custom-500 dark:text-zink-200 dark:group-hover/items:text-custom-500">Arabic</h6>
                        </a>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </React.Fragment>
    );
}

export default AuthDropdown;