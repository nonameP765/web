import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';

import { Button } from '.';

describe('테스트', () => {
  it('render Button', () => {
    render(<Button text="버튼" />);

    expect(screen.getByText('버튼')).toBeInTheDocument();
  });
});
