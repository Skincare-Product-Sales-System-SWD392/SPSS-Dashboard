import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const EditorInline = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Inline Editor" pageTitle="Forms" />

                {/* <div className="p-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50">
                    Notes: <a href="https://ckeditor.com/docs/ckeditor5/latest/examples/builds/inline-editor.html" className="font-medium underline">https://ckeditor.com/docs/ckeditor5/latest/examples/builds/inline-editor.html</a> more details
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Classic Ckeditor</h6>
                        <div className="ckeditor-inline">
                            <CKEditor
                                editor={InlineEditor}
                                data={`
                  <p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
                  <h4>Appreciation of diversity</h4>
                  <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
                  <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist. But when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
                  <ul>
                      <li>buy the ticket</li>
                      <li><i>start your adventure</i></li>
                  </ul>
                `}
                            />
                        </div>
                    </div>
                </div> */}

            </div>
        </React.Fragment>
    );
}

export default EditorInline;