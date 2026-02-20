import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3527 } from "./fragment3527";
import type { FragmentToken3528 } from "./fragment3528";

export const FRAGMENT_3529 = gql(`
  fragment Fragment3529 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult3529 = ResultOf<typeof FRAGMENT_3529>;
type FragmentSelf3529 = NonNullable<FragmentResult3529>;

export type FragmentToken3529 =
  | FragmentSelf3529["__typename"]
  | FragmentSelf3529["typenameHint"] | FragmentToken3527 | FragmentToken3528;
