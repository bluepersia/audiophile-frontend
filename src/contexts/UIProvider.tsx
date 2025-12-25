import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from "react";
type UIContextType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const UIContext = createContext<UIContextType | null>(null);

export default function UIProvider({ children }: PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <UIContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </UIContext.Provider>
  );
}

export { UIContext };
