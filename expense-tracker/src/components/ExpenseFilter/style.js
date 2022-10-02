import styled from 'styled-components';

export default styled.div`
    color: white;
    padding: 0 1rem;

    .expenses-filter__control {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;

        label {
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        select {
            font: inherit;
            padding: 0.5rem 3rem;
            font-weight: bold;
            border-radius: 6px;
        }
    }
`;
