import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2443 } from "./fragment2443";
import type { FragmentToken2444 } from "./fragment2444";

export const FRAGMENT_2445 = gql(`
  fragment Fragment2445 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult2445 = ResultOf<typeof FRAGMENT_2445>;
type FragmentSelf2445 = NonNullable<FragmentResult2445>;

export type FragmentToken2445 =
  | FragmentSelf2445["__typename"]
  | FragmentSelf2445["typenameHint"] | FragmentToken2443 | FragmentToken2444;
