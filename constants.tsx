
import { Agent, AIAgent } from './types';

export const MY_AGENTS: AIAgent[] = [
  {
    id: '1',
    name: 'Code Reviewer',
    category: 'AI Agent',
    description: 'Automated code review and feedback',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqMFfUF5gHGxbOE0soGUGfSErRoCT7bFHsUmux5I70_l5hMp0qZwOaS0eFtB6Dt5_jXKmkCP9-3CfAFalKZIS1jZN76Ee88JUH5orvlPhmM4vjlLt245g_c-oXXybfC_5GgMuvszvpqmMoAq67fNcZBQIeibch1X8sBg9RNs79RI8NqC_tyeVP8nOx7Rs1_UXZOpd7kgOvT6tkPc8s_wgyHq5elycNSa3QfIbznoaOCayJS2XFfULlaZ9Kt0beMbswMkFSb5tn704',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Content Writer',
    category: 'AI Agent',
    description: 'Generates high-quality articles and blog posts',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2S2dfZKszEdDUWuOpJ13sie67iJ7CKWjgDCu3aevAHR-94hD_Hqnjk8XASlVlvRR_Mj92M0zv1armDbriGTOvhHtNEvvohle8VQ0_vMUuEXLqM98Bj9Matba2Tiyvx_1NML-mUp3HkHwdoQ1SNTrkz3oVZSHt3NljR1T5Ji2xYPyKZTaMLi6v3hTISFw_ogqkVc0ZTLb_bXz7YI6BZHUhY4yo1cx9Kj4jWuAzb9wUKMUvS7XqN6GWbcIEHOgYtQAqnHKMtosoNTU',
    status: 'Free'
  },
  {
    id: '3',
    name: 'Social Media Manager',
    category: 'AI Agent',
    description: 'Manages social media accounts and posts',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnCeIUZu8x6SIXf63mK_BZMFyVa4jBw30APu90zueXgCqe4nF1FMp2aP4DtXKnZfPJTwwsTPCG_6JDrTdkrspNnnfVDBkT3H-ikZfTEhVa_NC8eY5S9DgTRCD3nSEYTJCmWTXmAuE4m9LbbUGLfqoDbrILLEKGStEA4rSeNeDn_0eqG_Dh3t0GMnLqyjhIiOgFD_n_cUEWX1wiGXWkcdn4eerTgSTc0JZzSOl9MLINiCNQtuhxFcPjx1u8PJr4qPrBl4PVAYIE964',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Customer Support',
    category: 'AI Agent',
    description: 'Provides automated customer support',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuCVF3vi4GppjE5BFIbvrrBHqMA9bEomTEi6D6etyRHAU8-f0Jaj6PxrXkkW-gAeSMVfKm5Oiu4k2m5MNEsz3ThjcFHmnjWa0No4SEcwDTjvuy44_spSZ--23655u0DECSi_8hLDGHFfh8Z6UtQf7lEBQNJ59SO-FtQJ16uI8wlNzjYTRszaEjLWcIWpC8FMG69RcVybu37b3fVFvDOzOmZuPhJNklRWf9oJNnqIB75irjPMVwFb5AUb7vIWopiap0ZgK2lDlOMZ0',
    status: 'Active'
  }
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: '1',
    name: 'CodeWizard AI',
    provider: 'DevTools',
    rating: 4.8,
    reviews: '12k',
    category: 'Productivity',
    isFeatured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH80ZKYoE3IqzIIZV6uhAjLukqovRbuugsPtC458n-Kx-8tGl-SdcCJO6TG4AtaecE-MsBfX5A-hQDOWuk3akzbCko-lmxxPjFVlWI6r_9kKUc2VKxo6CAlRHiSk_KShR8kylGJkilUbjBynygb8N62u3ozNfuRf9yu-LZY8qYmuK7t6jhrL6KglCh6dgWuwbZr6XvvvOMOKE_upMw_SPLkrtTMe_brD9txo6KaNaLt6kSocDtysQ4tb__4wUBNt7kdq1HYaxcw4g',
    description: 'Advanced coding assistant for Python & JS. Automate your debugging workflow instantly.'
  },
  {
    id: '2',
    name: 'Fin',
    provider: 'Fin AI Inc.',
    rating: 4.8,
    reviews: '12k',
    category: 'Productivity',
    isFree: false,
    price: '$5.00/mo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ca2a88igNa9aZxDvygmavkworY7jWDOtg0X8GHYCq697sdEdaazqttvQacilBUhkLXng-zaO6pjFoOl2UV4VKHzbOLeYuMjrxc8Teii5ZUjiFt5h1Fa-b7jlpY_cLCCwTAsW_ajJl0xmzLVADsJCFIptrjMhp8mHa02pqVR-1_ESHYrLvmsUYZJZMtZNO_EeqWy6hj1-QChkSi3N0em2apZc1c5yADBxinwYP2ipF75EzdXcx6OWoym6-ZmoB1Z9ved6zFjtarM',
    description: 'Your WhatsApp Assistant. Fin manages your calendar and reminders directly in WhatsApp.'
  },
  {
    id: '3',
    name: 'TravelBuddy AI',
    provider: 'ExplorerInc',
    rating: 4.9,
    reviews: '12k',
    category: 'Lifestyle',
    isFree: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOnjxbsNRiPBjeWoD1ef_XqaXMFZIk14dPrqPBao3OqOFFmPYaRcvBy4hamOav_UAdp1YDmof-Yw8qoVqq8JJdIylcnhi4QQJC3Ezqv5VatsEXrg8Cr3os4BceCFy3BKxRiAb-_xAyhVZ3EV_GiXztZXwT8JU1Ml80Q2MU1sc0uBdBEKtECCzeP-_0LI47vArr93edhjUMHCXx8FeUsiDe5JLyFqRW4Jt0pB4gXov9yOuH_QfPwnJoh2kaB5YdVEARmh8dir564zE',
    description: 'Plan your next adventure with ease. Your personal travel guide powered by AI.'
  },
  {
    id: '4',
    name: 'DataCruncher',
    provider: 'AnalyticsIO',
    rating: 4.7,
    reviews: '5k',
    category: 'Business',
    price: '$10/mo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqz9vtnZHJ0nLylFaoG6aenlGiOK09WQPASAl4x0M9diYaPF9zIIGYC4vXkPrjekojFtUmH153d3dmaPb5TP5lHAUI__EvGcSjViZwrdE6YkExX4YgEAVRQtUFmCRBfsZC4dMAgPAH-VAseO9NRaD_obc1V2q0EfZJ4NTT9dyvgXHW6RftsKdJ_SKxTpWbtS8dOSqPzuHne2nqxC9MIgIIUl-_R-THC_f8V18wI7br9hlEhBF-JPNHXIN_q-Bmq6hCMUBVeBblVoI',
    description: 'Process and visualize complex data sets in seconds.'
  }
];

export const CATEGORIES = ['All', 'Productivity', 'Writing', 'Coding', 'Lifestyle', 'Finance', 'Business'];
