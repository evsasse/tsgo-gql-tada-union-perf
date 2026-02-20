import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4216 } from "./fragment4216";
import type { FragmentToken4217 } from "./fragment4217";

export const FRAGMENT_4218 = gql(`
  fragment Fragment4218 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult4218 = ResultOf<typeof FRAGMENT_4218>;
type FragmentSelf4218 = NonNullable<FragmentResult4218>;

export type FragmentToken4218 =
  | FragmentSelf4218["__typename"]
  | FragmentSelf4218["typenameHint"] | FragmentToken4216 | FragmentToken4217;
