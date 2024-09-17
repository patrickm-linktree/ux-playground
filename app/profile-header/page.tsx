"use client";

import { useState, useMemo, useEffect } from "react";
import { Drawer } from 'vaul';
import { Button } from "@/components/ui/button";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence } from "framer-motion";
import { ProfileMenu, EditNameAndBio, EditImage, EditSocialIcons, CloseButton } from "./components";

export default function ProfileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState("menu");
    const [elementRef, bounds] = useMeasure();

    // Add this useEffect to reset the view when the drawer closes
    useEffect(() => {
        if (!isOpen) {
            setView("menu");
        }
    }, [isOpen]);

    const content = useMemo(() => {
        switch (view) {
            case "menu":
                return (
                   <ProfileMenu setView={setView} />
                );
            case "editImage":
                return (
                    <EditImage />
                );
            case "editNameAndBio":
                return (
                    <EditNameAndBio />
                );
            case "editSocialIcons":
                return (
                   <EditSocialIcons />
                );
            }
    }, [view]);
    
  return (
    <div className="flex min-h-screen w-full bg-zinc-100 justify-center items-center">
      <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>Edit Page Header</Button>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-10 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          <Drawer.Content asChild className="fixed inset-x-3 bottom-3 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[24px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full">
          <motion.div animate={{ 
            height: bounds.height, 
            transition: {
              duration: 0.27,
                  ease: [0.25, 1, 0.5, 1],
                }, }}>
              <div className="px-4 pt-1 pb-4" ref={elementRef}>
              <CloseButton onClick={() => {
                if (view === "menu") {
                  setIsOpen(false);
                } else {
                  setView("menu");
                }
              }} />
              <AnimatePresence initial={false} mode="popLayout" custom={view}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    key={view}
                    transition={{
                      duration: 0.25,
                      ease: [0.26, 0.08, 0.25, 1],
                    }}
                  >
                    {content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}