import { useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
    const params = useParams();
    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }
    return (
        <section>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Outlet />
        </section>
    );
};

export default QuoteDetail;
