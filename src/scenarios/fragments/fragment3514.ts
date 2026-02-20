import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3512 } from "./fragment3512";
import type { FragmentToken3513 } from "./fragment3513";

export const FRAGMENT_3514 = gql(`
  fragment Fragment3514 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult3514 = ResultOf<typeof FRAGMENT_3514>;
type FragmentSelf3514 = NonNullable<FragmentResult3514>;

export type FragmentToken3514 =
  | FragmentSelf3514["__typename"]
  | FragmentSelf3514["typenameHint"] | FragmentToken3512 | FragmentToken3513;
