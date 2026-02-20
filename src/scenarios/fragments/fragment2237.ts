import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2235 } from "./fragment2235";
import type { FragmentToken2236 } from "./fragment2236";

export const FRAGMENT_2237 = gql(`
  fragment Fragment2237 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult2237 = ResultOf<typeof FRAGMENT_2237>;
type FragmentSelf2237 = NonNullable<FragmentResult2237>;

export type FragmentToken2237 =
  | FragmentSelf2237["__typename"]
  | FragmentSelf2237["typenameHint"] | FragmentToken2235 | FragmentToken2236;
