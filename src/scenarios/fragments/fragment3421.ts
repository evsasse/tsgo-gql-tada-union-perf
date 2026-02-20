import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3419 } from "./fragment3419";
import type { FragmentToken3420 } from "./fragment3420";

export const FRAGMENT_3421 = gql(`
  fragment Fragment3421 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult3421 = ResultOf<typeof FRAGMENT_3421>;
type FragmentSelf3421 = NonNullable<FragmentResult3421>;

export type FragmentToken3421 =
  | FragmentSelf3421["__typename"]
  | FragmentSelf3421["typenameHint"] | FragmentToken3419 | FragmentToken3420;
