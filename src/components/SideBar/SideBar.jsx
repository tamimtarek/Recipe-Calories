
import PropTypes from 'prop-types';

const SideBar = ({ showCooks, handlePreparing, currentCook }) => {
    

    return (
        <div className='border w-[100%] text-center flex flex-col pt-5 rounded-xl space-y-4'>
            <h3 className='text-2xl font-semibold text-[#282828]'>Want to cooks: {showCooks.length}</h3>
            <div className="divider"></div>
            <div>
                <div className="w-[100%]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                showCooks.map((item, idx) => (
                                    <tr key={idx} className="bg-base-300 text-xs lg:text-base">
                                        <th>{idx + 1}</th>
                                        <td className='hidden lg:block'>{item.recipe_name}</td>
                                        <td className='block lg:hidden'>{item.recipe_name.slice(0,5)}</td>
                                        <td>{item.preparing_time}<br></br> minutes</td>
                                        <td>{item.calories}<br></br> calories</td>
                                        <div>
                                            <button onClick={() => handlePreparing(item)} className="btn text-xs btn-success text-[#150B2B] mt-3 rounded-3xl">Preparing</button>
                                        </div>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold text-[#282828]'>Currently cooking:{currentCook.length}</h3>
                <div className="divider"></div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    currentCook.map((current, idx) => (
                                        <tr key={idx}>
                                            <th>{idx+1}</th>
                                            <td>{current.recipe_name}</td>
                                            <td>{current.preparing_time}<br></br> minutes</td>
                                            <td>{current.calories}<br></br> calories</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-4 m-2'>
                    <div className='text-left'>
                        <h3>Total Time =</h3>
                        <h3>{currentCook.reduce((p, c)=> p + c.preparing_time, 0)} minutes</h3>
                    </div>
                    <div className='text-left'>
                        <h3>Total Calories =</h3>
                        <h3>{currentCook.reduce((p, c)=> p + c.calories, 0)} calories</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    showCooks: PropTypes.array,
    handlePreparing: PropTypes.func,
    currentCook: PropTypes.array
};

export default SideBar;