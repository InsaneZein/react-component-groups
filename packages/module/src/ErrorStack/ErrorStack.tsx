import * as React from 'react';
import { Text } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';

export interface ErrorStackProps {
  error: Error;
}

const useStyles = createUseStyles({
  errorStack: {
    fontFamily: 'monospace',
    fontSize: 'var(--pf-v5-global--icon--FontSize--md)',
    textAlign: 'left',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'var(--pf-v5-global--BackgroundColor--dark-300)',
    overflowWrap: 'break-word',
    padding: 'var(--pf-v5-global--spacer--sm)'
  },
})

export const ErrorStack: React.FunctionComponent<ErrorStackProps> = ({ error }) => {
  const classes = useStyles();
  if (error.stack) {
    return (
      <Text className={classes.errorStack}>
        {error.stack.split('\n').map((line) => (
          <div key={line}>{line}</div>
        ))}
      </Text>
    );
  }

  if (error.name && error.message) {
    return (
      <>
        <Text component="h6">{error.name}</Text>
        <Text className={classes.errorStack} component="blockquote">
          {error.message}
        </Text>
      </>
    );
  }

  return (
    <Text className={classes.errorStack} component="blockquote">
      {error.toString()}
    </Text>
  );
};

export default ErrorStack;