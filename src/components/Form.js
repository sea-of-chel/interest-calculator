import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index';

const Form = () => {
    const [result, setResult] = useState();
    const principal = useSelector((state) => state.principal);
    const years = useSelector((state) => state.years);
    const interest = useSelector((state) => state.interest);
    const dispatch = useDispatch();
    const { getPrincipal, getInterest, getYears } = bindActionCreators(
        actionCreators,
        dispatch
    );

    const calculate = () => {
        const result = principal * (1 + interest * years);
        setResult(result.toFixed(2));
        console.log(result);
    };

    return (
        <div>
            <form>
                <Flex>
                    <label>Cost</label>
                    <Input
                        type="number"
                        name="principal"
                        onChange={(e) =>
                            getPrincipal(parseFloat(e.target.value))
                        }
                    ></Input>
                </Flex>
                <Flex>
                    <label>Rate</label>
                    <Input
                        name="rate"
                        type="number"
                        onChange={(e) =>
                            getInterest(
                                parseFloat(e.target.value).toFixed(2) / 100
                            )
                        }
                    ></Input>
                </Flex>
                <Flex>
                    <label>Years</label>
                    <Input
                        type="number"
                        name="years"
                        onChange={(e) => getYears(parseFloat(e.target.value))}
                    ></Input>
                </Flex>
                <Button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        calculate();
                    }}
                >
                    result
                </Button>
                {result}
            </form>
        </div>
    );
};

const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    border-radius: 15px;
    height: 30px;
    width: 150px;
    font-size: 18px;
`;

export default Form;
