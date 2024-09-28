import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Educação em código aberto <span className={styles.heroTitleOS}>com a OpenSauced</span></h1>
        <p className={styles.heroSubtitle}>Capacitando sua jornada no código aberto: da primeira contribuição à liderança de projetos!</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Início" description="Bem-vindo(a) à trilha educacional da OpenSauced!">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Curso de introdução ao open source</h3>
                <p>Este curso foi desenvolvido para capacitar você com as habilidades e conhecimentos necessários para contribuir com projetos de código aberto. Ele oferece exercícios práticos e envolventes para ajudar no início da sua jornada rumo a se tornar um(a) contribuidor(a) de sucesso, além de proporcionar a oportunidade de ter seu primeiro pull request aceito.</p>
                <Link className={styles.cardLink} to="/intro-to-oss">
                Começar o curso de introdução ao código aberto
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Tornando-se um mantenedor</h3>
                <p>Este curso foi desenvolvido para ajudar pessoas interessadas em se tornar mantenedoras de projetos de código aberto. Ele orienta você pelas melhores práticas de manutenção e fornece recursos e ferramentas que auxiliam os mantenedores a desempenharem suas funções. O curso também conta com um tutorial para que você possa aplicar os conhecimentos na prática.</p>
                <Link className={styles.cardLink} to="/becoming-a-maintainer">
                Começar o curso tornando-se um mantenedor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}