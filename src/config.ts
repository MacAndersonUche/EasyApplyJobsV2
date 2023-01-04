// General bot settings

// PRO FEATURE - browser you want the bot to run ex: ["Chrome"] or ["Firefox"]. Firefox is only supported in Pro feature
const browser = ['Chrome'];
// Enter your Linkedin password and username below. Do not commit this file after entering these credentials.
// Linkedin credentials
export const email = 'hi@macandersonuche.dev';
export const password = '';

// PRO FEATURE - Optional! run browser in headless mode, no browser screen will be shown it will work in background.
const headless = false;
// PRO FEATURE - Optional! If you left above credentials fields empty. For Firefox or Chrome enter profile dir to run the bot without logging in your account each time
// get Firefox profile path by typing following url: about:profiles
const firefoxProfileRootDir = '/home/ongun/snap/firefox/common/.mozilla/firefox/pz0eh58h.Linkedin_bot';
// get Chrome profile path by typing following url: chrome://version/
const chromeProfilePath = 'C:/Users/macanderson.uche/AppData/Local/Google/Chrome/User Data/Profile 1';

// These settings are for running Linkedin job apply bot
const LinkedinBotProPasswrod = '';
// location you want to search the jobs - ex : ["Poland", "Singapore", "New York City Metropolitan Area", "Monroe County"]
// continent locations:["Europe", "Asia", "Australia", "NorthAmerica", "SouthAmerica", "Africa", "Australia"]
const location = ['United States', 'Europe', 'Australia', 'Asia'];
// keywords related with your job search
const keywords = [
    'frontend',
    'react',
    'typescript',
    'javascript',
    'node',
    'aws developer',
    'backend developer',
    'web developer',
    'javascript developer',
    'full stack developer',
    'full stack engineer'
];
// job experience Level - ex:  ["Internship", "Entry level" , "Associate" , "Mid-Senior level" , "Director" , "Executive"]
const experienceLevels = ['Entry level', 'Associate', 'Mid-Senior level'];
// job posted date - ex: ["Any Time", "Past Month" , "Past Week" , "Past 24 hours"] - select only one
const datePosted = ['Past Week'];
// job type - ex:  ["Full-time", "Part-time" , "Contract" , "Temporary", "Volunteer", "Intership", "Other"]
const jobType = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
// remote  - ex: ["On-site" , "Remote" , "Hybrid"]
const remote = ['Remote', 'Hybrid'];
// salary - ex:["$40,000+", "$60,000+", "$80,000+", "$100,000+", "$120,000+", "$140,000+", "$160,000+", "$180,000+", "$200,000+" ] - select only one
const salary = ['$80,000+', '$100,000+'];
// sort - ex:["Recent"] or ["Relevent"] - select only
const sort = ["Recent"]
// Blacklist companies you dont want to apply - ex: ["Apple", "Google"]
const blacklistCompanies = ["Jobot", "Cybercoders", "Braintrust"]
// Blaclist keywords in title - ex: ["manager", ".Net"]
const blackListTitles = ["architect", "lead", "principal software engineer", "staff",
    "analyst", "data engineer", "ihh", "Java", "Principal", "Lead", "C//", "Solutions"]
// Follow companies after sucessfull application True - yes, False - no
const followCompanies = false
// Below settings are for linkedin bot Pro, you can purchase monthly or yearly subscription to use them from me.
// PRO FEAUTRE! - Output unaswered questions into a seperate text file
const outputSkippedQuestions = true
// PRO FEATURE! - Use AI to fill and answer skipped questions
const useAiAutocomplete = true
// PRO FEATURE! - Only Apply these companies - ex: ["Apple", "Google"] - leave empty for all companies
const onlyApplyCompanies = []
// PRO FEATURE! - Only Apply titles having these keywords - ex: ["web", "remote"] - leave empty for all companies
const onlyApplyTitles = []
// PRO FEATURE! - Dont apply the job posted by the Hiring member contains this in his / her name - ex: ["adam", "Sarah"]
const blockHiringMember = []
// PRO FEATURE! - Only apply the job sposted by the Hiring member contains this in his / her name - ex: ["adam", "Sarah"]
const onlyApplyHiringMember = []
// PRO FEATURE! - Only apply jobs having less than applications - ex: ["100"] will apply jobs having upto 100 applications
const onlyApplyMaxApplications = []
// PRO FEATURE! - Only apply jobs having more than applications - ex: ["10"] will apply jobs having more than 10 applications
const onlyApplyMinApplications = []
// PRO FEATURE! - Only apply jobs having these keywords in the job description
const onlyApplyJobDescription = []
// PRO FEATURE! - Do not apply the jobs having these keywords in the job description
const blockJobDescription = []
// PRO FEATURE! - Apply companies having equal or more than employes - ex: ["100"]
const onlyAppyMimEmployee = []
// PRO FEATURE - Apply the ones linkedin is saying "you may be a goodfit"
const onlyApplyLinkedinRecommending = false
// PRO FEATURE - Only apply the ones you have skilled badge
const onlyApplySkilledBages = false
// PRO FEATURE! - Save the jobs by pressing SAVE button before apply  True - yes, false - no
const saveBeforeApply = false
// PRO FEATURE! - Sent a message to the hiring manager once you apply for the role
const messageToHiringManager = ""
// PRO FEATURE! - List and output non Easy Apply jobs links
const listNonEasyApplyJobsUrl = false
// PRO FEATURE! - Check yes or no to all checkbox questions(True - yes, False - no), leave empty if you dont want this option
const answerAllCheckboxes = ""
// PRO FEAUTRE! - Output file type.Can be.txt or.csv(excel)
const outputFileType = [".txt"]
