import React from 'react';
import ResultList from './ResultList';
import Result from './Result/Result';
import { shallow } from 'enzyme';

describe('Testing the <ResultList /> component.', () => {
    /*takes a result list with 
    key={result.id.videoId} 
                title={result.snippet.title}
                description={result.snippet.description}
                thumbnail={result.snippet.thumbnails.medium.url}
                id={result.id.videoId}
                clickResult={props.clickedOnResult}
    properties
    */
   let wrapper;
   const TEST_RESULT_LIST = [
        {
            id: {
               videoId: '0'
            },
            snippet: {
               title: 'test title 1',
               description: 'test description 1',
               thumbnails: {
                   medium: {
                       url: 'test_thumbnail_url_1.jpg'
                   }
                }
            }
        },
        {
            id: {
                videoId: '1'
            },
            snippet: {
                title: 'test title 2',
                description: 'test description 2',
                thumbnails: {
                    medium: {
                        url: 'test_thumbnail_url_2.jpg'
                    }
                }
            }
        },
        {
            id: {
                videoId: '2'
            },
            snippet: {
                title: 'test title 3',
                description: 'test description 3',
                thumbnails: {
                    medium: {
                        url: 'test_thumbnail_url_3.jpg'
                    }
                }   
            }
        }
   ]

   beforeEach(() => {
    wrapper = shallow(<ResultList results={[]}/>);
   });

   it('Renders 3 <Result /> components correctly when receiving the correct data properties.', () => {
    wrapper.setProps({results: TEST_RESULT_LIST, clickedOnResult: null});
    expect(wrapper.find(Result)).toHaveLength(3);
   });

   it('Renders 3 <Result /> components with the correct values when receiving the correct data properties.', () => {
    wrapper.setProps({results: TEST_RESULT_LIST, clickedOnResult: null});
    const resultComponents = wrapper.find(Result);
    resultComponents.forEach(resultComponent => {
        const currentId = resultComponent.props().id;
        expect(resultComponent.props().id).toBe(TEST_RESULT_LIST[currentId].id.videoId);
        expect(resultComponent.props().title).toBe(TEST_RESULT_LIST[currentId].snippet.title);
        expect(resultComponent.props().description).toBe(TEST_RESULT_LIST[currentId].snippet.description);
        expect(resultComponent.props().thumbnail).toBe(TEST_RESULT_LIST[currentId].snippet.thumbnails.medium.url);
        expect(resultComponent.props().clickResult).toBe(null);
    });
   });
});