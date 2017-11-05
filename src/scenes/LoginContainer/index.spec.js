'use strict';

import React from 'react';
import LoginContainer from '../LoginContainer';

describe('LoginContainer', () => {
    
    let wrapper;
  
    beforeEach(() => {
     wrapper = shallow(<LoginContainer/>);
    });

    describe("initial state",()=>{

        it("initializes `shouldRedirect to false`",()=>{
            expect(wrapper.state().shouldRedirect).toBe(false);
        })
    })

    describe("render",()=>{
        
        describe("when shouldRedirect is true",()=>{
            it("should display 1 `SocialLogin` component",()=>{
                expect(wrapper.find('SocialLogin').length).toBe(1);
            })

            it("should display 1 `LocalLogin` component",()=>{
                expect(wrapper.find('LocalLogin').length).toBe(1);
            })

            it("should display 3 `External` component",()=>{
                expect(wrapper.find('External').length).toBe(3);
            })
        })
    })
    
    describe("interactions",()=>{
        describe("when `LocalLogin` invokes `onLogin`",()=>{
             beforeEach(()=>{
                const location={
                    state:{
                        from:{
                            pathname:'/landing'
                             }
                        }
                    }

                wrapper.setProps({location:{...wrapper.props().location,location}});
                wrapper.find("LocalLogin").props().onLogin({});
        })

        it("should change `shouldRedirect` to true",()=>{
           expect(wrapper.state().shouldRedirect).toBe(true);
        })
    })
})
   
})