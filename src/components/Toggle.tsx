type Props = {
  isDark: boolean;
  handleToggle: () => void;
};

export default function Toggle({ isDark, handleToggle }: Props) {
  return (
    <button
      onClick={handleToggle}
      className="px-2 py-1 rounded-[300px] bg-stone-100 shadow-stone-300 text-xl dark:bg-stone-700"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}
