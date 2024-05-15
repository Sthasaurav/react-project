import React from 'react';

const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="block w-full px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
