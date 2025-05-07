import React from 'react';
import { Link } from 'react-router-dom';
import { ZapOff } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue py-4 relative">
      <div className="container mx-auto px-4">
        <div className="text-center font-cyber text-xs">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-4">
            <Link to="/deck-deals" className="text-cyber-pink hover:text-cyber-green transition-colors">DECK DEALS!</Link>
            <Link to="/cyberdeck-chaos" className="text-cyber-blue hover:text-cyber-green transition-colors">CYBERDECK CHAOS!</Link>
            <Link to="/about-eddie" className="text-cyber-yellow hover:text-cyber-green transition-colors">ABOUT EDDIE</Link>
            <Link to="/find-the-hideout" className="text-cyber-green hover:text-cyber-pink transition-colors">FIND THE HIDEOUT</Link>
          </div>
          
          <div className="flex justify-center items-center space-x-1 text-cyber-pink">
            <ZapOff size={16} className="text-cyber-yellow" />
            <p className="text-cyber-yellow glitch-text animate-pulse">
              CRAZY EDDIE © 2077 - DON'T TELL ANYONE
            </p>
            <ZapOff size={16} className="text-cyber-yellow" />
          </div>
          
          <p className="mt-2 text-cyber-green text-opacity-60 text-[10px]">
            *NO GUARANTEES | NO REFUNDS | NO QUESTIONS | NO CORP TRACKERS
          </p>
        </div>
      </div>
    </footer>
  );
};