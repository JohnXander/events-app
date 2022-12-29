import { HomePage } from '../src/components/home/home-page'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>

      <HomePage data={data} />

    </div>
  )
}


export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json')

  return {
      props: {
          data: events_categories
      }
  }
}
