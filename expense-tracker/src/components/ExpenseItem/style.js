import styled from 'styled-components';

const ExpenseItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    margin: 1rem 0;
    gap: 1rem;
    border-radius: 12px;
    background-color: #4b4b4b;

    .expense-item__description {
        // display: flex;
        // flex-direction: column;
        // gap: 1rem;
        // align-items: flex-end;
        // flex-flow: column-reverse;
        // justify-content: flex-start;
        // flex: 1;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex: 1;

        .expense-item h2 {
            font-size: 1rem;
            flex: 1;
            margin: 0 1rem;
            color: white;
        }

        h2 {
            color: white;
        }

        .expense-item__price {
            font-size: 1rem;
            font-weight: bold;
            color: white;
            background-color: #40005d;
            border: 1px solid white;
            padding: 0.5rem;
            border-radius: 12px;
        }
    }

    // @media (min-width: 580px) {
    //     .expense-item__description {
    //         display: flex;
    //         flex-direction: row;
    //         align-items: center;
    //         justify-content: flex-start;
    //         flex: 1;
    //     }

    //     .expense-item__description h2 {
    //         font-size: 1.25rem;
    //     }

    //     .expense-item__price {
    //         font-size: 1.25rem;
    //         padding: 0.5rem 1.5rem;
    //     }
    // }
`;

export default ExpenseItemStyled;
