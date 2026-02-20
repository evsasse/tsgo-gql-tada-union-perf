import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2399 } from "./fragment2399";
import type { FragmentToken2400 } from "./fragment2400";

export const FRAGMENT_2401 = gql(`
  fragment Fragment2401 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult2401 = ResultOf<typeof FRAGMENT_2401>;
type FragmentSelf2401 = NonNullable<FragmentResult2401>;

export type FragmentToken2401 =
  | FragmentSelf2401["__typename"]
  | FragmentSelf2401["typenameHint"] | FragmentToken2399 | FragmentToken2400;
