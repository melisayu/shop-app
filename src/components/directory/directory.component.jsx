import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1,
                linkUrl: 'hats',
            },
            {
                title: 'backpacks',
                imageUrl: 'https://images.pexels.com/photos/843194/pexels-photo-843194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2,
                linkUrl: '',
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                linkUrl: '',
            },
            {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 4,
                linkUrl: '',
            },
            {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/1384218/pexels-photo-1384218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 5,
                linkUrl: '',
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;