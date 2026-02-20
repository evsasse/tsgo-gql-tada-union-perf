import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2224 } from "./fragment2224";
import type { FragmentToken2225 } from "./fragment2225";

export const FRAGMENT_2226 = gql(`
  fragment Fragment2226 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult2226 = ResultOf<typeof FRAGMENT_2226>;
type FragmentSelf2226 = NonNullable<FragmentResult2226>;

export type FragmentToken2226 =
  | FragmentSelf2226["__typename"]
  | FragmentSelf2226["typenameHint"] | FragmentToken2224 | FragmentToken2225;
