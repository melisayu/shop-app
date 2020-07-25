import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
<<<<<<< HEAD
                <MenuItem key={id} {...otherSectionProps} />
        ))}
=======
            <MenuItem key={id} {...otherSectionProps} />
            ))
        }
>>>>>>> 1ee2bd7c2ffe14babc09932cc04f4aae3ac89488
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);