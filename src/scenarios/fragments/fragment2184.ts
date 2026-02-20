import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2182 } from "./fragment2182";
import type { FragmentToken2183 } from "./fragment2183";

export const FRAGMENT_2184 = gql(`
  fragment Fragment2184 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult2184 = ResultOf<typeof FRAGMENT_2184>;
type FragmentSelf2184 = NonNullable<FragmentResult2184>;

export type FragmentToken2184 =
  | FragmentSelf2184["__typename"]
  | FragmentSelf2184["typenameHint"] | FragmentToken2182 | FragmentToken2183;
