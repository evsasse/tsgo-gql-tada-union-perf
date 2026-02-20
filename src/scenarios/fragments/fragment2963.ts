import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2961 } from "./fragment2961";
import type { FragmentToken2962 } from "./fragment2962";

export const FRAGMENT_2963 = gql(`
  fragment Fragment2963 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult2963 = ResultOf<typeof FRAGMENT_2963>;
type FragmentSelf2963 = NonNullable<FragmentResult2963>;

export type FragmentToken2963 =
  | FragmentSelf2963["__typename"]
  | FragmentSelf2963["typenameHint"] | FragmentToken2961 | FragmentToken2962;
