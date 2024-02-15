import { PrismaClient } from '@prisma/client'
import { collections, products, merchants } from '../src/data'

const prisma = new PrismaClient()

async function main() {
  const createCollections = prisma.collection.createMany({
    data: collections,
  })
  const createMerchant = prisma.merchant.createMany({
    data: merchants,
  })

  await prisma.$transaction([createCollections])
  await prisma.$transaction([createMerchant])

  for (const p of products) {
    await prisma.product.create({
      data: p,
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
