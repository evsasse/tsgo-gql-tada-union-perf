import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2781 } from "./fragment2781";
import type { FragmentToken2782 } from "./fragment2782";

export const FRAGMENT_2783 = gql(`
  fragment Fragment2783 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult2783 = ResultOf<typeof FRAGMENT_2783>;
type FragmentSelf2783 = NonNullable<FragmentResult2783>;

export type FragmentToken2783 =
  | FragmentSelf2783["__typename"]
  | FragmentSelf2783["typenameHint"] | FragmentToken2781 | FragmentToken2782;
