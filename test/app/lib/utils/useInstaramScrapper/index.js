import { useEffect, useState } from 'react'
import InstagramFeed from '@jsanahuja/instagramfeed'

export default function useInstaramScrapper({ username }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    new InstagramFeed({
      username,
      callback: fetchResults,
      on_error: (errcode) => console.error('error fetching instagram photos', errcode),
    })
  }, [])

  const fetchResults = async (data) => {
    const resPhotos = []
    const res = data.edge_owner_to_timeline_media?.edges || []

    res.forEach((item) => {
      const photo = {
        image: item.node.thumbnail_src,
        alt: item.node.accessibility_caption,
        shortcode: item.node.shortcode,
      }
      resPhotos.push(photo)
    })

    setPhotos(resPhotos)
  }

  return { photos }
}
