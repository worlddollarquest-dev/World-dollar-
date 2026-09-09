import React, { createContext, useContext, useEffect, useState } from 'react';
import { store } from './store';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    store.trackEvent('page_view', { path });
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const Link: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
}> = ({ to, className, children, onClick, id }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // allow cmd/ctrl click to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a id={id} href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
