import framework from 'framework'
import config from 'config'
import classes from 'dom-classes'
import event from 'dom-event'
import gsap from 'gsap'

TweenLite.defaultEase = Expo.easeOut

config.isMobile = config.width < 768
config.hasBlendMode && classes.add(config.$body, 'has-blend-mode')
config.isMobile && event.on(config.$body, 'touchmove', (e) => e.preventDefault())

require('fastclick')(document.body)

framework.init()