import fs from 'fs';
import * as dotenv from "dotenv";

dotenv.config();
const DB: string = process.env.DATABASE as string;

let dbInstance: Array<string> = [];

function initDB() {
	fs.readFile(DB, function (err, buf) {
		try {
			dbInstance = JSON.parse(buf.toString())
			console.log(`DB has ${dbInstance.length} authorizations`)
		} catch (e) {
			console.error(e)
			saveDBToFile()
		}
	})
}

function saveDBToFile() {
	fs.writeFile(DB, JSON.stringify(dbInstance, null), function (err) {
		if (err) {
			console.log(err)
		} else {
			console.log('Data saved')
		}
	})
}

/* module.exports = {
	init: initDB,
	addAuthorization: function (auth) {
		dbInstance = dbInstance.filter(dbAuth => dbAuth.account_id !== auth.account_id && dbAuth.user_id !== auth.user_id)
		dbInstance.push(auth)
		saveDBToFile()
	},
	getAuthorizations() {
		return dbInstance
	}
} */

export { initDB, dbInstance, saveDBToFile };