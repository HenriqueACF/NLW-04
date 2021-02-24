import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasActveChallenge = true;
   return(
       <div className={styles.challengeBoxContainer}>
           { hasActveChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe 400xp</header>

                   <main>
                       <img src="icons/body.svg" />
                       <strong>Novo desafio</strong>
                       <p>Faça um alongamento e beba água</p>
                   </main>

                   <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                   </footer>
                </div>
           ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up" />
                    Avance de level completando desafios
                </p>
            </div>
           ) }
       </div>
   ) 
}
