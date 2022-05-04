import { FC, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Divider, Grid, Image, Spacer, Text } from '@nextui-org/react'

import { Layout } from '../../components/layouts'

import { Business, BusinessResult } from '../../interfaces'
import styles from './Business.module.scss'
import client from '../../apollo-client'
import { BUSINESS } from '../../queries'
import { WEEK_DAYS } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectBusiness } from '../../features/business'
import { setBusinessListId } from '../../features/business/actions'

interface BusinessPageProps {
  business: Business
}

const BusinessPage: FC<BusinessPageProps> = ({ business }) => {
  const {
    display_phone,
    id,
    hours,
    location: { address1 },
    name,
    photos,
    price,
    rating,
    review_count,
    reviews
  } = business

  const dispatch = useAppDispatch()
  const { businessIds } = useAppSelector(selectBusiness)

  useEffect(() => {
    if (businessIds.includes(id)) return
    dispatch(setBusinessListId(id))
  }, [])

  return (
    <Layout title={`${name} detail`}>
      <Grid.Container gap={2} justify="flex-start" className={styles.grids}>
        <Grid xs={12} sm={6} className={styles['business-info']}>
          <Text h1 className={styles.title}>
            {name}
          </Text>
          <Divider />
          <Spacer x={1} />
          <Text h4 data-testid="location">
            Location
          </Text>
          <Text h3>{address1}</Text>
          <Spacer x={1} />
          <Text h4>Reviews Number</Text>
          <Text h3>{review_count}</Text>
          <Spacer x={1} />
          <Text h4>Raiting</Text>
          <Text h3>{rating}</Text>
          <Spacer x={1} />
          <Text h4>Contact Number</Text>
          <Text h3>{display_phone}</Text>
          <Spacer x={1} />
          <Text h4>Prices</Text>
          <Text h3>{price}</Text>
          <Spacer x={1} />
          <Text h3>Schedule</Text>
          <Spacer x={1} />
          <div>
            {hours[0].open.map(({ day, end, start }, index) => {
              const dayName = WEEK_DAYS[day]
              return (
                <div key={`${day}_${index}`}>
                  <Text h4 className={styles.text}>
                    {dayName}
                  </Text>
                  <Text h5 className={styles.text}>
                    Start - {start}
                  </Text>
                  <Text h5 className={styles.text}>
                    End - {end}
                  </Text>
                  <Spacer x={1} />
                </div>
              )
            })}
            <Text h4 className={styles.text}>
              {hours[0].is_open_now ? 'Open' : 'Closed'} now
            </Text>
            <Text h3 className={styles.text}>
              Reviews
            </Text>
            <Spacer x={1} />
            <ul>
              {reviews.slice(0, 5).map(({ text }, index) => (
                <li>
                  <Text className={styles.text} key={`${text}_${index}`}>
                    {text}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid xs={12} sm={6}>
          <Image src={photos[0]} width="100%" objectFit="cover" />
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const business = [...Array(0)]

  return {
    paths: business.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    const { data } = await client.query<BusinessResult>({
      query: BUSINESS,
      variables: { id }
    })

    return {
      props: {
        business: data.business
      }
    }
  } catch (error) {
    console.log({ error })
    return {
      props: {
        businessList: []
      }
    }
  }
}

export default BusinessPage
