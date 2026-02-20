import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3606 } from "./fragment3606";
import type { FragmentToken3607 } from "./fragment3607";

export const FRAGMENT_3608 = gql(`
  fragment Fragment3608 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult3608 = ResultOf<typeof FRAGMENT_3608>;
type FragmentSelf3608 = NonNullable<FragmentResult3608>;

export type FragmentToken3608 =
  | FragmentSelf3608["__typename"]
  | FragmentSelf3608["typenameHint"] | FragmentToken3606 | FragmentToken3607;
