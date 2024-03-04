import { RouterOutputs } from '@/utils/api'

export type Collections = RouterOutputs['collection']['all'] | undefined

export type Product = RouterOutputs['product']['all']['products'][0]

export type Address = RouterOutputs['address']['all']

export type Order = RouterOutputs['order']['all'][0]
