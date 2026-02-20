import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2550 } from "./fragment2550";
import type { FragmentToken2551 } from "./fragment2551";

export const FRAGMENT_2552 = gql(`
  fragment Fragment2552 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult2552 = ResultOf<typeof FRAGMENT_2552>;
type FragmentSelf2552 = NonNullable<FragmentResult2552>;

export type FragmentToken2552 =
  | FragmentSelf2552["__typename"]
  | FragmentSelf2552["typenameHint"] | FragmentToken2550 | FragmentToken2551;
