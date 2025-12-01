export default function handler(req, res) {
  const { title, genre, premise, tone } = req.query;

  const prompt = `
Judul: ${title}
Genre: ${genre}
Premis: ${premise}
Tone: ${tone}

Prompt:
Buatkan konsep film lengkap:
- logline
- plot 3 babak
- karakter utama
- emosi utama
- gaya visual
- style prompt gambar
- style prompt video JSON
`;

  res.status(200).json({ prompt });
}
