import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import type{ User, ErrorResponse } from '../types';


const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        console.log('Fetching profile with token:', token); // Debug log
        const res = await axios.get<User>(`${apiURL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${String(token)}` }, // Normalize to string for header
        });
        setUser(res.data);
      } catch (err: any) {
        console.error('Profile fetch error:', err.response); // Debug log
        setError('Failed to load profile');
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) return <p className="text-center text-light-green-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-light-green-900">
            <strong>Name:</strong> {user!.name}
          </p>
          <p className="text-light-green-900">
            <strong>Email:</strong> {user!.email}
          </p>
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
