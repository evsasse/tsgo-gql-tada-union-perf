import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3423 } from "./fragment3423";
import type { FragmentToken3424 } from "./fragment3424";

export const FRAGMENT_3425 = gql(`
  fragment Fragment3425 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult3425 = ResultOf<typeof FRAGMENT_3425>;
type FragmentSelf3425 = NonNullable<FragmentResult3425>;

export type FragmentToken3425 =
  | FragmentSelf3425["__typename"]
  | FragmentSelf3425["typenameHint"] | FragmentToken3423 | FragmentToken3424;
