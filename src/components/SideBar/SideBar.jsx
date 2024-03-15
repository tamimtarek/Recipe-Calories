import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({showCooks}) => {
    const [recipe_name, preparing_time, calories] = showCooks;
    return (
        <div className='border w-[100%] text-center flex flex-col p-6 rounded-xl space-y-4'>
            <h3 className='text-2xl font-semibold text-[#282828]'>Want to cook: 01</h3>
            <table className=''>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                </tr>
            </table>
            
        </div>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;