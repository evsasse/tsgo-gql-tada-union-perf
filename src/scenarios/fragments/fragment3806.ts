import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3804 } from "./fragment3804";
import type { FragmentToken3805 } from "./fragment3805";

export const FRAGMENT_3806 = gql(`
  fragment Fragment3806 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult3806 = ResultOf<typeof FRAGMENT_3806>;
type FragmentSelf3806 = NonNullable<FragmentResult3806>;

export type FragmentToken3806 =
  | FragmentSelf3806["__typename"]
  | FragmentSelf3806["typenameHint"] | FragmentToken3804 | FragmentToken3805;
