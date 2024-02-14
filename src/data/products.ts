import { Prisma } from '@prisma/client'

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Kitten Dry Cat Food',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 6,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-1.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-2.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Wet Cat Food',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 7,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-3.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-4.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-5.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-6.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Tofu Litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-7.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-8.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Paper Litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-9.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-10.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Paper Litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    types: ['CAT'],
    sizes: ['EACH'],
    colors: ['BLACK'],
    collection: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-9.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-10.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
]
