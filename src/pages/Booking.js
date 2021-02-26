/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import Footer from '../views/Footer'
import Button from '../components/Button'
import TextField from '../components/TextField'
import NumberSelector from '../components/NumberSelector'
import Dropdown from '../components/Dropdown'
import { H1, Body1 } from '../components/Typos'
import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as PatternCurveBottomRight} from '../assets/patterns/pattern-curve-bottom-right.svg'
import {ReactComponent as PatternLines} from '../assets/patterns/pattern-lines.svg'
import DesktopBackground from '../assets/booking/hero-bg-desktop.jpg'
import TabletBackground from '../assets/booking/hero-bg-tablet.jpg'
import MobileBackground from '../assets/booking/hero-bg-mobile.jpg'

const date = new Date()

function Booking() {
  const [data, setData] = useState({
    name: '',
    email: '',
    people: 1,
    date: {
      day: date.getUTCDate(),
      month: date.getMonth() + 1, 
      year: date.getFullYear()
    },
    time: {
      period: 'PM',
      hours: '',
      minutes: '',
    }
  })

  const handlePeople = (type) => {
    if (type === 'decrement') {
      if (data.people <= 1)
        setData({ ...data, people: 1 })
      else
        setData({ ...data, people: data.people - 1 })
    }
    else {
      setData({ ...data, people: data.people + 1 })
    }
  }

  const handleChange = (ev) => {
    setData({ ...data, [ev.target.name]: ev.target.value })
  }

  const handleChangeDate = (ev) => {
    const { value, name } = ev.target
      setData({...data, date: {
        ...data.date,
        [name]: value,
      }})
  }

  const handleChangeTime = (ev) => {
    const { value, name } = ev.target
      setData({...data, time: {
        ...data.time,
        [name]: value,
      }})
  }

  const handleAmPm = (period) => {
    setData({...data, time: {
      ...data.time,
      period: period,
    }})
  }

  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <div 
    css={{ 
      width: '100%',
      position: 'relative',
      '.pattern': {
        display: 'none',
        position: 'absolute',
        zIndex: -1,
      },
      '.pattern.curve': {
        bottom: 270,
        left: 0,
      },
      '.pattern.lines': {
        bottom: 358,
        left: 655,
      },
      '@media (min-width: 1440px)': {
        '.pattern': {
          display: 'block',
        },

      }
    }}
    >
      <div 
        css={{
          padding: '56px 24px 228px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backgroundImage: `url(${MobileBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          '.logo': {
            width: 82.4,
            height: 32,
          },
          'h1': {
            marginTop: 40,
            marginBottom: 16
          },
          'p': {
            marginTop: 0,
            marginBottom: 24
          },
          '@media (min-width: 768px)': {
            'button': {
              display: 'none'
            },
            '.logo': {
              width: 103,
              height: 40,
              alignSelf: 'flex-start'
            },
          },
          // Tablet style
          '@media (min-width: 768px) and (max-width: 1439px)': {
            padding: '56px 40px 270px 40px',
            backgroundImage: `url(${TabletBackground})`,
            'h1': {
              marginTop: 64,
              marginBottom: 16
            },
            'p': {
              maxWidth: 573,
              margin: 0,
            },

          },
          '@media (min-width: 1440px)': {
            padding: '65px 830px 125px 165px',
            backgroundImage: `url(${DesktopBackground})`,
            textAlign: 'left',
            alignItems: 'flex-start',
            'h1': {
              marginTop: 153,
              marginBottom: 24
            },
            'p': {
              maxWidth: 445,
              margin: 0,
            },

          }
        }}
      >
        <Logo className="logo" viewBox="0 0 103 40" />
        <H1 variant="light">Reservations</H1>
        <Body1 variant="light">We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</Body1>
        <Button variant="light">Reserve Place</Button>
      </div>
      <div 
        css={{
          backgroundColor: 'white',
          margin: '-137px auto 86px auto',
          width: 327,
          padding: 32,
          boxSizing: 'border-box',
          boxShadow: '0 75px 100px -50px rgb(56 66 85 / 50%)',
          'button': {
            width: '100%'
          },
          '.picker__container': {
            '> p': {
              marginTop: 0,
              marginBottom: 12  
            },
            '> div': {
              display: 'flex',
              justifyContent: 'space-between',
              '> *': {
                marginRight: 16,
              },
              '> *:last-child': {
                marginRight: 0,
              }
            }
          },
          '@media (min-width: 768px)': {
            '.picker__container': {
              display: 'flex',
              flexDirection: 'row',
              '> p': {
                fontSize: 18,
                lineHeight: '28px',
                letterSpacing: '-0.225px',
                minWidth: 103,
                height: 28,
                margin: 0,
                marginTop: 12,
                marginRight: 52
              },
            },
          },
          // Tablet style
          '@media (min-width: 768px) and (max-width: 1439px)': {
            width: 540,
            marginTop: -230,
            marginBottom: 120,
          },
          // Desktop style
          '@media (min-width: 1440px)': {
            margin: '-342px 165px 116px auto',
            width: 540,
          },
        }}
      >
        <TextField placeholder="Name" name="name" action={handleChange} value={data.name} />
        <TextField placeholder="Email" name="email" action={handleChange} value={data.email} />
        <div className="picker__container">
          <p>Pick a date</p>
          <div>
            <TextField placeholder="MM" name="month" action={handleChangeDate} value={data.date.month} />
            <TextField placeholder="DD" name="day" action={handleChangeDate} value={data.date.day} />
            <TextField placeholder="YYYY" name="year" action={handleChangeDate} value={data.date.year} />
          </div>
        </div>
        <div className="picker__container">
          <p>Pick a time</p>
          <div>
            <TextField placeholder="09" name="hours" action={handleChangeTime} value={data.time.hours} />
            <TextField placeholder="00" name="minutes" action={handleChangeTime} value={data.time.minutes} />
            <Dropdown value={data.time.period} action={handleAmPm} />
          </div>
        </div>
        <NumberSelector people={data.people} action={handlePeople} />
        <Button 
          variant="dark"
          onClick={handleSubmit}
        >
          Make Reservation
        </Button>
      </div>
      <PatternCurveBottomRight className="pattern curve" />
      <PatternLines className="pattern lines" />
      <Footer />
    </div>
  )
}

export default Booking