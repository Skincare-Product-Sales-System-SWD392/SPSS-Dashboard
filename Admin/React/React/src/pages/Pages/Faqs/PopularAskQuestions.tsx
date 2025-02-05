import React from "react";
import Collapse from "Common/Components/Collapse/Collapse";
import { ChevronDown, ChevronUp } from "lucide-react";
import PrismCode from "Common/Components/Prism";

const PopularAskQuestions = () => {

    const [enableDark, setEnableDark] = React.useState<boolean>(true);
    const [plugins, setPlugins] = React.useState<boolean>(true);
    const [enableCustomize, setEnableCustomize] = React.useState<boolean>(true);
    const [enableResponsive, setEnableResponsive] = React.useState<boolean>(true);

    return (
        <React.Fragment>
            <h5 className="mb-5 underline">Popular Ask Questions</h5>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div>
                    <Collapse>
                        <Collapse.Trigger className="flex items-center w-full p-3 mb-2 text-left card collapsible-header group/item">
                            How to install Tailwind CSS in a project?
                            <div className="ltr:ml-auto rtl:mr-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content card">
                            <div className="card-body">
                                <p className="mb-3 text-slate-500 dark:text-zink-200">To install Tailwind CSS, you can use npm or yarn by running the following commands:</p>
                                <ol className="flex flex-col gap-2 list-decimal list-inside">
                                    <li>
                                        <b>Using npm</b>
                                        <div className="mt-2">
                                            <PrismCode code={`npm install tailwindcss`} language={("js")} plugins={["line-numbers"]} />
                                        </div>
                                    </li>
                                    <div className="text-center">
                                        OR
                                    </div>
                                    <li>
                                        <b>Using yarn</b>
                                        <div className="mt-2">
                                            <PrismCode code={`yarn add tailwindcss`} language={("js")} plugins={["line-numbers"]} />
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </Collapse.Content>
                    </Collapse>
                    <Collapse isOpen={enableDark} toggle={() => setEnableDark(!enableDark)}>
                        <Collapse.Trigger className="flex items-center w-full p-3 mb-2 text-left card collapsible-header group/item">
                            How to enable dark mode in Tailwind CSS?
                            <div className="ltr:ml-auto rtl:mr-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content card">
                            <div className="card-body">
                                <p className="mb-3 text-slate-500 dark:text-zink-200">To enable dark mode in Tailwind CSS, update your <code className="text-xs text-pink-500 select-all">tailwind.config.js</code> file with the <code className="text-xs text-pink-500 select-all">darkMode</code> option. You can choose between two different dark mode strategies: <code className="text-xs text-pink-500 select-all">media</code> or <code className="text-xs text-pink-500 select-all">class</code>.</p>
                                <p className="mb-3 text-slate-500 dark:text-zink-200">Using <code className="text-xs text-pink-500 select-all">class</code>, the dark mode is enabled by adding a <code className="text-xs text-pink-500 select-all">.dark</code> class to an ancestor element of your components:</p>
                                <PrismCode code={`module.exports = {
    darkMode: 'class', // or 'media'
    // ...
    }`} language={("js")} plugins={["line-numbers"]} />
                            </div>
                        </Collapse.Content>
                    </Collapse>
                    <Collapse isOpen={plugins} toggle={() => setPlugins(!plugins)}>
                        <Collapse.Trigger className="flex items-center w-full p-3 mb-2 text-left card collapsible-header group/item">
                            How to use plugins in Tailwind CSS?
                            <div className="ltr:ml-auto rtl:mr-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content card">
                            <div className="card-body">
                                <p className="mb-3 text-slate-500 dark:text-zink-200">To get started with your first plugin, import Tailwind’s <code className="text-xs text-pink-500 select-all">plugin</code> function from <code className="text-xs text-pink-500 select-all">tailwindcss/plugin</code>. Then inside your <code className="text-xs text-pink-500 select-all">plugins</code> array, call the imported <code className="text-xs text-pink-500 select-all">plugin</code> function with an anonymous function as the first argument.</p>
                                <PrismCode code={`const plugin = require('tailwindcss/plugin')

    module.exports = {
        plugins: [
            plugin(function({addUtilities, addComponents, e, config}) {
            // Add your custom styles here
            }),
    ]
    }`} language={("js")} plugins={["line-numbers"]} />
                            </div>
                        </Collapse.Content>
                    </Collapse>
                </div>
                <div>
                    <Collapse isOpen={enableCustomize} toggle={() => setEnableCustomize(!enableCustomize)}>
                        <Collapse.Trigger className="flex items-center w-full p-3 mb-2 text-left card collapsible-header group/item">
                            How to customize the configuration file in Tailwind CSS?
                            <div className="ltr:ml-auto rtl:mr-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content card">
                            <div className="card-body">
                                <p className="mb-3 text-slate-500 dark:text-zink-200">You can customize the <code className="text-xs text-pink-500 select-all">tailwind.config.js</code> file to override the default configuration options provided by Tailwind CSS. The configuration file follows the following structure:</p>
                                <PrismCode code={`module.exports = {
        purge: [],
        theme: {
            extend: {
                ...
            },
        },
        variants: {},
        plugins: [],
    }`} language={("js")} plugins={["line-numbers"]} />
                            </div>
                        </Collapse.Content>
                    </Collapse>
                    <Collapse isOpen={enableResponsive} toggle={() => setEnableResponsive(!enableResponsive)}>
                        <Collapse.Trigger className="flex items-center w-full p-3 mb-2 text-left card collapsible-header group/item">
                            How to use responsive variants in Tailwind CSS?
                            <div className="ltr:ml-auto rtl:mr-auto shrink-0">
                                <ChevronDown className="hidden size-4 group-[.show]/item:inline-block"></ChevronDown>
                                <ChevronUp className="inline-block size-4 group-[.show]/item:hidden"></ChevronUp>
                            </div>
                        </Collapse.Trigger>
                        <Collapse.Content className="collapsible-content card">
                            <div className="card-body">
                                <p className="mb-3 text-slate-500 dark:text-zink-200">Tailwind CSS generates responsive variants for most utilities, allowing you to create responsive designs easily. By default, it includes four breakpoints:</p>

                                <ul className="flex flex-col gap-2 mb-2 list-disc list-inside">
                                    <li><code className="text-xs text-pink-500 select-all">sm</code>: 640px</li>
                                    <li><code className="text-xs text-pink-500 select-all">md</code>: 768px</li>
                                    <li><code className="text-xs text-pink-500 select-all">lg</code>: 1024px</li>
                                    <li><code className="text-xs text-pink-500 select-all">xl</code>: 1280px</li>
                                </ul>

                                <PrismCode code={`<div class="lg:flex"">
    <!-- Your content here -->
    </div>`} language={("html")} plugins={["line-numbers"]} />
                            </div>
                        </Collapse.Content>
                    </Collapse>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PopularAskQuestions;