import styled from 'styled-components';

export default styled.div`
    .new-expense__controls {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
        text-align: left;
    }

    .new-expense__control label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    .new-expense__control input {
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
    }

    .new-expense__actions {
        text-align: right;

        button {
            font: inherit;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 1px solid #40005d;
            background-color: #40005d;
            color: white;
            border-radius: 12px;
            margin-right: 1rem;
        }

        button:hover,
        button:active {
            background-color: #510674;
            border-color: #510674;
        }

        button.alternative {
            color: #220131;
            border-color: transparent;
            background-color: transparent;
        }

        button.alternative:hover,
        button.alternative:active {
            background-color: #ddb3f8;
        }
    }
`;
