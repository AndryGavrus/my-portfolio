import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const go = useCallback((path: string) => {
        navigate(path);
    }, [navigate]);

    return {
        go,
    };
};