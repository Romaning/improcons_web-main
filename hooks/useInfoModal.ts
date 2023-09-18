import { create } from "zustand";

export interface ModalStoreInterface {
  productId?: string;
  isOpen: boolean;
  openModal: (productId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  productId: undefined,
  isOpen: false,
  openModal: (productId: string) => set({ isOpen: true, productId }),
  closeModal: () => set({ isOpen: false, productId: undefined }),
}));

export default useInfoModal;
