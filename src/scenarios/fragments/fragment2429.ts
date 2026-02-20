import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2427 } from "./fragment2427";
import type { FragmentToken2428 } from "./fragment2428";

export const FRAGMENT_2429 = gql(`
  fragment Fragment2429 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult2429 = ResultOf<typeof FRAGMENT_2429>;
type FragmentSelf2429 = NonNullable<FragmentResult2429>;

export type FragmentToken2429 =
  | FragmentSelf2429["__typename"]
  | FragmentSelf2429["typenameHint"] | FragmentToken2427 | FragmentToken2428;
