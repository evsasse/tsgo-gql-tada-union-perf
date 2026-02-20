import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2419 } from "./fragment2419";
import type { FragmentToken2420 } from "./fragment2420";

export const FRAGMENT_2421 = gql(`
  fragment Fragment2421 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult2421 = ResultOf<typeof FRAGMENT_2421>;
type FragmentSelf2421 = NonNullable<FragmentResult2421>;

export type FragmentToken2421 =
  | FragmentSelf2421["__typename"]
  | FragmentSelf2421["typenameHint"] | FragmentToken2419 | FragmentToken2420;
