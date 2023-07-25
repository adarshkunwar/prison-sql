const db = require("../db/connect");
class Prisons {
  constructor(id_prisons, prison_name, location, capacity, occupancy) {
    this.id_prisons = id_prisons;
    this.prison_name = prison_name;
    this.location = location;
    this.capacity = capacity;
    this.occupancy = occupancy;
  }
}
  create() {
    const createSql =
        "INSERT INTO prison_db (prison_name, location, capacity, occupancy) VALUES (?, ?, ?, ?)";
    const values = [
        this.prison_name,
        this.location,
        this.capacity,
        this.occupancy,
    ];
    return db.execute(createSql, values);
  }
  
  static findAll() {
    let selectSql = SELECT * FROM contact_db;
    return db.execute(selectSql);
  }

  findById(id) {
    const createSql = "SELECT * FROM contact_db where id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  deleteContact(id) {
    const createSql = "DELETE FROM contact_db where id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  updateContact(id) {
    const createSql =
      "UPDATE contact_db SET name = ?, email = ?, contact = ? where id = ?";
    const values = [this.name, this.email, this.contact, id];
    return db.execute(createSql, values);
  }
}

module.exports = Contact;
