import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3834 } from "./fragment3834";
import type { FragmentToken3835 } from "./fragment3835";

export const FRAGMENT_3836 = gql(`
  fragment Fragment3836 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult3836 = ResultOf<typeof FRAGMENT_3836>;
type FragmentSelf3836 = NonNullable<FragmentResult3836>;

export type FragmentToken3836 =
  | FragmentSelf3836["__typename"]
  | FragmentSelf3836["typenameHint"] | FragmentToken3834 | FragmentToken3835;
