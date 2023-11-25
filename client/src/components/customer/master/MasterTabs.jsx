import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ButtonPrimaryPink from '../../common/buttons/ButtonPrimaryPink';
import '../master/MasterTabs.css'
import Portfolio from './Portfolio';

function MasterTabs() {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState('Enter somthing about your experience');

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
        // You can save the text to your database or perform other actions here
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Tabs
            defaultActiveKey="me-and-my-portfolio"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="me-and-my-portfolio" title="Me and my Portfolio">
                <div className='tab-inner-wrapper'>
                    <div className="form-field">
                        <p>Name & Fammily name</p>

                        <div className='profile-img-div'>
                            <img src="/images/master/default-profile.jpg" alt="" />
                        </div>

                        <div className='profile-img-div'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+359 884 666 367</p>
                        </div>

                        <div className='profile-img-div'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>georgiangelov@abv.bg</p>
                        </div>

                        {isEditing ? (
                            <div className='profile-bio'>
                                <textarea value={text} onChange={handleInputChange} />
                                <button onClick={handleSaveClick}>Save</button>
                            </div>
                        ) : (
                            <div className='profile-bio'>
                                <p>{text}</p>
                                <button onClick={handleEditClick}>Edit</button>
                            </div>
                        )}

                    </div>

                </div>

                <div className='tab-inner-wrapper portfolio'>
                    <Portfolio />
                    <ButtonPrimaryPink text={'Add to my portfolio'} />
                </div>


            </Tab>

            <Tab eventKey="available-projects" title="Available projects">
                <div className='tab-inner-wrapper'>

                    <ul className='ul-list-item'>
                        <li className="list-item">
                            <div className='list-info'>
                                <i className="fas fa-map-marker-alt" />
                                <span>Address</span>
                            </div>

                            <div className='list-info'>
                                <i className="fas fa-image" />
                                <span>Type of Plaster</span>
                            </div>


                            <div className='list-info'>
                                <i className="fas fa-table-cells" />
                                <span>Number</span>
                            </div>


                            <div className='list-info'>
                                <i className="fas fa-ruler-horizontal" />
                                <span>Number</span>
                            </div>

                            <div className='list-info'>
                                <i className="fas fa-square-full" />
                                <span>Number</span>
                            </div>
                            <div className='list-info'>
                                <i className="fas fa-brush" />
                                <span>Color</span>
                            </div>
                            <div className="list-item-buttons">
                                <button>Apply</button>
                                <button>Not interested</button>
                            </div>
                        </li>


                        <li className="list-item">
                            <div className='list-info'>
                                <i className="fas fa-map-marker-alt" />
                                <span>Address</span>
                            </div>

                            <div className='list-info'>
                                <i className="fas fa-image" />
                                <span>Type of Plaster</span>
                            </div>


                            <div className='list-info'>
                                <i className="fas fa-table-cells" />
                                <span>Number</span>
                            </div>


                            <div className='list-info'>
                                <i className="fas fa-ruler-horizontal" />
                                <span>Number</span>
                            </div>

                            <div className='list-info'>
                                <i className="fas fa-square-full" />
                                <span>Number</span>
                            </div>
                            <div className='list-info'>
                                <i className="fas fa-brush" />
                                <span>Color</span>
                            </div>
                            <div className="list-item-buttons">
                                <button>Apply</button>
                                <button>Not interested</button>
                            </div>
                        </li>


                    </ul>
                </div>

            </Tab>

            <Tab eventKey="hired-by" title="Hired by" /*disabled*/>
                <div className='tab-inner-wrapper-hired-by'>

                    <ul className='ul-list-item'>


                        <li className="list-item">
                            <div className='list-item-bri'>

                                <div className="form-field">
                                    <p>Name & Fammily name</p>

                                    <div className='profile-img-div'>
                                        <img src="/images/master/default-profile.jpg" alt="" />
                                    </div>

                                    <div className='profile-img-div'>
                                        <i className="fa-solid fa-phone"></i>
                                        <p>+359 884 666 367</p>
                                    </div>

                                    <div className='profile-img-div'>
                                        <i className="fa-solid fa-envelope"></i>
                                        <p>georgiangelov@abv.bg</p>
                                    </div>
                                </div>

                            </div>


                            <div className="list-item-bri">

                                <div className='list-info'>
                                    <i className="fas fa-map-marker-alt" />
                                    <span>Address</span>
                                </div>

                                <div className='list-info'>
                                    <i className="fas fa-image" />
                                    <span>Type of Plaster</span>
                                </div>


                                <div className='list-info'>
                                    <i className="fas fa-table-cells" />
                                    <span>Number</span>
                                </div>


                                <div className='list-info'>
                                    <i className="fas fa-ruler-horizontal" />
                                    <span>Number</span>
                                </div>

                                <div className='list-info'>
                                    <i className="fas fa-square-full" />
                                    <span>Number</span>
                                </div>
                                <div className='list-info'>
                                    <i className="fas fa-brush" />
                                    <span>Color</span>
                                </div>
                                <div className="list-item-buttons">
                                    <button>Cancel order</button>
                                </div>

                            </div>


                        </li>
                    </ul>
                </div>


            </Tab>
        </Tabs>
    );
}

export default MasterTabs;