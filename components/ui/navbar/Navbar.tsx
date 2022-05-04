import NextLink from 'next/link'
import Image from 'next/image'
import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import { useRouter } from 'next/router'

import yelpImage from '../../../public/images/yelp.png'
import { Search } from '../search/Search'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray900.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%'
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src={yelpImage} alt="Icon app" width={70} height={70} />
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/" passHref className={styles.title}>
        <Link>
          <Text h1 data-testid="textNavbar">
            Business Yelp
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      {router.pathname === '/' && <Search />}
    </div>
  )
}
