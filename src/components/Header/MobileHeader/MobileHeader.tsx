import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useDelayUnmount } from "@/hooks";
import { Icon } from "@/components";

const MENU_ANIMATION_TIME = 450;

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const shouldMount = useDelayUnmount(isMenuOpen, MENU_ANIMATION_TIME);

  const handleModal = () => setIsMenuOpen((isOpen) => !isOpen);

  return (
    <Dialog.Root open={shouldMount} onOpenChange={handleModal}>
      <Dialog.Trigger>
        <Icon name="burger-menu" width={32} height={32} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-30 backdrop-blur-[1.5px] ${
            isMenuOpen ? "menu-fade-in" : "menu-fade-out"
          }`}
        >
          <Dialog.Content
            className={`absolute top-0 right-0 bottom-0 bg-grey-3 border-l-2 border-l-primary-2 w-52 ${
              isMenuOpen ? "animate-open-menu" : "animate-close-menu"
            }`}
          >
            <div className="h-full pl-8 pr-4 py-6">
              <Dialog.Close className=" block ml-auto">
                <Icon name="close" width={32} height={32} />
              </Dialog.Close>
              <nav className="mt-6">
                <ul className="flex flex-col gap-8">
                  <li>
                    <a
                      className="text-xl text-white"
                      href="#"
                      onClick={handleModal}
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xl text-white"
                      href="#"
                      onClick={handleModal}
                    >
                      Competências
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xl text-white"
                      href="#"
                      onClick={handleModal}
                    >
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xl text-white"
                      href="#"
                      onClick={handleModal}
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
