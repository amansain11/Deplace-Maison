import './STYLES/style.css';
import './STYLES/modern-normalize.css';
import './STYLES/header.css';
import './STYLES/main-and-sidebar.css';
import './STYLES/hero-section.css';
import './STYLES/i-section.css';
import './STYLES/morquee-section.css';
import './STYLES/e-section.css';
import './STYLES/slider-section.css';
import './STYLES/quote-section.css';
import './STYLES/footer.css';
import './STYLES/cart-menu.css';
import './STYLES/ham-menu.css';
import './STYLES/inkMode.css';

import { textPullUpEffect } from './text-pullUp-effect.js';
import { slider } from './img-slider.js';
import { zoomEffect } from './zoom-effect.js';
import { cart } from './cart.js';
import { hamburger } from './ham-menu.js';
import { inkMode } from './inkMode.js';

textPullUpEffect();
zoomEffect();
slider();
cart();
hamburger();
inkMode();