import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3013 } from "./fragment3013";
import type { FragmentToken3014 } from "./fragment3014";

export const FRAGMENT_3015 = gql(`
  fragment Fragment3015 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult3015 = ResultOf<typeof FRAGMENT_3015>;
type FragmentSelf3015 = NonNullable<FragmentResult3015>;

export type FragmentToken3015 =
  | FragmentSelf3015["__typename"]
  | FragmentSelf3015["typenameHint"] | FragmentToken3013 | FragmentToken3014;
