const Contact = require("../models/prison");

const postData = async (req, res) => {
  console.log(req.body);
  try {
    const { prison_name, location, capacity, occupancy } = req.body;
    const prisonData = {
      prison_name,
      location,
      capacity,
      occupancy,
    };
    const contactModal = new Contact(prisonData);
    const createRecord = await contactModal.create();

    return res.status(200).json({
      createRecord,
      msg: "Contact Created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getData = async (req, res) => {
  res.send("hello getting data");
};

const getSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const contactModel = new Contact();
    const getSingleRecord = await contactModel.findById(id);

    return res.status(200).json(getSingleRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const contactModel = new Contact();
    const deleteRecord = await contactModel.deleteContact(id);
    return res.status(200).json(deleteRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;

  try {
    const { name, email, contact } = req.body;
    // console.log(name, email, contact);
    const contactModel = new Contact(name, email, contact);
    const createRecord = await contactModel.updateContact(id);
    return res.status(200).json(createRecord[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getData,
  postData,
  getSingleData,
  deleteData,
  updateData,
};
