import styles from "./styles.module.scss";

type Props = {
  color?: "#00B2A9" | "#fce300" | "lema";
  width?: number;
  padding?: number;
  showLoadingText?: boolean;
  loadingText?: string;
};

const Spinner = ({
  color = "lema",
  width = 24,
  padding = width / 8,
  showLoadingText = false,
  loadingText = "Loading...",
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        className={styles.spinner}
        style={{
          background: color,
          width: `${width}px`,
          padding: `${padding}px`,
        }}
      />
      {showLoadingText && (
        <p className="font-body text-[10px] text-gray-700">{loadingText}</p>
      )}
    </div>
  );
};

export default Spinner;
