import dotenv from "dotenv";

dotenv.config();


export const homeUrl = 'https://www.linkedin.com/login?trk=guest_homepage-basic_nav-header-signin';
// export const jobsUrl = 'https://www.linkedin.com/jobs/search/';
export const jobsUrl = 'https://www.linkedin.com/jobs/search/?currentJobId=3421398384&f_E=1%2C2%2C3%2C4&f_TPR=r604800&f_WT=2&geoId=103644278&keywords=typescript%20NOT%20jobot%20NOT%20braintrust%20NOT%20cybercoders%20NOT%20lhh&location=United%20States&refresh=true';
export const details = {
    email: process.env.LINKEDIN_EMAIL ?? '',
    password: process.env.LINKEDIN_PASSWORD ?? ''
}
