import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3806 } from "./fragment3806";
import type { FragmentToken3807 } from "./fragment3807";

export const FRAGMENT_3808 = gql(`
  fragment Fragment3808 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult3808 = ResultOf<typeof FRAGMENT_3808>;
type FragmentSelf3808 = NonNullable<FragmentResult3808>;

export type FragmentToken3808 =
  | FragmentSelf3808["__typename"]
  | FragmentSelf3808["typenameHint"] | FragmentToken3806 | FragmentToken3807;
