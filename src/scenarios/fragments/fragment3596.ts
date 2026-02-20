import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3594 } from "./fragment3594";
import type { FragmentToken3595 } from "./fragment3595";

export const FRAGMENT_3596 = gql(`
  fragment Fragment3596 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult3596 = ResultOf<typeof FRAGMENT_3596>;
type FragmentSelf3596 = NonNullable<FragmentResult3596>;

export type FragmentToken3596 =
  | FragmentSelf3596["__typename"]
  | FragmentSelf3596["typenameHint"] | FragmentToken3594 | FragmentToken3595;
