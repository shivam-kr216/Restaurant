import axios  from 'axios';

//We can use this copy anywhere where we want 
//for example: instead of writng yelp.get(https://api.yelp.com/v3/businesses/search)
//we write yelp.get(/search)
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx'
    }
}); 