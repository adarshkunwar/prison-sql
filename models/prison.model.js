const db = require("../db/connect");

class Prisons {

    constructor({prison_id, prison_name, prison_location, prison_capacity, prison_occupancy} = {}) {
        this.prison_id = prison_id;
        this.prison_name = prison_name;
        this.prison_location = prison_location;
        this.prison_capacity = prison_capacity;
        this.prison_occupancy = prison_occupancy;
        this.prison_created_date = new Date();
  }

  create() {
    console.log("--- modal begins here ---")
    const createSql =
        "INSERT INTO prison (prison_name, prison_location, prison_capacity, prison_occupancy, prison_created_date) VALUES (?, ?, ?, ?, ?)";
    const values = [
        this.prison_name,
        this.prison_location,
        this.prison_capacity,
        this.prison_occupancy,
        this.prison_created_date
    ];
    console.log(values + "values")
    return db.execute(createSql, values);
  }

  static findAll() {
    console.log("--- modal begins here ---")
    let selectSql = `SELECT * FROM prison`;
    return db.execute(selectSql);
  }

  findById(id) {
    const createSql = "SELECT * FROM prison where prison_id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  deleteContact(id) {
    const createSql = "DELETE FROM prison where prison_id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  updateContact(id) {
    const createSql =
      "UPDATE prisons SET prison_name = ?, prison_location = ?, prison_capacity = ?, prison_occupancy = ? WHERE prison_id = ? ";
    const values = [this.name, this.email, this.contact, id];
    return db.execute(createSql, values);
  }
}


module.exports = Prisons;
