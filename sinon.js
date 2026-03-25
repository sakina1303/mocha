const sinon= require('sinon')
class DB{
    fetchuser(){
        return "real user"
    }
}
const db = new DB()
console.log(db.fetchuser())

const fakedb = sinon.stub(db, 'fetchuser').returns('fake user')