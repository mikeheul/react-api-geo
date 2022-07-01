import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Department from './Department';

const Departments = () => {

    const [departmentsData, setDepartmentsData] = useState([]);

    useEffect(() => {
        axios
            .get('https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion,region')
            .then((res) => setDepartmentsData(res.data))
    }, [])

    return (
        <div>
            <div className='infos'>
                <h3>Il y a { departmentsData.length } régions</h3>
            </div>
            <div className='departments-container'>

            { departmentsData
                .sort((a, b) => (a.nom > b.nom) ? 1 : -1)
                .map((department, index) => (
                    <Department key={index} department={department} />
                    ))
            }
            </div>
        </div>
    );
};

export default Departments;