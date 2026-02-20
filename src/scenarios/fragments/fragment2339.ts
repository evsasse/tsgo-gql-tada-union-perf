import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2337 } from "./fragment2337";
import type { FragmentToken2338 } from "./fragment2338";

export const FRAGMENT_2339 = gql(`
  fragment Fragment2339 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult2339 = ResultOf<typeof FRAGMENT_2339>;
type FragmentSelf2339 = NonNullable<FragmentResult2339>;

export type FragmentToken2339 =
  | FragmentSelf2339["__typename"]
  | FragmentSelf2339["typenameHint"] | FragmentToken2337 | FragmentToken2338;
