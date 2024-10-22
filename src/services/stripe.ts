import Stripe from 'stripe'
import {version} from '../../package.json'

const stripeApiKey = 'sk_test_51QAxV4EJnf514uGI1T9Q4yadtaCTSFjxeZBDb0NjPdhaN4SrXWvj0MLFTYpohBYJKk2ZCDqjaMPpX5d3d2hfgutW00itSd3IBo'

export const stripe = new Stripe(
  stripeApiKey, 
  {
    apiVersion: '2024-09-30.acacia',
    appInfo: {
      name: 'My e-commerce',
      version
    },
  }
)