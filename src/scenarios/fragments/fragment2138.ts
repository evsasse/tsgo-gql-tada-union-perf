import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2136 } from "./fragment2136";
import type { FragmentToken2137 } from "./fragment2137";

export const FRAGMENT_2138 = gql(`
  fragment Fragment2138 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult2138 = ResultOf<typeof FRAGMENT_2138>;
type FragmentSelf2138 = NonNullable<FragmentResult2138>;

export type FragmentToken2138 =
  | FragmentSelf2138["__typename"]
  | FragmentSelf2138["typenameHint"] | FragmentToken2136 | FragmentToken2137;
