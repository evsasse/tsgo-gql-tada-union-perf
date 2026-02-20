import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2183 } from "./fragment2183";
import type { FragmentToken2184 } from "./fragment2184";

export const FRAGMENT_2185 = gql(`
  fragment Fragment2185 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult2185 = ResultOf<typeof FRAGMENT_2185>;
type FragmentSelf2185 = NonNullable<FragmentResult2185>;

export type FragmentToken2185 =
  | FragmentSelf2185["__typename"]
  | FragmentSelf2185["typenameHint"] | FragmentToken2183 | FragmentToken2184;
