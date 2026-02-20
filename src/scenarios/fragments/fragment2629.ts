import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2627 } from "./fragment2627";
import type { FragmentToken2628 } from "./fragment2628";

export const FRAGMENT_2629 = gql(`
  fragment Fragment2629 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult2629 = ResultOf<typeof FRAGMENT_2629>;
type FragmentSelf2629 = NonNullable<FragmentResult2629>;

export type FragmentToken2629 =
  | FragmentSelf2629["__typename"]
  | FragmentSelf2629["typenameHint"] | FragmentToken2627 | FragmentToken2628;
