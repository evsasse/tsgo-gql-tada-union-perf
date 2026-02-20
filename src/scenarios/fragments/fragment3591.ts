import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3589 } from "./fragment3589";
import type { FragmentToken3590 } from "./fragment3590";

export const FRAGMENT_3591 = gql(`
  fragment Fragment3591 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult3591 = ResultOf<typeof FRAGMENT_3591>;
type FragmentSelf3591 = NonNullable<FragmentResult3591>;

export type FragmentToken3591 =
  | FragmentSelf3591["__typename"]
  | FragmentSelf3591["typenameHint"] | FragmentToken3589 | FragmentToken3590;
