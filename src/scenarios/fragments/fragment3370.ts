import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3368 } from "./fragment3368";
import type { FragmentToken3369 } from "./fragment3369";

export const FRAGMENT_3370 = gql(`
  fragment Fragment3370 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult3370 = ResultOf<typeof FRAGMENT_3370>;
type FragmentSelf3370 = NonNullable<FragmentResult3370>;

export type FragmentToken3370 =
  | FragmentSelf3370["__typename"]
  | FragmentSelf3370["typenameHint"] | FragmentToken3368 | FragmentToken3369;
