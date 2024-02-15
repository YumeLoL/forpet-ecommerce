export interface LogoProps {
  className?: string
  spanClassName?: string
}

export interface NavigationProps {
  id: number
  title: string
  link: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface ProductProps {
  id: number
  name: string
  description: string
  slug: string
  image: string
  type: string
  price: number
  quantity: number
  brand: string
  category: string
}

export interface ProductsProps {
  products: ProductProps[]
}
export interface ProductsDataProps {
  productsData: ProductProps[]
}
export interface OrdersDataProps {
  ordersData: ProductProps[]
}
export interface FavoritesDataProps {
  favoritesData: ProductProps[]
}
export interface UserLogProps {
  userInfo: null | string
}

export interface AmountProps {
  amount: number
  className?: string
}

export interface SelectorStateProps {
  productsData: ProductProps[]
  ordersData: ProductProps[]
  favoritesData: ProductProps[]
  userInfo: null | string
  cart: any | { productsData: ProductProps[] } | any
  favorites: any | { favoritesData: ProductProps[] } | any
}

/*
pro: {
      
      userInfo: {};
      orderData: {
        order: ProductType[];
      };
      favoriteData: ProductType[];
    };
*/

export interface StateProps {
  cart?: {
    productsData: ProductProps[] | any
  }
}

export interface ProductDetailsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface TitleProps {
  text: string
  className: string
}

export interface CategoryProps {
  params: { slug: string } | any
}
