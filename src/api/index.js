import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/'
const cohortName = '2206-FTB-ET-WEB-FT';


export async function getPosts(){
    try {
        const { data } = await axios.get(`${BASE}${cohortName}/posts`);
        return data;
    } catch (error) {
        throw error;
    }
}