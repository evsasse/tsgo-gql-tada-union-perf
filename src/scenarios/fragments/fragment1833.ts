import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1831 } from "./fragment1831";
import type { FragmentToken1832 } from "./fragment1832";

export const FRAGMENT_1833 = gql(`
  fragment Fragment1833 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult1833 = ResultOf<typeof FRAGMENT_1833>;
type FragmentSelf1833 = NonNullable<FragmentResult1833>;

export type FragmentToken1833 =
  | FragmentSelf1833["__typename"]
  | FragmentSelf1833["typenameHint"] | FragmentToken1831 | FragmentToken1832;
