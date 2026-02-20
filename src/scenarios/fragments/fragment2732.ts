import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2730 } from "./fragment2730";
import type { FragmentToken2731 } from "./fragment2731";

export const FRAGMENT_2732 = gql(`
  fragment Fragment2732 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult2732 = ResultOf<typeof FRAGMENT_2732>;
type FragmentSelf2732 = NonNullable<FragmentResult2732>;

export type FragmentToken2732 =
  | FragmentSelf2732["__typename"]
  | FragmentSelf2732["typenameHint"] | FragmentToken2730 | FragmentToken2731;
