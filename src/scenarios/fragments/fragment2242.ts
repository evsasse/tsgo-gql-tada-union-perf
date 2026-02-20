import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2240 } from "./fragment2240";
import type { FragmentToken2241 } from "./fragment2241";

export const FRAGMENT_2242 = gql(`
  fragment Fragment2242 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult2242 = ResultOf<typeof FRAGMENT_2242>;
type FragmentSelf2242 = NonNullable<FragmentResult2242>;

export type FragmentToken2242 =
  | FragmentSelf2242["__typename"]
  | FragmentSelf2242["typenameHint"] | FragmentToken2240 | FragmentToken2241;
