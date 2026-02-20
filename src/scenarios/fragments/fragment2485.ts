import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2483 } from "./fragment2483";
import type { FragmentToken2484 } from "./fragment2484";

export const FRAGMENT_2485 = gql(`
  fragment Fragment2485 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult2485 = ResultOf<typeof FRAGMENT_2485>;
type FragmentSelf2485 = NonNullable<FragmentResult2485>;

export type FragmentToken2485 =
  | FragmentSelf2485["__typename"]
  | FragmentSelf2485["typenameHint"] | FragmentToken2483 | FragmentToken2484;
