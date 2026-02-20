import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2186 } from "./fragment2186";
import type { FragmentToken2187 } from "./fragment2187";

export const FRAGMENT_2188 = gql(`
  fragment Fragment2188 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult2188 = ResultOf<typeof FRAGMENT_2188>;
type FragmentSelf2188 = NonNullable<FragmentResult2188>;

export type FragmentToken2188 =
  | FragmentSelf2188["__typename"]
  | FragmentSelf2188["typenameHint"] | FragmentToken2186 | FragmentToken2187;
