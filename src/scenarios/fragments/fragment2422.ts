import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2420 } from "./fragment2420";
import type { FragmentToken2421 } from "./fragment2421";

export const FRAGMENT_2422 = gql(`
  fragment Fragment2422 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult2422 = ResultOf<typeof FRAGMENT_2422>;
type FragmentSelf2422 = NonNullable<FragmentResult2422>;

export type FragmentToken2422 =
  | FragmentSelf2422["__typename"]
  | FragmentSelf2422["typenameHint"] | FragmentToken2420 | FragmentToken2421;
