import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2309 } from "./fragment2309";
import type { FragmentToken2310 } from "./fragment2310";

export const FRAGMENT_2311 = gql(`
  fragment Fragment2311 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult2311 = ResultOf<typeof FRAGMENT_2311>;
type FragmentSelf2311 = NonNullable<FragmentResult2311>;

export type FragmentToken2311 =
  | FragmentSelf2311["__typename"]
  | FragmentSelf2311["typenameHint"] | FragmentToken2309 | FragmentToken2310;
