import styled, { keyframes, css } from 'styled-components'
// cada arquivo css tem seu proprio escopo, pertence apenas aquele componente
// controlar proproiedades css baseado em props que o componente recebe
// encademento de estilos, acessar props do componente dentro do css

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 30px;
    margin:80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center
    }
    svg {
        margin-right: 5px;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: linear-gradient(to bottom right, rgb(243, 33, 33), rgb(151, 0, 58));
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    &[:disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: red;
            text-decoration: none;
        }
    }
`;
