import React from 'react';
import { cx } from 'emotion';
import Collapse from '@material-ui/core/Collapse';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import * as innerClasses from './header.styles';

interface Props {
  currentTrainerUrl: string;
  currentStudentUrl: string;
  className?: string;
}

export const HeaderComponent: React.FC<Props> = props => {
  const { currentStudentUrl, currentTrainerUrl, className } = props;

  return (
    <div className={cx(innerClasses.root, className)}>
      <CopyFieldComponent
        labelName="Trainer Link"
        inputId="trainer-link"
        className={innerClasses.trainerBackgroundColor}
        urlLink={currentTrainerUrl ?? ''}
      />
      <CopyFieldComponent
        labelName="Students Link"
        inputId="student-link"
        className={innerClasses.studentBackgroundColor}
        urlLink={currentStudentUrl ?? ''}
      />
    </div>
  );
};

// CopyField Component - - - - - - - - - - - - - - -

interface CopyFieldProps {
  labelName: string;
  inputId: string;
  urlLink: string;
  className?: string;
}

export const CopyFieldComponent: React.FC<CopyFieldProps> = props => {
  const { labelName, inputId, urlLink, className } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={innerClasses.labelContainer}>
        <label
          className={innerClasses.label}
          htmlFor={inputId}
          onClick={handleClick}
        >
          {labelName}
          {open ? (
            <ExpandLessIcon className={innerClasses.collapseIcon} />
          ) : (
            <ExpandMoreIcon className={innerClasses.collapseIcon} />
          )}
        </label>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={innerClasses.inputContainer}>
          <input
            id={inputId}
            type="text"
            className={cx(innerClasses.input, className)}
            value={urlLink}
            readOnly
            aria-readonly
          />
          <button
            aria-label={`copy ${labelName}`}
            className={innerClasses.button}
            onClick={() => navigator.clipboard.writeText(urlLink)}
          >
            <FileCopyOutlinedIcon className={innerClasses.icon} />
          </button>
        </div>
      </Collapse>
    </>
  );
};
