import axios from 'axios';
import { diseases as diseasesCollection } from '../config/mongoCollections.mjs';

const apiKey = "sk-1cDo65c5314199c384079";
const apiURL = 'https://perenual.com/api/pest-disease-list?key=sk-1cDo65c5314199c384079';

export const diseaseData = async () => {
    try {
        const response = await axios.get(apiURL, {
            params: {key: apiKey},
        });

        const diseaseData = response.data;
        const collection = await diseasesCollection(); 
        await collection.insertOne(diseaseData);

        console.log('Disease Data has been stored in MongoDB');
    } catch (error) {
        console.error('Error: ', error.message || (error.response && error.response.data));
    }
};

diseaseData();
