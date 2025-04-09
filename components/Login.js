
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div style={{ background: '#111', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'turquoise' }}>Petskão - Login</h1>
      <input placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <input placeholder="Senha" type="password" value={pass} onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin} style={{ background: 'black', color: 'white', marginTop: '1rem' }}>Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
