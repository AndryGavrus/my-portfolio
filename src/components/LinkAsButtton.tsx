import { useTranslation } from "react-i18next";

type Props = {
    link: string;
    desc: string;
    className: string;
}

export const LinkAsButtton = ({ link, desc, className }: Props) => {
    const { t } = useTranslation();
    return (
        <a
            className={className}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {t(desc)}
        </a>
    );
};
