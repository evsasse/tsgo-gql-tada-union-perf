import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2877 } from "./fragment2877";
import type { FragmentToken2878 } from "./fragment2878";

export const FRAGMENT_2879 = gql(`
  fragment Fragment2879 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult2879 = ResultOf<typeof FRAGMENT_2879>;
type FragmentSelf2879 = NonNullable<FragmentResult2879>;

export type FragmentToken2879 =
  | FragmentSelf2879["__typename"]
  | FragmentSelf2879["typenameHint"] | FragmentToken2877 | FragmentToken2878;
