import * as stylex from '@stylexjs/stylex';

interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button type="button" {...stylex.props(styles.button)}>
      {text}
    </button>
  );
}

const styles = stylex.create({
  button: {
    appearance: 'none',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: 4,
    color: '#000',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1,
    padding: '12px 24px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: '#f5f5f5'
    },
    ':focus': {
      outline: 'none'
    },
    ':disabled': {
      backgroundColor: '#f5f5f5',
      color: '#999',
      cursor: 'not-allowed'
    }
  }
});
