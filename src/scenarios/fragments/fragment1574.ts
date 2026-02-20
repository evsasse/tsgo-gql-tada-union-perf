import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1572 } from "./fragment1572";
import type { FragmentToken1573 } from "./fragment1573";

export const FRAGMENT_1574 = gql(`
  fragment Fragment1574 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult1574 = ResultOf<typeof FRAGMENT_1574>;
type FragmentSelf1574 = NonNullable<FragmentResult1574>;

export type FragmentToken1574 =
  | FragmentSelf1574["__typename"]
  | FragmentSelf1574["typenameHint"] | FragmentToken1572 | FragmentToken1573;
