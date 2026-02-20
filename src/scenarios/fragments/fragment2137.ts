import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2135 } from "./fragment2135";
import type { FragmentToken2136 } from "./fragment2136";

export const FRAGMENT_2137 = gql(`
  fragment Fragment2137 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult2137 = ResultOf<typeof FRAGMENT_2137>;
type FragmentSelf2137 = NonNullable<FragmentResult2137>;

export type FragmentToken2137 =
  | FragmentSelf2137["__typename"]
  | FragmentSelf2137["typenameHint"] | FragmentToken2135 | FragmentToken2136;
