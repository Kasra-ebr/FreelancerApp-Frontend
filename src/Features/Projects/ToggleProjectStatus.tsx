import useToggleProject from "../../hooks/useToggleProject";
import Loading from "../../UI/Loading";
import Toggle from "./Toggle";

interface ToggleProjectStatusProps {
  project: {
    id: string;
    status: "OPEN" | "CLOSED";
  };
}

function ToggleProjectStatus({ project }: ToggleProjectStatusProps) {
  const { status, id } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProject();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={50} width={50} />
      ) : (
        <Toggle
          enabled={status === "OPEN"}
          label={status === "OPEN" ? "OPEN" : "CLOSED"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
