const MOCKING = process.env.NEXT_PUBLIC_MOCKING ?? 'false';

export const isMocking = () => MOCKING === 'true';
