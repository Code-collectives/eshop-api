// routes/adverts.mjs
import express from 'express';
import multer from 'multer';
import Advert from '../models/advert.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Post Advert
router.post('/', [authenticate, authorize('vendor'), upload.single('image')], async (req, res) => {
  const { title, description, price, category } = req.body;
  const imageUrl = req.file ? req.file.path : null;
  
  const advert = new Advert({ title, description, price, category, imageUrl, createdBy: req.user._id });

  try {
    await advert.save();
    res.status(201).send('Advert created successfully.');
  } catch (error) {
    res.status(400).send('Error creating advert.');
  }
});

// Get All Adverts
router.get('/', authenticate, async (req, res) => {
  const adverts = await Advert.find();
  res.send(adverts);
});

// Get Advert Details
router.get('/:id', authenticate, async (req, res) => {
  const advert = await Advert.findById(req.params.id);
  if (!advert) return res.status(404).send('Advert not found.');
  res.send(advert);
});

// Update Advert
router.put('/:id', [authenticate, authorize('vendor')], async (req, res) => {
  const advert = await Advert.findById(req.params.id);
  if (!advert) return res.status(404).send('Advert not found.');

  if (advert.createdBy.toString() !== req.user._id) return res.status(403).send('You can only update your own adverts.');

  Object.assign(advert, req.body);
  await advert.save();

  res.send('Advert updated successfully.');
});

// Delete Advert
router.delete('/:id', [authenticate, authorize('vendor')], async (req, res) => {
  const advert = await Advert.findById(req.params.id);
  if (!advert) return res.status(404).send('Advert not found.');

  if (advert.createdBy.toString() !== req.user._id) return res.status(403).send('You can only delete your own adverts.');

  await advert.remove();

  res.send('Advert deleted successfully.');
});

export default router;
