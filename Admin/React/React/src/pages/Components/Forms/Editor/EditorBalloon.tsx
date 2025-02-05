import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const EditorBalloon = () => {

    const editorRef = useRef<any>(null);
    const [editor, setEditor] = useState(false);  // Adjusted the initial state

    useEffect(() => {
        // Removed unnecessary import of CKEditor and ClassicEditor

        // editorRef.current = { CKEditor, BalloonEditor };
        setEditor(true);
    }, []);

    const [data, setData] = useState(`
        <p>Like all the great things on earth, traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
        <h4>Appreciation of diversity</h4>
        <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
        <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist. But when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
        <ul>
            <li>buy the ticket</li>
            <li><i>start your adventure</i></li>
        </ul>
    `);

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Balloon Editor" pageTitle="Forms" />

                {/* <div className="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                    Notes: <a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-react" className="font-medium underline">https://www.npmjs.com/package/@ckeditor/ckeditor5-react</a> more details
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Balloon Ckeditor</h6>
                        <div className="ckeditor-balloon">
                        {editor && (
                                <CKEditor
                                    editor={BalloonEditor}
                                    data={data}
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setData(data);
                                    }}
                                />
                            )}

                        </div>
                    </div>
                </div> */}

            </div>
        </React.Fragment>
    );
}

export default EditorBalloon;