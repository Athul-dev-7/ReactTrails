import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'completed') {
            navigate({
                pathname: `/quotes`,
            });
        }
    }, [status, navigate]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };
    return (
        <QuoteForm
            isLoading={status === 'pending'}
            onAddQuote={addQuoteHandler}
        />
    );
};

export default NewQuote;
