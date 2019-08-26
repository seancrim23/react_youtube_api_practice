import React from 'react';
import { shallow } from 'enzyme';
import FavoritesList from './FavoritesList';
import Favorite from './Favorite/Favorite';

describe('Testing the <FavoritesList /> component', () => {

    const staticTestFavoriteListWithData = [
        {
            id: 1,
            title: 'Test Favorite 1'
        },
        {
            id: 2,
            title: 'Test Favorite 2'
        },
        {
            id: 3,
            title: 'Test Favorite 3'
        }
    ];

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FavoritesList favsList={[]} />);
    });

    it('Renders 3 <Favorite /> components when we pass the staticTestFavoriteListWithData.', () => {
        wrapper.setProps({favsList: staticTestFavoriteListWithData});
        expect(wrapper.find(Favorite)).toHaveLength(3);
    }); 

    it('Renders NO <Favorite /> components when we pass an empty array.', () => {
        expect(wrapper.find(Favorite)).toHaveLength(0);
    }); 

    it('Renders no <h1> with No Favorites! message when we pass the staticTestFavoriteListWithData.', () => {
        wrapper.setProps({favsList: staticTestFavoriteListWithData});
        expect(wrapper.find('h1')).toHaveLength(0);
    }); 

    it('Renders <h1> with No Favorites! message when we pass an empty array.', () => {
        expect(wrapper.find('h1').text()).toEqual('No Favorites!');
    });

});