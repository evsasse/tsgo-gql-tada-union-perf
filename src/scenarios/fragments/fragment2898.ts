import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2896 } from "./fragment2896";
import type { FragmentToken2897 } from "./fragment2897";

export const FRAGMENT_2898 = gql(`
  fragment Fragment2898 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult2898 = ResultOf<typeof FRAGMENT_2898>;
type FragmentSelf2898 = NonNullable<FragmentResult2898>;

export type FragmentToken2898 =
  | FragmentSelf2898["__typename"]
  | FragmentSelf2898["typenameHint"] | FragmentToken2896 | FragmentToken2897;
