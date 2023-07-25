const db = require("../db/connect");
class Prisons {
  constructor(priosonData) {
    this.id_prisons = priosonData.id_prisons;
    this.prison_name = priosonData.prison_name;
    this.location = priosonData.location;
    this.capacity = priosonData.capacity;
    this.occupancy = priosonData.occupancy;
  }

  create() {
    const createSql =
      "INSERT INTO prison (prison_name, location, capacity, occupancy) VALUES (?, ?, ?, ?)";
    const values = [
      this.prison_name,
      this.location,
      this.capacity,
      this.occupancy,
    ];
    return db.execute(createSql, values);
  }
}

module.exports = Prisons;
