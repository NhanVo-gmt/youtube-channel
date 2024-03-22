import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  History,
  Home,
  Library,
  ListVideo,
  PlaySquare,
  Repeat,
} from "lucide-react";
import React, { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "../components/Button";
import { playlists } from "../data/sidebar";

const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem isActive Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCourt={5}>
          <LargeSidebarItem
            Icon={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            Icon={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {
            playlists.map((playlist) => (
                <LargeSidebarItem
                    key={playlist.id}
                    Icon={ListVideo}
                    title={playlist.name}
                    url={`/playlist?list=${playlist.id}`}
                />
            ))
          }
        </LargeSidebarSection>
        <hr />
        {/* <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            Icon={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            Icon={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
          <LargeSidebarItem
            Icon={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSidebarItem
            Icon={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSidebarItem
            Icon={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            Icon={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection> */}
      </aside>
    </>
  );
};

export default Sidebar;

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col py-4 px-1 items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6 " />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCourt?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCourt = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCourt;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCourt);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
          onClick={() => setIsExpanded((e) => !e)}
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  Icon: ElementType;
  title?: string;
  url?: string;
  isActive?: boolean;
};

function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `flex w-full items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
