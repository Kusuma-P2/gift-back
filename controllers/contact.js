import Contact from "../models/Contact.js";

export const contact = (req, res) => {
    const contact = new Contact(req.body);
  contact.save((err, contact) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save message to DB",
      });
    }
    res.json({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.phoneNumber,
      id: contact._id,
    });
  });
}