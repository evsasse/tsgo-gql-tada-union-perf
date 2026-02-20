import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3805 } from "./fragment3805";
import type { FragmentToken3806 } from "./fragment3806";

export const FRAGMENT_3807 = gql(`
  fragment Fragment3807 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult3807 = ResultOf<typeof FRAGMENT_3807>;
type FragmentSelf3807 = NonNullable<FragmentResult3807>;

export type FragmentToken3807 =
  | FragmentSelf3807["__typename"]
  | FragmentSelf3807["typenameHint"] | FragmentToken3805 | FragmentToken3806;
