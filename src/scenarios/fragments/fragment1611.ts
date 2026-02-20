import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1609 } from "./fragment1609";
import type { FragmentToken1610 } from "./fragment1610";

export const FRAGMENT_1611 = gql(`
  fragment Fragment1611 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult1611 = ResultOf<typeof FRAGMENT_1611>;
type FragmentSelf1611 = NonNullable<FragmentResult1611>;

export type FragmentToken1611 =
  | FragmentSelf1611["__typename"]
  | FragmentSelf1611["typenameHint"] | FragmentToken1609 | FragmentToken1610;
