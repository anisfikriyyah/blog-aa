import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Javascript</>,
    imageUrl: 'https://skillvalue.com/jobs/wp-content/uploads/sites/7/2019/07/D%C3%A9veloppeur-Full-Stack-Poste-CDI-%E2%80%93-Paris.png',
    description: (
      <>
        Javascript dengan materi dasar, express js, react, vue, angular, svelte, React Native dan Ionic
      </>
    ),
  },
  {
    title: <>Kotlin</>,
    imageUrl: 'https://andrewshitov.com/wp-content/uploads/2019/11/Kotlin.png',
    description: (
      <>
        Mempelajari dasar-dasar kotlin hingga membangun sebuah aplikasi Android
      </>
    ),
  },
  {
    title: <>PHP</>,
    imageUrl: 'https://www.beliefmedia.com.au/wp-content/uploads/2017/09/php-wallpaper-1.jpg',
    description: (
      <>
        Membahas php dari dasar, framework codeigniter, dan framework Laravel
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Blog untuk semua programmer`}
      description="Blog dan tutorial koding series">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              id="ayo-belajar"
              to={useBaseUrl('blog')}>
              Ayo Belajar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row" style={{textAlign: 'center'}}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
