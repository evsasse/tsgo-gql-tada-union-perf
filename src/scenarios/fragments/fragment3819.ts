import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3817 } from "./fragment3817";
import type { FragmentToken3818 } from "./fragment3818";

export const FRAGMENT_3819 = gql(`
  fragment Fragment3819 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult3819 = ResultOf<typeof FRAGMENT_3819>;
type FragmentSelf3819 = NonNullable<FragmentResult3819>;

export type FragmentToken3819 =
  | FragmentSelf3819["__typename"]
  | FragmentSelf3819["typenameHint"] | FragmentToken3817 | FragmentToken3818;
