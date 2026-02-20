import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3867 } from "./fragment3867";
import type { FragmentToken3868 } from "./fragment3868";

export const FRAGMENT_3869 = gql(`
  fragment Fragment3869 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult3869 = ResultOf<typeof FRAGMENT_3869>;
type FragmentSelf3869 = NonNullable<FragmentResult3869>;

export type FragmentToken3869 =
  | FragmentSelf3869["__typename"]
  | FragmentSelf3869["typenameHint"] | FragmentToken3867 | FragmentToken3868;
