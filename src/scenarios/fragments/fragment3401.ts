import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3399 } from "./fragment3399";
import type { FragmentToken3400 } from "./fragment3400";

export const FRAGMENT_3401 = gql(`
  fragment Fragment3401 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult3401 = ResultOf<typeof FRAGMENT_3401>;
type FragmentSelf3401 = NonNullable<FragmentResult3401>;

export type FragmentToken3401 =
  | FragmentSelf3401["__typename"]
  | FragmentSelf3401["typenameHint"] | FragmentToken3399 | FragmentToken3400;
