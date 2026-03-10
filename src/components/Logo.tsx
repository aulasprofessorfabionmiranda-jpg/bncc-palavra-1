import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Futuristic Background Glow */}
        <defs>
          <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />

        {/* The Bible - Open Book Shape */}
        <motion.path
          d="M20 70 Q 50 80 80 70 L 80 30 Q 50 40 20 30 Z"
          stroke="url(#bookGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 35 L 50 75"
          stroke="url(#bookGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* BNCC - Network Nodes/Skills */}
        <motion.circle
          cx="30" cy="40" r="3"
          fill="#22d3ee"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.circle
          cx="70" cy="40" r="3"
          fill="#22d3ee"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        />
        <motion.circle
          cx="50" cy="25" r="3"
          fill="#22d3ee"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        />
        
        {/* Connecting Lines (BNCC Structure) */}
        <motion.path
          d="M30 40 L 50 25 L 70 40"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
        />

        {/* The Cross - Subtle integration */}
        <motion.path
          d="M50 45 L 50 65 M 42 52 L 58 52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2 }}
        />
      </svg>
    </motion.div>
  );
}
