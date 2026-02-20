import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3548 } from "./fragment3548";
import type { FragmentToken3549 } from "./fragment3549";

export const FRAGMENT_3550 = gql(`
  fragment Fragment3550 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult3550 = ResultOf<typeof FRAGMENT_3550>;
type FragmentSelf3550 = NonNullable<FragmentResult3550>;

export type FragmentToken3550 =
  | FragmentSelf3550["__typename"]
  | FragmentSelf3550["typenameHint"] | FragmentToken3548 | FragmentToken3549;
