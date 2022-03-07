import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function hash(password){
    return bcrypt.hashSync(password, 10);

}

export function compare(password, hash){
    return bcrypt.compareSync(password, hash);
}

export function createToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });
  }