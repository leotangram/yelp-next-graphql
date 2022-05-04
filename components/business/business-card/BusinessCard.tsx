import { FC } from 'react'
import { Card, Grid, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import { BusinessShort } from '../../../interfaces'

import styles from './BusinessCard.module.scss'
import { useAppSelector } from '../../../hooks'
import { selectBusiness } from '../../../features/business'

interface BusinessCardProps {
  business: BusinessShort
}

export const BusinessCard: FC<BusinessCardProps> = ({
  business: {
    id,
    location: { address1 },
    name,
    photos,
    rating,
    review_count
  }
}) => {
  const router = useRouter()
  const { businessIds } = useAppSelector(selectBusiness)

  const visited = businessIds.includes(id)

  const onClick = () => {
    router.push(`/business/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={photos[0]} height={200} />
          <div className={styles.footer}>
            <Text
              className={styles.text}
              transform="capitalize"
              h4
              weight="bold"
            >
              {name}
            </Text>
            <Text className={styles.text}>Location</Text>
            <Text className={styles.text} h4>
              {address1}
            </Text>
            <Text className={styles.text}>Rating</Text>
            <Text className={styles.text} h4>
              {rating}
            </Text>
            <Text className={styles.text}>Review Count</Text>
            <Text className={styles.text} h4>
              {review_count}
            </Text>
          </div>
        </Card.Body>
        <Card.Footer>{visited && <RemoveRedEyeIcon />}</Card.Footer>
      </Card>
    </Grid>
  )
}
