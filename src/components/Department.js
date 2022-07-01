import React from 'react';

const Department = ({ department }) => {

    let dom = ["01", "02", "03", "04", "05", "06"];

    return (
        <div className={ dom.includes(department.codeRegion) ? 'department-card dom' : 'department-card'}>
            <span className="number">{ department.code }</span>
            <h1>{ department.nom }</h1>
            <p className='department-region'>Région : { department.region.nom }</p>
        </div>
    );
};

export default Department;