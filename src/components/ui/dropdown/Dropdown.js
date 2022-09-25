import React, {useState} from 'react';

const Dropdown = ({items}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className={`dropdown ${isShow ? 'show' : ''}`}>
            <button className="btn btn-info btn-sm" type="button" onClick={() => setIsShow(!isShow)}>
                <i className="bi bi-arrow-down-circle"/> Actions
            </button>
            <div className={`dropdown-menu pt-0 ${isShow ? 'show' : ''}`}>
                {items.length > 0 && items.map((item, index) => (
                    <span style={{cursor: 'pointer'}}
                          key={index}
                          className={`dropdown-item pb-0 ${item.itemClass}`}
                          onClick={item.onClicked}
                    >
                        {item.icon} {item.title}
                    </span>
                ))}

            </div>
        </div>
    );
};

export default Dropdown;