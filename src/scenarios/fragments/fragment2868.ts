import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2866 } from "./fragment2866";
import type { FragmentToken2867 } from "./fragment2867";

export const FRAGMENT_2868 = gql(`
  fragment Fragment2868 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult2868 = ResultOf<typeof FRAGMENT_2868>;
type FragmentSelf2868 = NonNullable<FragmentResult2868>;

export type FragmentToken2868 =
  | FragmentSelf2868["__typename"]
  | FragmentSelf2868["typenameHint"] | FragmentToken2866 | FragmentToken2867;
