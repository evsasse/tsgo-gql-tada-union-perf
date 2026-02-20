import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2391 } from "./fragment2391";
import type { FragmentToken2392 } from "./fragment2392";

export const FRAGMENT_2393 = gql(`
  fragment Fragment2393 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult2393 = ResultOf<typeof FRAGMENT_2393>;
type FragmentSelf2393 = NonNullable<FragmentResult2393>;

export type FragmentToken2393 =
  | FragmentSelf2393["__typename"]
  | FragmentSelf2393["typenameHint"] | FragmentToken2391 | FragmentToken2392;
