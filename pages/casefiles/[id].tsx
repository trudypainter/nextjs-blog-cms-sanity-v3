import { PreviewSuspense } from '@sanity/preview-kit'
import CaseFilePage from 'components/CaseFilePage'
import PostPage from 'components/PostPage'
import {
  getAllPostsSlugs,
  getCaseFileByID,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { lazy } from 'react'

interface Props {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string

  return {
    props: { id },
  }
}

export default function ProjectSlugRoute({ id }: Props) {
  return <CaseFilePage id={id} />
}
