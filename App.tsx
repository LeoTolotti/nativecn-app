import { Profile } from '@/App/Profile';
import '@/styles/global.css';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="auto" />
    </>
  );
}
