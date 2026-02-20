import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2739 } from "./fragment2739";
import type { FragmentToken2740 } from "./fragment2740";

export const FRAGMENT_2741 = gql(`
  fragment Fragment2741 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult2741 = ResultOf<typeof FRAGMENT_2741>;
type FragmentSelf2741 = NonNullable<FragmentResult2741>;

export type FragmentToken2741 =
  | FragmentSelf2741["__typename"]
  | FragmentSelf2741["typenameHint"] | FragmentToken2739 | FragmentToken2740;
