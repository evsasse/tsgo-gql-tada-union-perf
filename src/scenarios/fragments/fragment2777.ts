import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2775 } from "./fragment2775";
import type { FragmentToken2776 } from "./fragment2776";

export const FRAGMENT_2777 = gql(`
  fragment Fragment2777 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult2777 = ResultOf<typeof FRAGMENT_2777>;
type FragmentSelf2777 = NonNullable<FragmentResult2777>;

export type FragmentToken2777 =
  | FragmentSelf2777["__typename"]
  | FragmentSelf2777["typenameHint"] | FragmentToken2775 | FragmentToken2776;
