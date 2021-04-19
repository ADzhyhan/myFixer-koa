const crypto = require('crypto');

const db = require('../../db/db');

class UserDB {
  static async checkPassword(email, password) {
    const userResponse = await db.query(`SELECT * FROM "user" WHERE email = '${email}'`);
    if (!userResponse.rowCount) {
      return { flag: false, message: `User with email: ${email} doesn't exist` };
    }

    const user = { ...userResponse.rows[0] };

    const passwordHash = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha256').toString('hex');

    if (user.password === passwordHash) {
      return { user, flag: true };
    }

    return { flag: false, message: 'Incorrect password' };
  }
}

module.exports = { UserDB };
