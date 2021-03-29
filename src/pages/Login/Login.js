import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import ROUTES from '../../configs/routes';
import Banner from '../../components/Banner/Banner';
import { ActionRouteNavigate } from '../../store/actions/actions-route';
import { ActionGetAllRestaurants, ActionGetAllRestaurantsSearch } from '../../store/actions/actions-utils-data';
import { bindActionCreators } from 'redux'
import { List, Avatar } from 'antd';
// components
import './Login.scss';
import FilterSearchRestaurant from '../../components/FilterSearchRestaurant/FilterSearchRestaurant';


class Login extends Component {

    state = {
        visible: false
    }

    componentDidMount() {

        this.props.ActionGetAllRestaurants()
    }

    handleSubmit = (params, actions) => {
        const param = {
            exact: true,
            restaurant_name: params.name,
            restaurant_phone: params.phone,
            restaurant_website: params.website,
            address: params.address,
            state: params.state,
            zip_code: params.zip,
            fullmenu: params.fullMenu
        }
        this.props.ActionGetAllRestaurantsSearch(param)
        this.setState({
            visible: true
        });
    }

    handleReset = () => {

        this.setState({
            visible: false
        });

    }

    render() {
        const { visible } = this.state
        const { isLoading, getAllRestaurants, getRestaurantSearch } = this.props

        return (
            <div className="headerSection" style={{ overflowX: 'hidden' }}>
                {/* Navbar */}
                {/* first filter */}
                <Spin spinning={isLoading} tip="Loading...">
                    <Banner title='Search Your Restaurant Here' description="Restaurant" />
                    {/* Filter Section */}
                    <FilterSearchRestaurant handleSubmit={this.handleSubmit} handleReset={this.handleReset} />
                    <h3 className="h4 text-gray-900 mb-4 pl-5 pt-2">List of Restaurants</h3>
                    <div className="card o-hidden shadow-lg mx-5 mt-3">

                        <List
                            itemLayout="horizontal"
                            dataSource={visible == true ? getRestaurantSearch : [getAllRestaurants]}
                            renderItem={item => (
                                <List.Item onClick={() => this.props.ActionRouteNavigate(ROUTES.RESTAURANT, { data: item })}>

                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<h3>{item.restaurant_name}</h3>}
                                        description={item.hours}
                                    />
                                    <div style={{ width: '30%' }}>

                                        <div>
                                            {item.restaurant_phone}
                                        </div>

                                        <div>
                                            {item.address.city}
                                        </div>
                                        <div>
                                            {item.address.formatted}
                                        </div>
                                        <div>
                                            {item.address.postal_code}
                                        </div>
                                        <div>
                                            {item.address.state}
                                        </div>
                                        <div>
                                            {item.address.street}
                                        </div>

                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>

                </Spin>
            </div >)
    }
}


function mapStateToProps({ rLoading, rUtils }) {
    return {
        getAllRestaurants: rUtils.getAllRestaurants || [],
        getRestaurantSearch: rUtils.getRestaurantSearch || [],
        isLoading: rLoading.getRestaurantSearch || rLoading.getRestaurantSearch || false,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionGetAllRestaurants,
        ActionGetAllRestaurantsSearch,
        ActionRouteNavigate
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login