import styled from "styled-components";

const CustomButton = () => {
    return (
        <>
            <FirstStyledSweetPotato >
                고구마
            </FirstStyledSweetPotato>
            <FirstStyledSweetPotato color={'green'}>
                고구마
            </FirstStyledSweetPotato>
        </>
    );
};

export default CustomButton;

const FirstStyledSweetPotato = styled.button`
    background-color: ${props => props.color || 'purple'};
    border: none;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    color: white;
    &:hover {
		text-decoration: underline;
	}
`


