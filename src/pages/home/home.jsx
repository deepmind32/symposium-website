import { MdOpenInNew } from "react-icons/md";

import Button from "../../components/button/button";
import Shapes from "../../components/shapes/shapes";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles["hero-section"]}>
        <Shapes variant="small" color="dark-orange" />
        <main>
          <h1>Privacy Preserving Federated Learning</h1>
          <p>
            Prifed is HAINet’s initiative to promote{" "}
            <span className="u-color-dark-orange">
              privacy-preserving federated learning
            </span>{" "}
            in{" "}
            <span className="u-color-dark-orange u-text-no-wrap">
              Health AI
            </span>
            . We host events, release datasets, and build awareness among
            policymakers, students, researchers, and medical professionals.
          </p>
        </main>

        <div className={styles["hero-button__wrapper"]}>
          <a
            href="https://hainet.org/?ref=prifed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Learn More About HAINet <MdOpenInNew />
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
