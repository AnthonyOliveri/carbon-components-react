import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string
};

const defaultProps = {
  className: 'bx--text__input',
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  labelText: 'Provide labelText',
  invalidText: 'Provide invalidText'
};

const TextInput = ({
  labelText,
  className,
  id,
  placeholder,
  type,
  onChange,
  onClick,
  hideLabel,
  invalid,
  invalidText,
  ...other
}) => {
  const textInputProps = {
    id,
    onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type
  };

  const textInputClasses = classNames('bx--text-input', className);
  const labelClasses = classNames('bx--label', {
    'bx--visually-hidden': hideLabel
  });

  const label = labelText
    ? <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    : null;

  const error = invalid
    ? <div className="bx--form-requirement">
        {invalidText}
      </div>
    : null;

  const input = invalid
    ? <input {...other} {...textInputProps} data-invalid className={textInputClasses} />
    : <input {...other} {...textInputProps} className={textInputClasses} />;

  return (
    <div className="bx--form-item">
      {label}
      {input}
      {error}
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
