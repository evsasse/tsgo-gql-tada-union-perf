import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2924 } from "./fragment2924";
import type { FragmentToken2925 } from "./fragment2925";

export const FRAGMENT_2926 = gql(`
  fragment Fragment2926 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult2926 = ResultOf<typeof FRAGMENT_2926>;
type FragmentSelf2926 = NonNullable<FragmentResult2926>;

export type FragmentToken2926 =
  | FragmentSelf2926["__typename"]
  | FragmentSelf2926["typenameHint"] | FragmentToken2924 | FragmentToken2925;
