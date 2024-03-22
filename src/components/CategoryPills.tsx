import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelectedCategory: (selectedCategory: string) => void
};

const TRANSLATE_AMOUNT = 200

const CategoryPills = ({ categories, selectedCategory, onSelectedCategory }: CategoryPillProps) => {
    const [isLeftVisibile, setIsLeftVisible] = useState(true);
    const [isRightVisibile, setIsRightVisibile] = useState(true);
    
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={category == selectedCategory ? 'dark' : 'default'}
            onClick={() => onSelectedCategory(category)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisibile && <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
        <Button variant={"ghost"} size={"icon"} className="h-full aspect-square w-auto p-1.5">
            <ChevronLeft />
        </Button>
      </div>}
      {isRightVisibile && <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full">
        <Button variant={"ghost"} size={"icon"} className="h-full aspect-square w-auto p-1.5">
            <ChevronRight />
        </Button>
      </div>}
    </div>
  );
};

export default CategoryPills;
