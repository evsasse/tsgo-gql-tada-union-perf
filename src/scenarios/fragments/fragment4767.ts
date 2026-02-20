import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4765 } from "./fragment4765";
import type { FragmentToken4766 } from "./fragment4766";

export const FRAGMENT_4767 = gql(`
  fragment Fragment4767 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult4767 = ResultOf<typeof FRAGMENT_4767>;
type FragmentSelf4767 = NonNullable<FragmentResult4767>;

export type FragmentToken4767 =
  | FragmentSelf4767["__typename"]
  | FragmentSelf4767["typenameHint"] | FragmentToken4765 | FragmentToken4766;
