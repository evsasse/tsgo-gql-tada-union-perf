import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2206 } from "./fragment2206";
import type { FragmentToken2207 } from "./fragment2207";

export const FRAGMENT_2208 = gql(`
  fragment Fragment2208 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult2208 = ResultOf<typeof FRAGMENT_2208>;
type FragmentSelf2208 = NonNullable<FragmentResult2208>;

export type FragmentToken2208 =
  | FragmentSelf2208["__typename"]
  | FragmentSelf2208["typenameHint"] | FragmentToken2206 | FragmentToken2207;
