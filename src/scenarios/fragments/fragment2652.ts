import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2650 } from "./fragment2650";
import type { FragmentToken2651 } from "./fragment2651";

export const FRAGMENT_2652 = gql(`
  fragment Fragment2652 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult2652 = ResultOf<typeof FRAGMENT_2652>;
type FragmentSelf2652 = NonNullable<FragmentResult2652>;

export type FragmentToken2652 =
  | FragmentSelf2652["__typename"]
  | FragmentSelf2652["typenameHint"] | FragmentToken2650 | FragmentToken2651;
