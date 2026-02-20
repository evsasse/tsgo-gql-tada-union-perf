import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3232 } from "./fragment3232";
import type { FragmentToken3233 } from "./fragment3233";

export const FRAGMENT_3234 = gql(`
  fragment Fragment3234 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult3234 = ResultOf<typeof FRAGMENT_3234>;
type FragmentSelf3234 = NonNullable<FragmentResult3234>;

export type FragmentToken3234 =
  | FragmentSelf3234["__typename"]
  | FragmentSelf3234["typenameHint"] | FragmentToken3232 | FragmentToken3233;
