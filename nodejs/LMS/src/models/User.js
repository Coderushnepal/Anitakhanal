import DBModel from './DBmodel.js';

class User extends DBModel {
    constructor() {
        super('users');
    }
}
export default User;