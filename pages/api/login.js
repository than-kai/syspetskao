export default function handler(req, res) {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
}
