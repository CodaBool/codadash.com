import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'

function getTime() {
  const now = new Date()
  let hour = now.getHours()
  const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
  if (hour > 12) {
    hour = hour - 12
  }
  return hour + ":" + minutes + " "
}

function getEmoji() {
  // 🌅 ☀️ ⛅ 🌤️ 🌇 🌄 🌕 🌑 ⛅ 🌙 🌗
  const now = new Date()
  const hour = now.getHours()
  let emoji = ''
  if (hour <= 3) emoji = "🌑"
  if (hour > 3 & hour <= 6) emoji = "🌗"
  if (hour > 6 & hour <= 9) emoji = "🌅"
  if (hour > 9 & hour <= 12) emoji = "⛅"
  if (hour > 12 & hour <= 15) emoji = "☀️"
  if (hour > 15 & hour <= 18) emoji = "🌤️"
  if (hour > 18 & hour <= 21) emoji = "🌄"
  if (hour > 21 & hour <= 24) emoji = "🌙"
  return emoji
}

export default function index() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [time, setTime] = useState(getTime())
  const [emoji, setEmoji] = useState(getEmoji())

  useEffect(() => {
    const count = setInterval(() => {
      setTime(getTime())
      setEmoji(getEmoji())
    }, 5000)
    return () => clearInterval(count)
  }, [])
  
  return (
    <>
      <h1 className="time" onClick={() => setShow(prev => !prev)}>{time} {emoji}</h1>
      <div className="mt-5 card-container">
        <Card onClick={() => router.push('https://media.codadash.com')} onAuxClick={()=> window.open('https://media.codadash.com', '_blank')}>
          <Image src='/image/jellyfin.png' layout='fill' quality={1} priority />
        </Card>
        <Card onClick={() => router.push('https://pass.codadash.com')} onAuxClick={()=> window.open('https://pass.codadash.com', '_blank')}>
          <Image src='/image/bitwarden.png' layout='fill' quality={1} priority />
        </Card>
         <Card onClick={() => router.push('https://sync.codadash.com')} onAuxClick={()=> window.open('https://sync.codadash.com', '_blank')}>
          <Image src='/image/sync.png' layout='fill' quality={1} priority />
        </Card>
        {/* <Card onClick={() => router.push('https://meal.codadash.com')} onAuxClick={()=> window.open('https://meal.codadash.com', '_blank')}>
          <Image src='/image/mealie.png' layout='fill' quality={1} priority />
        </Card> */}
        {show && 
          <>
            <Card onClick={() => router.push('https://movie.codadash.com')} onAuxClick={()=> window.open('https://movie.codadash.com', '_blank')}>
              <Image src='/image/radarr.png' layout='fill' quality={1} priority />
            </Card>
            <Card onClick={() => router.push('https://show.codadash.com')} onAuxClick={()=> window.open('https://show.codadash.com', '_blank')}>
              <Image src='/image/sonarr.png' layout='fill' quality={1} priority />
            </Card>
            <Card onClick={() => router.push('https://qbit.codadash.com')} onAuxClick={()=> window.open('https://qbit.codadash.com', '_blank')}>
              <Image src='/image/qbit.png' layout='fill' quality={1} priority />
            </Card>
            <Card onClick={() => router.push('https://jackett.codadash.com')} onAuxClick={()=> window.open('https://jackett.codadash.com', '_blank')}>
              <Image src='/image/jackett.png' layout='fill' quality={1} priority />
            </Card>
            <Card onClick={() => router.push('https://proxy.codadash.com')} onAuxClick={()=> window.open('https://proxy.codadash.com', '_blank')}>
              <Image src='/image/proxy.png' layout='fill' quality={1} priority />
            </Card>
            <Link href="/table">
              <Card>
                <Image src='/image/table.png' layout='fill' quality={1} priority />
              </Card>
            </Link>
          </>
        }
      </div>
    </>
  )
}
