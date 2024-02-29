import { Prisma } from '@prisma/client'

export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Kitten Dry Cat Food',
    slug: 'kitten-dry-cat-food',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 10.0, quantity: 2, unit: 'kg' },
        { price: 20.0, quantity: 4, unit: 'kg' },
        { price: 30.0, quantity: 8, unit: 'kg' },
      ],
    },
    rate: 4.0,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 6,
      },
    },
    merchant: {
      connect: {
        id: 1,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-1.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    slug: 'kitten-wet-cat-food',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 10.0, quantity: 12, unit: '85g' },
        { price: 20.0, quantity: 24, unit: '85kg' },
        { price: 38.0, quantity: 60, unit: '85kg' },
      ],
    },
    rate: 4.6,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 7,
      },
    },
    merchant: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-3.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    name: 'Kitten Cat Food',
    slug: 'cat-food-kitten',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 12.0, quantity: 2, unit: 'kg' },
        { price: 22.0, quantity: 4, unit: 'kg' },
        { price: 32.0, quantity: 8, unit: 'kg' },
      ],
    },
    rate: 3.5,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 6,
      },
    },
    merchant: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-1.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-2.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
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
    name: 'Cat Wet Food',
    slug: 'cat-food-wet',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 6.0, quantity: 12, unit: '85g' },
        { price: 12.0, quantity: 24, unit: '85kg' },
      ],
    },
    rate: 4.8,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 7,
      },
    },
    merchant: {
      connect: {
        id: 9,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-4.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
          {
            imageURL: '/assets/products/product-3.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kitten Litter',
    slug: 'kitten-litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 16.0, quantity: 1, unit: '4kg' },
        { price: 30.0, quantity: 1, unit: '8kg' },
        { price: 42.0, quantity: 1, unit: '16kg' },
      ],
    },
    rate: 3.8,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 9,
      },
    },
    merchant: {
      connect: {
        id: 3,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-5.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    slug: 'kitten-tofu-litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 46.0, quantity: 1, unit: '20kg' }],
    },
    rate: 4.8,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 10,
      },
    },
    merchant: {
      connect: {
        id: 4,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-7.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    slug: 'kitten-paper-litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 36.0, quantity: 1, unit: '10kg' }],
    },
    rate: 4.2,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 11,
      },
    },
    merchant: {
      connect: {
        id: 9,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-9.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    slug: 'paper-litter',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 26.0, quantity: 1, unit: '6kg' }],
    },
    rate: 3.2,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 10,
      },
    },
    merchant: {
      connect: {
        id: 7,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-9.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
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
    name: 'Sofa Bed Grey',
    slug: 'grey-sofa',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 66.0, quantity: 1, unit: 'each' }],
    },
    rate: 3.6,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 14,
      },
    },
    merchant: {
      connect: {
        id: 10,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-12.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-12.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Cat Toy Tunnel',
    slug: 'cat-toy-tunnel',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 36.0, quantity: 1, unit: 'each' }],
    },
    rate: 5.0,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 22,
      },
    },
    merchant: {
      connect: {
        id: 1,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-13.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-13.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Play Toy Tunnel',
    slug: 'play-toy-tunnel',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 32.0, quantity: 1, unit: 'each' }],
    },
    rate: 3.2,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 22,
      },
    },
    merchant: {
      connect: {
        id: 1,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-13.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Dog Training Treats',
    slug: 'dog-training-treats',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 16.0, quantity: 1, unit: 'each' }],
    },
    rate: 5.0,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 17,
      },
    },
    merchant: {
      connect: {
        id: 1,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-14.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-14.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
          {
            imageURL: '/assets/products/product-14.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Dog Healthy Benefits Dry Dog Food',
    slug: 'dog-healthy-benefits-dry-dog-food',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 22.0, quantity: 1, unit: '2kg' },
        {
          price: 88.0,
          quantity: 1,
          unit: '10kg',
        },
      ],
    },
    rate: 5.0,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 6,
      },
    },
    merchant: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-17.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-18.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Grain Free Adult Dry Dog Food',
    slug: 'grain-free-adult-dry-dog-food',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 124.99, quantity: 1, unit: '15kg' }],
    },
    rate: 4.1,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 8,
      },
    },
    merchant: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-19.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-20.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Homestead Turkey Bone Meal Topper',
    slug: 'homestead-turkey-bone-meal-topper',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 17.99, quantity: 1, unit: '340g' },
        {
          price: 29.7,
          quantity: 1,
          unit: '680g',
        },
      ],
    },
    rate: 4.3,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 7,
      },
    },
    merchant: {
      connect: {
        id: 4,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-21.png',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
          {
            imageURL: '/assets/products/product-22.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Probiotics For Dogs',
    slug: 'probiotics-for-dogs',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 34.99, quantity: 1, unit: '150g' }],
    },
    rate: 4.5,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 25,
      },
    },
    merchant: {
      connect: {
        id: 6,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-23.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Elevated Bed Black',
    slug: 'elevated-bed-black',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 20.99, quantity: 1, unit: 'small' },
        {
          price: 30.99,
          quantity: 1,
          unit: 'large',
        },
      ],
    },
    rate: 4.8,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 15,
      },
    },
    merchant: {
      connect: {
        id: 7,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-24.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Kangaroo Training Treats',
    slug: 'kangaroo-training-treats',
    description: `This premium dry dog food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [
        { price: 8.99, quantity: 1, unit: '250g' },
        {
          price: 12.99,
          quantity: 1,
          unit: '500g',
        },
      ],
    },
    rate: 4.9,
    published: true,
    types: ['DOG'],
    collection: {
      connect: {
        id: 17,
      },
    },
    merchant: {
      connect: {
        id: 8,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-25.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
          {
            imageURL: '/assets/products/product-26.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Cat Biscuits Treats',
    slug: 'cat-biscuits-treats',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 6.0, quantity: 1, unit: 'each' }],
    },
    rate: 4.5,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 24,
      },
    },
    merchant: {
      connect: {
        id: 5,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-15.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
  {
    name: 'Cat Treats Dental',
    slug: 'cat-treats-dental',
    description: `This premium dry kitten food contains high quality, highly digestible nutrients to help support healthy bone and muscle development. It includes an exclusive combinations of nutrients to maintain optimal digestive health and stool quality, as well as antioxidants and prebiotics to support your kittens natural immune defences.`,
    prices: {
      create: [{ price: 10.0, quantity: 1, unit: 'each' }],
    },
    rate: 4.7,
    published: true,
    types: ['CAT'],
    collection: {
      connect: {
        id: 24,
      },
    },
    merchant: {
      connect: {
        id: 5,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-16.webp',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABvAG8DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIABv/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDsmDCszAGTTRUaFBoFBBFMVExUGaYQVZZgwrMwBqmmporUNQilgwq4YmGDNXGEKshgw0QwBhWFAUNQiloGgLioiKgioRCrKWZhWBACimpooBoRWIaAqKiYqDKoRCqMxAoFIoJoqqmgkGhFYwKgGKiYqCKhEKorAoAmiqqaCamqqaKliEVjAYCoqJioIYWhVlYIoCpqqmgipqqmigEIpMBgqoYIqDJhBVH/2Q==',
          },
        ],
      },
    },
  },
]
