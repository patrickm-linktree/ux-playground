import React from "react";
import { ImageIcon, CloseIcon, NameIcon, SocialIcon } from "./icons";

export function Button({ children, onClick }) {
    return (
      <button
        data-vaul-no-drag=""
        className=" flex h-[56px] w-full items-center gap-4 rounded-[12px] bg-gray-100 px-4 text-[17px] font-medium text-gray-800 transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  export function CloseButton({ onClick }) {
    return (
      <button
        data-vaul-no-drag=""
        className="absolute right-4 top-[22px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
        onClick={onClick}
      >
        <CloseIcon />
      </button>
    );
  }

  export function Header({ icon, title, description }) {
    return (
      <header className="h-[72px] flex flex-row items-center mb-3 border-b border-zinc-100">
        {icon}
        <h2 className="text-[18px] font-semibold md:font-medium">
          {title}
        </h2>
        <p className="mt-3 text-[17px] font-medium leading-[24px] text-[#999999] md:font-normal">
          {description}
        </p>
      </header>
    );
  }

  export function Row({ title, description }) {
    return (
      <div className="flex flex-row items-center gap-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col grow pb-4 border-b border-gray-100 last:border-b-0">
          <div className="text-[17px] font-medium text-gray-800">{title}</div>
          <div className="text-[15px] font-normal text-gray-500">{description}</div>
        </div>
      </div>
    );
  }

  export function ProfileMenu({ setView }) {
    return (
      <>
        <Header title="Page Header" />
        <div className="space-y-3">
          <Button
            onClick={() => {
              setView("editImage");
            }}
          >
            <ImageIcon />
            Edit image
          </Button>
          <Button
            onClick={() => {
              setView("editNameAndBio");
            }}
          >
            <NameIcon />
            Edit name and bio
          </Button>
          <Button
            onClick={() => {
              setView("editSocialIcons");
            }}
          >
            <SocialIcon />
            Edit social icons
          </Button>
        </div>
      </>
    );
  }

  export function EditNameAndBio() {
    return (
      <>
        <Header title="Name and bio" />
        <div className="space-y-3">
          <div className="flex flex-col bg-gray-100 px-4 py-2 rounded-[12px]">
          <div className="text-[13px] text-gray-500">Display name</div>
          <div className="text-lg">Patrick McKowen</div>
          </div>
          <div className="flex flex-col bg-gray-100 px-4 pt-2 pb-8 rounded-[12px]">
          <div className="text-[13px] text-gray-500">Bio</div>
          <div className="text-lg">Design @ Linktree.  #YNWA</div>
          </div>
        </div>
      </>
    );
  }

  export function EditImage() {
    return (
      <>
        <Header title="Image" />
        <div className="space-y-3">
          <Row title="Upload your own" description="Choose an image or GIF from your device." />
          <Row title="Generate with AI" description="Generate your profile image with AI." />
          <Row title="Design with Canva" description="Design your profile image in Canva" />
          <Row title="Delete" description="Delete current image" />
        </div>
      </>
    );
  }

  export function EditSocialIcons() {
    return (
      <>
        <Header title="Social icons" />
        <div className="space-y-3">
          <Row title="Edit social icons" description="Edit your social icons." />
        </div>
      </>
    );
  }