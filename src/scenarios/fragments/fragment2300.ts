import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2298 } from "./fragment2298";
import type { FragmentToken2299 } from "./fragment2299";

export const FRAGMENT_2300 = gql(`
  fragment Fragment2300 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult2300 = ResultOf<typeof FRAGMENT_2300>;
type FragmentSelf2300 = NonNullable<FragmentResult2300>;

export type FragmentToken2300 =
  | FragmentSelf2300["__typename"]
  | FragmentSelf2300["typenameHint"] | FragmentToken2298 | FragmentToken2299;
