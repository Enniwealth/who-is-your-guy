/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Who's your guy?"
      dAppDescription='Inspired by the puzzle game'
      dAppUrl='https://who-is-your-guy.vercel.app/'
      dAppIconURL='https://who-is-your-guy.vercel.app/alex_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
