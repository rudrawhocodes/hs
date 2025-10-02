"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Proposal() {
  const [showProposal, setShowProposal] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noButtonTries, setNoButtonTries] = useState(0)

  const handleNoHover = () => {
    // Move the "No" button to a random position when hovered
    const newX = Math.random() * 200 - 100
    const newY = Math.random() * 200 - 100
    setNoButtonPosition({ x: newX, y: newY })
    setNoButtonTries(prev => prev + 1)
  }

  const handleYesClick = () => {
    setSelectedAnswer('yes')
  }

  const handleNoClick = () => {
    // This shouldn't really be reachable, but just in case
    handleNoHover()
  }

  const noButtonTexts = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Don't be silly!",
    "You can't escape!",
    "Nice try!",
    "Nope!",
    "Try again!",
    "You have no choice!"
  ]

  const getNoButtonText = () => {
    if (noButtonTries < noButtonTexts.length) {
      return noButtonTexts[noButtonTries]
    }
    return "You have no choice!"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="max-w-2xl mx-auto mt-16 p-8 bg-white/30 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20"
    >
      {!showProposal ? (
        <motion.div
          className="text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="text-6xl mb-6 animate-bounce">💍</div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
            One More Thing...
          </h2>
          <motion.button
            onClick={() => setShowProposal(true)}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click Here 💖
          </motion.button>
        </motion.div>
      ) : selectedAnswer !== 'yes' ? (
        <motion.div
          className="text-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="text-6xl mb-6 animate-pulse">💕</div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
            Will You Marry Me?
          </h2>
          <p className="text-xl text-purple-700 font-medium mb-8">
            After 6 beautiful months together, I can't imagine my life without you... 💖
          </p>
          
          <div className="flex justify-center items-center gap-8 relative min-h-[100px]">
            <motion.button
              onClick={handleYesClick}
              className="px-12 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              YES! 💍
            </motion.button>
            
            <motion.button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="px-12 py-4 bg-gradient-to-r from-red-400 to-red-600 text-white font-bold rounded-full text-xl shadow-lg transition-all duration-300 cursor-pointer"
              animate={{
                x: noButtonPosition.x,
                y: noButtonPosition.y,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              whileHover={{ scale: 1.1 }}
            >
              {getNoButtonText()}
            </motion.button>
          </div>

          {noButtonTries > 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-600 font-medium mt-4 text-lg"
            >
              Stop running away! You know there's only one answer! 😄💕
            </motion.p>
          )}
        </motion.div>
      ) : (
        <motion.div
          className="text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
            I Knew It! 💖
          </h2>
          <p className="text-2xl text-purple-700 font-bold mb-4">
            You have no other choice! 😄
          </p>
          <p className="text-xl text-purple-600 font-medium mb-8">
            We're meant to be together forever and always! 💍✨
          </p>
          
          <motion.div
            className="flex justify-center items-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0s" }}>💖</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.1s" }}>💍</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.2s" }}>👰</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.3s" }}>🤵</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.4s" }}>💕</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg text-pink-600 font-medium mt-6"
          >
            Can't wait to spend forever with you! 🥰
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  )
}