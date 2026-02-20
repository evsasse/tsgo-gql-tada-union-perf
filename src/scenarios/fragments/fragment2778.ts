import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2776 } from "./fragment2776";
import type { FragmentToken2777 } from "./fragment2777";

export const FRAGMENT_2778 = gql(`
  fragment Fragment2778 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult2778 = ResultOf<typeof FRAGMENT_2778>;
type FragmentSelf2778 = NonNullable<FragmentResult2778>;

export type FragmentToken2778 =
  | FragmentSelf2778["__typename"]
  | FragmentSelf2778["typenameHint"] | FragmentToken2776 | FragmentToken2777;
