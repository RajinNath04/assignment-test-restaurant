import React, { Component } from 'react';
import './RestaurantPage.scss';
class RestaurantPage extends Component {

    render() {
        const Data = this.props.location.state.data
        console.log(Data);
        return (
            <div className="card o-hidden shadow-lg mx-5 mt-5 p-5">
                <h3>{Data.restaurant_name}</h3>
                <p>{Data.restaurant_phone}</p>
                <p>{Data.restaurant_website}</p>
                <p>{Data.hours}</p>
                <div>
                    {Data.address.city}
                </div>
                <div>
                    {Data.address.formatted}
                </div>
                <div>
                    {Data.address.postal_code}
                </div>
                <div>
                    {Data.address.state}
                </div>
                <div>
                    {Data.address.street}
                </div>

                {Data.menus.length !== 0 ?
                    Data.menus.map(item => {
                        return (
                            <div>
                                <h4 className="mt-4 mx-2" style={{ color: 'darkblue' }}>{item.menu_name}</h4>
                                { item.menu_sections.map(sections => {
                                    return (
                                        <div>
                                            <h5 className="mt-4 mx-2 pt-4" style={{ color: 'darkcyan', textDecoration: 'underline' }}>
                                                {sections.section_name}</h5>
                                            {sections.menu_items.map(menu => {
                                                return (
                                                    <div className="mx-3 mt-4 row menuSection">
                                                        <div>
                                                            <h6>{menu.name}</h6>
                                                            <p>{menu.description}</p>
                                                        </div>
                                                        <div>

                                                            <p>${menu.price}</p>
                                                        </div>


                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>

                        )
                    })
                    : <div className="pt-4 px-4" style={{ textAlign: 'center', color: 'red' }}> No Menu For This Restaurant</div>}

            </div>
        );
    }
}

export default RestaurantPage;