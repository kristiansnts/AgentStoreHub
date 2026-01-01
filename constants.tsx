
import { Agent } from './types';

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
