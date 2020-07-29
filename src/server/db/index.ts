import pgPromise from "pg-promise";
import config    from "../utils/config";

const pgp = pgPromise(config.dbOptions);
const pdb = pgp(config.dbConfig);

export default pdb;
