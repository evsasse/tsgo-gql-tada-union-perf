import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3910 } from "./fragment3910";
import type { FragmentToken3911 } from "./fragment3911";

export const FRAGMENT_3912 = gql(`
  fragment Fragment3912 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult3912 = ResultOf<typeof FRAGMENT_3912>;
type FragmentSelf3912 = NonNullable<FragmentResult3912>;

export type FragmentToken3912 =
  | FragmentSelf3912["__typename"]
  | FragmentSelf3912["typenameHint"] | FragmentToken3910 | FragmentToken3911;
