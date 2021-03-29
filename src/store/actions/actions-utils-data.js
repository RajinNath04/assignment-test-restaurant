import ACTIONS from '../actions-names/index'
import { ActionLoadingUpdate } from './actions-loading'
import UtilsData from '../../api/utils-data'
import _ from 'lodash'

const { UTILS_ACTIONS } = ACTIONS



export function ActionUtilsData(ns, payload) {
  const data = {}
  data[ns] = payload
  return {
    type: UTILS_ACTIONS.UPDATEDATA,
    data
  }
}

export function ActionClearUtilData() {
  return {
    type: UTILS_ACTIONS.CLEAR_ALL,
  }
}






export function ActionGetAllRestaurants() {

  return (dispatch) => {
    dispatch(ActionLoadingUpdate("getAllRestaurants", true));
    UtilsData.getAllRestaurants()
      .then((res) => {

        dispatch(ActionUtilsData("getAllRestaurants", [res.result]));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(ActionLoadingUpdate("getAllRestaurants", false)));
  };
}

export function ActionGetAllRestaurantsSearch(params) {


  return (dispatch) => {
    dispatch(ActionLoadingUpdate("getRestaurantSearch", true));
    UtilsData.getRestaurantSearch(params)
      .then((res) => {
        dispatch(ActionUtilsData("getRestaurantSearch", res.data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(ActionLoadingUpdate("getRestaurantSearch", false)));
  };
}



