import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import styles from "./TestComponent.module.scss";

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <div data-testid="test-component" className={styles.testComponent}>
    <h1 data-testid="test-component__heading" className={styles.heading}>
      MyCSSskillsareflawless23
    </h1>
  </div>
);

export default TestComponent;
