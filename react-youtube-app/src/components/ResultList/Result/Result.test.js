import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';
import { join } from 'path';

describe('Testing the <Result /> component.', () => {
    //{ thumbnail, description, title, id }
    let wrapper;
    const TEST_DATA = {
        thumbnail: 'TEST_URL.jpg',
        description: 'TEST DESCRIPTION',
        title: 'TEST TITLE',
        id: "TEST ID"
    }

    beforeEach(() => {
        wrapper = shallow(<Result />);
    })

    it('Renders all of correct HTML elements when passed the correct properties.', () => {
        wrapper.setProps(TEST_DATA);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('div.ResultInfo')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('Renders all of the HTML elements with the correct values and properties when passed the correct properties.', () => {
        wrapper.setProps(TEST_DATA);
        expect(wrapper.find('img').props()).toHaveProperty('src', TEST_DATA.thumbnail);
        expect(wrapper.find('h1').text()).toEqual(TEST_DATA.title);
        expect(wrapper.find('p').text()).toEqual(TEST_DATA.description);
        expect(wrapper.find('a').text()).toEqual('Watch this video!');
        expect(wrapper.find('a').props()).toHaveProperty('href', `http://youtube.com/watch?v=${TEST_DATA.id}`);
    });

    /*
                    <img src={thumbnail} alt={description} style={{width: "100%"}} />
            <div className={classes.ResultInfo}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${id}`}>Watch this video!</a>
            </div>
    */
});