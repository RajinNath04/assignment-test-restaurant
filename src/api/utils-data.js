import http from "../services/http"
import $q from "q";
import { config } from "../configs";


const headerConfig = {

    'X-API-KEY': '7ee9cd8cb528c5bed1547726e9397a46'
}

export default class UtilsData {



    static getAllRestaurants() {

        const deferred = $q.defer();
        http.get('https://api.documenu.com/v2/restaurant/4072702673999819', headerConfig)
            .then(res => deferred.resolve(res))
            .catch(err => deferred.reject(err))

        return deferred.promise;
    }

    static getRestaurantSearch(params) {

        const { exact, restaurant_name, restaurant_phone, restaurant_website, address, state, zip_code, fullmenu } = params;
        var url = restaurant_name != "" ? `?restaurant_name=${restaurant_name}` : "";
        url += restaurant_phone != "" ? `?restaurant_phone=${restaurant_phone}` : "";
        url += restaurant_website != "" ? `?restaurant_name=${restaurant_website}` : "";
        url += address != "" ? `?address=${address}` : "";
        url += state != "" ? `?state=${state}` : "";
        url += zip_code != "" ? `?zip_code=${zip_code}` : "";
        url += fullmenu != "" ? `?fullmenu=${fullmenu}` : "";
        url += exact != "" ? `&exact=${exact}` : "";

        const deferred = $q.defer();
        http.get('https://api.documenu.com/v2/restaurants/search/fields' + url, headerConfig)
            .then(res => deferred.resolve(res))
            .catch(err => deferred.reject(err))

        return deferred.promise;
    }



}