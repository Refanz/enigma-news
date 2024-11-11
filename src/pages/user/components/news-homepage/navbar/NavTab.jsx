import React from 'react';
import TabInput from "../../../../../shared/components/TabInput.jsx";
import NewsContent from "../NewsContent.jsx";

function NavTab(props) {
    return (
        <div role="tablist" className="tabs tabs-bordered grid-cols-3 md:w-fit w-full max-w-screen-xl">
            <TabInput label="Home"/>
            <NewsContent/>

            <TabInput label="Olahraga"/>
            <NewsContent/>

            <TabInput label="Pendidikan"/>
            <NewsContent/>
        </div>
    );
}

export default NavTab;