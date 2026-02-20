import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2151 } from "./fragment2151";
import type { FragmentToken2152 } from "./fragment2152";

export const FRAGMENT_2153 = gql(`
  fragment Fragment2153 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult2153 = ResultOf<typeof FRAGMENT_2153>;
type FragmentSelf2153 = NonNullable<FragmentResult2153>;

export type FragmentToken2153 =
  | FragmentSelf2153["__typename"]
  | FragmentSelf2153["typenameHint"] | FragmentToken2151 | FragmentToken2152;
