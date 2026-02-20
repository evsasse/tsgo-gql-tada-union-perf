import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3636 } from "./fragment3636";
import type { FragmentToken3637 } from "./fragment3637";

export const FRAGMENT_3638 = gql(`
  fragment Fragment3638 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult3638 = ResultOf<typeof FRAGMENT_3638>;
type FragmentSelf3638 = NonNullable<FragmentResult3638>;

export type FragmentToken3638 =
  | FragmentSelf3638["__typename"]
  | FragmentSelf3638["typenameHint"] | FragmentToken3636 | FragmentToken3637;
