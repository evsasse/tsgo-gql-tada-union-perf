import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2925 } from "./fragment2925";
import type { FragmentToken2926 } from "./fragment2926";

export const FRAGMENT_2927 = gql(`
  fragment Fragment2927 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult2927 = ResultOf<typeof FRAGMENT_2927>;
type FragmentSelf2927 = NonNullable<FragmentResult2927>;

export type FragmentToken2927 =
  | FragmentSelf2927["__typename"]
  | FragmentSelf2927["typenameHint"] | FragmentToken2925 | FragmentToken2926;
