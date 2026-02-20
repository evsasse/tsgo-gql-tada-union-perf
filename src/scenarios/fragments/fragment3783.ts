import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3781 } from "./fragment3781";
import type { FragmentToken3782 } from "./fragment3782";

export const FRAGMENT_3783 = gql(`
  fragment Fragment3783 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult3783 = ResultOf<typeof FRAGMENT_3783>;
type FragmentSelf3783 = NonNullable<FragmentResult3783>;

export type FragmentToken3783 =
  | FragmentSelf3783["__typename"]
  | FragmentSelf3783["typenameHint"] | FragmentToken3781 | FragmentToken3782;
