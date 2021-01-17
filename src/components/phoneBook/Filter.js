import s from "./Filter.module.css";

export default function Filter({ filter, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
    // console.log(filter);
  );
}
