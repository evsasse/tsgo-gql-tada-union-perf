import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1223 } from "./fragment1223";
import type { FragmentToken1224 } from "./fragment1224";

export const FRAGMENT_1225 = gql(`
  fragment Fragment1225 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult1225 = ResultOf<typeof FRAGMENT_1225>;
type FragmentSelf1225 = NonNullable<FragmentResult1225>;

export type FragmentToken1225 =
  | FragmentSelf1225["__typename"]
  | FragmentSelf1225["typenameHint"] | FragmentToken1223 | FragmentToken1224;
