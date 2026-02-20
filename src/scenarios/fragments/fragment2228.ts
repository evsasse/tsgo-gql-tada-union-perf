import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2226 } from "./fragment2226";
import type { FragmentToken2227 } from "./fragment2227";

export const FRAGMENT_2228 = gql(`
  fragment Fragment2228 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult2228 = ResultOf<typeof FRAGMENT_2228>;
type FragmentSelf2228 = NonNullable<FragmentResult2228>;

export type FragmentToken2228 =
  | FragmentSelf2228["__typename"]
  | FragmentSelf2228["typenameHint"] | FragmentToken2226 | FragmentToken2227;
