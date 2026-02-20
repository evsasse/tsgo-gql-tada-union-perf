import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4497 } from "./fragment4497";
import type { FragmentToken4498 } from "./fragment4498";

export const FRAGMENT_4499 = gql(`
  fragment Fragment4499 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult4499 = ResultOf<typeof FRAGMENT_4499>;
type FragmentSelf4499 = NonNullable<FragmentResult4499>;

export type FragmentToken4499 =
  | FragmentSelf4499["__typename"]
  | FragmentSelf4499["typenameHint"] | FragmentToken4497 | FragmentToken4498;
