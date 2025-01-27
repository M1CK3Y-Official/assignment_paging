import styles from './page.module.css';
import Image from 'next/image';
import { fetchGalleryByName, fetchImagesForGallery } from '@/lib/data.service';
import DevSwiper from '@/components/devSwiper/devSwiper';




export default async function Page({ params }) {

  const galleryName = await fetchImagesForGallery(params.gallery);
  console.log(galleryName);

    return (
      <main className={styles.page}>

        <DevSwiper galleryName={galleryName}></DevSwiper>
       
        {/* {galleryName.map((image, index) => {
           return <Image src={`/galleries${image.path}`} key={index} alt="dwdw" width={500} height={500} />
        })} */}
      </main>
    )
  }