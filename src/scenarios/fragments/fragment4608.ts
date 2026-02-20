import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4606 } from "./fragment4606";
import type { FragmentToken4607 } from "./fragment4607";

export const FRAGMENT_4608 = gql(`
  fragment Fragment4608 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult4608 = ResultOf<typeof FRAGMENT_4608>;
type FragmentSelf4608 = NonNullable<FragmentResult4608>;

export type FragmentToken4608 =
  | FragmentSelf4608["__typename"]
  | FragmentSelf4608["typenameHint"] | FragmentToken4606 | FragmentToken4607;
