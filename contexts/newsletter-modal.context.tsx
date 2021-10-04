import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface NewsletterModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const NewsletterModalContext = React.createContext<NewsletterModalContextProps | null>(null);

export function NewsletterModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <NewsletterModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </NewsletterModalContext.Provider>
  );
}

export function useNewsletterModalContext() {
  const context = useContext(NewsletterModalContext);
  if (!context) {
    throw new Error('useNewsletterModalContext can only be used inside NewsletterModalContextProvider');
  }
  return context;
}
