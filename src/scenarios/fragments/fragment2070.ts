import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2068 } from "./fragment2068";
import type { FragmentToken2069 } from "./fragment2069";

export const FRAGMENT_2070 = gql(`
  fragment Fragment2070 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult2070 = ResultOf<typeof FRAGMENT_2070>;
type FragmentSelf2070 = NonNullable<FragmentResult2070>;

export type FragmentToken2070 =
  | FragmentSelf2070["__typename"]
  | FragmentSelf2070["typenameHint"] | FragmentToken2068 | FragmentToken2069;
