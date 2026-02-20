import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2484 } from "./fragment2484";
import type { FragmentToken2485 } from "./fragment2485";

export const FRAGMENT_2486 = gql(`
  fragment Fragment2486 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult2486 = ResultOf<typeof FRAGMENT_2486>;
type FragmentSelf2486 = NonNullable<FragmentResult2486>;

export type FragmentToken2486 =
  | FragmentSelf2486["__typename"]
  | FragmentSelf2486["typenameHint"] | FragmentToken2484 | FragmentToken2485;
