import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3345 } from "./fragment3345";
import type { FragmentToken3346 } from "./fragment3346";

export const FRAGMENT_3347 = gql(`
  fragment Fragment3347 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult3347 = ResultOf<typeof FRAGMENT_3347>;
type FragmentSelf3347 = NonNullable<FragmentResult3347>;

export type FragmentToken3347 =
  | FragmentSelf3347["__typename"]
  | FragmentSelf3347["typenameHint"] | FragmentToken3345 | FragmentToken3346;
