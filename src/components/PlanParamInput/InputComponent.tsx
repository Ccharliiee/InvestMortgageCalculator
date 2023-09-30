export default function InputComponent(props: {
  id: string;
  name: string;
  value: number;
  inputChangeHandler: (inputID: string, value: string) => void;
}) {
  return (
    <p>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        onChange={(event) =>
          props.inputChangeHandler(props.id, event.target.value)
        }
        value={props.value}
        type="number"
        id={props.id}
      />
    </p>
  );
}
