import * as customerService from '../../../services/customerService'

import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './CustomerTabs.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Path from '../../../paths';

function CustomerTabs() {
    const [color, setColor] = useState('');
    const [site, setSite] = useState({});
    const [sitesList, setSitesList] = useState([]);
    const [currentTab, setCurrentTab] = useState('create-site');
    const [success, setSuccess] = useState(false)
    const [formValues, setFormValues] = useState({
        location: "",
        plaster: "",
        squareMeters: "",
        linearMeters: "",
        numWalls: "",
        color: ""

    });


    useEffect(() => {
        console.log('useEffect');
        tabsHandler(currentTab);
        if (currentTab === 'create-site') {
            console.log('render create site');
        }

        if (currentTab === 'sites-list') {
            console.log('show site lists');
            getSitesListHandler();
        }

        if (currentTab === 'my-contacts') {
            console.log('See my contacts');
        }
    }, [currentTab])

    console.log(`JAT - ${currentTab}`);

    const tabsHandler = (eventKey) => {
        console.log(`tabsHandler -> ${eventKey}`)

        setCurrentTab(eventKey)
    }


    const createSiteHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const siteData = Object.fromEntries(formData);

        const resp = await customerService.createSite({ ...siteData, color });

        setSite((oldSite) => ({ ...oldSite, resp }));
        setFormValues({
            location: "",
            plaster: "",
            squareMeters: "",
            linearMeters: "",
            numWalls: "",
            color: ""
        });
        successfullCreateSiteHandler()
        tabsHandler('sites-list');
    }

    const successfullCreateSiteHandler = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 4000);
    }

    const onDelete = (id) => {
        customerService.del(id);
        getSitesListHandler()
    }

    const pickAColorHandler = (e) => {
        const color = e.target.value;
        setColor(color);
    };

    const getSitesListHandler = async () => {
        const currentSitesList = await customerService.getAll();
        // setSitesList((oldList) => ([...oldList, currentSitesList]));
        setSitesList(currentSitesList);
    }

    const siteListItem = sitesList.map((site) => {

        return (
            <li className="list-item" key={site._id}>
                <div className='list-info'>
                    <i className="fas fa-map-marker-alt" />
                    <span>{site.location}</span>
                </div>

                <div className='list-info'>
                    <i className="fas fa-image" />
                    <span>{site.plaster}</span>
                </div>


                <div className='list-info'>
                    <i className="fas fa-table-cells" />
                    <span>{site.squareMeters}</span>
                </div>


                <div className='list-info'>
                    <i className="fas fa-ruler-horizontal" />
                    <span>{site.numWalls}</span>
                </div>

                <div className='list-info'>
                    <i className="fas fa-square-full" />
                    <span>{site.color}</span>
                </div>
                <div className='list-info'>
                    <i className="fas fa-brush" />
                    <span>{site.color}</span>
                </div>
                <div className="list-item-buttons">
                    <Link >
                        <button>Edit</button>
                    </Link>
                    <Link onClick={() => onDelete(site._id)}>
                        <button>Delete</button>
                    </Link>
                </div>
            </li>
        )
    });




    return (
        <Tabs
            defaultActiveKey='create-site'
            id="fill-tab-example"
            className="mb-3"
            fill
            onSelect={(eKey) => setCurrentTab(eKey)}
        >
            <Tab eventKey="create-site" title="Create Site">
                <form className='tab-inner-wrapper' onSubmit={createSiteHandler}  >
                    <div className="form-field">
                        <label htmlFor="location">Location</label>
                        <input id="location"
                            name="location"
                            value={formValues.location}
                            onChange={(e) =>
                                setFormValues({ ...formValues, location: e.target.value })
                            } />
                        <a href="#" className="location-icon">
                            <i className="fas fa-map-marker-alt" /> Pin your location on the map
                        </a>
                    </div>

                    <div className="form-field">
                        <label htmlFor="plaster">Type of Plaster</label>
                        <input type="text"
                            id="plaster"
                            name="plaster"
                            value={formValues.plaster}
                            onChange={(e) =>
                                setFormValues({ ...formValues, plaster: e.target.value })
                            } />
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
                            value={formValues.squareMeters}
                            onChange={(e) =>
                                setFormValues({ ...formValues, squareMeters: e.target.value })
                            }
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
                            value={formValues.linearMeters}
                            onChange={(e) =>
                                setFormValues({ ...formValues, linearMeters: e.target.value })
                            } />
                    </div>

                    <div className="form-field">
                        <label htmlFor="numWalls">Number of Walls</label>
                        <input type="number"
                            id="numWalls"
                            name="numWalls"
                            min={0}
                            step={1}
                            value={formValues.numWalls}
                            onChange={(e) =>
                                setFormValues({ ...formValues, numWalls: e.target.value })
                            } />
                    </div>

                    <div className="form-field">
                        <label htmlFor="color-picker-pallet">Chose color</label>
                        <input type="color"
                            className="color-picker"
                            id='color-picker-pallet'
                            name='color'
                            value={formValues.color}
                            onChange={pickAColorHandler}
                        />
                    </div>

                    <div className="form-button">
                        <button>Submit</button>
                        {/* <ButtonPrimaryPink text={'Submit'}></ButtonPrimaryPink> */}
                    </div>
                </form>

                {success &&
                    (<div className='tab-inner-wrapper' style={{ textAlign: 'center' }}>
                        <h3>Successful creation of the site</h3>
                        <p>Visit "Sites list" to see and manage them</p>
                    </div>)}

            </Tab>

            <Tab eventKey="sites-list" title="Sites list">
                <div className='tab-inner-wrapper'>

                    <ul className='ul-list-item'>
                        {siteListItem}
                    </ul>

                </div>

            </Tab>

            <Tab eventKey="my-contacts" title="My contacts"  /*disabled*/>
                <div className='tab-inner-wrapper'>

                    <ul className='ul-list-item'>
                        <li className="list-item" style={{ fontSize: '2em', fontWeight: 'bold' }}>This area of the site is under development</li>                    </ul>
                </div>

            </Tab>
        </Tabs>
    );
}

export default CustomerTabs;