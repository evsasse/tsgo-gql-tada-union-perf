import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1983 } from "./fragment1983";
import type { FragmentToken1984 } from "./fragment1984";

export const FRAGMENT_1985 = gql(`
  fragment Fragment1985 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult1985 = ResultOf<typeof FRAGMENT_1985>;
type FragmentSelf1985 = NonNullable<FragmentResult1985>;

export type FragmentToken1985 =
  | FragmentSelf1985["__typename"]
  | FragmentSelf1985["typenameHint"] | FragmentToken1983 | FragmentToken1984;
