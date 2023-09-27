import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
    vi.mock('next/navigation', () => ({
        ...require('next-router-mock'),
        useSearchParams: () => vi.fn()
    }));
});

afterEach(() => {
    cleanup();
});
