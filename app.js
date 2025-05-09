import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const dataPath = path.join(process.cwd(), 'data', 'proverbs.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load data from file
function loadProverbs() {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]');
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

// Save data to file
function saveProverbs(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// Generate a simple unique ID (incremental)
function generateUniqueId(proverbs) {
  return proverbs.length ? proverbs[proverbs.length - 1].id + 1 : 1;
}

// GET all proverbs (with optional filtering)
app.get('/proverbs', (req, res) => {
  let proverbs = loadProverbs();
  const category = req.query.category;
  const search = req.query.search;

  if (category) {
    proverbs = proverbs.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const lower = search.toLowerCase();
    proverbs = proverbs.filter(p =>
      p.textDari.toLowerCase().includes(lower) ||
      p.textPashto.toLowerCase().includes(lower) ||
      p.translationEn.toLowerCase().includes(lower)
    );
  }

  res.json(proverbs);
});

// GET a random proverb
app.get('/proverbs/random', (req, res) => {
  const proverbs = loadProverbs();
  if (!proverbs.length) return res.status(404).json({ error: 'No proverbs found' });
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
});


// GET a single proverb by ID
app.get('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const proverb = loadProverbs().find(p => p.id === id);
  if (!proverb) return res.status(404).json({ error: 'Proverb not found' });
  res.json(proverb);
});

// POST create a new proverb
app.post('/proverbs', (req, res) => {
  const proverbs = loadProverbs();
  const newProverb = {
    id: generateUniqueId(proverbs),
    textDari: req.body.textDari,
    textPashto: req.body.textPashto,
    translationEn: req.body.translationEn,
    meaning: req.body.meaning,
    category: req.body.category
  };
  proverbs.push(newProverb);
  saveProverbs(proverbs);
  res.status(201).json(newProverb);
});

// PUT update an existing proverb
app.put('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const proverbs = loadProverbs();
  const index = proverbs.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Proverb not found' });

  proverbs[index] = {
    id,
    textDari: req.body.textDari,
    textPashto: req.body.textPashto,
    translationEn: req.body.translationEn,
    meaning: req.body.meaning,
    category: req.body.category
  };

  saveProverbs(proverbs);
  res.json(proverbs[index]);
});

// DELETE a proverb
app.delete('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let proverbs = loadProverbs();
  const initialLength = proverbs.length;
  proverbs = proverbs.filter(p => p.id !== id);

  if (proverbs.length === initialLength) {
    return res.status(404).json({ error: 'Proverb not found' });
  }else {
    res.json({result: 'The proverb has been deleted'})
  }

  saveProverbs(proverbs);
  res.status(204).send(); // No content
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/proverbs`));
