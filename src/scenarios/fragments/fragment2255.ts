import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2253 } from "./fragment2253";
import type { FragmentToken2254 } from "./fragment2254";

export const FRAGMENT_2255 = gql(`
  fragment Fragment2255 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult2255 = ResultOf<typeof FRAGMENT_2255>;
type FragmentSelf2255 = NonNullable<FragmentResult2255>;

export type FragmentToken2255 =
  | FragmentSelf2255["__typename"]
  | FragmentSelf2255["typenameHint"] | FragmentToken2253 | FragmentToken2254;
