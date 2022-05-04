import type { GetServerSideProps, NextPage } from 'next'
import client from '../apollo-client'
import { Layout } from '../components/layouts'
import { Grid } from '@nextui-org/react'
import { BusinessCard } from '../components/business'
import { BusinessShort, SearchBusinessResult } from '../interfaces'
import { SEARCH_BUSINESS } from '../queries'

interface HomePageProps {
  businessList: BusinessShort[]
}

const HomePage: NextPage<HomePageProps> = ({ businessList = [] }) => {
  return (
    <Layout title="Business List">
      <Grid.Container gap={2} justify="flex-start">
        {businessList.map((business, index) => (
          <BusinessCard key={`${business.name}_${index}`} business={business} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    query: { searchedTerm }
  } = ctx

  if (!searchedTerm) {
    return {
      props: {
        businessList: []
      }
    }
  }

  try {
    const { data } = await client.query<SearchBusinessResult>({
      query: SEARCH_BUSINESS,
      variables: { term: searchedTerm }
    })

    return {
      props: {
        businessList: data.search.business
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

export default HomePage
