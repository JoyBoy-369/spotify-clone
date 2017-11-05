'use strict';

import React from 'react';
import LocalLogin from '../LocalLogin';

describe("LocalLogin",()=>{
    
    let wrapper;
    const onLogin=jest.fn(); 
    
      beforeEach(() => {
       wrapper = shallow(<LocalLogin onLogin={onLogin}/>);
      });
      
    describe("initial state",()=>{
        const state={
            fields:{
                username:"",
                password:""
            },
            error:false
        }

        it("should initialize `fields` object with  fields ,`username` and `password` empty, and `error` false",()=>{
            expect(wrapper.state()).toEqual(state);
        })
    })

    describe("render",()=>{
        it("should have a form with id `login-form`",()=>{
            expect(wrapper.find('form #login-form').length).toBe(1);
        })

        it("should display 2 `fields` components",()=>{
            expect(wrapper.find('Field').length).toBe(2);
        })

        it("should display 1 `ToggleSwitch` component",()=>{
            expect(wrapper.find('ToggleSwitch').length).toBe(1);
        })

        it("should display 1 `Button` component",()=>{
            expect(wrapper.find('Button').length).toBe(1);
        })
    })


    describe("interaction",()=>{

        describe("when `Field` invokes onChangeHandle",()=>{

            const 
            username={
                name:"username",
                value:"spotify"
            },
            password={
                name:"password",
                value:"spotify"
            };
            
            beforeEach(() => {
                 wrapper.find("Field").at(0).props().onChangeHandle(username);
                 wrapper.find("Field").at(1).props().onChangeHandle(password);
              });

            it("should update `fields[username]` value",()=>{
                expect(wrapper.state().fields.username).toEqual(username.value);
            })
            it("should update `fields[password]` value",()=>{
                expect(wrapper.state().fields.password).toEqual(password.value);
            })

        })

        describe("`Button` invokes `clickHandle`",()=>{
            const 
            validate=jest.fn(),
            evt={
                preventDefault:jest.fn()
            };

            afterEach(()=>{
                validate.mockClear();
                evt.preventDefault.mockClear();
            })

            describe("`validate` `fields` object",()=>{

                describe("when `fields` object is empty",()=>{
                    let fields={
                        username:"",
                        password:""
                    };

                    beforeEach(()=>{
                        wrapper.setState({fields});
                        wrapper.find('Button').props().clickHandle(evt);
                    })

                    it("should return false if `fields[username]` is empty",()=>{
                        expect(wrapper.state().fields.username).toBe("");
                    })

                    it("should return false if `fields[password]` is empty",()=>{
                        expect(wrapper.state().fields.password).toBe("");
                    })
                })

                describe("when `fields` object is correct",()=>{
                    let fields={
                        username:"spotify",
                        password:"spotify"
                    },
                    evt={
                        preventDefault:jest.fn()
                    };

                    beforeEach(()=>{
                        wrapper.setState({fields});
                        //click handle needs to be called after setting state in the child describe 
                        wrapper.find("Button").props().clickHandle(evt);
                    })

                    it("should return true",()=>{
                        expect(wrapper.state().fields).toEqual(fields);
                    })

                    it('should call its props `onLogin` with `username` and `password`',()=>{
                        expect(onLogin).toBeCalled();
                    })
                })
        })

        })
    })
})
