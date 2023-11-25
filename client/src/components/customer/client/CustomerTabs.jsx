import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ButtonPrimaryPink from '../../common/buttons/ButtonPrimaryPink';
import './CustomerTabs.css'

function CustomerTabs() {
    return (
        <Tabs
            defaultActiveKey="create-site"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="create-site" title="Create Site">
                <form className='tab-inner-wrapper'>
                    <div className="form-field">
                        <label htmlFor="location">Location</label>
                        <input id="location" name="location" defaultValue={""} />
                        <a href="#" className="location-icon">
                            <i className="fas fa-map-marker-alt" /> Pin your location on the map
                        </a>
                    </div>

                    <div className="form-field">
                        <label htmlFor="plaster">Type of Plaster</label>
                        <input type="text" id="plaster" name="plaster" />
                        <a href="#" className="plaster-icon">
                            <i className="fas fa-image" /> View amd pick from Gallery
                        </a>
                    </div>

                    <div className="form-field">
                        <label htmlFor="squareMeters">Square Meters</label>
                        <input
                            type="number"
                            id="squareMeters"
                            name="squareMeters"
                            min={0}
                            step={1}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="linearMeters">Linear Meters</label>
                        <input
                            type="number"
                            id="linearMeters"
                            name="linearMeters"
                            min={0}
                            step={1}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="numWalls">Number of Walls</label>
                        <input type="number" id="numWalls" name="numWalls" min={0} step={1} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="color-picker-pallet">Chose color</label>
                        <input type="color" className="color-picker" id='color-picker-pallet' />
                    </div>

                    <div className="form-button">
                        <ButtonPrimaryPink type={'submit'} text={'Submit'}></ButtonPrimaryPink>
                    </div>
                </form>

            </Tab>

            <Tab eventKey="sites-list" title="Sites list">
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
                                <button>Edit</button>
                                <button>Delete</button>
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
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>


                    </ul>
                </div>

            </Tab>

            <Tab eventKey="my-contacts" title="My contacts" /*disabled*/>
                <div className='tab-inner-wrapper'>

                    <ul className='ul-list-item'>
                    <li className="list-item" style={{ fontSize: '2em', fontWeight:'bold' }}>This area of the site is under development</li>                    </ul>
                </div>

            </Tab>
        </Tabs>
    );
}

export default CustomerTabs;