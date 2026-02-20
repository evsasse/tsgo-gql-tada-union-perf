import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3346 } from "./fragment3346";
import type { FragmentToken3347 } from "./fragment3347";

export const FRAGMENT_3348 = gql(`
  fragment Fragment3348 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult3348 = ResultOf<typeof FRAGMENT_3348>;
type FragmentSelf3348 = NonNullable<FragmentResult3348>;

export type FragmentToken3348 =
  | FragmentSelf3348["__typename"]
  | FragmentSelf3348["typenameHint"] | FragmentToken3346 | FragmentToken3347;
