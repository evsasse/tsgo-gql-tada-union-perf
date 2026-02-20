import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1573 } from "./fragment1573";
import type { FragmentToken1574 } from "./fragment1574";

export const FRAGMENT_1575 = gql(`
  fragment Fragment1575 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult1575 = ResultOf<typeof FRAGMENT_1575>;
type FragmentSelf1575 = NonNullable<FragmentResult1575>;

export type FragmentToken1575 =
  | FragmentSelf1575["__typename"]
  | FragmentSelf1575["typenameHint"] | FragmentToken1573 | FragmentToken1574;
