import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2297 } from "./fragment2297";
import type { FragmentToken2298 } from "./fragment2298";

export const FRAGMENT_2299 = gql(`
  fragment Fragment2299 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult2299 = ResultOf<typeof FRAGMENT_2299>;
type FragmentSelf2299 = NonNullable<FragmentResult2299>;

export type FragmentToken2299 =
  | FragmentSelf2299["__typename"]
  | FragmentSelf2299["typenameHint"] | FragmentToken2297 | FragmentToken2298;
