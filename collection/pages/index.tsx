import Head from 'next/head';
import Styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>New Collection</title>
      </Head>

      <main className={Styles.container}>
        <span id={Styles.boxTop} className={Styles.box} />
        <span id={Styles.boxBottom} className={Styles.box} />

        <div id={Styles.boxOne} className={Styles.containers}>
          <div id={Styles.imgOne} className={Styles.boxImg}>
            <div className={Styles.txt}>
              <p>new</p>
              <p>col</p>
              <p>lec</p>
              <p>tion</p>
            </div>
          </div>
        </div>

        <div className={Styles.menu}>
          <hr className={Styles.hr}/>
            <div className={Styles.nav}>
              <div className={Styles.circle}>
                <h2>menu</h2>
              </div>
              <div className={Styles.paragrafos}>
                <p className={Styles.lupa}>&#9906;</p>
                <p>men</p>
                <p>women</p>
                <p>collection</p>
              </div>
            </div>
          <hr className={Styles.hr}/>
        </div>

        <div id={Styles.boxTwo} className={Styles.containers}>
          <div id={Styles.imgTwo} className={Styles.boxImg}>
            <p>m</p>
          </div>


          <div id={Styles.imgThree} className={Styles.boxImg}>
            <p>w</p>
          </div>
        </div>
      </main>
    </>
  )
}
