import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4908 } from "./fragment4908";
import type { FragmentToken4909 } from "./fragment4909";

export const FRAGMENT_4910 = gql(`
  fragment Fragment4910 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult4910 = ResultOf<typeof FRAGMENT_4910>;
type FragmentSelf4910 = NonNullable<FragmentResult4910>;

export type FragmentToken4910 =
  | FragmentSelf4910["__typename"]
  | FragmentSelf4910["typenameHint"] | FragmentToken4908 | FragmentToken4909;
