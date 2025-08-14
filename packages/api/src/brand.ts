import { faker } from '@faker-js/faker';

// Type definitions
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  bio: string;
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  yearsOfExperience: number;
  skills: string[];
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  createdAt: Date;
  featured: boolean;
};

export type Testimonial = {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  content: string;
  rating: number;
  date: Date;
  featured: boolean;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    amount: number;
    currency: string;
    period?: 'monthly' | 'yearly' | 'one-time';
  };
  popular: boolean;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  businessHours: {
    [key: string]:
      | {
          open: string;
          close: string;
        }
      | 'closed';
  };
};

export type CompanyStats = {
  employeeCount: number;
  projectsCompleted: number;
  yearsInBusiness: number;
  clientCount: number;
  countriesServed: number;
  satisfactionRate: number;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
};

export type Client = {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  featured: boolean;
};

// Constants
const DEPARTMENTS = [
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'Product',
  'Customer Success',
  'Operations',
  'Human Resources',
  'Finance',
  'Legal',
];

const GALLERY_CATEGORIES = [
  'Product',
  'Team',
  'Office',
  'Events',
  'Projects',
  'Clients',
  'Awards',
  'Community',
];

const SERVICE_NAMES = [
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
  'AI/ML Consulting',
  'DevOps Services',
  'UI/UX Design',
  'Digital Marketing',
  'Data Analytics',
  'Security Audit',
  'Technical Support',
];

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Go',
  'AWS',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Machine Learning',
  'Data Science',
  'UI Design',
  'UX Research',
  'Product Management',
  'Agile',
];

// Generate team member
const generateTeamMember = (overrides?: Partial<TeamMember>): TeamMember => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    department: faker.helpers.arrayElement(DEPARTMENTS),
    avatar: faker.image.avatar(),
    bio: faker.lorem.paragraph({ min: 2, max: 4 }),
    email: faker.internet.email(),
    linkedin: faker.helpers.maybe(
      () => `https://linkedin.com/in/${faker.internet.userName()}`,
      { probability: 0.8 }
    ),
    twitter: faker.helpers.maybe(
      () => `https://twitter.com/${faker.internet.userName()}`,
      { probability: 0.6 }
    ),
    github: faker.helpers.maybe(
      () => `https://github.com/${faker.internet.userName()}`,
      { probability: 0.7 }
    ),
    yearsOfExperience: faker.number.int({ min: 1, max: 20 }),
    skills: faker.helpers.arrayElements(SKILLS, { min: 3, max: 8 }),
    ...overrides,
  };
};

// Generate gallery item
const generateGalleryItem = (overrides?: Partial<GalleryItem>): GalleryItem => {
  const imageUrl = faker.image.urlPicsumPhotos({ width: 1200, height: 800 });
  return {
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    imageUrl,
    thumbnailUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
    category: faker.helpers.arrayElement(GALLERY_CATEGORIES),
    tags: faker.helpers.arrayElements(
      [
        'innovation',
        'design',
        'technology',
        'creativity',
        'teamwork',
        'success',
        'award',
        'milestone',
      ],
      { min: 2, max: 4 }
    ),
    createdAt: faker.date.recent({ days: 365 }),
    featured: faker.datatype.boolean({ probability: 0.2 }),
    ...overrides,
  };
};

// Generate testimonial
const generateTestimonial = (overrides?: Partial<Testimonial>): Testimonial => {
  return {
    id: faker.string.uuid(),
    author: {
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      avatar: faker.image.avatar(),
    },
    content: faker.lorem.paragraph({ min: 3, max: 6 }),
    rating: faker.number.float({ min: 4, max: 5, fractionDigits: 1 }),
    date: faker.date.recent({ days: 180 }),
    featured: faker.datatype.boolean({ probability: 0.3 }),
    ...overrides,
  };
};

