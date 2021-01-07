import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:  'Bearer QUm4R4d8rG1S1GPzteP9AM7WDjQlNvTulwiQLjXxU3Yctkgcesoo6zVIF6BAQSwPQTk64M-10CVX4I9QhsO9vEPuQt7KEXoGot2BRgE7VqfkTh3xlkw1GP-PKPPzX3Yx'
    }
});