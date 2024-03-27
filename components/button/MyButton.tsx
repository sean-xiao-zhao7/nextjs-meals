import { Button } from "@mui/material";
import Link from "next/link";

const MyButton = ({
    href,
    text,
    onClick,
}: {
    href?: string;
    text: string;
    onClick?: any;
}) => {
    return (
        <Button
            variant="outlined"
            className="small-text-button"
            onClick={onClick ? onClick : () => {}}
        >
            <Link href={href ? href : ""} className="button-link">
                {text}
            </Link>
        </Button>
    );
};

export default MyButton;
