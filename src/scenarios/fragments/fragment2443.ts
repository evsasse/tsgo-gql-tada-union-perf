import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2441 } from "./fragment2441";
import type { FragmentToken2442 } from "./fragment2442";

export const FRAGMENT_2443 = gql(`
  fragment Fragment2443 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult2443 = ResultOf<typeof FRAGMENT_2443>;
type FragmentSelf2443 = NonNullable<FragmentResult2443>;

export type FragmentToken2443 =
  | FragmentSelf2443["__typename"]
  | FragmentSelf2443["typenameHint"] | FragmentToken2441 | FragmentToken2442;