// Generate service
const generateService = (overrides?: Partial<Service>): Service => {
  const hasPrice = faker.datatype.boolean({ probability: 0.7 });
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement(SERVICE_NAMES),
    description: `${faker.company.buzzPhrase()}. ${faker.lorem.paragraph()}`,
    icon: faker.helpers.arrayElement([
      '🚀',
      '💡',
      '🎯',
      '📊',
      '🔧',
      '🎨',
      '📱',
      '☁️',
      '🔒',
      '⚡',
    ]),
    features: Array.from(
      { length: faker.number.int({ min: 3, max: 6 }) },
      () =>
        `${faker.company.catchPhraseDescriptor()} ${faker.company.catchPhraseNoun()}`
    ),
    price: hasPrice
      ? {
          amount: faker.number.int({ min: 99, max: 9999 }),
          currency: 'USD',
          period: faker.helpers.arrayElement([
            'monthly',
            'yearly',
            'one-time',
          ] as const),
        }
      : undefined,
    popular: faker.datatype.boolean({ probability: 0.25 }),
    ...overrides,
  };
};

// Generate FAQ
const generateFAQ = (order: number, overrides?: Partial<FAQ>): FAQ => {
  return {
    id: faker.string.uuid(),
    question: `${faker.lorem.sentence()}?`,
    answer: faker.lorem.paragraph({ min: 2, max: 4 }),
    category: faker.helpers.arrayElement([
      'General',
      'Pricing',
      'Technical',
      'Support',
      'Features',
    ]),
    order,
    ...overrides,
  };
};

// Generate client
const generateClient = (overrides?: Partial<Client>): Client => {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    logo: faker.image.urlPicsumPhotos({ width: 200, height: 100 }),
    website: faker.internet.url(),
    description: faker.company.catchPhrase(),
    featured: faker.datatype.boolean({ probability: 0.3 }),
    ...overrides,
  };
};

// Cached data for consistency
let cachedTeamMembers: TeamMember[] | null = null;
let cachedGalleryItems: GalleryItem[] | null = null;
let cachedTestimonials: Testimonial[] | null = null;
let cachedServices: Service[] | null = null;
let cachedFAQs: FAQ[] | null = null;
let cachedClients: Client[] | null = null;
let cachedCompanyInfo: ContactInfo | null = null;
let cachedCompanyStats: CompanyStats | null = null;

/**
 * Fetch team members
 * @param limit - Number of team members to return (default: 12)
 * @param department - Optional department filter
 * @returns Array of team members
 */
export async function fetchTeamMembers(
  limit = 12,
  department?: string
): Promise<TeamMember[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!cachedTeamMembers) {
    cachedTeamMembers = Array.from({ length: 50 }, () => generateTeamMember());
  }

  let members = cachedTeamMembers;

  if (department) {
    members = members.filter(
      (member) => member.department.toLowerCase() === department.toLowerCase()
    );
  }

  return members
    .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
    .slice(0, limit);
}

/**
 * Fetch gallery items
 * @param limit - Number of items to return (default: 20)
 * @param category - Optional category filter
 * @param featuredOnly - Return only featured items
 * @returns Array of gallery items
 */
export async function fetchGalleryItems(
  limit = 20,
  category?: string,
  featuredOnly = false
): Promise<GalleryItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 350));

  if (!cachedGalleryItems) {
    cachedGalleryItems = Array.from({ length: 100 }, () =>
      generateGalleryItem()
    );
  }

  let items = cachedGalleryItems;

  if (category) {
    items = items.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featuredOnly) {
    items = items.filter((item) => item.featured);
  }

  return items
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}

/**
 * Fetch testimonials
 * @param limit - Number of testimonials to return (default: 10)
 * @param featuredOnly - Return only featured testimonials
 * @returns Array of testimonials
 */
export async function fetchTestimonials(
  limit = 10,
  featuredOnly = false
): Promise<Testimonial[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (!cachedTestimonials) {
    cachedTestimonials = Array.from({ length: 30 }, () =>
      generateTestimonial()
    );
  }

  let testimonials = cachedTestimonials;

  if (featuredOnly) {
    testimonials = testimonials.filter((t) => t.featured);
  }

  return testimonials.sort((a, b) => b.rating - a.rating).slice(0, limit);
}

/**
 * Fetch services
 * @param limit - Number of services to return (default: all)
 * @returns Array of services
 */
export async function fetchServices(limit?: number): Promise<Service[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (!cachedServices) {
    cachedServices = SERVICE_NAMES.map((name) => generateService({ name }));
  }

  const services = cachedServices.sort((a, b) => {
    // Popular services first
    if (a.popular !== b.popular) {
      return a.popular ? -1 : 1;
    }
    return 0;
  });

  return limit ? services.slice(0, limit) : services;
}

