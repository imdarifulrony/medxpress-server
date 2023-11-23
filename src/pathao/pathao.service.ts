import { Injectable } from '@nestjs/common';
const axios = require('axios');

@Injectable()
export class PathaoService {


    // const Order = require('../order/order.model');
    // const Lab = require('../labDetails/labDetails.model');
    // const { findClosestStudio } = require('../../utils/helpers/nearestLabFinder');

    baseUrl = 'https://courier-api-sandbox.pathao.com/aladdin/api/v1';

    getPathaoAccessToken = async () => {
        const issueBody = {
            client_id: "267",
            client_secret: "wRcaibZkUdSNz2EI9ZyuXLlNrnAv0TdPUPXMnD39",
            username: "test@pathao.com",
            password: "lovePathao",
            grant_type: "password",
        };


        // const issueBody = {
        //     client_id: "w9aADjpevM",
        //     client_secret: "aANFtVbl4YPAd7xziZ4bmDOA34Cm0pg3lRHkJhom",
        //     username: "romansheikh170@gmail.com",
        //     password: "romansheikh170@gmail.com",
        //     grant_type: "password",
        // };
        try {
            const pathaoToken = await axios.post(this.baseUrl + '/issue-token', issueBody,
                {
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return pathaoToken.data.access_token;
        } catch (err) {
            console.log(err);
        }
    }


    async createPathaoStore(store: any) {
        const token = await this.getPathaoAccessToken()
        // const cities = await axios.get(this.baseUrl+ '')
        const issueBody = {
            name: "" + "degital medicine i",
            contact_name: "" + "Roman sheikh",
            contact_number: "" + "01833923107",
            secondary_contact: "",
            address: "" + 'House: 03, Road: 14, Gulshan 1, Dhaka-1212',
            city_id: '1',
            zone_id: '6',
            area_id: '16438',
        };
        try {
            const pathaoStore = await axios.post(this.baseUrl + '/stores', issueBody,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return pathaoStore;
        } catch (err) {
            console.log(err);
        }
    }


    async createPathaoOrder(order: any) {
        const token = await this.getPathaoAccessToken()
        const issueBody = {
            store_id: 56066,
            merchant_order_id: '',
            sender_name: "Roman sheikh",
            sender_phone: "01758642835",
            recipient_name: "SEjan MIA",
            recipient_phone: "01756982546",
            recipient_address: 'House: 03, Road: 14, Gulshan 1, Dhaka-1212',
            recipient_city: '1',
            recipient_zone: '17',
            recipient_area: '5166',
            delivery_type: '48',
            item_type: '2',
            special_instruction: "",
            item_quantity: "1",
            item_weight: "0.5",
            amount_to_collect: '0',
            item_description: ""
        };
        try {
            const order = await axios.post(this.baseUrl + '/orders', issueBody,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return order.data;
        } catch (err) {
            console.log( err.response.data);
        }
    }





    getPathaoStores = async () => {
        const token = await this.getPathaoAccessToken()
        try {
            const zones = await axios.get(
                `${this.baseUrl}/stores`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return zones.data;
        } catch (err) {
            console.log("error", err);
        }
    }

    getPathaoZones = async (city_id: string) => {
        const token = await this.getPathaoAccessToken()
        try {
            const zones = await axios.get(
                `${this.baseUrl}/cities/${city_id}/zone-list`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return zones.data;
        } catch (err) {
            console.log("error", err);
        }
    }

    getPathaoAreas = async (zone_id: string) => {
        const token = await this.getPathaoAccessToken()
        try {
            const areas = await axios.get(
                `${this.baseUrl}/zones/${zone_id}/area-list`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return areas.data;
        } catch (err) {
            console.log(err);
        }
    }

    getPathaoCities = async () => {
        const token = await this.getPathaoAccessToken()
        try {
            const cities = await axios.get(
                `${this.baseUrl}/countries/1/city-list`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                }
            );
            return cities.data;
        } catch (err) {
            console.log("error from service", err);
        }
    }



}
