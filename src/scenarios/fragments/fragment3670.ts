import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3668 } from "./fragment3668";
import type { FragmentToken3669 } from "./fragment3669";

export const FRAGMENT_3670 = gql(`
  fragment Fragment3670 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult3670 = ResultOf<typeof FRAGMENT_3670>;
type FragmentSelf3670 = NonNullable<FragmentResult3670>;

export type FragmentToken3670 =
  | FragmentSelf3670["__typename"]
  | FragmentSelf3670["typenameHint"] | FragmentToken3668 | FragmentToken3669;
