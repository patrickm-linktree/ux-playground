"use client";

import styles from './Tray.module.css';
import { useState } from "react";
import { Drawer } from 'vaul';
import { Button } from "@/components/ui/button"

export default function Tray() {
    const [isOpen, setIsOpen] = useState(false);
    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

    return (
        <div className="flex min-h-screen w-full bg-zinc-100 justify-center items-center">
            <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>Open drawer</Button>
            <Drawer.Root 
                open={isOpen} 
                onOpenChange={setIsOpen}
            >
                <Drawer.Portal>
                    <Drawer.Overlay />
                    <Drawer.Content className="bg-[#fff] flex flex-col rounded-[20px] fixed bottom-3 left-3 right-3 max-w-md mx-auto">
                        <div className="p-4 bg-white rounded-t-[10px] flex-shrink-0">
                            <div className=" absolute top-1 left-0 right-0 mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                            <h2 className="text-lg font-semibold">Drawer Title</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            <p>{placeholderText}</p>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}