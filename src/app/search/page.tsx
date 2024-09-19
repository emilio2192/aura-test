import React from "react";
import LoggedLayout from "../components/PrincipalLayout";
import SearchComponent from "./SearchComponent";
import InformationComponent from "../home/InformationComponent";

export default function SearchPage() {
  return (
    <LoggedLayout>
        <InformationComponent />
        <SearchComponent />
    </LoggedLayout>
  );
}