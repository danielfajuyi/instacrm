import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, AlertCircle } from 'lucide-react'

const InstagramEmbed = ({ url, className = "" }) => {
  const embedRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const processEmbed = async () => {
      if (!url || !embedRef.current) return

      try {
        setIsLoading(true)
        setHasError(false)

        // Clear previous content
        embedRef.current.innerHTML = ''

        // Create blockquote element for Instagram embed
        const blockquote = document.createElement('blockquote')
        blockquote.className = 'instagram-media'
        blockquote.setAttribute('data-instgrm-captioned', '')
        blockquote.setAttribute('data-instgrm-permalink', url)
        blockquote.setAttribute('data-instgrm-version', '14')
        
        // Add fallback link
        const link = document.createElement('a')
        link.href = url
        link.textContent = 'View on Instagram'
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        blockquote.appendChild(link)

        embedRef.current.appendChild(blockquote)

        // Process the embed
        if (window.instgrm && window.instgrm.Embeds) {
          await window.instgrm.Embeds.process()
        }

        setIsLoading(false)
      } catch (error) {
        console.error('Error processing Instagram embed:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    const timer = setTimeout(processEmbed, 100)
    return () => clearTimeout(timer)
  }, [url])

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-netflix-gray rounded-lg ${className}`}>
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-netflix-lightGray text-center">Failed to load Instagram post</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-2 text-netflix-red hover:underline"
        >
          View on Instagram
        </a>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-netflix-gray rounded-lg z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Loader2 className="w-8 h-8 animate-spin text-netflix-red" />
        </motion.div>
      )}
      <div 
        ref={embedRef} 
        className="instagram-embed-container"
        style={{ minHeight: isLoading ? '400px' : 'auto' }}
      />
    </div>
  )
}

export default InstagramEmbed