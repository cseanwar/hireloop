import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Tfjyu0cXPoOiZCYA1NEuD7b',
    'seeker_premium': 'price_1Tg2UH0cXPoOiZCYu5VaS4Vd',
    'recruiter_growth': 'price_1Tg2T40cXPoOiZCYiZ1QsW9M',
    'recruiter_enterprise': 'price_1Tg2Ry0cXPoOiZCYDFQHUZBb'
}