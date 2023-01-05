// import { details } from "./env.config";
import * as dotenv from "dotenv";
import { details } from "./env.config";
import { login } from "./util";


dotenv.config({ path: __dirname + './env.config.ts' });



console.log("Email Address: " + details.emailAddress);

