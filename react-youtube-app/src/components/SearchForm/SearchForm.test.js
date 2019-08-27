import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('Testing the <SearchForm /> component.', () => {
    let wrapper;

    const mockSubmitHandler = jest.fn();
    const mockChangedInputHandler = jest.fn();
    const mockSeeFavorites = jest.fn();
    const mockFavList = [
        {
            title: 'mock title 1',
            id: 'mock id 1'
        },
        {
            title: 'mock title 2',
            id: 'mock id 2'
        }
    ];

    beforeEach(() => {
        wrapper = shallow(<SearchForm                 
            buttonSubmit={mockSubmitHandler}
            changedInput={mockChangedInputHandler}
            searchIsDisabled={true}
            seeFavorites={mockSeeFavorites}
            favList={mockFavList}
        />);
    });

    it('Renders the <SearchForm /> component correctly when passed in the correct mocked function values and properties.', () => {
        expect(wrapper.find('form.Search').props().onSubmit).toBe(mockSubmitHandler);
        expect(wrapper.find('h1').text()).toBe('Search for a video on Youtube!');
        expect(wrapper.find('input.SearchBox').props().onChange).toBe(mockChangedInputHandler);
        expect(wrapper.find('input.SearchButton').props().disabled).toBe(true);
        expect(wrapper.find('button.FavoritesButton').props().onClick).toBe(mockSeeFavorites);
        expect(wrapper.find('button.FavoritesButton').text()).toBe(`MY FAVORITES (${mockFavList.length})`);
    });

    it('Renders the MY FAVORITES (length) message correctly when we pass a different sized array for the favList', () => {
        wrapper.setProps({favList: []});
        expect(wrapper.find('button.FavoritesButton').text()).toBe(`MY FAVORITES (0)`);
    });
    
});