const router = require("express").Router();
const Entry = require("./models/Entry");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

// create
router.post("/", auth, upload.single("photo"), async (req, res) => {
  try {
    const { month, cafeName, review, rating } = req.body;
    const entry = await Entry.create({
      user: req.user.id,
      month: (month || "").toLowerCase(),
      cafeName,
      review,
      rating: Number(rating) || 5,
      photo: req.file ? req.file.filename : undefined
    });
    res.status(201).json(entry);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Cannot create entry" });
  }
});

// list
router.get("/", auth, async (req, res) => {
  try {
    const filter = { user: req.user.id };
    if (req.query.month) filter.month = String(req.query.month).toLowerCase();
    const entries = await Entry.find(filter).sort({ createdAt: -1 });
    res.json(entries);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Cannot fetch entries" });
  }
});

module.exports = router;
