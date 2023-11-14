import styles from './HeroSection.module.css'
function HeroSection() {
    return (
        <section className={styles['hero-wrapper']}>
            <div className={styles['option_one']}>
                <h2 className={styles['h2']}>Learn how to make decorative plasters</h2>
            </div>
            <div className={styles['or']}>
                <h2 className={styles['h2']}>or</h2>
            </div>
            <div className={styles['option_two']}>
                <h2 className={styles['h2']}>Demand such by our schooling platform</h2>
            </div>
        </section>
    )
}

export default HeroSection
