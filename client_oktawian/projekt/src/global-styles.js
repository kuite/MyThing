import { injectGlobal } from 'styled-components';

injectGlobal`











body {

  /*!
 * animate.css -http://daneden.me/animate
 * Version - 3.5.2
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2017 Daniel Eden
 */

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animated.infinite {
  animation-iteration-count: infinite;
}

.animated.hinge {
  animation-duration: 2s;
}

.animated.flipOutX,
.animated.flipOutY,
.animated.bounceIn,
.animated.bounceOut {
  animation-duration: .75s;
}

@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}

@keyframes flash {
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  animation-name: pulse;
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  animation-name: rubberBand;
}

@keyframes shake {
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
}

@keyframes headShake {
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
}

.headShake {
  animation-timing-function: ease-in-out;
  animation-name: headShake;
}

@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  transform-origin: top center;
  animation-name: swing;
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes wobble {
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: none;
  }
}

.wobble {
  animation-name: wobble;
}

@keyframes jello {
  from, 11.1%, to {
    transform: none;
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.jello {
  animation-name: jello;
  transform-origin: center;
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  animation-name: bounceIn;
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}

.bounceInDown {
  animation-name: bounceInDown;
}

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInLeft {
  animation-name: bounceInLeft;
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInRight {
  animation-name: bounceInRight;
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  animation-name: bounceInUp;
}

@keyframes bounceOut {
  20% {
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut {
  animation-name: bounceOut;
}

@keyframes bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  animation-name: bounceOutDown;
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;ń
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft {
  animation-name: bounceOutLeft;
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight {
  animation-name: bounceOutRight;
}

@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp {
  animation-name: bounceOutUp;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDown {
  animation-name: fadeInDown;
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDownBig {
  animation-name: fadeInDownBig;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeftBig {
  animation-name: fadeInLeftBig;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRightBig {
  animation-name: fadeInRightBig;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpBig {
  animation-name: fadeInUpBig;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  animation-name: fadeOut;
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  animation-name: fadeOutDown;
}

@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.fadeOutDownBig {
  animation-name: fadeOutDownBig;
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  animation-name: fadeOutLeft;
}

@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}

.fadeOutLeftBig {
  animation-name: fadeOutLeftBig;
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  animation-name: fadeOutRight;
}

@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

.fadeOutRightBig {
  animation-name: fadeOutRightBig;
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  animation-name: fadeOutUp;
}

@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.fadeOutUpBig {
  animation-name: fadeOutUpBig;
}

@keyframes flip {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(.95, .95, .95);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  animation-name: flip;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInX;
}

@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipInY;
}

@keyframes flipOutX {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@keyframes flipOutY {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-name: flipOutY;
}

@keyframes lightSpeedIn {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
}

.lightSpeedIn {
  animation-name: lightSpeedIn;
  animation-timing-function: ease-out;
}

@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  animation-name: lightSpeedOut;
  animation-timing-function: ease-in;
}

@keyframes rotateIn {
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
}

.rotateIn {
  animation-name: rotateIn;
}

@keyframes rotateInDownLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft {
  animation-name: rotateInDownLeft;
}

@keyframes rotateInDownRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight {
  animation-name: rotateInDownRight;
}

@keyframes rotateInUpLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft {
  animation-name: rotateInUpLeft;
}

@keyframes rotateInUpRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight {
  animation-name: rotateInUpRight;
}

@keyframes rotateOut {
  from {
    transform-origin: center;
    opacity: 1;
  }

  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut {
  animation-name: rotateOut;
}

@keyframes rotateOutDownLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  animation-name: rotateOutDownLeft;
}

@keyframes rotateOutDownRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  animation-name: rotateOutDownRight;
}

@keyframes rotateOutUpLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  animation-name: rotateOutUpLeft;
}

@keyframes rotateOutUpRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  animation-name: rotateOutUpRight;
}

@keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge {
  animation-name: hinge;
}

@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.jackInTheBox {
  animation-name: jackInTheBox;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.rollIn {
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut {
  animation-name: rollOut;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.01, .01, .01) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.050, 0.055, 0.075, 0.090);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInDown {
  animation-name: zoomInDown;
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInLeft {
  animation-name: zoomInLeft;
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInRight {
  animation-name: zoomInRight;
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInUp {
  animation-name: zoomInUp;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  animation-name: zoomOut;
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown {
  animation-name: zoomOutDown;
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
}

.zoomOutLeft {
  animation-name: zoomOutLeft;
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
}

.zoomOutRight {
  animation-name: zoomOutRight;
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp {
  animation-name: zoomOutUp;
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
}

@keyframes slideOutDown {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown {
  animation-name: slideOutDown;
}

@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  animation-name: slideOutRight;
}

@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp {
  animation-name: slideOutUp;
}





.hide{
  display:none;
}














  background-color:#F3F6F7;


  #mainmenu, #mainmenu ul {list-style: none; margin: 0; padding: 0;}
  #mainmenu ul {width: 160px;}
  #mainmenu ul li {clear: both;}
  #mainmenu > li {margin-right: 10px; position: relative;}
  #mainmenu > li li {position: relative;}
  #mainmenu > li ul {position: absolute; left:0;margin-top:0;}
  #mainmenu > li ul li ul {position: absolute; left: 160px; top: 0px;}
  ul ul {display: none;}
  ul li:hover > ul {display: block;}
  
  /*POZIOM 1*/
  #mainmenu > li > a {display: table; width: auto; padding: 8px; border-radius: 6px; text-align: center; text-decoration: none; color: #84c5f7;}
  #mainmenu > li:hover > a { color: #0090ff;}
  
  /*POZIOMY NIŻSZE*/
  #mainmenu ul {font-size: 12px; border-radius: 3px; background: #F6F6F6;}
  #mainmenu ul li > a {color:#F76B1C; display: block; padding: 10px; border-radius: 6px; text-decoration: none;text-align:left;}
  #mainmenu ul li:hover > a {color: #eee; background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);}

img.Avatar{
  width:30px;
  height:30px;
}



  .CalendarDay__highlighted_calendar {
    background: #82E0AA;
    color: #186A3B;
  }
  
  .CalendarDay__highlighted_calendar:hover {
    background: #58D68D;
    color: #186A3B;
  }
  
  .CalendarDay__highlighted_calendar:active {
    background: #58D68D;
    color: #186A3B;
  }

  .form-control{
    font-weight:200;
    color:#222064 !important;
  }

  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 30px;
    text-align: center;
  }
  
  .Demo__some-network__share-count {
    margin-top: 3px;
    font-size: 12px;
  }
  
  .Demo__some-network__share-button {
    cursor: pointer;
  }
  
  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }



.alert{
  margin-bottom:0 !important;
}




input{
  font-weight:100;
  width:80%;
  height:50px
  padding:1% 1% 1% 1%;
  margin:1% 0% 1% 0%;
  border-radius:8px;
  border: #ccc 1px solid
}

  //React Vote


.vote {
  position:absolute;
  display:contents;
  text-align: center;
  user-select: none;
  cursor: default;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vote__arrow {
  width: 18px;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
}
.vote__arrow:active {
  transform: scale(1.15);
}
.vote__arrow--up:active {
  stroke: #b4da55;
}
.vote__arrow--down:active {
  stroke: #f33119;
}


.vote__columns {
  display:flex
  justify-content: left;
}

.vote__column {
  height: 22px;
  font-size: 18px;
  overflow: hidden;
}

//

h1{
  font-family:Avenir;
  color:#222064;
}

h2{
  font-family:Avenir;
  color:#222064;
  font-size:24px;
  font-weight:500;
}

h3{
  font-family:Avenir;
  color:#222064;
  font-size:22px;
}

p{
  font-family:Museo Sans;
  font-size:14px;
  color:#75739B;
  font-weight:100;
}

.Header h1{
font-family:Avenir;
font-size:52px;
font-weight:400;
color:white;
margin-top:33%;

}
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

.Header p{
  font-family:Museo Sans;
  font-size:14px;
  font-weight:200;
  color:white;
  margin-top:5%;

} 

//Navbar + Menu


.Logo{
  margin-top:3%;
  width:150px;
  height:65px;
  background-image: url(img/logowhite.svg);
  background-repeat: no-repeat;
}

.LogoScroll{
  margin-top:3%;
  width:150px;
  height:65px;
  background-image: url(img/logocolor.svg);
  background-repeat: no-repeat;
}

  .Navbar{
    z-index:10000;
    position:fixed;
    width:100%;
    height:52px;
    background-color:transparent;
    // box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.4);
  }
  
  .NavbarScroll{
    z-index:10000;
    position:fixed;
    width:100%;
    height:52px;
    background-color:white;
    transition: background-color 0.5s ease;
    box-shadow: 0 0 0 0 rgba(0,50,0,.2), 0 0 8px 0 rgba(0,50,0,.4);
  }


.Menu > button {

  margin-top:5%;
}

  .Menu {
  }

  .Register > a > button{
    margin-top:10px !important;
  }
  .Register > .SecondaryButton{
    margin-top:10px !important;
  }

  .col > a{
    text-align:center;
  }


  .Menu a.Navbar{
    margin-top:15px;
    letter-spacing:1.5px;
    width:0%;
    height:0%;
    font-size:14px;
    font-family:Helvetica;
    color:white;
  }

  a.Navbar.NavbarScroll{
    margin-top:15px;
    letter-spacing:1.5px;
    width:0%;
    height:0%;
    background-color:none;
    padding:0%;
    font-size:14px;
    font-family:Helvetica;
    color:#222064;
  }

  .Menu  a:hover{
    font-size:14px;
    font-family:Helvetica
    color:#00C57F;
    text-decoration:none;
  }

  .Login{
    margin-right:2%;
    background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:6px;
    border:none;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
  }
  

  .Login:hover{
    cursor:pointer;
    margin-right:2%;
    background-color:#24EBA4;
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:6px;
    border:none;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
  }

  .SecondaryButton{
    margin:0% 0% 0 0;
    border-color:#FF9100;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:#FF9100;
    background-color:transparent;
    border-radius:4px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 4px 0 rgba(0,0,0,0);
  }

  .SecondaryButton:hover{
    transition: background-color 0.5s ease;
    cursor:pointer;
    background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);
    border-color:#FABD61;
    border-size:2px;
    border-style:solid;
    width:120px;
    height:30px;
    font-size:12px;
    color:white;
    border-radius:4px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 4px 0 rgba(0,0,0,0);
  }




  //Home
  
  .Header{
    width:100%;
    background-color:grey;
    height:800px;
  }


  .Signin{
    float:right;
    width:60px;
    height:190px
    position:fixed;
    top:20%;
    right:0px;
    background-color:white;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 8px 0 rgba(0,0,0,.19);
    border-radius: 4px;
  }
  
  .HeaderLeft{
  width:61.8034%;
  height:100%;
  background-image: linear-gradient(to right,#8CD051 0%,#68B34A 100%);
  float:left;
  }
  
.Choice_sections{
  position:absolute;
  width:100%;
}



  .HeaderRight{
    width:38.17%;
    height:800px;
    float:left;
  }

  .HeaderRight > img{
    width:100%;
    height:100%;
    float:left;
  }
    
  .Section{
    padding:2%;
    float:left;
    width: calc(25% - 1px);
    height:280px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
    text-align:center
  }

  .SectionPlans{
    padding:2%;
    float:left;
    width: calc(25% - 1px);
    height:180px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
    text-align:center
  }

  .SectionInside > img {
    text-align:center;
    display:inline-flex;
    width:75px;
    height:75px;
    margin:2% 0 2% 0;
  }

  .SectionInside h2 > .Rectangle {
    text-align:center;
    display:inline-flex;
    width: 60px;
    height: 3px;
    margin:2% 0 2% 0%;
    background: #7DC72C;
  }

  .Section h2{
    font-family:Avenir;
    margin:2% 0 2% 0%;
    font-size:24px;
  }

  .Section p{
    font-family:Museo Sans;
    font-weight:100;
    margin:2% 0% 2% 0%;
    font-size:14px;
  }

  .Rectangle{
    width: 60px;
    height: 1px;
    margin:2% 0 2% 0%;
    background: #7DC72C;
  }

  .Latest_ideas{
    width:100%;
    height:570px;
    text-align:center;
    top:40%;
    transform: translateY(25%);
  }

  .SignIn{
    width:60px;
    height:200px;
  }

  /////

  .HomeInteraction{
    margin:12% 0 12% 0;
    width:100%;
    height:100%;
    text-align:center;
  }
  
  
  /////Carousel

  .carousel{
    display:flex;
    position:relative;
    margin-top:280px;
    margin-bottom:80px;
  }

  .d-md-block{
    display: block !important;
    position: fixed;
    margin-left: 40%;
    width: 30%;
    top: 10%;
    text-align: left;
    float: left;
  }


  .d-md-block h3{
    padding-bottom:40px;
    font-size:42px;
    font-family:Avenir;
    color:#222064;
  }

.carousel-control-prev-icon{
  width:60px;
  height:60px;
  background-image: url(img/arrow_left.svg);
}

.carousel-control-next-icon{
width:60px;
height:60px;
background-image: url(img/arrow_right.svg);
}

.carousel-indicators{
  display:none;
}

.rodo_info{
  background-image: linear-gradient(to right,#FABD61 0%,#F76B1C 100%);
  position: fixed;
  color: white;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  flex-direction: column;
  text-align: center;
  }
  
  .Rodo{
    margin-top:6%;
    width:80%;
    height:100%;
    text-align:left;
    float:left;
  }
  
  .Rodo > h1{
    margin:8% 10% 0% 13%;
    font-family:Avenir;
    font-size: 42px;
    font-weight:200;
    letter-spacing: 1px;
    text-align: left;
    color: #021a38;
  }
  
  .Rodo > h2{
    margin:2% 10% 2% 13%;
    font-family:Avenir;
  }
  
  .Rodo > p{
    margin:2% 10% 0% 13%;
    font-size:12px;
    font-family:Avenir;
  }
  
  .rodo_button{
    width:140px;
    height:20px;
    right:20px;
    background-color:transparent;
    border-color:white;
    position:absolute;
    color:white;
  }
  
    .rodo_button:hover{
      width:140px;
      height:20px;
      right:20px;
      background-color:white;
      border-color:white;
      position:absolute;
      cursor:pointer;
      color:red;
  }
  
  .rodo_info > p{
    margin:0;
    font-size:12px;
    font-family:Avenir;
    color:white;
  }
  
  .rodo_info > p > a {
    text-decoration:underline !important;
    color:white !important;
  }
















  // FUNRAISERS

.Categories_Header{
  margin-top:10%;
}

.Categories_Header > h2{
  text-align:center;
}

.Categories_Header > p{
  text-align:center;
}


  .Categories{
    text-align:center;
    width:100%;
    margin-bottom:15%;
    vertical-align: middle;
  }

  .Idea{
    margin:5% 0 5% 0;
  }


  .Idea_image{
    width:80%;
    height:100%;
    background-color:grey;
  }









// Get Funded

.Getfundedform{
  width:100%;
}


// Browse Ideas

.SectionsHeader{
  width:100%;
  height:470px;
}

.SectionsHeader h1{
  font-family:Avenir;
  font-size:48px;
  font-weight:400;
  color:white;
  margin-top:25%;
}

.SectionHeader > img{
width: 100%;
height: 100%;
float: left;
}


.SectionHeaderRight{
  width:38.17%;
  float:left;
}

.SectionHeaderRight > img{
  width:100%;
  height:470px;
  float:left;
}

#circle {
  width: 50px;
  height: 50px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: red;
}

.FundHeader2{
  margin:7% 0 7% 0;
  width:100%;
  height:100%;
  text-align:center;
}

.FundHeader2Icons{
display:inline-flex;
}

.FundIcon{
  width:370px;
  float:left;
}

.FundIcon > img{
  height:80px;
  margin:5% 0 5% 0;
}

.FundIcon > p{
  width:80%
  margin-left:10%;
  text-align:center;

}


// FUND FORM

.FundForm{
  margin:5% 0 17% 0;
  width:100%;
  height:420px;
}

.FundFormLeft{
  width:30%;
  float:left;
}

.FundFormRight{
  width:70%;
  float:left;
}


.rw-widget-container{
  background-color:none !important;
  border:none !important
  margin: 2% 0 2% 0;
}

.rw-widget>.rw-widget-container{
  margin:0 0 4% 0 !important;
  width:60% !important;
}

.DateRangePicker{
  margin:0% 0 2% 0;
}







.SectionsHeader p{
  font-family:Helvetica;
  font-size:14px;
  font-weight:200;
  color:white;
  margin-top:0%;
}

//Earn with us

.Plans{
  padding-top:5%;
}

.PlanAdvantages{
  margin:10% 0 10% 0;
  width:100%;
}

.PlanElement{
  margin:0% 0 10% 0;
}
.PlanElement > h2{
  margin:10% 0 5% 0;
}

.PlanElement > p{
  margin:10% 0 5% 0;
}

.PlanSection{
  width:100%;
  margin:2% 0 7% 0;
}

.Plan{
  margin-bottom:15%;
  width: 580px;
  height: 255px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(91, 91, 91, 0.5);
}

.Plan > img{
  width: 208px;
  height: 255px;
  float:left;
}

.Plan > h1{
  margin-top:32px;
  margin-left:270px;
  font-size:24px;
}

.Plan > p{
  margin-top:18px;
  margin-left:270px;
  color: #75739b;
}

.Plan .SecondaryButton{
  float:left;
  margin-top:18px;
  margin-left:60px;
}

.PlanFeatures{
  margin-top:17%;;
  text-align:center;
}



// LAW NOTE


.Invest{
  margin-top:5%;
  text-align:center;
}

.Secure{
  width:60%;
  height:100%;
  margin:0 auto;
  margin-top:1.5%;
  margin-bottom:1.5%;
  text-align:center;
}

.Secure > img{
  float:left;

}

.LawNote{
  padding:2%;
  margin:0 auto;
  margin-top:3%;
  margin-bottom:3%;
  text-align:center;
  width: 950px;
  height: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(91, 91, 91, 0.5);
}

.LawNote > p{
font-size:12px;
}








}




// Login

.LoginModal{

  border-radius:10px;
  padding:15% 10% 15% 10%;
  width:500px;
  height:500px;


}


.loginform, .registerform{
  margin: 15%;
}

.LoginIcon{
  position:absolute;
  float:left;
  width:40px;
  height:40px;

}

//Registration

.help-block{
  color:orange;
  
  font-family:Helvetica
  font-size:12px;
}

.RegisterForm{
  width:100%;
  background-image: linear-gradient(to right,#8CD051 0%,#68B34A 100%);
  height:100%;
  position:absolute;
}

.RegistrationLeft{
  padding-top:10%;
  width:61.8034%;
  height:100%;
  float:left;
  background-color:white;
}

.RegistrationRight{
  float:left;
  text-align:center;
  font-family:Helvetica;
  color:white;
  font-size:18px;
  margin:20% 0 0% 10%;
}

.RegistrationRight > p{
  float:left;
  text-align:center;
  font-family:Helvetica;
  color:white;
  font-size:14px;

}


google-login{


}



// HOME PAGE AFTER LOGIN

.Panel{
  background-color:white;
  padding-top:10%;
}

.bsOFsf{
  width:65vw !important;
  box-shadow:none !important;
}

.HomeFund {
  padding-top:5%;
  background-image: linear-gradient(to right,#8CD051 0%,#68B34A 100%);
  min-height:1200px;
  width:100%;
  height:100%;
}

.BitcoinAvailable{
  width:100%;
  background-color:white;
  margin: 2% 0 2% 0;
  padding:3% 3% 3% 3%;
  box-shadow: 0 1px 4px 0 rgba(91, 91, 91, 0.5);
  border-radius:10px;
}

.PlanWidget{
  background-color:white;
  padding:3% 3% 3% 3%;
  margin: 1% 0 2% 0;
  border-radius:10px;
}


//INCREASE AFTER LOGIN

.IncreaseOpportunity{
margin:6% 0 6% 0;
}

.IncreaseOpportunity > h2{
  margin:10% 0 10% 0;
}

.IncreaseOpportunity > p{
  margin:10% 0 10% 0;
}

.IncreaseOpportunity > img{
  width:80px;
  margin:5% 0 5s% 0;
  }



  .DepositSteps{
    margin:5% 0 5% 0;
  }




  // PAYMENT

  .PaymentBtc > p {
    margin-top:5%;
  }
 

  .PaymentHeader{
    background-color:#1E2A37;
    width:100%;
    height:120px;
  }

  .PaymentHeader > h2{
    padding-top:10%;
    color:white !important;
  }

  .PaymentHeader > p{
    color:white !important;
  }

  h3{
    font-size:14px;
  }

  .nav-item{
    width:50%;
  }


.nav-link {
  background-color:#11181f;
  color:white !important;
  border-radius:none;
}

.nav-link.active{
  background-color:#11181f !important;
  color:white !important;
  box-shadow: 0px -3px 0px #F76B1C inset;
}

.nav-tabs .nav-link {
  border: none;
  border-top-left-radius: none !important;
  border-top-right-radius: none !important;
}




.SecureSection{
  margin-top:2%;
  margin-bottom:2%;
}

.SecureSection img{
  float:left;
}

.SecureSection p{
  float:left;
}


// FOOTER

.FooterFirstLevel{
  width:100%;
  margin:0% 0 0% 0;
  background-color:#eef1f2;
  padding:2% 20% 2% 20%;
}

.FooterSecondLevel{
  padding-top: 10px;
  width:100%;
  height:40px;
  background-color:#222064;
  color:#75739B;
  font-size:12px;
}

.FooterSecondLevel > p{

  color:#75739B;
  font-size:12px;
  text-align:center;
}

.FooterSecondLevel  a {
  margin-left:10%;
}

.Certificate {
  width:34px;
  margin-right:15px;
}

@media (min-width: 0px) and (max-width: 468px) {


  .HeaderLeft{
    width:100%;
  }

  .HeaderRight{
    display:none;
  }

  .Section{
    width:100%;
    height:100%;
  }

.SectionPlans{
    padding:2%;
    float:left;
    width: 100%;
    height:180px;
    border-style: solid;
    border-width: 1px;
    border-color:#BEBEBE;
    text-align:center
  }

  .SectionInside > img {
    text-align:center;
    display:inline-flex;
    width:75px;
    height:75px;
    margin:2% 0 2% 0;
  }

  .SectionInside h2 > .Rectangle {
    text-align:center;
    display:inline-flex;
    width: 60px;
    height: 3px;
    margin:2% 0 2% 0%;
    background: #7DC72C;
  }

  .Section h2{
    font-family:Avenir;
    margin:2% 0 2% 0%;
    font-size:24px;
  }

  .Section p{
    font-family:Museo Sans;
    font-weight:100;
    margin:2% 0% 2% 0%;
    font-size:14px;
  }


  //MENU MOBILE


.navigation{
  float:right;
}


a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

a:hover
{
  color: tomato;
}

#menuToggle
{
  position:relative;
  display: block;
  top:15px;

  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  position:absolute;
  display: block;
  width: 40px;
  height: 32px;
  top: -7px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 99999999; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}


#menu
{
  position: absolute;
  width: 300px;
  height:1200px;
  margin: -100px 0 0 -220px;
  padding-top: 125px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 100% 0%;
  transform: translate(+200%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  z-index:-1;
}

#menu li
{
  padding: 15%x 0;
  padding-top:15%;
  font-size: 36px;
}




/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}


.SectionHeaderRight > img{
  display:none;
}


.FundHeader2Icons{
  width:100%;
}

.Section{
  border:none;
  margin-top:12.5%;
}

.Choice_sections{
  position:static;
  display:flow-root;
}

.FundHeader2{
  margin-top:25%;
}

.FundIcon{
  width:100%;
}

.Header h1{
  margin-top:47% !important;
  font-size:36px !important;
}

.carousel{
  display:none;
}

.HomeInteraction{
  height:450px;
  padding-top:70px;
}


.FundForm{
  width:100%;
}

.FundFormRight{
  width:100% !important;
}

.FundFormLeft{
  width:100%;
  height:100%:
}

body input {
margin-top:7%;

}

.SectionsHeader h1{
  margin-top: 40% !important;
  font-size: 36px !important;
}

// HEDGEFUNDS


.SectionPlans{
  border:none;
}

.SectionPlans > .SectionInside{
  margin-top:20%;
}

.Plan{
  margin-top:25%;
  width:100%;
  height:540px;
  
}

.Plan > h1{
  font-size:36px;
  margin-top:80%;
  margin-left:0;
  text-align:center;
}

.Plan > p{
  font-size:18px;
  margin-top:10%;
  margin-left:0;
  text-align:center;
}

.Plan .SecondaryButton {
  text-align:center;
}


// REGISTRATION

.RegistrationLeft{
  width:100%;
}

.RegistrationRight{
display:none;
}


// Lightning & Storm

.LawNote{
  width:100%;
  height:100%;
  padding:40px;
}



// HOMEFUND

.HomeFund{
  min-width:20px;
}

.BitcoinAvailable{
  margin-top:15%;
}

}

//



`;