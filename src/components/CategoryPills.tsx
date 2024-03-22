import Button from "./Button";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelectedCategory: (selectedCategory: string) => void
};

const CategoryPills = ({ categories, selectedCategory, onSelectedCategory }: CategoryPillProps) => {
    
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
    </div>
  );
};

export default CategoryPills;
