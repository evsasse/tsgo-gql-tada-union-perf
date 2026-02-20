import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3583 } from "./fragment3583";
import type { FragmentToken3584 } from "./fragment3584";

export const FRAGMENT_3585 = gql(`
  fragment Fragment3585 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult3585 = ResultOf<typeof FRAGMENT_3585>;
type FragmentSelf3585 = NonNullable<FragmentResult3585>;

export type FragmentToken3585 =
  | FragmentSelf3585["__typename"]
  | FragmentSelf3585["typenameHint"] | FragmentToken3583 | FragmentToken3584;
