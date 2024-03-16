import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({showCooks}) => {
    const [recipe_name, preparing_time, calories] = showCooks;
    return (
        <div className='border w-[100%] text-center flex flex-col p-6 rounded-xl space-y-4'>
            <h3 className='text-2xl font-semibold text-[#282828]'>Want to cookssss: 01</h3>
            <div className="divider"></div>
            <table className=''>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                <tr>
                <td>tamim</td>
                    <td>7h</td>
                    <td>40</td>
                </tr>
            </table>
            <div className="divider"></div>
            
        </div>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;