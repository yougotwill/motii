import React, { useState, useEffect } from 'react';

const Editable = ({
  text,
  placeholder,
  type,
  childRef,
  isModalOpen,
  setModalOpen,
  handleModal,
  children,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false); // toggle label / inputbox
  const keyDownHandler = (event, type) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];
    if ((type === 'textarea' && keys.indexOf(key) > -1) || (type !== 'textarea' && allKeys.indexOf(key) > -1)) {
      setIsEditing(false);
      handleModal(isModalOpen, setModalOpen);
    }
  };

  useEffect(() => {
    if (isEditing && childRef && childRef.current) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...props}>
    {isEditing ? (
      <div
        onBlur={() => { setIsEditing(false); handleModal(isModalOpen, setModalOpen); }}
        onKeyDown={(event) => { keyDownHandler(event, type); }}
      >
        {children}
      </div>
    ) : (
      <div onClick={() => { setIsEditing(true); }}>
        <span>
          {text || placeholder || 'Editable content'}
        </span>
      </div>
    )}
    </section>
  );
};

export default Editable;
