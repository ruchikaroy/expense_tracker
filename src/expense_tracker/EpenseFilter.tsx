interface Props {
  onSelectCategory: (category: string) => void;
}

const EpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="All Categories">All Categories</option>
      <option value="Grocery">Grocery</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default EpenseFilter;
