import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2760 } from "./fragment2760";
import type { FragmentToken2761 } from "./fragment2761";

export const FRAGMENT_2762 = gql(`
  fragment Fragment2762 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult2762 = ResultOf<typeof FRAGMENT_2762>;
type FragmentSelf2762 = NonNullable<FragmentResult2762>;

export type FragmentToken2762 =
  | FragmentSelf2762["__typename"]
  | FragmentSelf2762["typenameHint"] | FragmentToken2760 | FragmentToken2761;
