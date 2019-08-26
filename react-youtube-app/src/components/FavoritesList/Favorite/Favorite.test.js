import React from 'react';
import { shallow } from 'enzyme';
import Favorite from './Favorite';

describe('Testing the <Favorite /> component.', () => {
    //we pass 'key', 'videoTitle', and 'id' properties to the Favorite component.
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Favorite  />);
    });

    const TEST_KEY = 'test_key';
    const TEST_VIDEO_TITLE = 'test_video_title';
    const TEST_ID = 'test_id';

    it('Renders one <h2> element and one <a> element that contain the correct values when we pass in key, videoTitle, and id properties.', () => {
        wrapper.setProps({ key: TEST_KEY, videoTitle: TEST_VIDEO_TITLE, id: TEST_ID });
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toEqual(TEST_VIDEO_TITLE);
        expect(wrapper.find('a')).toHaveLength(1);
        expect(wrapper.find('a').text()).toEqual('WATCH ME!');
        expect(wrapper.find('a').props()).toHaveProperty('href', `http://youtube.com/watch?v=${TEST_ID}`);
    });

}); 