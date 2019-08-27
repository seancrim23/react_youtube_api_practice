import React from 'react';
import { shallow } from 'enzyme';
import { SelectedVideo } from './SelectedVideo';

describe('Testing the <SelectedVideo /> component.', () => {
    /*
    props.favoriteList.
                <div className={classes.SelectedVideo}>
                <img src={thumbnails.medium.url} alt={description} style={{width: "100%"}} />
                <div className={classes.SelectedVideoInfo}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${id}`}>Watch this video!</a>
                    {favButton}
                </div>
            </div>
    */
   let wrapper;

   const mockAddFav = jest.fn();
   const mockRemoveFav = jest.fn();

   const TEST_FAVORITE_LIST = [
       {
           title: 'test title',
           id: 'test id'
       }
   ];

   const TEST_FAVORITE_LIST_ADD_FAV = [
       {
            title: 'test title',
            id: 'not test id'
       }
   ];

   const TEST_SELECTED_VIDEO = {
        id: {
            videoId: 'test id'
        },
        snippet: {
            title: 'test title',
            description: 'test description',
            thumbnails: {
                medium: {
                    url: 'test thumbnail url.jpg'
                }
            }
        }
   };

   beforeEach(() => {
       wrapper = shallow(<SelectedVideo addFav={mockAddFav} removeFav={mockRemoveFav} selectedVideo={TEST_SELECTED_VIDEO} favoriteList={[]} />)
   });

    it('Renders a <SelectedVideo /> component with all of the expected elements when correct properties are passed in.', () => {
        wrapper.setProps({selectedVideo: TEST_SELECTED_VIDEO, favoriteList: TEST_FAVORITE_LIST});
        console.log(wrapper.find('div.SelectedVideo').html());
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('div.SelectedVideoInfo')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('a')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('Renders a <SelectedVideo /> component with all of the expected element values when correct properties are passed in.', () => {
        wrapper.setProps({selectedVideo: TEST_SELECTED_VIDEO, favoriteList: TEST_FAVORITE_LIST});
        expect(wrapper.find('img').props().src).toBe(TEST_SELECTED_VIDEO.snippet.thumbnails.medium.url);
        expect(wrapper.find('h1').text()).toBe(TEST_SELECTED_VIDEO.snippet.title);
        expect(wrapper.find('p').text()).toBe(TEST_SELECTED_VIDEO.snippet.description);
        expect(wrapper.find('a').props().href).toBe(`http://youtube.com/watch?v=${TEST_SELECTED_VIDEO.id.videoId}`);
        expect(wrapper.find('a').text()).toBe('Watch this video!');
        expect(wrapper.find('button').props().style).toStrictEqual({marginTop: "15px", width: "80%"});
        expect(wrapper.find('button').text()).toBe('REMOVE FROM FAVORITES');
    });

    it('Renders the favButton on the inside with ADD TO FAVORITES when mocked selectedVideo id DOES NOT exist in the mocked favoriteList', () => {
        wrapper.setProps({selectedVideo: TEST_SELECTED_VIDEO, favoriteList: TEST_FAVORITE_LIST_ADD_FAV});
        expect(wrapper.find('button').text()).toBe('ADD TO FAVORITES');
    });

    it('Renders the favButton on the inside with REMOVE FROM FAVORITES when mocked selectedVideo id DOES exist in the mocked favoriteList', () => {
        wrapper.setProps({selectedVideo: TEST_SELECTED_VIDEO, favoriteList: TEST_FAVORITE_LIST});
        expect(wrapper.find('button').text()).toBe('REMOVE FROM FAVORITES');
    });
});