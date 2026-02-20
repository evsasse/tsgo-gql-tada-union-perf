import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2867 } from "./fragment2867";
import type { FragmentToken2868 } from "./fragment2868";

export const FRAGMENT_2869 = gql(`
  fragment Fragment2869 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult2869 = ResultOf<typeof FRAGMENT_2869>;
type FragmentSelf2869 = NonNullable<FragmentResult2869>;

export type FragmentToken2869 =
  | FragmentSelf2869["__typename"]
  | FragmentSelf2869["typenameHint"] | FragmentToken2867 | FragmentToken2868;
