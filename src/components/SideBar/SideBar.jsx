
import PropTypes from 'prop-types';

const SideBar = ({ showCooks }) => {

    console.log(showCooks)

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
                                    <tr key={idx} className="bg-base-300">
                                        <th>{idx+1}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}<br></br> minutes</td>
                                        <td>{item.calories}<br></br> calories</td>
                                        <div>
                                            <button className="btn text-xs btn-success text-[#150B2B] mt-3 rounded-3xl hidden lg:block">Preparing</button>
                                        </div>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold text-[#282828]'>Currently cooking: 02</h3>
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
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-4 m-2'>
                    <div className='text-left'>
                        <h3>Total Time =</h3>
                        <h3>45 minutes</h3>
                    </div>
                    <div className='text-left'>
                        <h3>Total Calories =</h3>
                        <h3>1050 calories</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    showCooks: PropTypes.array
};

export default SideBar;