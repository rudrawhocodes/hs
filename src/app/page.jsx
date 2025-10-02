"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"
import MusicPlayer from "@/components/MusicPlayer"
import Proposal from "@/components/Proposal"

// Change this to your anniversary date
const ANNIVERSARY_DATE = "2025-10-02"
// Change this to the date you got together
const TOGETHER_DATE = "2025-04-02"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the anniversary date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Start music after a delay
    setTimeout(() => {
      setPlaySong(true)
    }, 1000)
  }

  // Add your photos here
  const photos = [
    { src: "/image1.jpeg", alt: "You + Me = Always 💑⏱️" },
    { src: "/image2.jpeg", alt: "Special moment" },
    { src: "/image3.jpeg", alt: "Just us — in love, in sync 💑💞" } ,
    { src: "/image4.jpeg", alt: "Us together" },
    { src: "/image5.jpeg", alt: "💖Two hearts, one time — holding on to forever 🕰️❤️🤝" },
    { src: "/image6.jpeg", alt: "Happy times" },
    { src: "/image7.jpeg", alt: "📸 The moment she said ‘I love you too’ — forever captured, forever cherished 💖" },
  ]

  // Change this message according to you
  const message = `Happy 6 monthsary to us! My love.
It's hard to belive that half of the year with you already passed and many more to go. I'm excited to see what the future holds for us as a couple. I can't promise it will always be sunshine and rainbows but I can promise my love, loyalty for you.
Still remembering 25th March, our first date, where my life's best time started. Then all other dates, my random walking lead to you, our lift kiss, our late night talks, our bus stand meets, everything is just so perfect like heaven. You know whenever I'm with you I feel heaven and you got my childish side back. Everything you does , or whatever is done in your presence, is just perfect .
Ik not all days are same and some of my habits hurt you, I never really want to do that but it's.... whatsoever I'll try my best from now that my actions doesn't make you hurt. We'll tryna fight less and love more nd should forgot small small minor mistakes. I just want you to be mine forever also there's no other way for you than me. I'm your wife so don't you dare to leave me. 
The long distance. Ik I was not happy with it but you told me it will be easier and you won't let me feel it and yes you're right, I never feels alone, I always feel like you're here with me. You answers my call anytime doing anything. You never lues to me. After all, you are doing your best . I was not hating long distance but I thought it will create a distance between us and later everything will fade. But you prove me wrong. Yes I just miss you so so sooo much that writing this letter I can't stop my tears. 
I want you everywhere , everytime, whatever the thing is. I don't care who stays or leave other than you. I found something that is worth living for. You. I love you so much my het❤️`

  return (
    
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                Our Anniversary is Coming!
              </h1>
              <p className="text-xl text-purple-700 font-medium">The countdown to our special day ❤️</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />
        ) : (
          <>
            <MusicPlayer playSong={playSong} />
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  Happy 6 Month Anniversary!
                </h1>
                <p className="text-xl text-purple-700 font-medium">Every moment with you is a blessing ❤️</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <Proposal />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">Made with ❤️ by Srushti, coded by Rudra thacker "HAPPIEST 6 MONTH ANNIVERSARY" to you guys be a super couple </p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
