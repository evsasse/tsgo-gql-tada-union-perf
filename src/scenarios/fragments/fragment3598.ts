import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3596 } from "./fragment3596";
import type { FragmentToken3597 } from "./fragment3597";

export const FRAGMENT_3598 = gql(`
  fragment Fragment3598 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult3598 = ResultOf<typeof FRAGMENT_3598>;
type FragmentSelf3598 = NonNullable<FragmentResult3598>;

export type FragmentToken3598 =
  | FragmentSelf3598["__typename"]
  | FragmentSelf3598["typenameHint"] | FragmentToken3596 | FragmentToken3597;
