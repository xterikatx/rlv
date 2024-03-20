import React from 'react';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../src/App';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  QueryClientProvider: jest.fn(({ children }) => children),
}));

describe('App', () => {
  test('renders "Ola mundo" text', () => {
    const { getByText } = render(<App />);

    const olaMundoText = getByText('Ola mundo');
    expect(olaMundoText).toBeDefined();
  });

  test('renders QueryClientProvider with QueryClient', () => {
    render(<App />);

    expect(QueryClientProvider).toHaveBeenCalled();

    const queryClientProviderProps = (QueryClientProvider as jest.Mock).mock.calls[0][0];
    expect(queryClientProviderProps.client).toBeInstanceOf(QueryClient);
  });
});
