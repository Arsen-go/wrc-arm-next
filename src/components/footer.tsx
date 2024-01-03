import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { name: "aboutUs", href: "/about" },
  { name: "priorityAreas", href: "/priorityAreas" },
  { name: "news", href: "/news" },
  { name: "contactUs", href: "/contact" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            placeholder={undefined}
            as="a"
            href=""
            target="_self"
            variant="h6"
            className="text-gray-900"
          >
            {t("webPageName")}
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  placeholder={undefined}
                  as="a"
                  href={link.href}
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {t("navbar." + link.name)}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton
              placeholder={undefined}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton
              placeholder={undefined}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton
              placeholder={undefined}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          placeholder={undefined}
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR}{" "}
          <a
            href="https://www.linkedin.com/company/rn-tm/?viewAsMember=true"
            target="_blank"
          >
            RNTM
          </a>{" "}
          by{" "}
          <a href="https://matevosyan-a-n.vercel.app/" target="_blank">
            Arsen
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
