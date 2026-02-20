import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2729 } from "./fragment2729";
import type { FragmentToken2730 } from "./fragment2730";

export const FRAGMENT_2731 = gql(`
  fragment Fragment2731 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult2731 = ResultOf<typeof FRAGMENT_2731>;
type FragmentSelf2731 = NonNullable<FragmentResult2731>;

export type FragmentToken2731 =
  | FragmentSelf2731["__typename"]
  | FragmentSelf2731["typenameHint"] | FragmentToken2729 | FragmentToken2730;
