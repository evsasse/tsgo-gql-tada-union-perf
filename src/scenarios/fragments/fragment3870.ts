import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3868 } from "./fragment3868";
import type { FragmentToken3869 } from "./fragment3869";

export const FRAGMENT_3870 = gql(`
  fragment Fragment3870 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult3870 = ResultOf<typeof FRAGMENT_3870>;
type FragmentSelf3870 = NonNullable<FragmentResult3870>;

export type FragmentToken3870 =
  | FragmentSelf3870["__typename"]
  | FragmentSelf3870["typenameHint"] | FragmentToken3868 | FragmentToken3869;
