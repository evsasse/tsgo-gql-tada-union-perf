import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2578 } from "./fragment2578";
import type { FragmentToken2579 } from "./fragment2579";

export const FRAGMENT_2580 = gql(`
  fragment Fragment2580 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult2580 = ResultOf<typeof FRAGMENT_2580>;
type FragmentSelf2580 = NonNullable<FragmentResult2580>;

export type FragmentToken2580 =
  | FragmentSelf2580["__typename"]
  | FragmentSelf2580["typenameHint"] | FragmentToken2578 | FragmentToken2579;
