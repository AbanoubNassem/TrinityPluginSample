import { Link, router } from "@inertiajs/react";
import PageProps from "trinity-types/types/Props/Pages/PageProps";
import { Button } from "primereact/button";

const CustomPage = ({ localize, data, configs }: PageProps<Array<string>>) => {
  return (
    <div>
      <h1>{localize("custom_page_title")}</h1>
      <ul>
        {data?.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <Link href={`/${configs.prefix}/`}>Home</Link>
      <Button
        label="Request"
        onClick={() => {
          router.get("https://google.com");
        }}
      />
    </div>
  );
};

export default CustomPage;
