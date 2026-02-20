import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3101 } from "./fragment3101";
import type { FragmentToken3102 } from "./fragment3102";

export const FRAGMENT_3103 = gql(`
  fragment Fragment3103 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult3103 = ResultOf<typeof FRAGMENT_3103>;
type FragmentSelf3103 = NonNullable<FragmentResult3103>;

export type FragmentToken3103 =
  | FragmentSelf3103["__typename"]
  | FragmentSelf3103["typenameHint"] | FragmentToken3101 | FragmentToken3102;
