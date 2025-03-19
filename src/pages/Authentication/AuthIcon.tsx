import React from "react";
// Import your custom image


const AuthIcon = () => {
    // Make sure the path is correct - should start with / if in public folder root
    const customImage = "/spss.jpg"; 
    
    return (
        <React.Fragment>
            <div className="absolute hidden opacity-80 ltr:-left-16 rtl:-right-16 -top-10 md:block">
                <img 
                    src={customImage} 
                    alt="SPSS logo" 
                    className="w-auto h-[100px]" 
                />
            </div>
        </React.Fragment>
    );
}

export default AuthIcon;