/**
 * Fetch company contact information
 * @returns Company contact information
 */
export async function fetchContactInfo(): Promise<ContactInfo> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  if (!cachedCompanyInfo) {
    cachedCompanyInfo = {
      email: faker.internet.email({ provider: 'company.com' }),
      phone: faker.phone.number(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: 'United States',
        zipCode: faker.location.zipCode(),
      },
      socialMedia: {
        twitter: 'https://twitter.com/company',
        linkedin: 'https://linkedin.com/company/company',
        facebook: 'https://facebook.com/company',
        instagram: 'https://instagram.com/company',
        youtube: 'https://youtube.com/company',
        github: 'https://github.com/company',
      },
      businessHours: {
        monday: { open: '09:00', close: '18:00' },
        tuesday: { open: '09:00', close: '18:00' },
        wednesday: { open: '09:00', close: '18:00' },
        thursday: { open: '09:00', close: '18:00' },
        friday: { open: '09:00', close: '17:00' },
        saturday: 'closed',
        sunday: 'closed',
      },
    };
  }

  return cachedCompanyInfo;
}

/**
 * Fetch company statistics
 * @returns Company statistics
 */
export async function fetchCompanyStats(): Promise<CompanyStats> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (!cachedCompanyStats) {
    cachedCompanyStats = {
      employeeCount: faker.number.int({ min: 50, max: 500 }),
      projectsCompleted: faker.number.int({ min: 100, max: 1000 }),
      yearsInBusiness: faker.number.int({ min: 5, max: 25 }),
      clientCount: faker.number.int({ min: 50, max: 300 }),
      countriesServed: faker.number.int({ min: 10, max: 50 }),
      satisfactionRate: faker.number.float({
        min: 95,
        max: 99.9,
        fractionDigits: 1,
      }),
    };
  }

  return cachedCompanyStats;
}

/**
 * Fetch FAQs
 * @param limit - Number of FAQs to return (default: all)
 * @param category - Optional category filter
 * @returns Array of FAQs
 */
export async function fetchFAQs(
  limit?: number,
  category?: string
): Promise<FAQ[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (!cachedFAQs) {
    cachedFAQs = Array.from({ length: 20 }, (_, i) => generateFAQ(i));
  }

  let faqs = cachedFAQs;

  if (category) {
    faqs = faqs.filter(
      (faq) => faq.category.toLowerCase() === category.toLowerCase()
    );
  }

  faqs = faqs.sort((a, b) => a.order - b.order);

  return limit ? faqs.slice(0, limit) : faqs;
}

/**
 * Fetch client list
 * @param limit - Number of clients to return (default: 20)
 * @param featuredOnly - Return only featured clients
 * @returns Array of clients
 */
export async function fetchClients(
  limit = 20,
  featuredOnly = false
): Promise<Client[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (!cachedClients) {
    cachedClients = Array.from({ length: 50 }, () => generateClient());
  }

  let clients = cachedClients;

  if (featuredOnly) {
    clients = clients.filter((client) => client.featured);
  }

  return clients
    .sort((a, b) => {
      // Featured clients first
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, limit);
}

/**
 * Submit contact form
 * @param formData - Contact form data
 * @returns Success response
 */
export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}): Promise<{ success: boolean; message: string; id: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate form validation
  if (!formData.email.includes('@')) {
    throw new Error('Invalid email address');
  }

  if (formData.message.length < 10) {
    throw new Error('Message is too short');
  }

  // Simulate successful submission
  return {
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
    id: faker.string.uuid(),
  };
}

/**
 * Subscribe to newsletter
 * @param email - Email address
 * @returns Success response
 */
export async function subscribeNewsletter(
  email: string
): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulate email validation
  if (!email.includes('@')) {
    throw new Error('Invalid email address');
  }

  return {
    success: true,
    message: 'Successfully subscribed to newsletter!',
  };
}

/**
 * Get gallery categories
 * @returns Array of gallery category names
 */
export async function fetchGalleryCategories(): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return GALLERY_CATEGORIES;
}

/**
 * Get available departments
 * @returns Array of department names
 */
export async function fetchDepartments(): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return DEPARTMENTS;
}
