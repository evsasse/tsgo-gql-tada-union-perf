import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1106 } from "./fragment1106";
import type { FragmentToken1107 } from "./fragment1107";

export const FRAGMENT_1108 = gql(`
  fragment Fragment1108 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult1108 = ResultOf<typeof FRAGMENT_1108>;
type FragmentSelf1108 = NonNullable<FragmentResult1108>;

export type FragmentToken1108 =
  | FragmentSelf1108["__typename"]
  | FragmentSelf1108["typenameHint"] | FragmentToken1106 | FragmentToken1107;
