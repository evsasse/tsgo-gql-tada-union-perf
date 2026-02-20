import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2670 } from "./fragment2670";
import type { FragmentToken2671 } from "./fragment2671";

export const FRAGMENT_2672 = gql(`
  fragment Fragment2672 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult2672 = ResultOf<typeof FRAGMENT_2672>;
type FragmentSelf2672 = NonNullable<FragmentResult2672>;

export type FragmentToken2672 =
  | FragmentSelf2672["__typename"]
  | FragmentSelf2672["typenameHint"] | FragmentToken2670 | FragmentToken2671;
