const FormRow = ({ name, type, labelText, placeholder, dataIcon }) => {
  return (
    <div className="space-y-xs group">
      <label
        className="text-mono-label uppercase font-black block text-xs"
        htmlFor={name}
      >
        {labelText}
      </label>
      <div className="relative">
        <span
          className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-background z-10"
          data-icon={dataIcon}
        >
          {dataIcon}
        </span>
        <input
          className="w-full border-4 border-on-background p-5 pl-14 bg-surface-container-lowest text-on-background text-h3 text-lg focus:ring-0 focus:border-on-background focus:bg-primary-container/10 outline-none transition-all hover:bg-surface-container placeholder:text-secondary"
          id={name}
          placeholder={placeholder}
          type={type}
          required
        />
      </div>
    </div>
  );
};

export default FormRow;
